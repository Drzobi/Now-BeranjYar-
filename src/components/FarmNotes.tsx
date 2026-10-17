import React, { useState, useEffect } from 'react';
import { 
  NotebookPen, 
  Plus, 
  Trash2, 
  Calendar, 
  FileText, 
  Sparkles, 
  CheckCircle2,
  Download,
  Search
} from 'lucide-react';
import { Language, FarmRecord } from '../types';

interface FarmNotesProps {
  lang: Language;
  externalRecord?: any;
}

const DEFAULT_RECORDS: FarmRecord[] = [
  {
    id: '1',
    date: '۱۴۰۳/۰۲/۱۵',
    fieldTitle: 'کرت بالا - مزرعه چاپارخانه خمام',
    variety: 'هاشمی',
    areaHa: 1.2,
    stage: 'نشاکاری مکانیزه',
    notes: 'تعداد ۲۶۰ جعبه نشاء مکانیزه ۴ برگی با سلامت کامل کاشته شد. ارتفاع آب کرت ۲.۵ سانت تثبیت گردید.',
    fertilizerUsed: 'کود پایه: سوپرفسفات تریپل ۱۰۰ کیلو + سولفات روی ۳۰ کیلو + سولفات پتاسیم ۵۰ کیلو',
    sprayHistory: 'ضدعفونی بذر با قارچ‌کش بنومیل به نسبت ۲ گرم در کیلو'
  },
  {
    id: '2',
    date: '۱۴۰۳/۰۳/۰۴',
    fieldTitle: 'شالیزار فریدونکنار',
    variety: 'طارم محلی',
    areaHa: 0.8,
    stage: 'پنجه‌زنی و وجین اول',
    notes: 'علف هرز سوروف به شکل لکه‌ای مشاهده شد. وجین دستی انجام شد و ۵ روز لایه ۵ سانتی‌متری آب حفظ شد.',
    fertilizerUsed: 'سرک اول: ۴۰ کیلو کود اوره + ۳۰ کیلو سولفات پتاسیم',
    sprayHistory: 'نصب تله فرمونی جهت رصد کرم ساقه‌خوار نسل اول'
  }
];

