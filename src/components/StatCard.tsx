import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down';
  color: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
}

const colorClasses = {
  purple: {
    bg: 'from-purple-500 to-purple-600',
    light: 'bg-purple-100',
    text: 'text-purple-700',
  },
  blue: {
    bg: 'from-blue-500 to-blue-600',
    light: 'bg-blue-100',
    text: 'text-blue-700',
  },
  green: {
    bg: 'from-green-500 to-green-600',
    light: 'bg-green-100',
    text: 'text-green-700',
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    light: 'bg-orange-100',
    text: 'text-orange-700',
  },
  pink: {
    bg: 'from-pink-500 to-pink-600',
    light: 'bg-pink-100',
    text: 'text-pink-700',
  },
};

export function StatCard({ icon: Icon, title, value, change, trend, color }: StatCardProps) {
  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`${colors.light} p-3 rounded-xl`}>
          <Icon className={`h-6 w-6 ${colors.text}`} />
        </div>
        {change && (
          <div className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '↑' : '↓'} {change}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-3xl">{value}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
}
