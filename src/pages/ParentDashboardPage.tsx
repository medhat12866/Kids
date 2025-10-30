import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Progress } from "../components/ui/progress";
import { 
  ArrowRight, Download, Clock, TrendingUp, 
  Eye, EyeOff, Shield, BarChart3
} from "lucide-react";
import { parentDashboardData, childProfile } from "../data/sampleData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface ParentDashboardPageProps {
  onNavigate: (page: string) => void;
}

export function ParentDashboardPage({ onNavigate }: ParentDashboardPageProps) {
  const totalMinutes = parentDashboardData.weeklyActivity.reduce((sum, day) => sum + day.minutes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border shadow-sm z-40">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate("profile")}
            className="h-11 rounded-full"
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            <span>العودة</span>
          </Button>

          <h2 className="flex-1 text-center">لوحة تحكم الأهل</h2>

          <Button
            variant="outline"
            className="h-11 rounded-full border-2"
          >
            <Download className="w-5 h-5 ml-2" />
            <span className="hidden md:inline">تقرير PDF</span>
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-6">
        {/* Child Overview */}
        <Card className="border-0 shadow-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B9D] to-[#9C6FFF] flex items-center justify-center text-white text-2xl">
              {childProfile.name[0]}
            </div>
            <div className="flex-1">
              <h3>{childProfile.name}</h3>
              <p className="text-muted-foreground">المستوى {childProfile.level} • {childProfile.xp} نقطة</p>
            </div>
            <Badge className="bg-[#5FD08A] text-white hover:bg-[#5FD08A]/90">
              نشط
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "فيديوهات شاهدها", value: parentDashboardData.achievements.videosWatched, color: "from-[#FF6B9D] to-[#FF8B67]" },
              { label: "قصص قرأها", value: parentDashboardData.achievements.storiesRead, color: "from-[#9C6FFF] to-[#B991FF]" },
              { label: "ألعاب أكملها", value: parentDashboardData.achievements.gamesCompleted, color: "from-[#4ECAFF] to-[#5FD08A]" },
              { label: "أنشطة أنجزها", value: parentDashboardData.achievements.activitiesDone, color: "from-[#FFB84D] to-[#FF8B67]" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Screen Time */}
        <Card className="border-0 shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#9C6FFF] to-[#4ECAFF] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3>الوقت المستغرق هذا الأسبوع</h3>
                <p className="text-muted-foreground">{totalMinutes} دقيقة ({Math.round(totalMinutes / 60)} ساعة)</p>
              </div>
            </div>
            <Badge variant="secondary" className="rounded-full">
              <TrendingUp className="w-4 h-4 ml-1" />
              +12%
            </Badge>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={parentDashboardData.weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12 }}
                  reversed={true}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  label={{ value: 'دقيقة', angle: 0, position: 'top' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #9C6FFF',
                    borderRadius: '12px',
                    direction: 'rtl'
                  }}
                  formatter={(value) => [`${value} دقيقة`, 'الوقت']}
                />
                <Bar 
                  dataKey="minutes" 
                  fill="url(#colorGradient)" 
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9C6FFF" />
                    <stop offset="100%" stopColor="#4ECAFF" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Categories Distribution */}
        <Card className="border-0 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3>الفئات الأكثر مشاهدة</h3>
              <p className="text-muted-foreground">توزيع الاهتمامات</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={parentDashboardData.topCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="percentage"
                  >
                    {parentDashboardData.topCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '2px solid #9C6FFF',
                      borderRadius: '12px',
                      direction: 'rtl'
                    }}
                    formatter={(value) => [`${value}%`, 'النسبة']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {parentDashboardData.topCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-muted-foreground">{category.percentage}%</span>
                  </div>
                  <Progress 
                    value={category.percentage} 
                    className="h-2"
                    style={{ 
                      '--progress-background': category.color 
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Parental Controls */}
        <Card className="border-0 shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#5FD08A] to-[#4ECAFF] flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3>إعدادات الرقابة الأبوية</h3>
              <p className="text-muted-foreground">تحكم في تجربة طفلك</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#9C6FFF]" />
                <div>
                  <h4 className="mb-1">حد وقت الشاشة اليومي</h4>
                  <p className="text-sm text-muted-foreground">60 دقيقة / يوم</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-[#9C6FFF]" />
                <div>
                  <h4 className="mb-1">عرض المحتوى حسب العمر</h4>
                  <p className="text-sm text-muted-foreground">6-10 سنوات فقط</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <EyeOff className="w-5 h-5 text-[#9C6FFF]" />
                <div>
                  <h4 className="mb-1">حظر فئات معينة</h4>
                  <p className="text-sm text-muted-foreground">لا يوجد محتوى محظور</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="border-0 shadow-lg p-6 bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10">
          <h3 className="mb-4">توصيات للأهل</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#9C6FFF] mt-2 flex-shrink-0" />
              <p className="text-sm">طفلك يحب القصص! شجعه على قراءة المزيد من الكتب.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#4ECAFF] mt-2 flex-shrink-0" />
              <p className="text-sm">وقت الشاشة ضمن الحد الصحي. استمر بالمتابعة!</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FFB84D] mt-2 flex-shrink-0" />
              <p className="text-sm">جرب الأنشطة الإبداعية لتنمية مهارات الطفل الفنية.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
