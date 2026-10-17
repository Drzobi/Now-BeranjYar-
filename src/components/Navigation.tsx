import React from 'react';
import { 
  LayoutDashboard, 
  Calculator, 
  Stethoscope, 
  CalendarDays, 
  Wheat, 
  Droplets, 
  Coins, 
  NotebookPen 
} from 'lucide-react';
import { Language } from '../types';

export type TabType = 
  | 'dashboard' 
  | 'calculator' 
  | 'diagnostic' 
  | 'stages' 
  | 'varieties' 
  | 'water' 
  | 'market' 
  | 'notes';

interface NavigationProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  lang: Language;
}

export const Navigation: React.FC<NavigationProps> = ({ currentTab, onSelectTab, lang }) => {
  const isFa = lang === 'fa';

  const navItems = [
    {
      id: 'dashboard' as TabType,
      labelFa: 'پیشخوان زراعی',
      labelEn: 'Dashboard',
      icon: LayoutDashboard,
      badge: isFa ? 'زنده' : 'Live'
    },
    {
      id: 'calculator' as TabType,
      labelFa: 'محاسبه‌گر شالیزار',
      labelEn: 'Field Calculator',
      icon: Calculator,
      badge: isFa ? 'بذر و کود' : 'Seed & NPK'
    },
    {
      id: 'diagnostic' as TabType,
      labelFa: 'کلینیک آفات و امراض',
      labelEn: 'Diagnostic Lab',
      icon: Stethoscope,
      badge: isFa ? 'هوشمند' : 'Smart'
    },
    {
      id: 'stages' as TabType,
      labelFa: 'تقویم و مراحل کشت',
      labelEn: 'Crop Calendar',
      icon: CalendarDays,
      badge: '۸ ' + (isFa ? 'مرحله' : 'Steps')
    },
    {
      id: 'varieties' as TabType,
      labelFa: 'دانشنامه ارقام برنج',
      labelEn: 'Rice Varieties',
      icon: Wheat,
      badge: isFa ? 'مقایسه' : 'Compare'
    },
    {
      id: 'water' as TabType,
      labelFa: 'مدیریت آب و رطوبت',
      labelEn: 'Water Manager',
      icon: Droplets,
    },
    {
      id: 'market' as TabType,
      labelFa: 'تبدیل شلتوک و بازار',
      labelEn: 'Milling & Market',
      icon: Coins,
    },
    {
      id: 'notes' as TabType,
      labelFa: 'دفترچه یادداشت مزارع',
      labelEn: 'Field Log & Notes',
      icon: NotebookPen,
    },
  ];

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-[65px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/70'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-stone-400'}`} />
                <span>{isFa ? item.labelFa : item.labelEn}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                      isActive
                        ? 'bg-emerald-900/60 text-amber-300'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
