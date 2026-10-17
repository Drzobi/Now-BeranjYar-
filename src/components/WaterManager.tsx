import React, { useState } from 'react';
import { 
  Droplets, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  ShieldAlert, 
  Gauge, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface WaterManagerProps {
  lang: Language;
}

export const WaterManager: React.FC<WaterManagerProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  const stagesWater = [
    {
      id: 'transplanting',
      nameFa: '۱. نشاکاری (استقرار نشاء)',
      nameEn: '1. Transplanting & Root Anchorage',
      depthCm: 2.5,
      depthRange: '۲ الی ۳ سانتی‌متر',
      statusFa: 'آب کم‌عمق یکنواخت',
      statusEn: 'Shallow calm water',
      rationaleFa: 'ارتفاع زیاد آب باعث واژگونی نشاءهای ظریف و پوسیدگی طوقه می‌شود؛ عمق کم به گرم شدن سریع آب توسط آفتاب و تحریک ریشه‌زایی کمک می‌کند.',
      rationaleEn: 'Deep water floats seedlings and rots crowns. Shallow depth allows sunlight to warm the water and encourage rooting.',
      color: 'bg-cyan-500'
    },
    {
      id: 'tillering',
      nameFa: '۲. پنجه‌زنی و رشد رویشی',
      nameEn: '2. Active Vegetative Tillering',
      depthCm: 4,
      depthRange: '۳ الی ۵ سانتی‌متر',
      statusFa: 'آبیاری تناوبی (تناوب پر و خالی)',
      statusEn: 'Intermittent flooding (AWD)',
      rationaleFa: 'آب نباید عمیق باشد تا نور خورشید به گره‌های طوقه برسد و پنجه‌های پربار تولید شوند. اجازه دهید آب ناپدید شود و ۲ روز بعد مجدداً آب‌اندازی کنید.',
      rationaleEn: 'Light must reach the crown nodes to trigger fertile tillers. Allow water to recede before re-flooding 2 days later.',
      color: 'bg-cyan-600'
    },
    {
      id: 'herbicide',
      nameFa: '۳. مصرف علف‌کش و وجین',
      nameEn: '3. Herbicide Application & Weeding',
      depthCm: 5,
      depthRange: '۵ سانتی‌متر ثابت (۳ الی ۵ روز)',
      statusFa: 'آب راکد غیرجاری',
      statusEn: 'Stationary water barrier',
      rationaleFa: 'لایه ۵ سانتی‌متری آب پایدار مانع تنفس و جوانه‌زنی بذر علف هرز سوروف شده و فیلم محافظ علف‌کش (بوتاکلر/ریفیت) را حفظ می‌کند.',
      rationaleEn: 'A steady 5 cm water layer creates an anaerobic seal preventing barnyard grass weed seeds from emerging.',
      color: 'bg-blue-600'
    },
    {
      id: 'midseason',
      nameFa: '۴. خشکاندن میان‌فصل (هوادهی)',
      nameEn: '4. Mid-Season Drainage & Aeration',
      depthCm: 0,
      depthRange: 'صفر (خروج کامل آب به مدت ۵-۷ روز)',
      statusFa: 'خشکی سطحی (ترک مویی)',
      statusEn: 'Surface drainage (hairline cracks)',
      rationaleFa: 'خروج گازهای سمی هیدروژن سولفید و متان، اکسیژن‌رسانی به ریشه‌های سیاه شده، توقف پنجه‌های هرز و محکم شدن طوقه در برابر ورس.',
      rationaleEn: 'Purges toxic root-zone hydrogen sulfide gases, oxygenates deep roots, arrests late unproductive tillers.',
      color: 'bg-amber-600'
    },
    {
      id: 'booting',
      nameFa: '۵. آبستنی و خوشه‌دهی (بسیار حساس)',
      nameEn: '5. Booting, Heading & Anthesis',
      depthCm: 6.5,
      depthRange: '۵ الی ۷ سانتی‌متر پیوسته',
      statusFa: 'غرقاب حیاتی مداوم',
      statusEn: 'Critical continuous standing water',
      rationaleFa: 'حساس‌ترین مقطع گیاه برنج! هرگونه تنش تشنگی در زمان تشکیل دانه گرده و لقاح منجر به سفیدی و پوک ماندن ۴۰ الی ۶۰ درصد خوشه‌ها می‌شود.',
      rationaleEn: 'The most drought-sensitive stage. Any water deficit during pollen development causes up to 60% sterile empty spikelets.',
      color: 'bg-blue-700'
    },
    {
      id: 'ripening',
      nameFa: '۶. شیری و خمیری شدن دانه‌ها',
      nameEn: '6. Milk & Dough Grain Filling',
      depthCm: 3,
      depthRange: '۲ الی ۴ سانتی‌متر تناوبی',
      statusFa: 'آبیاری سبک تناوبی',
      statusEn: 'Light intermittent flooding',
      rationaleFa: 'تأمین رطوبت کافی برای تکمیل انباشت نشاسته و پر شدن کامل نوک خوشه‌ها، با فواصل ۲ تا ۳ روز خشک بودن سطح خاک.',
      rationaleEn: 'Provides moisture for starch synthesis and full panicle tip filling without stagnating the rhizosphere.',
      color: 'bg-cyan-600'
    },
    {
      id: 'preharvest',
      nameFa: '۷. قطع نهایی آب قبل از درو',
      nameEn: '7. Final Pre-Harvest Terminal Drainage',
      depthCm: 0,
      depthRange: 'صفر (قطع ۱۰ تا ۱۴ روز قبل درو)',
      statusFa: 'خشکاندن کامل شالیزار',
      statusEn: 'Terminal complete dry-down',
      rationaleFa: 'سفت شدن بستر باتلاقی شالیزار جهت جلوگیری از فرورفتن چرخ‌های زنجیری کمباین مخصوص و رسیدن رطوبت شلتوک به ۲۰-۲۲٪ قبل از درو.',
      rationaleEn: 'Hardens muddy paddy soil so heavy combine tracks do not sink; drops standing grain moisture to 20-22% before threshing.',
      color: 'bg-stone-500'
    }
  ];

  const [activeStage, setActiveStage] = useState(stagesWater[1]); // Tillering default

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'مدیریت علمی آب و الگوی آبیاری تناوبی شالیزار' : 'Scientific Paddy Water Management & AWD Protocol'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'تنظیم دقیق عمق آب در کرت، صرفه‌جویی ۳۰٪ مصرف آب، افزایش نفوذ ریشه و جلوگیری از بیماری‌های قارچی' 
                : 'Precise stage water depths, 30% irrigation savings, deep root aeration and disease reduction'}
            </p>
          </div>
        </div>

        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
          {isFa ? 'صرفه‌جویی ۳۰۰۰ متر مکعب در هکتار' : 'Saves ~3000 m³ water per Ha'}
        </span>
      </div>

      {/* Interactive Water Depth Simulator */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
          <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <Gauge className="w-5 h-5 text-cyan-600" />
            <span>{isFa ? 'شبیه‌ساز و عمق‌سنج ارتفاع آب در کرت بر اساس مرحله رشد' : 'Interactive Water Depth Gauge by Growth Stage'}</span>
          </h3>
          <span className="text-xs font-mono text-cyan-800 font-bold bg-cyan-50 px-2.5 py-1 rounded-lg border border-cyan-200">
            {activeStage.depthRange}
          </span>
        </div>

        {/* Stage selection buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {stagesWater.map((stage) => {
            const isSelected = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-700 text-white border-cyan-700 shadow-sm scale-102'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
              >
                <div className="line-clamp-1">{isFa ? stage.nameFa.split('.')[1] : stage.nameEn.split('.')[1]}</div>
                <div className="text-[10px] opacity-80 mt-1 font-mono">{stage.depthRange}</div>
              </button>
            );
          })}
        </div>

        {/* Visual Pond Cross-Section Simulation */}
        <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-stone-200 border border-stone-300 p-4 flex flex-col justify-end">
          {/* Sky / Air */}
          <div className="absolute top-3 left-4 right-4 flex justify-between items-center text-xs">
            <span className="font-bold text-stone-700 bg-white/80 px-2 py-1 rounded-md backdrop-blur-xs">
              {isFa ? activeStage.nameFa : activeStage.nameEn}
            </span>
            <span className="font-extrabold text-cyan-900 bg-cyan-100/90 px-3 py-1 rounded-md backdrop-blur-xs font-mono">
              {isFa ? 'ارتفاع آب: ' : 'Depth: '} {activeStage.depthRange}
            </span>
          </div>

          {/* Rice Seedling graphic mockup */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-end gap-6 text-3xl">
            <span className="transition-transform duration-500 hover:scale-110">🌾</span>
            <span className="transition-transform duration-500 hover:scale-110 text-4xl">🌾</span>
            <span className="transition-transform duration-500 hover:scale-110">🌾</span>
          </div>

          {/* Water layer with dynamic height */}
          <div
            style={{ height: `${Math.min(100, Math.max(10, activeStage.depthCm * 15))}%` }}
            className={`w-full transition-all duration-700 rounded-t-xl opacity-75 backdrop-blur-xs relative flex items-center justify-center ${activeStage.color}`}
          >
            {activeStage.depthCm > 0 ? (
              <div className="text-white text-xs font-bold drop-shadow flex items-center gap-1.5 animate-pulse">
                <Droplets className="w-4 h-4" />
                <span>{isFa ? activeStage.statusFa : activeStage.statusEn}</span>
              </div>
            ) : (
              <div className="text-white text-xs font-bold drop-shadow">
                {isFa ? 'خروج کامل آب (ترک‌های مویی)' : 'Fully Drained (Dry Aeration)'}
              </div>
            )}
          </div>

          {/* Mud Soil layer */}
          <div className="h-10 bg-amber-950/80 w-full relative z-20 flex items-center justify-between px-4 text-[11px] font-bold text-amber-200">
            <span>{isFa ? 'بستر گل شالیزار (رس و لوم)' : 'Puddle Mud Soil Layer'}</span>
            <span>{isFa ? 'ریشه‌دوانی عمیق' : 'Root Zone'}</span>
          </div>
        </div>

        {/* Detailed Agronomic Rationale */}
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-2 text-xs">
          <div className="font-bold text-stone-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span>{isFa ? 'دلیل علمی و مزایای مدیریت آب در این مرحله:' : 'Scientific Agronomic Rationale:'}</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
            {isFa ? activeStage.rationaleFa : activeStage.rationaleEn}
          </p>
        </div>
      </div>

      {/* AWD (Alternate Wetting and Drying) Explainer Card */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-paddy-900 text-white rounded-2xl p-6 shadow-md border border-emerald-700 space-y-4">
        <h3 className="font-extrabold text-base sm:text-lg text-amber-300 flex items-center gap-2">
          <Droplets className="w-5 h-5 text-cyan-400" />
          <span>{isFa ? 'چرا آبیاری تناوبی (AWD) بهتر از غرقاب دائم است؟' : 'Why Alternate Wetting & Drying Beats Permanent Flooding'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
          <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-700/60 space-y-1.5">
            <div className="font-bold text-cyan-300">{isFa ? '۱. کاهش مصرف آب و هزینه‌ها' : '1. Water & Energy Savings'}</div>
            <p className="text-emerald-100/80 leading-relaxed">
              {isFa 
                ? 'مصرف آب شالیزار از ۱۲ هزار متر مکعب به حدود ۸ الی ۹ هزار متر مکعب در هکتار کاهش یافته و هزینه سوخت پمپ چاه‌ها نصف می‌شود.' 
                : 'Reduces irrigation water volume from 12,000 to ~8,500 m³/ha and drastically cuts fuel pumping costs.'}
            </p>
          </div>

          <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-700/60 space-y-1.5">
            <div className="font-bold text-amber-300">{isFa ? '۲. مهار پوسیدگی ریشه و ورس' : '2. Anti-Lodging & Healthy Roots'}</div>
            <p className="text-emerald-100/80 leading-relaxed">
              {isFa 
                ? 'با ورود دوره‌ای اکسیژن به خاک، ریشه‌ها سفید و فعال مانده و عمیق‌تر در خاک نفوذ می‌کنند که مانع خوابیدگی بوته‌ها در باد می‌شود.' 
                : 'Oxygen influx keeps roots white and vigorous, anchoring deeply and resisting wind lodging.'}
            </p>
          </div>

          <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-700/60 space-y-1.5">
            <div className="font-bold text-emerald-300">{isFa ? '۳. کاهش انتشار متان و سلامت دانه' : '3. Environmental & Grain Purity'}</div>
            <p className="text-emerald-100/80 leading-relaxed">
              {isFa 
                ? 'کاهش شدید تولید گاز متان ناشی از شرایط بی‌هوازی و کاهش چشمگیر جذب فلزات سنگین نظیر آرسنیک توسط ریشه‌های برنج.' 
                : 'Substantially reduces methane emissions from anaerobic soil and curtails heavy metal/arsenic uptake.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
