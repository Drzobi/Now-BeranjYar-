import React, { useState } from 'react';
import { 
  Calculator, 
  Wheat, 
  Layers, 
  Coins, 
  Printer, 
  Save, 
  CheckCircle, 
  Info, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Percent
} from 'lucide-react';
import { Language } from '../types';
import { RICE_VARIETIES } from '../data/varieties';

interface CalculatorProps {
  lang: Language;
  onSaveToNotes?: (record: any) => void;
}

export const CalculatorComponent: React.FC<CalculatorProps> = ({ lang, onSaveToNotes }) => {
  const isFa = lang === 'fa';

  // State inputs
  const [areaUnit, setAreaUnit] = useState<'hectare' | 'jarib' | 'sqm'>('hectare');
  const [areaValue, setAreaValue] = useState<number>(1);
  const [selectedVarietyId, setSelectedVarietyId] = useState<string>('hashemi');
  const [plantingMethod, setPlantingMethod] = useState<'mechanized' | 'traditional'>('mechanized');
  const [includeFinancials, setIncludeFinancials] = useState<boolean>(true);
  const [whiteRicePricePerKg, setWhiteRicePricePerKg] = useState<number>(140000); // Tomans
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Normalize area to Hectares
  const getAreaInHectares = (): number => {
    if (areaUnit === 'hectare') return Number(areaValue) || 0;
    if (areaUnit === 'jarib') return (Number(areaValue) || 0) * 0.1; // 1 Jarib ~ 1000 m² = 0.1 ha in North Iran
    if (areaUnit === 'sqm') return (Number(areaValue) || 0) / 10000;
    return 1;
  };

  const areaHa = getAreaInHectares();
  const variety = RICE_VARIETIES.find((v) => v.id === selectedVarietyId) || RICE_VARIETIES[0];

  // Calculate Seed Requirement
  // Traditional: ~50 kg/ha, Mechanized: ~30-35 kg/ha
  const seedPerHa = plantingMethod === 'mechanized' ? 32 : 50;
  const totalSeedKg = Math.round(seedPerHa * areaHa);
  const nurseryTrays = plantingMethod === 'mechanized' ? Math.round(areaHa * 220) : null;

  // Calculate Fertilizers (based on Iran Rice Research Institute recommendations)
  // Heirloom varieties (Hashemi/Tarom) require less Urea to prevent lodging and blast; High-yields require more.
  const isHighYield = variety.type === 'high_yield';
  
  const ureaPerHa = isHighYield ? 200 : 130; // kg/ha
  const phosphatePerHa = isHighYield ? 100 : 80; // kg/ha Triple Superphosphate
  const potashPerHa = isHighYield ? 120 : 100; // kg/ha Potassium Sulfate
  const zincPerHa = 25; // kg/ha Zinc Sulfate

  const totalUrea = Math.round(ureaPerHa * areaHa);
  const totalPhosphate = Math.round(phosphatePerHa * areaHa);
  const totalPotash = Math.round(potashPerHa * areaHa);
  const totalZinc = Math.round(zincPerHa * areaHa);

  // Split Fertilization Schedule:
  // Urea: 1/3 Basal (پایه), 1/3 Tillering (پنجه‌زنی), 1/3 Panicle Initiation (آغاز ساقه رفتن)
  const ureaBasal = Math.round(totalUrea / 3);
  const ureaTillering = Math.round(totalUrea / 3);
  const ureaBooting = totalUrea - (ureaBasal + ureaTillering);

  // Potash: 50% Basal + 50% Panicle Initiation
  const potashBasal = Math.round(totalPotash / 2);
  const potashBooting = totalPotash - potashBasal;

  // Estimated Yield in kg
  const avgPaddyPerHa = (variety.paddyYieldKgPerHa.min + variety.paddyYieldKgPerHa.max) / 2;
  const totalPaddyKg = Math.round(avgPaddyPerHa * areaHa);

  // Milling conversion:
  // Head White Rice: 63%
  // Broken Rice (Nim-Daneh): 13%
  // Bran: 8%
  // Husk/Chaff: 16%
  const whiteRiceKg = Math.round(totalPaddyKg * 0.63);
  const brokenRiceKg = Math.round(totalPaddyKg * 0.13);
  const branKg = Math.round(totalPaddyKg * 0.08);

  // Financial Estimates (Tomans)
  const brokenRicePrice = Math.round(whiteRicePricePerKg * 0.5); // ~50% of white rice
  const branPrice = 12000; // ~12k Toman per kg
  const millingFeePerKgPaddy = 2500; // Toman per kg paddy milled
  const totalMillingCost = Math.round(totalPaddyKg * millingFeePerKgPaddy);

  const whiteRiceRevenue = whiteRiceKg * whiteRicePricePerKg;
  const brokenRiceRevenue = brokenRiceKg * brokenRicePrice;
  const branRevenue = branKg * branPrice;
  const totalGrossRevenue = whiteRiceRevenue + brokenRiceRevenue + branRevenue;

  // Approximate farming costs per ha (labor, machinery, diesel, seed, agrochemicals)
  const productionCostPerHa = 45000000; // ~45M Toman per hectare
  const totalProductionCost = Math.round(productionCostPerHa * areaHa + totalMillingCost);
  const estimatedNetProfit = totalGrossRevenue - totalProductionCost;
  const profitMarginPercent = totalGrossRevenue > 0 ? Math.round((estimatedNetProfit / totalGrossRevenue) * 100) : 0;

  const handleSave = () => {
    if (onSaveToNotes) {
      onSaveToNotes({
        id: Date.now().toString(),
        date: new Date().toLocaleDateString(isFa ? 'fa-IR' : 'en-US'),
        fieldTitle: `${isFa ? 'محاسبه مزرعه' : 'Field Calculation'} - ${isFa ? variety.nameFa : variety.nameEn}`,
        variety: isFa ? variety.nameFa : variety.nameEn,
        areaHa: Number(areaHa.toFixed(2)),
        stage: isFa ? 'برنامه‌ریزی فصل زراعی' : 'Season Planning',
        notes: `${isFa ? 'بذر:' : 'Seed:'} ${totalSeedKg}kg | ${isFa ? 'پیش‌بینی شلتوک:' : 'Paddy:'} ${totalPaddyKg}kg | ${isFa ? 'برنج سفید:' : 'White Rice:'} ${whiteRiceKg}kg`,
        fertilizerUsed: `${isFa ? 'اوره:' : 'Urea:'} ${totalUrea}kg, ${isFa ? 'فسفات:' : 'P:'} ${totalPhosphate}kg, ${isFa ? 'پتاس:' : 'K:'} ${totalPotash}kg`
      });
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header title */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'محاسبه‌گر جامع شالیزار و پیش‌بینی محصول' : 'Paddy Farm Calculator & Yield Forecast'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'محاسبه دقیق بذر، تقویم تقسیط کودهای NPK، تخمین تناژ شلتوک و برآورد مالی' 
                : 'Precise seed calculation, split NPK schedule, paddy tonnage and financial return'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onSaveToNotes && (
            <button
              onClick={handleSave}
              className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>{isFa ? 'ذخیره شد!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-emerald-700" />
                  <span>{isFa ? 'ثبت در یادداشت‌ها' : 'Save to Notes'}</span>
                </>
              )}
            </button>
          )}

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{isFa ? 'چاپ گزارش' : 'Print'}</span>
          </button>
        </div>
      </div>

      {/* Input Parameters Box */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl shadow-xs border border-stone-200">
        {/* Land Area */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'مساحت زمین شالیزار' : 'Field Land Area'}
          </label>
          <div className="flex rounded-xl overflow-hidden border border-stone-300 focus-within:border-emerald-500">
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={areaValue}
              onChange={(e) => setAreaValue(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 text-sm font-bold text-stone-800 outline-none"
            />
            <select
              value={areaUnit}
              onChange={(e: any) => setAreaUnit(e.target.value)}
              className="bg-stone-100 border-l border-stone-300 px-2.5 py-2 text-xs font-semibold text-stone-700 outline-none cursor-pointer"
            >
              <option value="hectare">{isFa ? 'هکتار' : 'Hectare'}</option>
              <option value="jarib">{isFa ? 'جریب (۱۰۰۰متر)' : 'Jarib (1000m²)'}</option>
              <option value="sqm">{isFa ? 'متر مربع' : 'm²'}</option>
            </select>
          </div>
          <div className="text-[11px] text-stone-400">
            {isFa ? `معادل: ${areaHa.toFixed(2)} هکتار` : `Equivalent: ${areaHa.toFixed(2)} Ha`}
          </div>
        </div>

        {/* Variety Selection */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'رقم برنج انتخابی' : 'Rice Variety'}
          </label>
          <select
            value={selectedVarietyId}
            onChange={(e) => {
              setSelectedVarietyId(e.target.value);
              // auto adjust price suggestion
              if (e.target.value === 'hashemi') setWhiteRicePricePerKg(140000);
              else if (e.target.value === 'tarom') setWhiteRicePricePerKg(145000);
              else if (e.target.value === 'anbarboo') setWhiteRicePricePerKg(95000);
              else if (e.target.value === 'shiroudi') setWhiteRicePricePerKg(88000);
              else if (e.target.value === 'fajr') setWhiteRicePricePerKg(100000);
            }}
            className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-stone-300 bg-white text-stone-800 outline-none focus:border-emerald-500 cursor-pointer"
          >
            {RICE_VARIETIES.map((v) => (
              <option key={v.id} value={v.id}>
                {isFa ? v.nameFa : v.nameEn} ({v.type === 'high_yield' ? (isFa ? 'پرمحصول' : 'High Yield') : (isFa ? 'کیفی و معطر' : 'Aromatic')})
              </option>
            ))}
          </select>
          <div className="text-[11px] text-emerald-700 font-medium">
            {isFa ? `طول دوره رشد: ${variety.growthDays} روز` : `Maturity: ${variety.growthDays} days`}
          </div>
        </div>

        {/* Planting Method */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'شیوه نشاکاری' : 'Transplanting Method'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setPlantingMethod('mechanized')}
              className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                plantingMethod === 'mechanized'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {isFa ? '🚜 مکانیزه (با دستگاه)' : 'Mechanical'}
            </button>
            <button
              type="button"
              onClick={() => setPlantingMethod('traditional')}
              className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                plantingMethod === 'traditional'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {isFa ? '🖐️ سنتی (دستی)' : 'Manual'}
            </button>
          </div>
          <div className="text-[11px] text-stone-400">
            {plantingMethod === 'mechanized'
              ? (isFa ? 'مصرف کمتر بذر (~۳۲ ک/هـ)' : 'Low seed rate (~32 kg/ha)')
              : (isFa ? 'خزانه سنتی (~۵۰ ک/هـ)' : 'Traditional nursery (~50 kg/ha)')}
          </div>
        </div>

        {/* Expected Price per kg */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            {isFa ? 'قیمت برآورد برنج سفید (تومان/کیلو)' : 'Estimated White Rice Price (T/kg)'}
          </label>
          <input
            type="number"
            step="1000"
            value={whiteRicePricePerKg}
            onChange={(e) => setWhiteRicePricePerKg(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-stone-300 bg-white text-stone-800 outline-none focus:border-emerald-500 font-mono"
          />
          <div className="text-[11px] text-stone-400">
            {isFa ? `${whiteRicePricePerKg.toLocaleString('fa-IR')} تومان` : `${whiteRicePricePerKg.toLocaleString()} T`}
          </div>
        </div>
      </div>

      {/* Output Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Seed Requirement */}
        <div className="bg-gradient-to-br from-amber-500/10 via-white to-white p-5 rounded-2xl border border-amber-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900">{isFa ? 'بذر گواهی‌شده مورد نیاز' : 'Certified Seed Required'}</span>
            <Wheat className="w-5 h-5 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-amber-950 font-mono">
            {totalSeedKg.toLocaleString()} <span className="text-xs font-medium text-stone-600">{isFa ? 'کیلوگرم' : 'kg'}</span>
          </div>
          <div className="text-xs text-stone-600">
            {nurseryTrays ? (
              <span>{isFa ? `یا حدود ${nurseryTrays} سینی نشاء` : `~${nurseryTrays} seedling trays`}</span>
            ) : (
              <span>{isFa ? `سطح خزانه مورد نیاز: ${Math.round(totalSeedKg * 1.5)} متر مربع` : `Nursery area: ~${Math.round(totalSeedKg * 1.5)} m²`}</span>
            )}
          </div>
        </div>

        {/* Total Paddy Yield */}
        <div className="bg-gradient-to-br from-emerald-500/10 via-white to-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-900">{isFa ? 'تخمین تناژ شلتوک خام' : 'Estimated Paddy Yield'}</span>
            <Layers className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-950 font-mono">
            {(totalPaddyKg / 1000).toFixed(2)} <span className="text-xs font-medium text-stone-600">{isFa ? 'تُن شلتوک' : 'Tons'}</span>
          </div>
          <div className="text-xs text-stone-600">
            {isFa 
              ? `معادل ${totalPaddyKg.toLocaleString()} کیلوگرم شلتوک` 
              : `Total: ${totalPaddyKg.toLocaleString()} kg`}
          </div>
        </div>

        {/* Polished White Rice */}
        <div className="bg-gradient-to-br from-cyan-500/10 via-white to-white p-5 rounded-2xl border border-cyan-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cyan-900">{isFa ? 'برنج سفید مرغوب درجه ۱' : 'Polished White Rice (Head)'}</span>
            <Sparkles className="w-5 h-5 text-cyan-600" />
          </div>
          <div className="text-2xl font-black text-cyan-950 font-mono">
            {whiteRiceKg.toLocaleString()} <span className="text-xs font-medium text-stone-600">{isFa ? 'کیلوگرم' : 'kg'}</span>
          </div>
          <div className="text-xs text-stone-600">
            {isFa 
              ? `راندمان ۶۳٪ + ${brokenRiceKg} کیلو نیم‌دانه` 
              : `63% recovery + ${brokenRiceKg} kg broken`}
          </div>
        </div>

        {/* Net Profit Estimated */}
        <div className="bg-gradient-to-br from-emerald-700/15 via-white to-white p-5 rounded-2xl border border-emerald-300 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-900">{isFa ? 'سود خالص تخمینی شالیکار' : 'Estimated Net Profit'}</span>
            <Coins className="w-5 h-5 text-emerald-700" />
          </div>
          <div className="text-2xl font-black text-emerald-900 font-mono">
            {Math.round(estimatedNetProfit / 1000000).toLocaleString()} <span className="text-xs font-medium text-stone-600">{isFa ? 'میلیون تومان' : 'M Toman'}</span>
          </div>
          <div className="text-xs text-stone-600 flex items-center gap-1">
            <Percent className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isFa ? `حاشیه سود: ${profitMarginPercent}٪` : `Margin: ${profitMarginPercent}%`}</span>
          </div>
        </div>
      </div>

      {/* Detailed Fertilizer Nutrition Calendar (NPK Plan) */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-stone-100">
          <div className="w-3 h-3 rounded-full bg-emerald-600" />
          <h3 className="font-bold text-stone-900 text-sm sm:text-base">
            {isFa ? 'تقویم تقسیط و سهمیه کودهای شیمیایی NPK و ریزمغذی‌ها' : 'Scientific Split NPK & Micronutrient Schedule'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Urea split */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-stone-900">{isFa ? 'کود اوره (۴۶٪ ازت)' : 'Urea (46% N)'}</span>
              <span className="text-xs font-bold text-emerald-700 font-mono">{totalUrea} kg</span>
            </div>
            <div className="text-xs text-stone-600 space-y-1.5 pt-1">
              <div className="flex justify-between border-b border-stone-200 pb-1">
                <span>{isFa ? '۱. پایه (پیش از نشا):' : 'Basal (pre-plant):'}</span>
                <span className="font-semibold">{ureaBasal} kg</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-1">
                <span>{isFa ? '۲. سرک اول (پنجه‌زنی):' : '1st Topdress (tillering):'}</span>
                <span className="font-semibold">{ureaTillering} kg</span>
              </div>
              <div className="flex justify-between">
                <span>{isFa ? '۳. سرک دوم (آبستنی):' : '2nd Topdress (booting):'}</span>
                <span className="font-semibold">{ureaBooting} kg</span>
              </div>
            </div>
          </div>

          {/* Phosphate */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-stone-900">{isFa ? 'سوپرفسفات تریپل' : 'Triple Superphosphate'}</span>
              <span className="text-xs font-bold text-emerald-700 font-mono">{totalPhosphate} kg</span>
            </div>
            <div className="text-xs text-stone-600 space-y-1 pt-1">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 text-[11px] font-medium leading-relaxed">
                {isFa 
                  ? '۱۰۰٪ به عنوان کود پایه قبل از آخرین گل‌کشی و تسطیح مصرف شود. فسفر در طول فصل رویشی تحرک کمی در خاک دارد.' 
                  : 'Apply 100% basal before final leveling. Phosphorus is poorly mobile in flooded soils.'}
              </div>
            </div>
          </div>

          {/* Potash */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-stone-900">{isFa ? 'سولفات پتاسیم (سولوپتاس)' : 'Potassium Sulfate'}</span>
              <span className="text-xs font-bold text-emerald-700 font-mono">{totalPotash} kg</span>
            </div>
            <div className="text-xs text-stone-600 space-y-1.5 pt-1">
              <div className="flex justify-between border-b border-stone-200 pb-1">
                <span>{isFa ? '۱. پایه (۵۰٪):' : 'Basal (50%):'}</span>
                <span className="font-semibold">{potashBasal} kg</span>
              </div>
              <div className="flex justify-between">
                <span>{isFa ? '۲. سرک آبستنی (۵۰٪):' : 'Booting topdress (50%):'}</span>
                <span className="font-semibold">{potashBooting} kg</span>
              </div>
              <p className="text-[10px] text-stone-500 pt-1">
                {isFa ? 'پتاسیم مانع ورس (خوابیدگی بوته) و محافظ در برابر بلاست است.' : 'Potassium prevents lodging and bolsters blast defense.'}
              </p>
            </div>
          </div>

          {/* Zinc & Silica */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-stone-900">{isFa ? 'سولفات روی و سیلیس' : 'Zinc Sulfate & Silica'}</span>
              <span className="text-xs font-bold text-emerald-700 font-mono">{totalZinc} kg</span>
            </div>
            <div className="text-xs text-stone-600 space-y-1.5 pt-1">
              <p className="text-[11px] leading-relaxed">
                {isFa 
                  ? 'سولفات روی پایه جهت جلوگیری از زردی و قفل شدن ریشه در آب سرد بهاره شالیزار.' 
                  : 'Zinc sulfate basal prevents brown-spot rust and cold-water zinc-lock.'}
              </p>
              <div className="p-1.5 rounded-lg bg-amber-50 text-amber-900 text-[11px] font-semibold">
                {isFa ? 'سیلیکات پتاسیم: ۲ لیتر/هکتار محلول‌پاشی در آغاز آبستنی' : 'Potassium Silicate: 2L/ha foliar spray at booting'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Breakdown Table */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-stone-900 text-sm sm:text-base">
              {isFa ? 'تراز مالی جامع درآمد و هزینه شالیزار' : 'Paddy Farm Financial Balance Sheet'}
            </h3>
          </div>
          <span className="text-xs text-stone-500">
            {isFa ? 'بر مبنای مساحت و نرخ ورودی شما' : 'Based on your specific input metrics'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Revenue Stream */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-800 flex items-center gap-1.5 text-emerald-800">
              <TrendingUp className="w-4 h-4" />
              <span>{isFa ? 'درآمد ناخالص حاصل از فروش' : 'Gross Revenue Breakdown'}</span>
            </h4>
            <div className="bg-stone-50 rounded-xl p-3 space-y-2 border border-stone-200">
              <div className="flex justify-between">
                <span>{isFa ? 'برنج سفید ممتاز:' : 'White Rice (Head):'} ({whiteRiceKg} kg)</span>
                <span className="font-mono font-bold text-stone-900">{whiteRiceRevenue.toLocaleString()} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>{isFa ? 'نیم‌دانه و لاشه:' : 'Broken Rice:'} ({brokenRiceKg} kg)</span>
                <span className="font-mono font-bold text-stone-900">{brokenRiceRevenue.toLocaleString()} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>{isFa ? 'سبوس دوم برنج:' : 'Rice Bran:'} ({branKg} kg)</span>
                <span className="font-mono font-bold text-stone-900">{branRevenue.toLocaleString()} تومان</span>
              </div>
              <div className="pt-2 border-t border-stone-300 flex justify-between font-bold text-sm text-emerald-800">
                <span>{isFa ? 'مجموع درآمد ناخالص:' : 'Total Gross Revenue:'}</span>
                <span className="font-mono">{totalGrossRevenue.toLocaleString()} تومان</span>
              </div>
            </div>
          </div>

          {/* Expenses Stream */}
          <div className="space-y-2">
            <h4 className="font-bold text-stone-800 flex items-center gap-1.5 text-rose-800">
              <span>{isFa ? 'برآورد هزینه‌های تولید و شالیکوبی' : 'Production & Processing Expenses'}</span>
            </h4>
            <div className="bg-stone-50 rounded-xl p-3 space-y-2 border border-stone-200">
              <div className="flex justify-between">
                <span>{isFa ? 'هزینه آماده‌سازی، نشا، کود و سموم:' : 'Field operations & inputs:'}</span>
                <span className="font-mono font-bold text-stone-900">{(totalProductionCost - totalMillingCost).toLocaleString()} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>{isFa ? 'اجرت تبدیل و شالیکوبی:' : 'Milling & hulling fee:'}</span>
                <span className="font-mono font-bold text-stone-900">{totalMillingCost.toLocaleString()} تومان</span>
              </div>
              <div className="pt-2 border-t border-stone-300 flex justify-between font-bold text-sm text-rose-800">
                <span>{isFa ? 'مجموع هزینه‌ها:' : 'Total Expenses:'}</span>
                <span className="font-mono">{totalProductionCost.toLocaleString()} تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
