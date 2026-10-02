import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

export function useProfilePhoto() {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      return localStorage.getItem('shreyash_profile_photo') || portfolioData.personal.avatar;
    } catch {
      return portfolioData.personal.avatar;
    }
  });

  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const stored = localStorage.getItem('shreyash_profile_photo');
        if (stored) {
          setPhotoSrc(stored);
          setPhotoError(false);
        }
      } catch {
        // Fallback
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem('shreyash_profile_photo', dataUrl);
        } catch {
          // If storage limit exceeded, state still holds it
        }
        setPhotoSrc(dataUrl);
        setPhotoError(false);
        window.dispatchEvent(new Event('storage'));
      }
    };
    reader.readAsDataURL(file);
  };

  const removeCustomPhoto = () => {
    try {
      localStorage.removeItem('shreyash_profile_photo');
    } catch {
      // Ignore
    }
    setPhotoSrc(portfolioData.personal.avatar);
    setPhotoError(true);
    window.dispatchEvent(new Event('storage'));
  };

  return {
    photoSrc,
    photoError,
    setPhotoError,
    handleFileUpload,
    removeCustomPhoto,
  };
}
