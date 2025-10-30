import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Favorite {
  id: number;
  type: 'video' | 'story';
}

interface WatchProgress {
  id: number;
  type: 'video' | 'story';
  progress: number;
  completed: boolean;
}

interface AppContextType {
  favorites: Favorite[];
  toggleFavorite: (id: number, type: 'video' | 'story') => void;
  isFavorite: (id: number, type: 'video' | 'story') => boolean;
  watchProgress: WatchProgress[];
  updateProgress: (id: number, type: 'video' | 'story', progress: number) => void;
  getProgress: (id: number, type: 'video' | 'story') => WatchProgress | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [watchProgress, setWatchProgress] = useState<WatchProgress[]>(() => {
    const saved = localStorage.getItem('watchProgress');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save to localStorage whenever watch progress changes
  useEffect(() => {
    localStorage.setItem('watchProgress', JSON.stringify(watchProgress));
  }, [watchProgress]);

  const toggleFavorite = (id: number, type: 'video' | 'story') => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === id && f.type === type);
      if (exists) {
        return prev.filter(f => !(f.id === id && f.type === type));
      } else {
        return [...prev, { id, type }];
      }
    });
  };

  const isFavorite = (id: number, type: 'video' | 'story'): boolean => {
    return favorites.some(f => f.id === id && f.type === type);
  };

  const updateProgress = (id: number, type: 'video' | 'story', progress: number) => {
    setWatchProgress(prev => {
      const existing = prev.findIndex(p => p.id === id && p.type === type);
      const newProgress: WatchProgress = {
        id,
        type,
        progress,
        completed: progress >= 90
      };

      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newProgress;
        return updated;
      } else {
        return [...prev, newProgress];
      }
    });
  };

  const getProgress = (id: number, type: 'video' | 'story'): WatchProgress | undefined => {
    return watchProgress.find(p => p.id === id && p.type === type);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        watchProgress,
        updateProgress,
        getProgress
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
