import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RecentActivityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  color: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
}

const colorClasses = {
  purple: 'bg-purple-100 text-purple-700',
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  pink: 'bg-pink-100 text-pink-700',
};

export function RecentActivityItem({ icon: Icon, title, description, time, color }: RecentActivityItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
      <div className={`${colorClasses[color]} p-2.5 rounded-lg flex-shrink-0`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
      <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
    </div>
  );
}
