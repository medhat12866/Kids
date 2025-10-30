import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Play } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Video {
  id: number;
  title: string;
  category: string;
  duration: string;
  uploadDate: string;
  thumbnail: string;
  views: number;
}

const mockVideos: Video[] = [
  {
    id: 1,
    title: 'تعليم سورة الفاتحة',
    category: 'القرآن الكريم',
    duration: '5:30',
    uploadDate: '2025-10-25',
    thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400',
    views: 1250,
  },
  {
    id: 2,
    title: 'أركان الإسلام الخمسة',
    category: 'التربية الإسلامية',
    duration: '8:15',
    uploadDate: '2025-10-24',
    thumbnail: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400',
    views: 980,
  },
  {
    id: 3,
    title: 'قصة النبي نوح',
    category: 'قصص الأنبياء',
    duration: '12:45',
    uploadDate: '2025-10-23',
    thumbnail: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400',
    views: 2100,
  },
  {
    id: 4,
    title: 'آداب الطعام في الإسلام',
    category: 'الآداب والأخلاق',
    duration: '6:20',
    uploadDate: '2025-10-22',
    thumbnail: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400',
    views: 750,
  },
  {
    id: 5,
    title: 'الوضوء خطوة بخطوة',
    category: 'العبادات',
    duration: '7:10',
    uploadDate: '2025-10-21',
    thumbnail: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400',
    views: 1560,
  },
];

const categories = [
  'القرآن الكريم',
  'التربية الإسلامية',
  'قصص الأنبياء',
  'الآداب والأخلاق',
  'العبادات',
  'التاريخ الإسلامي',
];

const categoryColors: { [key: string]: string } = {
  'القرآن الكريم': 'bg-purple-100 text-purple-700',
  'التربية الإسلامية': 'bg-blue-100 text-blue-700',
  'قصص الأنبياء': 'bg-green-100 text-green-700',
  'الآداب والأخلاق': 'bg-orange-100 text-orange-700',
  'العبادات': 'bg-pink-100 text-pink-700',
  'التاريخ الإسلامي': 'bg-teal-100 text-teal-700',
};

export function ManageVideosSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا الفيديو؟')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl mb-2">إدارة الفيديوهات 🎬</h1>
          <p className="text-gray-600">إضافة وتعديل وحذف الفيديوهات التعليمية</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl h-12 px-6"
              onClick={() => setEditingVideo(null)}
            >
              <Plus className="h-5 w-5 ml-2" />
              إضافة فيديو جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]" style={{ direction: 'rtl' }}>
            <DialogHeader>
              <DialogTitle>{editingVideo ? 'تعديل الفيديو' : 'إضافة فيديو جديد'}</DialogTitle>
              <DialogDescription>
                {editingVideo ? 'قم بتعديل معلومات الفيديو أدناه' : 'أضف فيديو تعليمي جديد للمنصة'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="title">عنوان الفيديو</Label>
                <Input id="title" placeholder="أدخل عنوان الفيديو" defaultValue={editingVideo?.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">التصنيف</Label>
                <Select defaultValue={editingVideo?.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التصنيف" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">الوصف</Label>
                <Textarea id="description" placeholder="أدخل وصف الفيديو" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-file">رفع الفيديو</Label>
                <Input id="video-file" type="file" accept="video/*" />
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl">
                  {editingVideo ? 'حفظ التعديلات' : 'إضافة الفيديو'}
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
            placeholder="ابحث عن فيديو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10 rounded-xl h-12"
          />
        </div>
      </div>

      {/* Videos Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-l from-purple-50 to-pink-50">
                <TableHead className="text-right">الصورة المصغرة</TableHead>
                <TableHead className="text-right">العنوان</TableHead>
                <TableHead className="text-right">التصنيف</TableHead>
                <TableHead className="text-right">المدة</TableHead>
                <TableHead className="text-right">المشاهدات</TableHead>
                <TableHead className="text-right">تاريخ الرفع</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredVideos.map((video) => (
                <TableRow key={video.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <p className="truncate">{video.title}</p>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${categoryColors[video.category] || 'bg-gray-100 text-gray-700'} border-0`}>
                      {video.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{video.duration}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{video.views.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">
                      {new Date(video.uploadDate).toLocaleDateString('ar-EG')}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-blue-50"
                        onClick={() => handleEdit(video)}
                      >
                        <Edit className="h-4 w-4 text-blue-600" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-red-50"
                        onClick={() => handleDelete(video.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              عرض {filteredVideos.length} من أصل {videos.length} فيديو
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg">السابق</Button>
              <Button variant="outline" size="sm" className="rounded-lg bg-purple-100 text-purple-700 border-purple-200">1</Button>
              <Button variant="outline" size="sm" className="rounded-lg">2</Button>
              <Button variant="outline" size="sm" className="rounded-lg">3</Button>
              <Button variant="outline" size="sm" className="rounded-lg">التالي</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
