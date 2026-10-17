import React, { useState } from 'react';
import { 
  Wheat, 
  Sparkles, 
  Scale, 
  MapPin, 
  CheckCircle2, 
  ShieldAlert, 
  ShieldCheck, 
  Star, 
  ArrowLeftRight,
  Filter,
  Layers
} from 'lucide-react';
import { Language, RiceVariety } from '../types';
import { RICE_VARIETIES } from '../data/varieties';

interface VarietiesCatalogProps {
  lang: Language;
}

export const VarietiesCatalog: React.FC<VarietiesCatalogProps> = ({ lang }) => {
  const isFa = lang === 'fa';
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'local_quality' | 'high_yield' | 'southern_warm'>('all');
  const [compareIdA, setCompareIdA] = useState<string>('hashemi');
  const [compareIdB, setCompareIdB] = useState<string>('shiroudi');
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const filteredVarieties = RICE_VARIETIES.filter((v) => {
    if (selectedCategory === 'all') return true;
    return v.type === selectedCategory;
  });

  const varietyA = RICE_VARIETIES.find((v) => v.id === compareIdA) || RICE_VARIETIES[0];
  const varietyB = RICE_VARIETIES.find((v) => v.id === compareIdB) || RICE_VARIETIES[1];

  const renderStars = (score: number) => {
    return (
      <div className="flex items-center gap-0.5 text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${star <= score ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
            <Wheat className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'دانشنامه جامع و اطلس ارقام برنج ایران' : 'Iranian Rice Cultivars Encyclopedia & Atlas'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'مشخصات ارقام کیفی و بومی شمال، ارقام پرمحصول اصلاح‌شده و عنبربوی گرمسیری جنوب' 
                : 'Comparative morphology, cooking elongation, aroma index and yield potential'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowComparison(!showComparison)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
            showComparison
              ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-sm'
              : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
          }`}
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>{isFa ? (showComparison ? 'بستن مقایسه دو به دو' : 'مقایسه تطبیقی دو رقم') : (showComparison ? 'Close Comparison' : 'Compare 2 Varieties')}</span>
        </button>
      </div>

      {/* Comparison Tool Drawer if toggled */}
      {showComparison && (
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white rounded-2xl p-5 sm:p-6 shadow-lg border border-stone-700 space-y-5 animate-in fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-700 pb-3">
            <h3 className="font-bold text-sm sm:text-base text-amber-300 flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-400" />
              <span>{isFa ? 'جدول مقایسه تطبیقی شاخص‌های زراعی و پخت' : 'Agronomic & Grain Quality Comparison'}</span>
            </h3>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <select
                value={compareIdA}
                onChange={(e) => setCompareIdA(e.target.value)}
                className="bg-stone-800 border border-stone-600 rounded-xl px-2.5 py-1.5 text-xs text-white outline-none cursor-pointer"
              >
                {RICE_VARIETIES.map((v) => (
                  <option key={v.id} value={v.id}>{isFa ? v.nameFa : v.nameEn}</option>
                ))}
              </select>
              <span className="text-amber-400 font-bold">VS</span>
              <select
                value={compareIdB}
                onChange={(e) => setCompareIdB(e.target.value)}
                className="bg-stone-800 border border-stone-600 rounded-xl px-2.5 py-1.5 text-xs text-white outline-none cursor-pointer"
              >
                {RICE_VARIETIES.map((v) => (
                  <option key={v.id} value={v.id}>{isFa ? v.nameFa : v.nameEn}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs">
            <div className="font-bold text-stone-400 py-2 border-b border-stone-700/60">{isFa ? 'شاخص مقایسه' : 'Metric'}</div>
            <div className="font-extrabold text-amber-300 py-2 border-b border-stone-700/60 text-center">{isFa ? varietyA.nameFa : varietyA.nameEn}</div>
            <div className="font-extrabold text-cyan-300 py-2 border-b border-stone-700/60 text-center">{isFa ? varietyB.nameFa : varietyB.nameEn}</div>

            {/* Type */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'دسته رقم' : 'Category'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-semibold">{isFa ? (varietyA.type === 'high_yield' ? 'پرمحصول' : 'کیفی معطر') : varietyA.type}</div>
            <div className="text-center py-2 border-b border-stone-800 font-semibold">{isFa ? (varietyB.type === 'high_yield' ? 'پرمحصول' : 'کیفی معطر') : varietyB.type}</div>

            {/* Yield */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'عملکرد شلتوک (هکتار)' : 'Paddy Yield / ha'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-bold font-mono text-emerald-400">{varietyA.paddyYieldKgPerHa.min} - {varietyA.paddyYieldKgPerHa.max} kg</div>
            <div className="text-center py-2 border-b border-stone-800 font-bold font-mono text-emerald-400">{varietyB.paddyYieldKgPerHa.min} - {varietyB.paddyYieldKgPerHa.max} kg</div>

            {/* Aroma */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'عطر و طعم' : 'Aroma & Flavor'}</div>
            <div className="flex justify-center py-2 border-b border-stone-800">{renderStars(varietyA.aromaScore)}</div>
            <div className="flex justify-center py-2 border-b border-stone-800">{renderStars(varietyB.aromaScore)}</div>

            {/* Length before & after */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'طول دانه (خام / پخته)' : 'Raw / Cooked Length'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-mono">{varietyA.rawLengthMm}mm / {varietyA.cookedLengthMm}mm</div>
            <div className="text-center py-2 border-b border-stone-800 font-mono">{varietyB.rawLengthMm}mm / {varietyB.cookedLengthMm}mm</div>

            {/* Growth Days */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'طول دوره رشد (روز)' : 'Growth Duration'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-mono">{varietyA.growthDays} روز</div>
            <div className="text-center py-2 border-b border-stone-800 font-mono">{varietyB.growthDays} روز</div>

            {/* Blast Resistance */}
            <div className="text-stone-300 py-2 border-b border-stone-800">{isFa ? 'مقاومت به بلاست' : 'Blast Resistance'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-semibold">{varietyA.blastResistance === 'high' ? 'مقاوم' : 'متوسط'}</div>
            <div className="text-center py-2 border-b border-stone-800 font-semibold">{varietyB.blastResistance === 'high' ? 'مقاوم' : 'متوسط'}</div>

            {/* Lodging */}
            <div className="text-stone-300 py-2">{isFa ? 'خوابیدگی ساقه (ورس)' : 'Lodging Risk'}</div>
            <div className="text-center py-2 font-semibold">{varietyA.lodgingResistance === 'high' ? 'مقاوم (بدون ورس)' : 'حساس به ورس'}</div>
            <div className="text-center py-2 font-semibold">{varietyB.lodgingResistance === 'high' ? 'مقاوم (بدون ورس)' : 'حساس به ورس'}</div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs">
        {[
          { id: 'all', labelFa: 'همه ارقام', labelEn: 'All Varieties' },
          { id: 'local_quality', labelFa: 'ارقام محلی و معطر کیفی', labelEn: 'Heirloom & Aromatic' },
          { id: 'high_yield', labelFa: 'ارقام اصلاح‌شده پرمحصول', labelEn: 'High-Yield Improved' },
          { id: 'southern_warm', labelFa: 'ارقام گرمسیری و عنبربو', labelEn: 'Southern & Warm Climate' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={`py-2 px-3.5 rounded-xl font-bold transition-all cursor-pointer border ${
              selectedCategory === cat.id
                ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {isFa ? cat.labelFa : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Varieties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVarieties.map((v) => (
          <div
            key={v.id}
            className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-stone-900 text-base">
                    {isFa ? v.nameFa : v.nameEn}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{isFa ? v.regionFa : v.regionEn}</span>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  v.type === 'local_quality'
                    ? 'bg-amber-100 text-amber-800'
                    : v.type === 'high_yield'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {v.type === 'local_quality'
                    ? (isFa ? 'معطر اعلاء' : 'Aromatic')
                    : v.type === 'high_yield'
                    ? (isFa ? 'پرمحصول' : 'High-Yield')
                    : (isFa ? 'طبع گرم' : 'Warm Staple')}
                </span>
              </div>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-3 gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-center text-xs">
                <div>
                  <div className="text-[10px] text-stone-400">{isFa ? 'عطر و طعم' : 'Aroma'}</div>
                  <div className="flex justify-center mt-1">{renderStars(v.aromaScore)}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400">{isFa ? 'عملکرد شلتوک' : 'Paddy Yield'}</div>
                  <div className="font-bold text-stone-900 mt-0.5 font-mono">{v.paddyYieldKgPerHa.min / 1000}-{v.paddyYieldKgPerHa.max / 1000} {isFa ? 'تُن' : 'T'}</div>
                </div>
                <div>
                  <div className="text-[10px] text-stone-400">{isFa ? 'ری‌کشیدن' : 'Cooked Length'}</div>
                  <div className="font-bold text-emerald-700 mt-0.5 font-mono">{v.cookedLengthMm} mm</div>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-1.5 text-xs text-stone-700">
                {(isFa ? v.featuresFa : v.featuresEn).map((f, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optimal soil footer */}
            <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 leading-relaxed">
              <span className="font-bold text-stone-700">{isFa ? 'خاک و اقلیم ایده‌آل: ' : 'Ideal Soil: '}</span>
              {isFa ? v.optimalSoilFa : v.optimalSoilEn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
