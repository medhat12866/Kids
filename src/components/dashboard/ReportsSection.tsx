import React, { useState } from 'react';
import { Calendar, Download, TrendingUp, Users, Video, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card } from '../ui/card';

// Sample data
const learningProgressData = [
  { week: 'الأسبوع 1', completed: 45, inProgress: 30 },
  { week: 'الأسبوع 2', completed: 52, inProgress: 35 },
  { week: 'الأسبوع 3', completed: 60, inProgress: 28 },
  { week: 'الأسبوع 4', completed: 75, inProgress: 40 },
];

const mostWatchedVideos = [
  { name: 'سورة الفاتحة', value: 1250, color: '#8b5cf6' },
  { name: 'أركان الإسلام', value: 980, color: '#3b82f6' },
  { name: 'قصة نوح', value: 2100, color: '#10b981' },
  { name: 'آداب الطعام', value: 750, color: '#f59e0b' },
  { name: 'الوضوء', value: 1560, color: '#ec4899' },
];

const activeUsersData = [
  { month: 'يناير', students: 120, teachers: 15, parents: 85 },
  { month: 'فبراير', students: 145, teachers: 18, parents: 95 },
  { month: 'مارس', students: 165, teachers: 20, parents: 110 },
  { month: 'أبريل', students: 190, teachers: 22, parents: 125 },
  { month: 'مايو', students: 210, teachers: 25, parents: 140 },
  { month: 'يونيو', students: 235, teachers: 28, parents: 155 },
];

const subjectEngagement = [
  { subject: 'القرآن', engagement: 92 },
  { subject: 'الحديث', engagement: 85 },
  { subject: 'الفقه', engagement: 78 },
  { subject: 'السيرة', engagement: 88 },
  { subject: 'الآداب', engagement: 95 },
];

export function ReportsSection() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl mb-2">التقارير والإحصائيات 📊</h1>
          <p className="text-gray-600">تحليل شامل لأداء المنصة التعليمية</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40 rounded-xl">
              <Calendar className="h-4 w-4 ml-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">اليوم</SelectItem>
              <SelectItem value="week">هذا الأسبوع</SelectItem>
              <SelectItem value="month">هذا الشهر</SelectItem>
              <SelectItem value="year">هذا العام</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl">
            <Download className="h-4 w-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-3xl text-purple-700">1,234</p>
              <p className="text-sm text-purple-600">إجمالي المستخدمين</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-3xl text-blue-700">156</p>
              <p className="text-sm text-blue-600">إجمالي الدروس</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-3xl text-green-700">45.6K</p>
              <p className="text-sm text-green-600">إجمالي المشاهدات</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-3xl text-orange-700">87%</p>
              <p className="text-sm text-orange-600">معدل الإكمال</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Progress Chart */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </div>
            <h3 className="text-lg">تقدم التعلم الأسبوعي</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={learningProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="week" 
                tick={{ fontSize: 12 }}
                reversed={true}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e5e7eb',
                  direction: 'rtl'
                }}
              />
              <Legend wrapperStyle={{ direction: 'rtl' }} />
              <Bar dataKey="completed" fill="#10b981" name="مكتمل" radius={[8, 8, 0, 0]} />
              <Bar dataKey="inProgress" fill="#3b82f6" name="قيد التنفيذ" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Most Watched Videos Chart */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Video className="h-4 w-4 text-blue-600" />
            </div>
            <h3 className="text-lg">الفيديوهات الأكثر مشاهدة</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mostWatchedVideos}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {mostWatchedVideos.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '12px', direction: 'rtl' }} />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Active Users Chart */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-green-600" />
            </div>
            <h3 className="text-lg">المستخدمون النشطون</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activeUsersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                reversed={true}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e5e7eb',
                  direction: 'rtl'
                }}
              />
              <Legend wrapperStyle={{ direction: 'rtl' }} />
              <Line 
                type="monotone" 
                dataKey="students" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="طلاب"
                dot={{ fill: '#3b82f6', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="teachers" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                name="معلمين"
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="parents" 
                stroke="#10b981" 
                strokeWidth={3}
                name="أولياء أمور"
                dot={{ fill: '#10b981', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Subject Engagement Chart */}
        <Card className="p-6 border-0 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-orange-600" />
            </div>
            <h3 className="text-lg">نسبة التفاعل حسب المادة</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectEngagement} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis 
                dataKey="subject" 
                type="category" 
                tick={{ fontSize: 12 }}
                width={80}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e5e7eb',
                  direction: 'rtl'
                }}
              />
              <Bar 
                dataKey="engagement" 
                fill="#f59e0b" 
                radius={[0, 8, 8, 0]}
                name="نسبة التفاعل"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
