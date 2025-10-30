import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  Eye, 
  FileQuestion, 
  Video, 
  Upload, 
  FileBarChart,
  UserPlus,
  TrendingUp,
  Clock,
  CheckCircle,
  Menu
} from 'lucide-react';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { StatCard } from '../components/StatCard';
import { RecentActivityItem } from '../components/RecentActivityItem';
import { IslamicPattern } from '../components/IslamicPattern';
import { Button } from '../components/ui/button';
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ManageVideosSection } from '../components/dashboard/ManageVideosSection';
import { ManageLessonsSection } from '../components/dashboard/ManageLessonsSection';
import { ManageUsersSection } from '../components/dashboard/ManageUsersSection';
import { ReportsSection } from '../components/dashboard/ReportsSection';
import { SettingsSection } from '../components/dashboard/SettingsSection';
import { SupportSection } from '../components/dashboard/SupportSection';

// Mock data for charts
const weeklyProgressData = [
  { day: 'السبت', completed: 45, started: 60 },
  { day: 'الأحد', completed: 52, started: 68 },
  { day: 'الاثنين', completed: 38, started: 55 },
  { day: 'الثلاثاء', completed: 65, started: 78 },
  { day: 'الأربعاء', completed: 48, started: 62 },
  { day: 'الخميس', completed: 70, started: 85 },
  { day: 'الجمعة', completed: 42, started: 58 },
];

const monthlyEngagementData = [
  { month: 'يناير', videos: 120, lessons: 85, quizzes: 65 },
  { month: 'فبراير', videos: 145, lessons: 95, quizzes: 75 },
  { month: 'مارس', videos: 165, lessons: 110, quizzes: 88 },
  { month: 'أبريل', videos: 190, lessons: 125, quizzes: 95 },
  { month: 'مايو', videos: 210, lessons: 140, quizzes: 110 },
  { month: 'يونيو', videos: 235, lessons: 155, quizzes: 125 },
];

