import React, { useState } from 'react';
import { 
  CalendarDays, 
  Droplet, 
  Clock, 
  AlertTriangle, 
  Sprout, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language } from '../types';
import { CROP_STAGES } from '../data/stages';

interface StagesGuideProps {
  lang: Language;
}

export const StagesGuide: React.FC<StagesGuideProps> = ({ lang }) => {
  const isFa = lang === 'fa';
  const [expandedStageId, setExpandedStageId] = useState<string>(CROP_STAGES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedStageId(expandedStageId === id ? '' : id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CalendarDays className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'تقویم زراعی و راهنمای گام‌به‌گام ۸ مرحله شالیکاری' : '8-Stage Rice Cultivation Timeline & Agronomic Guide'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'زمان‌بندی تقویمی خورشیدی، ارتفاع آب کرت‌ها، وظایف کلیدی، تقسیط کودها و هشدارهای سرنوشت‌ساز' 
                : 'Solar Hijri dates, water depth standards, critical operations, fertilizer splits and warning signs'}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          {isFa ? 'برنامه استاندارد مزارع شمال و جنوب ایران' : 'Standard Iranian Rice Protocol'}
        </span>
      </div>

      {/* Timeline Steps List */}
      <div className="space-y-3.5">
        {CROP_STAGES.map((stage) => {
          const isExpanded = expandedStageId === stage.id;
          return (
            <div
              key={stage.id}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/30' 
                  : 'border-stone-200 hover:border-emerald-300'
              }`}
            >
              {/* Stage header bar */}
              <div
                onClick={() => toggleExpand(stage.id)}
                className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none bg-gradient-to-r from-stone-50 via-white to-white hover:bg-emerald-50/40 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-xs ${
                    isExpanded ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {stage.stepNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                        {isFa ? stage.titleFa : stage.titleEn}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                        {isFa ? stage.jalaliMonthFa : stage.jalaliMonthEn}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                      {isFa ? stage.summaryFa : stage.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded-xl">
                    <Droplet className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{stage.waterDepthCm}</span>
                  </div>
                  <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-600 bg-stone-100 px-2.5 py-1 rounded-xl">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{stage.durationDays}</span>
                  </div>
                  <div className="p-1 rounded-lg text-stone-400 hover:text-stone-700">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-5 pt-3 border-t border-stone-100 space-y-4 text-xs bg-white">
                  {/* Summary & Water/Duration Badges for mobile */}
                  <div className="flex flex-wrap gap-2 sm:hidden pb-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs flex items-center gap-1">
                      <Droplet className="w-3.5 h-3.5" />
                      <span>{isFa ? 'ارتفاع آب: ' : 'Water: '}{stage.waterDepthCm}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{isFa ? 'مدت زمان: ' : 'Duration: '}{stage.durationDays}</span>
                    </span>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-200/80">
                    {isFa ? stage.summaryFa : stage.summaryEn}
                  </p>

                  {/* Critical Operations Checklist */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-stone-900 flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{isFa ? 'عملیات و وظایف حیاتی شالیکار در این مرحله:' : 'Critical Field Operations:'}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(isFa ? stage.criticalTasksFa : stage.criticalTasksEn).map((task, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100 text-stone-800 text-xs leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fertilizer Tips & Danger Alert */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {/* Fertilizer advice */}
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                      <div className="font-bold text-amber-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>{isFa ? 'تغذیه و کوددهی:' : 'Fertilizer & Nutrition:'}</span>
                      </div>
                      <p className="text-amber-950 leading-relaxed">
                        {isFa ? stage.fertilizerTipsFa : stage.fertilizerTipsEn}
                      </p>
                    </div>

                    {/* Warning Alert */}
                    <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1">
                      <div className="font-bold text-rose-900 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        <span>{isFa ? 'هشدار سرنوشت‌ساز:' : 'Crucial Warning:'}</span>
                      </div>
                      <p className="text-rose-950 leading-relaxed">
                        {isFa ? stage.warningAlertFa : stage.warningAlertEn}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
