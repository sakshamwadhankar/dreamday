const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'inquiries.json');

// Middleware
app.use(cors()); // Allow frontend at port 5173 to contact backend at port 3000
app.use(express.json());

// Load inquiries helper
const getInquiries = () => {
    if (!fs.existsSync(DB_FILE)) {
        return [];
    }
    try {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(data || '[]');
    } catch (err) {
        console.error("Error reading db file:", err);
        return [];
    }
};

// Save inquiries helper
const saveInquiries = (inquiries) => {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
        return true;
    } catch (err) {
        console.error("Error writing db file:", err);
        return false;
    }
};

// Base Route
app.get('/', (req, res) => {
    res.json({ status: "running", message: "Dream Day Events Backend Server is live." });
});

// POST Route for Form Inquiries
app.post('/api/inquire', (req, res) => {
    const { name, email, phone, eventType, date, message } = req.body;
    
    // Basic server-side validation
    if (!name || !email || !phone || !eventType || !date) {
        return res.status(400).json({ 
            success: false, 
            message: "Missing required fields. Please fill name, email, phone, event type, and date." 
        });
    }

    const inquiries = getInquiries();
    
    const newInquiry = {
        id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name,
        email,
        phone,
        eventType,
        date,
        message: message || '',
        timestamp: new Date().toISOString()
    };

    inquiries.push(newInquiry);
    
    if (saveInquiries(inquiries)) {
        console.log(`Saved new inquiry: ID=${newInquiry.id} from ${newInquiry.name}`);
        res.status(200).json({ 
            success: true, 
            message: "Your inquiry has been successfully received and saved in the database." 
        });
    } else {
        res.status(500).json({ 
            success: false, 
            message: "Internal server error. Failed to save inquiry details." 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on: http://localhost:${PORT}`);
});
