import React from 'react';
import { Sprout, Heart, Shield, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { TabType } from './Navigation';

interface FooterProps {
  lang: Language;
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSelectTab }) => {
  const isFa = lang === 'fa';

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-12 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-black text-white">
                {isFa ? 'نو برنج‌یار' : 'Now-BeranjYar'}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {isFa ? 'نگارش تخصصی شالیزار' : 'Paddy Pro Edition'}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-md">
              {isFa
                ? 'سامانه جامع هوشمند زراعت برنج ایران؛ تلفیق دانش بومی شالیکاران شمال و جنوب با استانداردهای نوین ترویجی مؤسسه تحقیقات برنج کشور.'
                : 'Scientific Iranian rice management system combining ancestral farming heritage with research-backed IRRI protocols.'}
            </p>
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>{isFa ? 'منطبق بر دستورالعمل‌های رسمی سازمان تحقیقات کشاورزی' : 'Aligned with official agricultural research guidelines'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isFa ? 'بخش‌های سامانه' : 'Platform Modules'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectTab('calculator')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {isFa ? 'محاسبه‌گر بذر، کود و شالیکوبی' : 'NPK & Yield Calculator'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('diagnostic')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {isFa ? 'کلینیک عارضه‌یابی و آفات' : 'Diagnostic Pest Lab'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('stages')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {isFa ? 'تقویم ۸ مرحله‌ای زراعت برنج' : '8-Stage Crop Calendar'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('varieties')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {isFa ? 'دانشنامه ارقام هاشمی، طارم، عنبربو' : 'Rice Cultivars Atlas'}
                </button>
              </li>
            </ul>
          </div>

          {/* References & Disclaimer */}
          <div className="space-y-3 text-xs text-stone-400">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isFa ? 'مراجع علمی و ترویجی' : 'Scientific References'}
            </h4>
            <p className="leading-relaxed text-[11px]">
              {isFa
                ? 'مؤسسه تحقیقات برنج کشور (رشت و آمل)، پژوهشکده ژنتیک و زیست‌فناوری کشاورزی طبرستان و سازمان جهاد کشاورزی استان‌های گیلان و مازندران.'
                : 'Iran Rice Research Institute (RRII), Tabarestan Agricultural Biotechnology Research Institute.'}
            </p>
            <div className="p-2 rounded-lg bg-stone-800/80 border border-stone-700/60 text-[10px] text-stone-400 leading-relaxed">
              {isFa
                ? 'توجه: مقادیر کود و سموم بر اساس آزمون خاک و شرایط اقلیمی مزرعه باید نهایی گردد.'
                : 'Note: Chemical fertilizer and pesticide doses should be fine-tuned via soil testing.'}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-800 text-center text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Now-BeranjYar. {isFa ? 'تمامی حقوق برای شالیکاران و توسعه‌دهندگان برنج محفوظ است.' : 'All rights reserved.'}
          </div>
          <div className="text-[11px] text-stone-500">
            {isFa ? 'توسعه‌یافته با عشق به شالیزارهای سبز ایران' : 'Built for modern precision rice farming'}
          </div>
        </div>
      </div>
    </footer>
  );
};
