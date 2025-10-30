import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Filter, UserCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'طالب' | 'معلم' | 'ولي أمر';
  avatar: string;
  joinDate: string;
  status: 'نشط' | 'غير نشط';
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    role: 'طالب',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    joinDate: '2025-01-15',
    status: 'نشط',
  },
  {
    id: 2,
    name: 'فاطمة علي',
    email: 'fatima@example.com',
    role: 'طالب',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    joinDate: '2025-02-10',
    status: 'نشط',
  },
  {
    id: 3,
    name: 'المعلمة سارة',
    email: 'sara@example.com',
    role: 'معلم',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
    joinDate: '2024-12-01',
    status: 'نشط',
  },
  {
    id: 4,
    name: 'محمد حسن',
    email: 'mohamed@example.com',
    role: 'ولي أمر',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mohamed',
    joinDate: '2025-03-05',
    status: 'نشط',
  },
  {
    id: 5,
    name: 'يوسف إبراهيم',
    email: 'youssef@example.com',
    role: 'طالب',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Youssef',
    joinDate: '2025-01-20',
    status: 'غير نشط',
  },
  {
    id: 6,
    name: 'نور الدين',
    email: 'nour@example.com',
    role: 'طالب',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nour',
    joinDate: '2025-02-15',
    status: 'نشط',
  },
  {
    id: 7,
    name: 'المعلم خالد',
    email: 'khaled@example.com',
    role: 'معلم',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khaled',
    joinDate: '2024-11-10',
    status: 'نشط',
  },
  {
    id: 8,
    name: 'أم عمر',
    email: 'umomar@example.com',
    role: 'ولي أمر',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=UmOmar',
    joinDate: '2025-01-25',
    status: 'نشط',
  },
];

const roleColors: { [key: string]: string } = {
  'طالب': 'bg-blue-100 text-blue-700 border-blue-200',
  'معلم': 'bg-purple-100 text-purple-700 border-purple-200',
  'ولي أمر': 'bg-green-100 text-green-700 border-green-200',
};

export function ManageUsersSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleDelete = (id: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl mb-2">إدارة المستخدمين 👨‍👩‍👧</h1>
          <p className="text-gray-600">إدارة الطلاب والمعلمين وأولياء الأمور</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl h-12 px-6">
              <Plus className="h-5 w-5 ml-2" />
              إضافة مستخدم جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]" style={{ direction: 'rtl' }}>
            <DialogHeader>
              <DialogTitle>إضافة مستخدم جديد</DialogTitle>
              <DialogDescription>أضف مستخدماً جديداً (طالب، معلم، أو ولي أمر)</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="user-name">الاسم الكامل</Label>
                <Input id="user-name" placeholder="أدخل اسم المستخدم" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email">البريد الإلكتروني</Label>
                <Input id="user-email" type="email" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-role">الدور</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الدور" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="طالب">طالب</SelectItem>
                    <SelectItem value="معلم">معلم</SelectItem>
                    <SelectItem value="ولي أمر">ولي أمر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-password">كلمة المرور</Label>
                <Input id="user-password" type="password" placeholder="أدخل كلمة المرور" />
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl">
                  إضافة المستخدم
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

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="ابحث عن مستخدم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 rounded-xl h-12"
            />
          </div>
          <Tabs value={selectedRole} onValueChange={setSelectedRole} className="w-full md:w-auto">
            <TabsList className="grid grid-cols-4 h-12">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="طالب">طلاب</TabsTrigger>
              <TabsTrigger value="معلم">معلمين</TabsTrigger>
              <TabsTrigger value="ولي أمر">أولياء أمور</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-14 w-14 border-2 border-gray-200">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    <UserCircle className="h-14 w-14 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="mb-1">{user.name}</h4>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className={`${roleColors[user.role]} border`}>
                  {user.role}
                </Badge>
                <Badge 
                  variant={user.status === 'نشط' ? 'default' : 'secondary'}
                  className={user.status === 'نشط' ? 'bg-green-500' : ''}
                >
                  {user.status}
                </Badge>
              </div>

              <div className="text-sm text-gray-600 pt-2 border-t border-gray-100">
                <p>تاريخ الانضمام: {new Date(user.joinDate).toLocaleDateString('ar-EG')}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl hover:bg-blue-50"
                >
                  <Edit className="h-4 w-4 ml-1 text-blue-600" />
                  تعديل
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-xl hover:bg-red-50"
                  onClick={() => handleDelete(user.id)}
                >
                  <Trash2 className="h-4 w-4 ml-1 text-red-600" />
                  حذف
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Footer */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl text-gray-900 mb-1">{users.length}</p>
            <p className="text-sm text-gray-600">إجمالي المستخدمين</p>
          </div>
          <div className="text-center">
            <p className="text-3xl text-blue-600 mb-1">{users.filter(u => u.role === 'طالب').length}</p>
            <p className="text-sm text-gray-600">الطلاب</p>
          </div>
          <div className="text-center">
            <p className="text-3xl text-purple-600 mb-1">{users.filter(u => u.role === 'معلم').length}</p>
            <p className="text-sm text-gray-600">المعلمين</p>
          </div>
          <div className="text-center">
            <p className="text-3xl text-green-600 mb-1">{users.filter(u => u.role === 'ولي أمر').length}</p>
            <p className="text-sm text-gray-600">أولياء الأمور</p>
          </div>
        </div>
      </div>
    </div>
  );
}
