import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, BookOpen, Calculator, Beaker, Globe, Music, Palette } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

interface Lesson {
  id: number;
  title: string;
  subject: string;
  gradeLevel: string;
  progress: number;
  totalStudents: number;
  completedStudents: number;
  icon: any;
  color: string;
}

const subjectIcons: { [key: string]: any } = {
  'اللغة العربية': BookOpen,
  'الرياضيات': Calculator,
  'العلوم': Beaker,
  'الجغرافيا': Globe,
  'الموسيقى': Music,
  'الفنون': Palette,
};

const mockLessons: Lesson[] = [
  {
    id: 1,
    title: 'الحروف الهجائية - المستوى الأول',
    subject: 'اللغة العربية',
    gradeLevel: 'الصف الأول',
    progress: 85,
    totalStudents: 45,
    completedStudents: 38,
    icon: BookOpen,
    color: 'purple',
  },
  {
    id: 2,
    title: 'الجمع والطرح الأساسي',
    subject: 'الرياضيات',
    gradeLevel: 'الصف الثاني',
    progress: 72,
    totalStudents: 52,
    completedStudents: 37,
    icon: Calculator,
    color: 'blue',
  },
  {
    id: 3,
    title: 'دورة الماء في الطبيعة',
    subject: 'العلوم',
    gradeLevel: 'الصف الثالث',
    progress: 60,
    totalStudents: 38,
    completedStudents: 23,
    icon: Beaker,
    color: 'green',
  },
  {
    id: 4,
    title: 'البلدان العربية',
    subject: 'الجغرافيا',
    gradeLevel: 'الصف الرابع',
    progress: 45,
    totalStudents: 40,
    completedStudents: 18,
    icon: Globe,
    color: 'orange',
  },
  {
    id: 5,
    title: 'الأناشيد الإسلامية',
    subject: 'الموسيقى',
    gradeLevel: 'الصف الأول',
    progress: 90,
    totalStudents: 50,
    completedStudents: 45,
    icon: Music,
    color: 'pink',
  },
];

const subjects = ['اللغة العربية', 'الرياضيات', 'العلوم', 'الجغرافيا', 'الموسيقى', 'الفنون'];
const gradeLevels = ['الصف الأول', 'الصف الثاني', 'الصف الثالث', 'الصف الرابع', 'الصف الخامس'];

const colorClasses: { [key: string]: { bg: string; light: string; text: string } } = {
  purple: { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-100', text: 'text-purple-700' },
  blue: { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-100', text: 'text-blue-700' },
  green: { bg: 'from-green-500 to-green-600', light: 'bg-green-100', text: 'text-green-700' },
  orange: { bg: 'from-orange-500 to-orange-600', light: 'bg-orange-100', text: 'text-orange-700' },
  pink: { bg: 'from-pink-500 to-pink-600', light: 'bg-pink-100', text: 'text-pink-700' },
};

export function ManageLessonsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>(mockLessons);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
      setLessons(lessons.filter(l => l.id !== id));
    }
  };

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl mb-2">إدارة الدروس 📚</h1>
          <p className="text-gray-600">إنشاء وتعديل المحتوى التعليمي</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-l from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl h-12 px-6">
              <Plus className="h-5 w-5 ml-2" />
              إضافة درس جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]" style={{ direction: 'rtl' }}>
            <DialogHeader>
              <DialogTitle>إضافة درس جديد</DialogTitle>
              <DialogDescription>أضف درساً تعليمياً جديداً مع المعلومات المطلوبة</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="lesson-title">عنوان الدرس</Label>
                <Input id="lesson-title" placeholder="أدخل عنوان الدرس" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">المادة</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المادة" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">الصف الدراسي</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الصف" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeLevels.map((grade) => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lesson-description">وصف الدرس</Label>
                <Textarea id="lesson-description" placeholder="أدخل وصف الدرس" rows={4} />
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl">
                  إضافة الدرس
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-xl"
                  onClick={() => setIsDialogOpen(false)}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="ابحث عن درس..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 rounded-xl h-12"
          />
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredLessons.map((lesson) => {
          const Icon = lesson.icon;
          const colors = colorClasses[lesson.color];
          
          return (
            <div
              key={lesson.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`${colors.light} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{lesson.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-full">
                        {lesson.subject}
                      </Badge>
                      <Badge variant="outline" className="rounded-full">
                        {lesson.gradeLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">نسبة الإكمال</span>
                  <span className={colors.text}>{lesson.progress}%</span>
                </div>
                <Progress value={lesson.progress} className="h-2" />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between py-3 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl text-gray-900">{lesson.totalStudents}</p>
                  <p className="text-xs text-gray-500">إجمالي الطلاب</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl text-green-600">{lesson.completedStudents}</p>
                  <p className="text-xs text-gray-500">أكملوا الدرس</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl hover:bg-blue-50"
                >
                  <Edit className="h-4 w-4 ml-2 text-blue-600" />
                  تعديل
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl hover:bg-red-50"
                  onClick={() => handleDelete(lesson.id)}
                >
                  <Trash2 className="h-4 w-4 ml-2 text-red-600" />
                  حذف
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
