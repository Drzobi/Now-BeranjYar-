import React, { useState } from 'react';
import { 
  Coins, 
  ArrowRightLeft, 
  Printer, 
  Scale, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  BadgePercent,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';

interface MarketConverterProps {
  lang: Language;
}

export const MarketConverter: React.FC<MarketConverterProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  // Input states
  const [paddyInputKg, setPaddyInputKg] = useState<number>(5000); // 5 tons default
  const [headRiceRate, setHeadRiceRate] = useState<number>(63); // 63%
  const [brokenRate, setBrokenRate] = useState<number>(13); // 13%
  const [branRate, setBranRate] = useState<number>(8); // 8%
  
  // Prices in Tomans
  const [headRicePrice, setHeadRicePrice] = useState<number>(145000);
  const [brokenPrice, setBrokenPrice] = useState<number>(75000);
  const [branPrice, setBranPrice] = useState<number>(12000);
  const [millingFeePerKg, setMillingFeePerKg] = useState<number>(2500);

  // Computed outputs
  const headRiceKg = Math.round(paddyInputKg * (headRiceRate / 100));
  const brokenKg = Math.round(paddyInputKg * (brokenRate / 100));
  const branKg = Math.round(paddyInputKg * (branRate / 100));
  const huskKg = paddyInputKg - (headRiceKg + brokenKg + branKg);

  const headRevenue = headRiceKg * headRicePrice;
  const brokenRevenue = brokenKg * brokenPrice;
  const branRevenue = branKg * branPrice;
  const grossRevenue = headRevenue + brokenRevenue + branRevenue;

  const totalMillingFee = Math.round(paddyInputKg * millingFeePerKg);
  const netProceeds = grossRevenue - totalMillingFee;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'محاسبه‌گر شالیکوبی و تبدیل شلتوک به برنج سفید' : 'Paddy Milling & Rice Yield Conversion Engine'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'محاسبه دقیق راندمان پوست‌کنی، سفیدکن، تفکیک نیم‌دانه، سبوس و کسر اجرت شالیکوبی' 
                : 'Milling recovery ratios, head/broken split, bran byproduct valuation and net cash proceeds'}
            </p>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>{isFa ? 'چاپ قبض شالیکوبی' : 'Print Milling Slip'}</span>
        </button>
      </div>

      {/* Input Parameters Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl shadow-xs border border-stone-200">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'وزن شلتوک ورودی (کیلوگرم)' : 'Paddy Input (kg)'}
          </label>
          <input
            type="number"
            min="100"
            step="50"
            value={paddyInputKg}
            onChange={(e) => setPaddyInputKg(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 text-sm font-bold text-stone-900 rounded-xl border border-stone-300 outline-none focus:border-emerald-500 font-mono"
          />
          <div className="text-[11px] text-stone-400">
            {isFa ? `معادل ${(paddyInputKg / 1000).toFixed(2)} تن شلتوک` : `${(paddyInputKg / 1000).toFixed(2)} metric tons`}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'نرخ برنج سفید سالم (تومان/کیلو)' : 'Head White Rice Price (T/kg)'}
          </label>
          <input
            type="number"
            step="1000"
            value={headRicePrice}
            onChange={(e) => setHeadRicePrice(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 text-sm font-semibold text-stone-900 rounded-xl border border-stone-300 outline-none focus:border-emerald-500 font-mono"
          />
          <div className="text-[11px] text-stone-400">
            {isFa ? `${headRicePrice.toLocaleString()} تومان` : `${headRicePrice.toLocaleString()} T`}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'نرخ نیم‌دانه و لاشه (تومان/کیلو)' : 'Broken Rice Price (T/kg)'}
          </label>
          <input
            type="number"
            step="1000"
            value={brokenPrice}
            onChange={(e) => setBrokenPrice(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 text-sm font-semibold text-stone-900 rounded-xl border border-stone-300 outline-none focus:border-emerald-500 font-mono"
          />
          <div className="text-[11px] text-stone-400">
            {isFa ? `${brokenPrice.toLocaleString()} تومان` : `${brokenPrice.toLocaleString()} T`}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'اجرت تبدیل شالیکوبی (تومان/کیلو شلتوک)' : 'Milling Fee (T/kg paddy)'}
          </label>
          <input
            type="number"
            step="100"
            value={millingFeePerKg}
            onChange={(e) => setMillingFeePerKg(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 text-sm font-semibold text-stone-900 rounded-xl border border-stone-300 outline-none focus:border-emerald-500 font-mono"
          />
          <div className="text-[11px] text-stone-400">
            {isFa ? `مجموع اجرت: ${totalMillingFee.toLocaleString()} تومان` : `Total fee: ${totalMillingFee.toLocaleString()} T`}
          </div>
        </div>
      </div>

      {/* Ratios Customization Pill Bar */}
      <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/90 flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="font-bold text-stone-700 flex items-center gap-1.5">
          <BadgePercent className="w-4 h-4 text-emerald-700" />
          <span>{isFa ? 'درصدهای بازدهی دستگاه تبدیل:' : 'Milling Recovery Ratios:'}</span>
        </span>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-1.5">
            <span className="text-stone-600">{isFa ? 'برنج سالم:' : 'Head:'}</span>
            <input
              type="number"
              min="50"
              max="70"
              value={headRiceRate}
              onChange={(e) => setHeadRiceRate(parseFloat(e.target.value) || 0)}
              className="w-14 px-2 py-1 text-center font-bold bg-white rounded-lg border border-stone-300 outline-none"
            />
            <span>%</span>
          </label>

          <label className="flex items-center gap-1.5">
            <span className="text-stone-600">{isFa ? 'نیم‌دانه:' : 'Broken:'}</span>
            <input
              type="number"
              min="5"
              max="25"
              value={brokenRate}
              onChange={(e) => setBrokenRate(parseFloat(e.target.value) || 0)}
              className="w-14 px-2 py-1 text-center font-bold bg-white rounded-lg border border-stone-300 outline-none"
            />
            <span>%</span>
          </label>

          <label className="flex items-center gap-1.5">
            <span className="text-stone-600">{isFa ? 'سبوس دوم:' : 'Bran:'}</span>
            <input
              type="number"
              min="4"
              max="15"
              value={branRate}
              onChange={(e) => setBranRate(parseFloat(e.target.value) || 0)}
              className="w-14 px-2 py-1 text-center font-bold bg-white rounded-lg border border-stone-300 outline-none"
            />
            <span>%</span>
          </label>
        </div>
      </div>

      {/* Output Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Head Rice */}
        <div className="bg-white p-5 rounded-2xl border-2 border-emerald-500 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-900">{isFa ? 'برنج سفید سالم (کیسه)' : 'Grade-A Head Rice'}</span>
            <Sparkles className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-900 font-mono">
            {headRiceKg.toLocaleString()} <span className="text-xs font-semibold text-stone-600">{isFa ? 'کیلو' : 'kg'}</span>
          </div>
          <div className="text-xs text-stone-600 font-medium">
            {isFa ? `معادل حدود ${Math.floor(headRiceKg / 10)} کیسه ۱۰ کیلویی` : `~${Math.floor(headRiceKg / 10)} bags (10kg)`}
          </div>
          <div className="text-xs text-emerald-800 font-bold pt-1 border-t border-stone-100 font-mono">
            {headRevenue.toLocaleString()} {isFa ? 'تومان' : 'Toman'}
          </div>
        </div>

        {/* Broken Rice */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">{isFa ? 'نیم‌دانه و لاشه' : 'Broken Rice (Nim-Daneh)'}</span>
            <Layers className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-stone-900 font-mono">
            {brokenKg.toLocaleString()} <span className="text-xs font-semibold text-stone-600">{isFa ? 'کیلو' : 'kg'}</span>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            {isFa ? 'مناسب پودر برنج، شیرینی و مصرف دمی' : 'Used for confectionery & soups'}
          </div>
          <div className="text-xs text-amber-900 font-bold pt-1 border-t border-stone-100 font-mono">
            {brokenRevenue.toLocaleString()} {isFa ? 'تومان' : 'Toman'}
          </div>
        </div>

        {/* Rice Bran */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-800">{isFa ? 'سبوس دوم خوراکی/دامی' : 'Rice Bran (Feed/Food)'}</span>
            <Scale className="w-5 h-5 text-stone-400" />
          </div>
          <div className="text-2xl font-black text-stone-900 font-mono">
            {branKg.toLocaleString()} <span className="text-xs font-semibold text-stone-600">{isFa ? 'کیلو' : 'kg'}</span>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            {isFa ? 'روغن‌کشی و خوراک مقوی دام و طیور' : 'Nutrient animal feed byproduct'}
          </div>
          <div className="text-xs text-stone-800 font-bold pt-1 border-t border-stone-100 font-mono">
            {branRevenue.toLocaleString()} {isFa ? 'تومان' : 'Toman'}
          </div>
        </div>

        {/* Net Proceeds */}
        <div className="bg-gradient-to-br from-emerald-800 to-paddy-900 text-white p-5 rounded-2xl shadow-md space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-200">{isFa ? 'خالص دریافتی شالیکار' : 'Net Farmer Proceeds'}</span>
            <Coins className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-300 font-mono">
            {Math.round(netProceeds / 1000000).toLocaleString()} <span className="text-xs font-medium text-emerald-100">{isFa ? 'میلیون تومان' : 'M Toman'}</span>
          </div>
          <div className="text-xs text-emerald-200 font-mono">
            {netProceeds.toLocaleString()} تومان
          </div>
          <div className="text-[11px] text-emerald-300/80 pt-1 border-t border-emerald-700/60">
            {isFa ? `پس از کسر ${totalMillingFee.toLocaleString()} تومان اجرت` : `After deducting milling charges`}
          </div>
        </div>
      </div>
    </div>
  );
};