export const FarmNotes: React.FC<FarmNotesProps> = ({ lang, externalRecord }) => {
  const isFa = lang === 'fa';

  const [records, setRecords] = useState<FarmRecord[]>(() => {
    try {
      const saved = localStorage.getItem('beranjyar_notes');
      return saved ? JSON.parse(saved) : DEFAULT_RECORDS;
    } catch {
      return DEFAULT_RECORDS;
    }
  });

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // New record form state
  const [fieldTitle, setFieldTitle] = useState<string>('');
  const [variety, setVariety] = useState<string>('هاشمی');
  const [areaHa, setAreaHa] = useState<number>(1);
  const [stage, setStage] = useState<string>('نشاکاری');
  const [notes, setNotes] = useState<string>('');
  const [fertilizerUsed, setFertilizerUsed] = useState<string>('');
  const [sprayHistory, setSprayHistory] = useState<string>('');

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('beranjyar_notes', JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [records]);

  // Handle external record from calculator if passed
  useEffect(() => {
    if (externalRecord) {
      setRecords((prev) => [externalRecord, ...prev]);
    }
  }, [externalRecord]);

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fieldTitle) return;

    const newRecord: FarmRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(isFa ? 'fa-IR' : 'en-US'),
      fieldTitle,
      variety,
      areaHa: Number(areaHa) || 1,
      stage,
      notes,
      fertilizerUsed,
      sprayHistory
    };

    setRecords([newRecord, ...records]);
    setShowAddModal(false);
    // Reset form
    setFieldTitle('');
    setNotes('');
    setFertilizerUsed('');
    setSprayHistory('');
  };

  const handleDelete = (id: string) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "beranjyar_farm_notes.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredRecords = records.filter((r) => {
    const q = searchTerm.toLowerCase();
    return (
      r.fieldTitle.toLowerCase().includes(q) ||
      r.variety.toLowerCase().includes(q) ||
      r.notes.toLowerCase().includes(q) ||
      r.stage.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200">
            <NotebookPen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              {isFa ? 'دفترچه ثبت یادداشت‌ها و وقایع شالیزار' : 'Paddy Field Journal & Activity Log'}
            </h2>
            <p className="text-xs text-stone-500">
              {isFa 
                ? 'ثبت تاریخچه کوددهی، سمپاشی، زمان نشا و عملکرد قطعات مختلف مزرعه با ذخیره‌سازی محلی' 
                : 'Log crop inputs, spraying dates, phenology and parcel measurements securely'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportJSON}
            className="px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300"
          >
            <Download className="w-4 h-4" />
            <span>{isFa ? 'دریافت خروجی داده‌ها' : 'Export JSON'}</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>{isFa ? 'ثبت گزارش جدید' : 'New Entry'}</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto" />
          <input
            type="text"
            placeholder={isFa ? 'جستجو در یادداشت‌ها بر اساس نام مزرعه، رقم، مرحله...' : 'Search farm entries...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-9 pl-3 ltr:pl-9 ltr:pr-3 py-1.5 text-xs rounded-xl border border-stone-300 outline-none focus:border-emerald-500 bg-stone-50"
          />
        </div>
        <span className="text-xs text-stone-500 font-semibold shrink-0">
          {records.length} {isFa ? 'یادداشت' : 'Records'}
        </span>
      </div>

      {/* New Record Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <h3 className="font-extrabold text-stone-900 text-base flex items-center gap-2">
                <NotebookPen className="w-5 h-5 text-emerald-700" />
                <span>{isFa ? 'ثبت رویداد زراعی جدید' : 'Add New Agronomic Record'}</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddRecord} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  {isFa ? 'عنوان مزرعه / قطعه شالیزار *' : 'Field / Parcel Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isFa ? 'مثال: کرت شرقی، مزرعه ۳ هکتاری خمام' : 'e.g. East Parcel, Plot A'}
                  value={fieldTitle}
                  onChange={(e) => setFieldTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    {isFa ? 'رقم برنج' : 'Rice Variety'}
                  </label>
                  <input
                    type="text"
                    value={variety}
                    onChange={(e) => setVariety(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    {isFa ? 'مساحت (هکتار)' : 'Area (Ha)'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={areaHa}
                    onChange={(e) => setAreaHa(parseFloat(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    {isFa ? 'مرحله رشد' : 'Growth Stage'}
                  </label>
                  <input
                    type="text"
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  {isFa ? 'کود مصرفی (مقدار و نوع)' : 'Fertilizers Applied'}
                </label>
                <input
                  type="text"
                  placeholder={isFa ? 'مثال: اوره ۴۰ کیلو، سولفات پتاسیم ۵۰ کیلو' : 'e.g. Urea 50kg, Solupotash 25kg'}
                  value={fertilizerUsed}
                  onChange={(e) => setFertilizerUsed(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  {isFa ? 'سمپاشی و کنترل آفت' : 'Pest Spraying / Defense'}
                </label>
                <input
                  type="text"
                  placeholder={isFa ? 'مثال: قارچ‌کش بیم ۵۰۰ گرم، حشره‌کش دیازینون' : 'e.g. Beam 500g/ha for blast'}
                  value={sprayHistory}
                  onChange={(e) => setSprayHistory(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="font-bold text-stone-700 block mb-1">
                  {isFa ? 'مشاهدات و یادداشت کارشناسی' : 'Observations & Notes'}
                </label>
                <textarea
                  rows={3}
                  placeholder={isFa ? 'توضیحات تکمیلی، وضعیت آب، تراکم پنجه‌ها...' : 'Additional notes...'}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-300 outline-none focus:border-emerald-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 text-stone-600 font-semibold cursor-pointer"
                >
                  {isFa ? 'انصراف' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 text-white font-bold cursor-pointer hover:bg-emerald-800"
                >
                  {isFa ? 'ذخیره در دفترچه' : 'Save Record'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Records Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRecords.length === 0 ? (
          <div className="col-span-2 bg-white rounded-2xl p-12 text-center border border-stone-200 text-stone-400 text-xs">
            {isFa ? 'هیچ یادداشتی یافت نشد. اولین رویداد زراعی را ثبت کنید.' : 'No notes found. Create your first field log entry.'}
          </div>
        ) : (
          filteredRecords.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 shadow-xs border border-stone-200 hover:border-emerald-300 transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-stone-900 text-sm sm:text-base">
                      {item.fieldTitle}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-600" />
                        <span>{item.date}</span>
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-700">{item.variety}</span>
                      <span>•</span>
                      <span>{item.areaHa} {isFa ? 'هکتار' : 'Ha'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50 cursor-pointer"
                    title={isFa ? 'حذف' : 'Delete'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                  {isFa ? 'مرحله: ' : 'Stage: '} {item.stage}
                </div>

                {item.notes && (
                  <p className="text-xs text-stone-700 leading-relaxed bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    {item.notes}
                  </p>
                )}

                <div className="space-y-1 text-xs text-stone-600">
                  {item.fertilizerUsed && (
                    <div className="flex items-start gap-1.5 text-[11px]">
                      <span className="font-bold text-emerald-800 shrink-0">{isFa ? 'کوددهی:' : 'Fertilizer:'}</span>
                      <span>{item.fertilizerUsed}</span>
                    </div>
                  )}

                  {item.sprayHistory && (
                    <div className="flex items-start gap-1.5 text-[11px]">
                      <span className="font-bold text-purple-800 shrink-0">{isFa ? 'سمپاشی:' : 'Spraying:'}</span>
                      <span>{item.sprayHistory}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
