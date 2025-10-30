import React, { useState } from 'react';
import { Send, ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'كيف أضيف فيديو جديد للمنصة؟',
    answer: 'يمكنك إضافة فيديو جديد عن طريق الذهاب إلى صفحة "إدارة الفيديوهات" والضغط على زر "إضافة فيديو جديد". بعد ذلك، قم بملء التفاصيل المطلوبة وارفع الفيديو من جهازك.',
  },
  {
    id: '2',
    question: 'كيف يمكنني تتبع تقدم الطلاب؟',
    answer: 'توجه إلى صفحة "التقارير والإحصائيات" حيث ستجد تقارير شاملة عن أداء كل طالب، بما في ذلك الدروس المكتملة، الوقت المستغرق، والدرجات في الاختبارات.',
  },
  {
    id: '3',
    question: 'هل يمكن للوالدين الوصول إلى حساب الطفل؟',
    answer: 'نعم، يمكن لأولياء الأمور الوصول إلى لوحة تحكم خاصة بهم لمتابعة تقدم أطفالهم، تحديد أوقات الاستخدام، والتحكم في المحتوى المتاح.',
  },
  {
    id: '4',
    question: 'كيف أقوم بإعادة تعيين كلمة المرور؟',
    answer: 'اذهب إلى صفحة الإعدادات، ثم اختر "إعدادات الحساب"، وستجد خيار "تغيير كلمة المرور". اتبع التعليمات لإعادة تعيين كلمة مرور جديدة.',
  },
  {
    id: '5',
    question: 'ما هي المتصفحات المدعومة للمنصة؟',
    answer: 'المنصة تدعم جميع المتصفحات الحديثة مثل Chrome، Firefox، Safari، و Edge. ننصح باستخدام أحدث إصدار للحصول على أفضل تجربة.',
  },
  {
    id: '6',
    question: 'كيف يمكنني التواصل مع فريق الدعم الفني؟',
    answer: 'يمكنك التواصل معنا عبر نموذج الاتصال أدناه، أو عبر البريد الإلكتروني support@platform.com، أو الهاتف على الرقم +966 50 123 4567.',
  },
];

export function SupportSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="space-y-6" style={{ direction: 'rtl' }}>
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">الدعم الفني 💬</h1>
        <p className="text-gray-600">نحن هنا لمساعدتك في أي وقت</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Form - Takes 2 columns */}
        <div className="lg:col-span-2">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg">نموذج الاتصال</h3>
                <p className="text-sm text-gray-600">أرسل لنا رسالتك وسنرد عليك في أقرب وقت</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-l from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl h-12"
              >
                <Send className="h-5 w-5 ml-2" />
                إرسال الطلب
              </Button>
            </form>
          </Card>
        </div>

        {/* Contact Info & Robot */}
        <div className="space-y-6">
          {/* Robot Illustration */}
          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-yellow-50 to-blue-50 text-center">
            <div className="text-7xl mb-4">🤖</div>
            <h4 className="mb-2">مساعدك الذكي</h4>
            <p className="text-sm text-gray-600">
              نحن هنا للإجابة على جميع أسئلتك ومساعدتك في استخدام المنصة
            </p>
          </Card>

          {/* Contact Methods */}
          <Card className="p-6 border-0 shadow-sm">
            <h4 className="mb-4">طرق التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-600">البريد الإلكتروني</p>
                  <p className="text-sm truncate">support@platform.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-600">الهاتف</p>
                  <p className="text-sm">+966 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-600">الدردشة المباشرة</p>
                  <p className="text-sm">متاح من 8 ص - 8 م</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Tips */}
          <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-orange-50 to-pink-50">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💡</span>
              <h4>نصيحة سريعة</h4>
            </div>
            <p className="text-sm text-gray-700">
              معظم الأسئلة الشائعة يمكن إيجاد إجابتها في قسم الأسئلة المتكررة أدناه!
            </p>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="p-6 border-0 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">❓</span>
          <div>
            <h3 className="text-lg">الأسئلة المتكررة</h3>
            <p className="text-sm text-gray-600">إجابات على الأسئلة الأكثر شيوعاً</p>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-gray-200 rounded-xl px-4 data-[state=open]:bg-gradient-to-l data-[state=open]:from-purple-50 data-[state=open]:to-pink-50"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-right">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      {/* Help Resources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-4xl mb-3">📖</div>
          <h4 className="mb-2">دليل المستخدم</h4>
          <p className="text-sm text-gray-600">تعلم كيفية استخدام جميع ميزات المنصة</p>
        </Card>

        <Card className="p-6 border-0 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-4xl mb-3">🎥</div>
          <h4 className="mb-2">فيديوهات تعليمية</h4>
          <p className="text-sm text-gray-600">شاهد شروحات مفصلة بالفيديو</p>
        </Card>

        <Card className="p-6 border-0 shadow-sm text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-4xl mb-3">👥</div>
          <h4 className="mb-2">منتدى المجتمع</h4>
          <p className="text-sm text-gray-600">شارك تجربتك مع المستخدمين الآخرين</p>
        </Card>
      </div>
    </div>
  );
}
