import { ReactNode } from "react";

export interface VideoCardProps {
  video: {
    id: number;
    title: string;
    titleEn: string;
    thumbnail: string;
    duration: string;
    ageRange: string;
    topic: string;
    description: string;
    watched: boolean;
    favorite: boolean;
  };
  onPlay: () => void;
}

export interface StoryCardProps {
  story: {
    id: number;
    title: string;
    titleEn: string;
    cover: string;
    narrator: string;
    duration: string;
    ageRange: string;
    description: string;
    favorite: boolean;
  };
  onRead: () => void;
  onListen: () => void;
}

export interface GameCardProps {
  game: {
    id: number;
    title: string;
    titleEn: string;
    icon: string;
    difficulty: string;
    xpReward: number;
    progress: number;
    color: string;
    category: string;
  };
  onPlay: () => void;
}

export interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    titleEn: string;
    difficulty: string;
    category: string;
    thumbnail: string;
    steps: number;
    printable: boolean;
  };
  onStart: () => void;
}
