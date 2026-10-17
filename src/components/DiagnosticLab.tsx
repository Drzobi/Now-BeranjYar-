import React, { useState } from 'react';
import { 
  Stethoscope, 
  Search, 
  AlertTriangle, 
  ShieldCheck, 
  Bug, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  Info,
  Clock,
  FlaskConical,
  Sprout
} from 'lucide-react';
import { Language, DiseasePest } from '../types';
import { DISEASES_PESTS } from '../data/diseases';

interface DiagnosticLabProps {
  lang: Language;
}

export const DiagnosticLab: React.FC<DiagnosticLabProps> = ({ lang }) => {
  const isFa = lang === 'fa';

  // Symptom Wizard state
  const [selectedPart, setSelectedPart] = useState<'all' | 'leaf' | 'stem' | 'neck' | 'sheath' | 'root'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fungal' | 'insect' | 'weed'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeItem, setActiveItem] = useState<DiseasePest | null>(DISEASES_PESTS[0]);

  // Quick symptom question filters
  const [wizardPart, setWizardPart] = useState<string>('');
  const [wizardSymptom, setWizardSymptom] = useState<string>('');

  const plantParts = [
    { id: 'all', labelFa: 'همه اندام‌ها', labelEn: 'All Parts' },
    { id: 'leaf', labelFa: 'برگ (پهنک)', labelEn: 'Leaf Blade' },
    { id: 'stem', labelFa: 'ساقه و میانگره', labelEn: 'Stem & Internode' },
    { id: 'sheath', labelFa: 'غلاف برگ', labelEn: 'Leaf Sheath' },
    { id: 'neck', labelFa: 'گلوگاه و خوشه', labelEn: 'Panicle Neck' },
    { id: 'root', labelFa: 'ریشه و طوقه', labelEn: 'Crown & Root' },
  ];

  // Filter diseases
  const filteredItems = DISEASES_PESTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPart = selectedPart === 'all' || item.affectedParts.includes(selectedPart as any);
    const matchesSearch = 
      item.nameFa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.symptomsFa.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesPart && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-100 text-purple-800 border border-purple-200">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'کلینیک تخصصی و آزمایشگاه عارضه‌یابی شالیزار' : 'Paddy Crop Diagnostic Lab & Pest Clinic'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'تشخیص سریع بلاست، کرم ساقه‌خوار، شیت بلایت و علف‌های هرز با نسخه درمانی دقیق و سموم استاندارد' 
                : 'Rapid identification of blast, stem borer, sheath blight & weeds with certified control regimens'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            {isFa ? 'بانک دانش گیاه‌پزشکی برنج' : 'Rice Phytopathology DB'}
          </span>
        </div>
      </div>

      {/* Interactive Symptom Wizard Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950 text-white p-5 rounded-2xl shadow-md border border-stone-700 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm sm:text-base font-bold text-white">
            {isFa ? 'راهنمای تشخیص سریع بر اساس علامت ظاهری مزرعه' : 'Quick Visual Diagnostic Guide'}
          </h3>
        </div>
        
        <p className="text-xs text-stone-300 leading-relaxed">
          {isFa 
            ? 'روی اندام آسیب‌دیده کلیک کنید تا بیماری‌ها و آفات احتمالی فیلتر شده و نسخه درمانی اختصاصی نمایش داده شود:' 
            : 'Select the affected plant part to isolate matching pathogens and control regimens:'}
        </p>

        {/* Visual part buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
          {plantParts.map((part) => (
            <button
              key={part.id}
              onClick={() => setSelectedPart(part.id as any)}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                selectedPart === part.id
                  ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-md font-extrabold scale-102'
                  : 'bg-stone-800/80 hover:bg-stone-700/80 text-stone-200 border-stone-700'
              }`}
            >
              {isFa ? part.labelFa : part.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout: List & Active Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Search, Categories & Disease List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {/* Search bar & Category filter */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto" />
              <input
                type="text"
                placeholder={isFa ? 'جستجوی نام آفت، بیماری، نشانه...' : 'Search pest, symptom or pathogen...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-9 pl-3 ltr:pl-9 ltr:pr-3 py-2 text-xs rounded-xl border border-stone-300 outline-none focus:border-emerald-500 bg-stone-50"
              />
            </div>

            {/* Category tabs */}
            <div className="flex gap-1.5 text-xs">
              {[
                { id: 'all', labelFa: 'همه', labelEn: 'All' },
                { id: 'fungal', labelFa: 'قارچی', labelEn: 'Fungal' },
                { id: 'insect', labelFa: 'آفات حشره', labelEn: 'Insects' },
                { id: 'weed', labelFa: 'علف هرز', labelEn: 'Weeds' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-colors cursor-pointer text-center ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-700 text-white font-bold'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {isFa ? cat.labelFa : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* List items */}
          <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-0.5">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-stone-400 text-xs">
                {isFa ? 'موردی با این مشخصات یافت نشد.' : 'No matching pests or diseases found.'}
              </div>
            ) : (
              filteredItems.map((item) => {
                const isSelected = activeItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                        : 'bg-white hover:bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                        {isFa ? item.nameFa : item.nameEn}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.riskLevel === 'critical'
                          ? 'bg-rose-100 text-rose-800'
                          : item.riskLevel === 'high'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.riskLevel === 'critical' 
                          ? (isFa ? 'خطر بسیار بالا' : 'Critical') 
                          : item.riskLevel === 'high' 
                          ? (isFa ? 'خطر زیاد' : 'High') 
                          : (isFa ? 'خطر متوسط' : 'Medium')}
                      </span>
                    </div>

                    <div className="text-[11px] text-stone-400 font-mono italic">
                      {item.scientificName}
                    </div>

                    <p className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                      {isFa ? item.symptomsFa[0] : item.symptomsEn[0]}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right column: Full Detailed Diagnostic & Prescription Sheet (7 cols) */}
        <div className="lg:col-span-7">
          {activeItem ? (
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-stone-200 space-y-5">
              {/* Header of sheet */}
              <div className="border-b border-stone-200 pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                      {activeItem.category === 'fungal' ? <Leaf className="w-5 h-5" /> : <Bug className="w-5 h-5" />}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-stone-900">
                        {isFa ? activeItem.nameFa : activeItem.nameEn}
                      </h3>
                      <div className="text-xs text-stone-500 font-mono italic">
                        {activeItem.scientificName}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    {activeItem.affectedParts.map((p) => (
                      <span key={p} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-semibold">
                        {p === 'leaf' && (isFa ? 'برگ' : 'Leaf')}
                        {p === 'stem' && (isFa ? 'ساقه' : 'Stem')}
                        {p === 'neck' && (isFa ? 'گردن خوشه' : 'Neck')}
                        {p === 'sheath' && (isFa ? 'غلاف' : 'Sheath')}
                        {p === 'root' && (isFa ? 'ریشه' : 'Root')}
                        {p === 'panicle' && (isFa ? 'خوشه' : 'Panicle')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditions box */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">{isFa ? 'شرایط تشدید و طغیان: ' : 'Favorable outbreak conditions: '}</span>
                  {isFa ? activeItem.favorableConditionsFa : activeItem.favorableConditionsEn}
                </div>
              </div>

              {/* Symptoms Section */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 text-rose-800">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{isFa ? 'علائم شناسایی در مزرعه' : 'Diagnostic Field Symptoms'}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 pr-2">
                  {(isFa ? activeItem.symptomsFa : activeItem.symptomsEn).map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevention Section */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isFa ? 'اقدامات پیشگیرانه و به‌زراعی' : 'Agronomic & Cultural Prevention'}</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 pr-2">
                  {(isFa ? activeItem.preventionFa : activeItem.preventionEn).map((prev, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{prev}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chemical Control Section */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 text-purple-800">
                  <FlaskConical className="w-4 h-4" />
                  <span>{isFa ? 'نسخه سموم شیمیایی مجاز و دوز مصرف' : 'Certified Chemical Control & Dosage'}</span>
                </h4>
                <div className="bg-purple-50/60 rounded-xl p-3 border border-purple-200/80 space-y-2">
                  {(isFa ? activeItem.chemicalControlFa : activeItem.chemicalControlEn).map((chem, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-purple-950 font-medium">
                      <span className="text-purple-600 font-bold shrink-0">💊</span>
                      <span className="leading-relaxed">{chem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Biological Control if available */}
              {activeItem.biologicalControlFa && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 text-cyan-800">
                    <Sprout className="w-4 h-4" />
                    <span>{isFa ? 'کنترل بیولوژیک و تقویت زیستی' : 'Biological & Ecological Defense'}</span>
                  </h4>
                  <div className="bg-cyan-50/60 rounded-xl p-3 border border-cyan-200/80 space-y-1.5 text-xs text-cyan-950">
                    {(isFa ? activeItem.biologicalControlFa : activeItem.biologicalControlEn)?.map((bio, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-600 font-bold shrink-0">🌿</span>
                        <span className="leading-relaxed">{bio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 text-stone-400">
              {isFa ? 'یک مورد را از لیست سمت راست انتخاب کنید.' : 'Select an item from the list to view diagnosis details.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
