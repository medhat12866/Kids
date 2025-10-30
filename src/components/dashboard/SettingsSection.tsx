import React, { useState } from 'react';
import { Settings, Moon, Sun, Bell, Lock, Globe, Palette, Volume2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function SettingsSection() {
  const [darkMode, setDarkMode] = useState(false);
  const [voiceResponses, setVoiceResponses] = useState(true);
  const [parentalControl, setParentalControl] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [volume, setVolume] = useState([75]);

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">الإعدادات ⚙️</h1>
        <p className="text-gray-600">تخصيص تجربة المنصة التعليمية</p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white shadow-sm rounded-2xl">
          <TabsTrigger value="general" className="rounded-xl py-3">
            <Settings className="h-4 w-4 ml-2" />
            عام
          </TabsTrigger>
          <TabsTrigger value="account" className="rounded-xl py-3">
            <Lock className="h-4 w-4 ml-2" />
            الحساب
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-xl py-3">
            <Bell className="h-4 w-4 ml-2" />
            الإشعارات
          </TabsTrigger>
          <TabsTrigger value="appearance" className="rounded-xl py-3">
            <Palette className="h-4 w-4 ml-2" />
            المظهر
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              الإعدادات العامة
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="language" className="text-base">اللغة</Label>
                  <p className="text-sm text-gray-500 mt-1">اختر لغة المنصة</p>
                </div>
                <Select defaultValue="ar">
                  <SelectTrigger className="w-40 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="voice" className="text-base">الردود الصوتية</Label>
                  <p className="text-sm text-gray-500 mt-1">تفعيل التوجيهات الصوتية للأطفال</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔊</span>
                  <Switch
                    id="voice"
                    checked={voiceResponses}
                    onCheckedChange={setVoiceResponses}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="parental" className="text-base">الرقابة الأبوية</Label>
                  <p className="text-sm text-gray-500 mt-1">تفعيل قيود المحتوى والوقت</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔒</span>
                  <Switch
                    id="parental"
                    checked={parentalControl}
                    onCheckedChange={setParentalControl}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <Label htmlFor="sound" className="text-base">المؤثرات الصوتية</Label>
                  <p className="text-sm text-gray-500 mt-1">تفعيل الأصوات عند التفاعل</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎵</span>
                  <Switch
                    id="sound"
                    checked={soundEffects}
                    onCheckedChange={setSoundEffects}
                  />
                </div>
              </div>

              <div className="py-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Label htmlFor="volume" className="text-base">مستوى الصوت</Label>
                    <p className="text-sm text-gray-500 mt-1">ضبط مستوى صوت المنصة</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium w-12">{volume[0]}%</span>
                  </div>
                </div>
                <Slider
                  id="volume"
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg mb-6 flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              إعدادات الحساب
            </h3>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full h-12 rounded-xl justify-start">
                تغيير كلمة المرور
              </Button>
              <Button variant="outline" className="w-full h-12 rounded-xl justify-start">
                تحديث البريد الإلكتروني
              </Button>
              <Button variant="outline" className="w-full h-12 rounded-xl justify-start">
                إدارة الحسابات المرتبطة
              </Button>
              <Button variant="outline" className="w-full h-12 rounded-xl justify-start text-red-600 hover:bg-red-50">
                حذف الحساب
              </Button>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔐</span>
              <div>
                <h4>الأمان والخصوصية</h4>
                <p className="text-sm text-gray-600 mt-1">حسابك محمي بتشفير من الدرجة الأولى</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg mb-6 flex items-center gap-2">
              <Bell className="h-5 w-5 text-green-600" />
              إعدادات الإشعارات
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="push-notif" className="text-base">الإشعارات الفورية</Label>
                  <p className="text-sm text-gray-500 mt-1">تلقي إشعارات على الجهاز</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔔</span>
                  <Switch
                    id="push-notif"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="email-notif" className="text-base">إشعارات البريد</Label>
                  <p className="text-sm text-gray-500 mt-1">تلقي الإشعارات عبر البريد الإلكتروني</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <Switch
                    id="email-notif"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
              </div>

              <div className="py-4">
                <h4 className="mb-4">أنواع الإشعارات</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm">دروس جديدة</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm">إنجازات الطفل</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm">رسائل المعلمين</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm">تحديثات المنصة</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-sm">
            <h3 className="text-lg mb-6 flex items-center gap-2">
              <Palette className="h-5 w-5 text-orange-600" />
              إعدادات المظهر
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <div>
                  <Label htmlFor="theme" className="text-base">الوضع الليلي / النهاري</Label>
                  <p className="text-sm text-gray-500 mt-1">اختر المظهر المفضل</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{darkMode ? '🌙' : '☀️'}</span>
                  <Switch
                    id="theme"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
              </div>

              <div className="py-4">
                <Label className="text-base mb-4 block">السمات اللونية</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 border-2 border-purple-500 rounded-2xl cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex gap-2 mb-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg" />
                      <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                      <div className="w-8 h-8 bg-blue-500 rounded-lg" />
                    </div>
                    <p className="text-sm">الافتراضية ✓</p>
                  </div>
                  
                  <div className="p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex gap-2 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-lg" />
                      <div className="w-8 h-8 bg-teal-500 rounded-lg" />
                      <div className="w-8 h-8 bg-emerald-500 rounded-lg" />
                    </div>
                    <p className="text-sm text-gray-600">الطبيعة</p>
                  </div>
                  
                  <div className="p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex gap-2 mb-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg" />
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg" />
                      <div className="w-8 h-8 bg-amber-500 rounded-lg" />
                    </div>
                    <p className="text-sm text-gray-600">الشمس</p>
                  </div>
                </div>
              </div>

              <div className="py-4 border-t border-gray-100">
                <Label className="text-base mb-4 block">حجم الخط</Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">صغير</SelectItem>
                    <SelectItem value="medium">متوسط (الافتراضي)</SelectItem>
                    <SelectItem value="large">كبير</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎨</span>
              <div>
                <h4>تخصيص تجربتك</h4>
                <p className="text-sm text-gray-600 mt-1">اختر الألوان والأشكال التي تحبها!</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Save Button */}
      <div className="flex justify-end pt-4">
        <Button className="bg-gradient-to-l from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl h-12 px-8">
          حفظ التغييرات
        </Button>
      </div>
    </div>
  );
}