const recentActivities = [
  {
    icon: Upload,
    title: 'تم رفع فيديو جديد',
    description: 'درس القرآن الكريم - سورة الفاتحة',
    time: 'منذ 5 دقائق',
    color: 'blue' as const,
  },
  {
    icon: UserPlus,
    title: 'مستخدم جديد',
    description: 'انضم أحمد محمد إلى المنصة',
    time: 'منذ 15 دقيقة',
    color: 'green' as const,
  },
  {
    icon: CheckCircle,
    title: 'إنجاز جديد',
    description: 'فاطمة أكملت 10 دروس هذا الأسبوع',
    time: 'منذ ساعة',
    color: 'purple' as const,
  },
  {
    icon: TrendingUp,
    title: 'تحسن في الأداء',
    description: 'ارتفاع معدل إكمال الدروس بنسبة 15%',
    time: 'منذ ساعتين',
    color: 'orange' as const,
  },
  {
    icon: Video,
    title: 'فيديو شائع',
    description: 'درس الصلاة وصل إلى 1000 مشاهدة',
    time: 'منذ 3 ساعات',
    color: 'pink' as const,
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" style={{ direction: 'rtl' }}>
      {/* Islamic Pattern Background */}
      <div className="fixed inset-0 pointer-events-none text-purple-600">
        <IslamicPattern />
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <DashboardSidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Top Navbar */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="px-4 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="lg:hidden"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                  <div>
                    <h1 className="text-2xl">لوحة التحكم</h1>
                    <p className="text-sm text-gray-500">مرحباً بك في منصة التعليم الإسلامي</p>
                  </div>
                </div>
                
                {/* User Avatar */}
                <div className="flex items-center gap-3">
                  <div className="hidden md:block text-left">
                    <p className="text-sm">المشرف العام</p>
                    <p className="text-xs text-gray-500">admin@platform.com</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:shadow-lg transition-shadow">
                    <span>أ</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="px-4 lg:px-8 py-8">
            {/* Render different sections based on active menu */}
            {activeSection === 'overview' && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <StatCard
                    icon={Users}
                    title="إجمالي المستخدمين"
                    value="1,234"
                    change="12%"
                    trend="up"
                    color="purple"
                  />
                  <StatCard
                    icon={BookOpen}
                    title="إجمالي الدروس"
                    value="156"
                    change="8%"
                    trend="up"
                    color="blue"
                  />
                  <StatCard
                    icon={Eye}
                    title="إجمالي المشاهدات"
                    value="45.6K"
                    change="23%"
                    trend="up"
                    color="green"
                  />
                  <StatCard
                    icon={FileQuestion}
                    title="الاختبارات المكتملة"
                    value="892"
                    change="5%"
                    trend="down"
                    color="orange"
                  />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Weekly Progress Chart */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-purple-600" />
                      </div>
                      <h3 className="text-lg">تقدم الأطفال الأسبوعي</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={weeklyProgressData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="day" 
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
                        <Bar dataKey="completed" fill="#8b5cf6" name="مكتمل" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="started" fill="#ec4899" name="بدأ" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Monthly Engagement Chart */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BarChart className="h-4 w-4 text-blue-600" />
                      </div>
                      <h3 className="text-lg">التفاعل الشهري</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={monthlyEngagementData}>
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
                          dataKey="videos" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          name="فيديوهات"
                          dot={{ fill: '#3b82f6', r: 4 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="lessons" 
                          stroke="#10b981" 
                          strokeWidth={3}
                          name="دروس"
                          dot={{ fill: '#10b981', r: 4 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="quizzes" 
                          stroke="#f59e0b" 
                          strokeWidth={3}
                          name="اختبارات"
                          dot={{ fill: '#f59e0b', r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Activity & Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Recent Activity - Takes 2 columns */}
                  <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <h3 className="text-lg">النشاط الأخير</h3>
                    </div>
                    <div className="space-y-2">
                      {recentActivities.map((activity, index) => (
                        <RecentActivityItem key={index} {...activity} />
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg mb-4">إجراءات سريعة</h3>
                    <div className="space-y-3">
                      <Button 
                        className="w-full justify-start gap-3 bg-gradient-to-l from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl h-12"
                        onClick={() => setActiveSection('lessons')}
                      >
                        <BookOpen className="h-5 w-5" />
                        إضافة درس جديد
                      </Button>
                      <Button 
                        className="w-full justify-start gap-3 bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl h-12"
                        onClick={() => setActiveSection('videos')}
                      >
                        <Upload className="h-5 w-5" />
                        رفع فيديو
                      </Button>
                      <Button 
                        className="w-full justify-start gap-3 bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl h-12"
                        onClick={() => setActiveSection('reports')}
                      >
                        <FileBarChart className="h-5 w-5" />
                        إنشاء تقرير
                      </Button>
                      <Button 
                        className="w-full justify-start gap-3 bg-gradient-to-l from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl h-12"
                      >
                        <FileQuestion className="h-5 w-5" />
                        إضافة اختبار
                      </Button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-2 text-purple-600">
                        <span className="text-2xl">🌙</span>
                        <span className="text-2xl">⭐</span>
                        <span className="text-2xl">✨</span>
                      </div>
                      <p className="text-center text-xs text-gray-500 mt-2">
                        منصة التعليم الإسلامي
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            
            {activeSection === 'videos' && <ManageVideosSection />}
            {activeSection === 'lessons' && <ManageLessonsSection />}
            {activeSection === 'users' && <ManageUsersSection />}
            {activeSection === 'reports' && <ReportsSection />}
            {activeSection === 'settings' && <SettingsSection />}
            {activeSection === 'support' && <SupportSection />}
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="px-4 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🌙</span>
                  </div>
                  <span className="text-sm text-gray-600">منصة التعليم الإسلامي © 2025</span>
                </div>
                <div className="flex gap-6 text-sm text-gray-600">
                  <a href="#" className="hover:text-purple-600 transition-colors">الدعم</a>
                  <a href="#" className="hover:text-purple-600 transition-colors">الشروط والأحكام</a>
                  <a href="#" className="hover:text-purple-600 transition-colors">سياسة الخصوصية</a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
