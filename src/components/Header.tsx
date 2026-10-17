import React from 'react';
import { Sprout, Globe2, Sparkles, Calendar, Droplets } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onSelectTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onSelectTab }) => {
  const isFa = lang === 'fa';

  return (
    <header className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-paddy-800 text-white shadow-lg sticky top-0 z-40 border-b border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand identity */}
        <div 
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-emerald-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-emerald-950 rounded-[14px] flex items-center justify-center text-xl">
              🌾
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-200 transition-colors">
                {isFa ? 'نو برنج‌یار' : 'Now-BeranjYar'}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {isFa ? 'نگارش تخصصی شالیزار' : 'Paddy Pro Edition'}
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 font-normal">
              {isFa 
                ? 'سامانه جامع هوشمند مدیریت شالیکاری، ارقام و کلینیک آفات' 
                : 'Smart Rice Farming, Cultivar Advisor & Agronomic Clinic'}
            </p>
          </div>
        </div>

        {/* Quick status bar & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="hidden md:flex items-center gap-2 bg-emerald-950/60 backdrop-blur-sm border border-emerald-700/40 rounded-xl px-3 py-1.5 text-xs text-emerald-200">
            <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              {isFa ? 'فصل شالیکاری: پایش رشد، آبیاری و تغذیه' : 'Paddy Season: Growth, Water & Nutrition'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 bg-emerald-950/60 backdrop-blur-sm border border-emerald-700/40 rounded-xl px-3 py-1.5 text-xs text-emerald-200">
            <Droplets className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              {isFa ? 'آبیاری تناوبی: صرفه‌جویی ۳۰٪ آب' : 'Intermittent Flooding: 30% Water Saved'}
            </span>
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 bg-emerald-700/60 hover:bg-emerald-600/70 border border-emerald-500/40 rounded-xl px-3 py-1.5 text-xs font-semibold text-emerald-100 transition-colors shadow-sm"
            title={isFa ? 'تغییر به انگلیسی' : 'Switch to Persian'}
          >
            <Globe2 className="w-4 h-4 text-amber-300" />
            <span>{isFa ? 'English' : 'فارسی'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
