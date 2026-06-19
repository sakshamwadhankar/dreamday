import { useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { Trash2, Upload, Edit2, X, Check, Image as ImageIcon, Plus, ChevronDown } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Badge from '../components/Badge';
import FormField, { Input, Select } from '../components/FormField';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import { useToast } from '../hooks/useToast';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('Wedding');
  const [title, setTitle] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const toast = useToast();
  
  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', type: '' });

  const categories = ['Wedding', 'Haldi', 'Corporate', 'Birthday', 'Pre-wedding'];

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const docRef = doc(db, 'content', 'gallery');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && docSnap.data().images && docSnap.data().images.length > 0) {
        setImages(docSnap.data().images);
      } else {
        // Seed default gallery if empty
        const defaultGallery = [
          { id: 1, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-1.jpg?v=9', title: 'Emerald Dreamcatcher Haldi', type: 'haldi' },
          { id: 2, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-2.jpg?v=9', title: 'Royal Monogram Stage', type: 'wedding' },
          { id: 3, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-3.jpg?v=9', title: 'Royal White Arch Stage', type: 'wedding' },
          { id: 4, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-4.jpg?v=9', title: 'Elysian Banquet Tablescape', type: 'wedding' },
          { id: 5, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-5.jpg?v=9', title: 'Vibrant Haldi Styling', type: 'haldi' },
          { id: 6, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-6.jpg?v=9', title: 'Traditional Yellow Haldi Backdrop', type: 'haldi' },
          { id: 7, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-7.jpg?v=9', title: 'Traditional Saffron Haldi', type: 'haldi' },
          { id: 8, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-8.jpg?v=9', title: 'Outdoor Haldi Swing', type: 'haldi' },
          { id: 9, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-9.jpg?v=9', title: 'Saffron Mandap Layout', type: 'wedding' },
          { id: 10, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-10.jpg?v=9', title: 'Gala Banquet Table Setup', type: 'corporate' },
          { id: 11, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-11.jpg?v=9', title: 'Elite Corporate Stage Setup', type: 'corporate' },
          { id: 12, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-12.jpg?v=9', title: 'Annual Business Award Night', type: 'corporate' },
          { id: 13, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-13.jpg?v=9', title: 'Royal Pink Backdrop Stage', type: 'wedding' },
          { id: 14, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-14.jpg?v=9', title: 'Product Launch Backdrop', type: 'corporate' },
          { id: 15, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-15.jpg?v=9', title: 'Grand Floral Arch Stage', type: 'wedding' },
          { id: 16, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-16.jpg?v=9', title: 'Shareholders Meeting Stage', type: 'corporate' },
          { id: 17, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-17.jpg?v=9', title: 'Corporate Branding Pavilion', type: 'corporate' },
          { id: 18, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-18.jpg?v=9', title: 'Executive VIP Lounge Area', type: 'corporate' },
          { id: 19, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-19.jpg?v=9', title: 'Blue Theme Gala Banquet', type: 'corporate' },
          { id: 20, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-20.jpg?v=9', title: 'Bespoke Monogram Wedding Stage', type: 'wedding' },
          { id: 21, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-21.jpg?v=9', title: 'Elysian Crystal Stage', type: 'wedding' },
          { id: 22, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-22.jpg?v=9', title: 'Symphony of Marigolds', type: 'haldi' },
          { id: 23, url: 'https://storage.googleapis.com/dream-day-events-sw.firebasestorage.app/images/event-23.jpg?v=9', title: 'Royal Blue & White Stage', type: 'wedding' }
        ];
        await setDoc(docRef, { images: defaultGallery });
        setImages(defaultGallery);
      }
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadProgress(0);
    try {
      const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      // Track progress
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      });

      await uploadTask;
      const url = await getDownloadURL(uploadTask.snapshot.ref);

      const newImage = {
        id: Date.now(),
        url,
        title: title || 'New Image',
        type: category.toLowerCase(),
        filename: file.name,
        path: uploadTask.snapshot.ref.fullPath,
        createdAt: new Date().toISOString()
      };

      const docRef = doc(db, 'content', 'gallery');
      const docSnap = await getDoc(docRef);
      let currentImages = [];
      if (docSnap.exists()) {
        currentImages = docSnap.data().images || [];
      }
      
      const updatedImages = [...currentImages, newImage];
      await setDoc(docRef, { images: updatedImages });

      setFile(null);
      setTitle('');
      setShowUpload(false);
      toast.success('Image uploaded successfully!');
      fetchImages();
    } catch (err) {
      console.error("Upload error:", err);
      toast.error('Failed to upload image.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (img) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    try {
      if (img.path) {
        const fileRef = ref(storage, img.path);
        await deleteObject(fileRef);
      }
      
      const updatedImages = images.filter(i => i.id !== img.id);
      await setDoc(doc(db, 'content', 'gallery'), { images: updatedImages });
      setImages(updatedImages);
      toast.success('Image deleted successfully.');
    } catch (err) {
      console.error("Delete error:", err);
      toast.error('Failed to delete image.');
    }
  };

  const handleEdit = (img) => {
    setEditingId(img.id);
    setEditData({ title: img.title || '', type: img.type || '' });
  };

  const handleSaveEdit = async (imgId) => {
    try {
      const updatedImages = images.map(img => {
        if (img.id === imgId) {
          return { ...img, title: editData.title, type: editData.type.toLowerCase() };
        }
        return img;
      });
      await setDoc(doc(db, 'content', 'gallery'), { images: updatedImages });
      setImages(updatedImages);
      setEditingId(null);
      toast.success('Image updated successfully.');
    } catch (err) {
      console.error("Edit error:", err);
      toast.error('Failed to update image.');
    }
  };

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => (img.type || '').toLowerCase() === activeFilter.toLowerCase());

  if (loading) return <LoadingSpinner message="Loading gallery..." />;

  return (
    <div>
      <PageHeader title="Gallery & Portfolio" subtitle={`${images.length} images in your portfolio`}>
        <Button icon={Plus} onClick={() => setShowUpload(!showUpload)}>
          Upload Image
        </Button>
      </PageHeader>

      {/* Upload Section */}
      {showUpload && (
        <div className="bg-bg-surface border border-border-subtle rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] p-6 mb-6 animate-slide-up">
          <h3 className="text-base font-semibold text-text-primary mb-4">Upload New Image</h3>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField label="Select Image">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full text-sm text-text-secondary file:mr-3 file:py-2 file:px-4 file:rounded-[var(--radius-md)] file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-bg-base hover:file:bg-accent-hover file:cursor-pointer file:transition-colors"
                    required
                  />
                </div>
              </FormField>
              <FormField label="Title">
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Royal Decor"
                />
              </FormField>
              <FormField label="Category">
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Select>
              </FormField>
            </div>
            
            {/* Upload progress */}
            {uploading && (
              <div className="w-full bg-bg-input rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}

            <div className="flex gap-3 justify-end">
              <Button variant="ghost" type="button" onClick={() => setShowUpload(false)}>Cancel</Button>
              <Button type="submit" icon={Upload} disabled={uploading || !file}>
                {uploading ? `Uploading ${Math.round(uploadProgress)}%` : 'Upload'}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6 animate-fade-in">
        {['All', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`
              px-3.5 py-1.5 text-xs font-medium rounded-full border
              transition-all duration-200 cursor-pointer
              ${activeFilter === cat
                ? 'bg-accent-subtle text-accent border-accent-border'
                : 'bg-transparent text-text-secondary border-border-subtle hover:border-border-default hover:text-text-primary'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {filteredImages.length === 0 ? (
        <EmptyState
          icon={ImageIcon}
          title="No images found"
          description={activeFilter !== 'All' ? `No images in the "${activeFilter}" category.` : "Upload your first image to get started."}
          actionLabel="Upload Image"
          onAction={() => setShowUpload(true)}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 stagger-children">
          {filteredImages.map(img => (
            <div key={img.id} className="group bg-bg-surface border border-border-subtle rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-card)] hover:border-border-default hover:shadow-[var(--shadow-md)] transition-all duration-250">
              {/* Image */}
              <div className="aspect-[4/3] w-full bg-bg-input relative overflow-hidden">
                <img src={img.url} alt={img.title || 'Gallery'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bg-base/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleEdit(img)}
                    className="w-10 h-10 bg-bg-elevated border border-border-subtle rounded-[var(--radius-md)] flex items-center justify-center text-info hover:bg-info-subtle hover:border-info/30 transition-all duration-200 animate-scale-in cursor-pointer"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(img)}
                    className="w-10 h-10 bg-bg-elevated border border-border-subtle rounded-[var(--radius-md)] flex items-center justify-center text-error hover:bg-error-subtle hover:border-error/30 transition-all duration-200 animate-scale-in cursor-pointer"
                    style={{ animationDelay: '50ms' }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-3.5">
                {editingId === img.id ? (
                  <div className="space-y-2">
                    <Input
                      type="text"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      placeholder="Title"
                    />
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={editData.type}
                        onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                        placeholder="Category"
                      />
                      <button onClick={() => handleSaveEdit(img.id)} className="w-9 h-9 shrink-0 flex items-center justify-center rounded-[var(--radius-md)] bg-success-subtle text-success hover:bg-success/20 transition-colors cursor-pointer">
                        <Check className="w-4 h-4" />
                      </button>
                      <button onClick={() => setEditingId(null)} className="w-9 h-9 shrink-0 flex items-center justify-center rounded-[var(--radius-md)] bg-error-subtle text-error hover:bg-error/20 transition-colors cursor-pointer">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm font-medium text-text-primary truncate" title={img.title}>{img.title || 'Untitled'}</p>
                    <Badge variant="neutral" className="mt-1.5">
                      {img.type || img.category || 'Uncategorized'}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
