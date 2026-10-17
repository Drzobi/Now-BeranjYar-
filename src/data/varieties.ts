import { RiceVariety } from '../types';

export const RICE_VARIETIES: RiceVariety[] = [
  {
    id: 'hashemi',
    nameFa: 'هاشمی',
    nameEn: 'Hashemi',
    type: 'local_quality',
    regionFa: 'گیلان، مازندران (روستای چاپارخانه خمام)',
    regionEn: 'Gilan & Mazandaran (Origin: Khomam)',
    growthDays: 125,
    plantHeightCm: 125,
    rawLengthMm: 7.6,
    cookedLengthMm: 13.5,
    aromaScore: 5,
    paddyYieldKgPerHa: { min: 4000, max: 4800 },
    blastResistance: 'moderate',
    stemBorerResistance: 'moderate',
    lodgingResistance: 'low',
    featuresFa: [
      'پرطرفدارترین برنج عطری و مجلسی ایران با عطر و طعم استثنایی',
      'ری‌کشیدن عالی پس از پخت و نرم ماندن طولانی مدت پس از سرد شدن',
      'دانه قلمی کشیده و کرم متمایل به سفید بلوری',
      'حساس به خوابیدگی (ورس) در صورت مصرف بی‌رویه کود ازته'
    ],
    featuresEn: [
      'Most popular premium aromatic rice in Iran with outstanding flavor',
      'Exceptional cooking elongation and stays soft hours after cooling',
      'Slender, translucent creamy white grain',
      'Sensitive to lodging if excessive nitrogen fertilizer is applied'
    ],
    optimalSoilFa: 'خاک‌های لومی-رسی با زهکشی مناسب و دسترسی مداوم به آب خنک',
    optimalSoilEn: 'Clay-loam soils with good drainage and steady access to cool river water'
  },
  {
    id: 'tarom',
    nameFa: 'طارم محلی / طارم هاشمی',
    nameEn: 'Tarom Local / Tarom Hashemi',
    type: 'local_quality',
    regionFa: 'مازندران (فریدونکنار، بابل، ساری) و گیلان',
    regionEn: 'Mazandaran (Fereydunkenar, Babol) & Gilan',
    growthDays: 120,
    plantHeightCm: 130,
    rawLengthMm: 7.3,
    cookedLengthMm: 14.1,
    aromaScore: 5,
    paddyYieldKgPerHa: { min: 3800, max: 4500 },
    blastResistance: 'moderate',
    stemBorerResistance: 'low',
    lodgingResistance: 'low',
    featuresFa: [
      'برنج مرغوب با شهرت جهانی از شالیزارهای فریدونکنار و دشت مازندران',
      'بافت بسیار پوک، سبک و زودهضم با ری‌کردن فوق‌العاده',
      'سازگار با کشت دوم (راتون / دونوج) در اواخر تابستان',
      'دارای پوسته شلتوک طلایی کمرنگ و ریشک‌های کوتاه'
    ],
    featuresEn: [
      'World-famous quality rice from Fereydunkenar and coastal plains',
      'Very light, easy to digest with superb post-cooking elongation',
      'Ideal for second-crop ratooning (Donooj) in late summer',
      'Pale golden paddy husk with short awns'
    ],
    optimalSoilFa: 'اراضی مرغوب جلگه‌ای با بافت متوسط و مواد آلی غنی',
    optimalSoilEn: 'Lowland alluvial soils rich in organic matter'
  },
  {
    id: 'dom_siah',
    nameFa: 'صدری دم‌سیاه',
    nameEn: 'Sadri Dom Siah (Black-Tailed Sadri)',
    type: 'local_quality',
    regionFa: 'گیلان (لشت نشا، فومن، رشت)',
    regionEn: 'Gilan (Lasht Nesha, Fuman, Rasht)',
    growthDays: 135,
    plantHeightCm: 140,
    rawLengthMm: 7.9,
    cookedLengthMm: 14.8,
    aromaScore: 5,
    paddyYieldKgPerHa: { min: 3500, max: 4200 },
    blastResistance: 'low',
    stemBorerResistance: 'low',
    lodgingResistance: 'low',
    featuresFa: [
      'اعلاترین و لوکس‌ترین رقم بومی اصیل گیلان',
      'دارای ریشک‌های دم مشکی در انتهای شلتوک',
      'قد دانه‌ها پس از پخت به بیش از ۱۵ میلی‌متر می‌رسد',
      'نیازمند مراقبت دقیق در برابر باد شدید و بیماری بلاست'
    ],
    featuresEn: [
      'The most luxurious, historic native heirloom cultivar of Gilan',
      'Distinctive black awn tip on the paddy husk',
      'Grain elongates up to 15 mm upon cooking with sublime aroma',
      'Requires delicate shelter from strong winds and blast prevention'
    ],
    optimalSoilFa: 'اراضی آبرفتی غنی از سیلت با دمای معتدل و رطوبت پایدار',
    optimalSoilEn: 'Alluvial silt-rich soils with moderate temperatures'
  },
  {
    id: 'anbarboo',
    nameFa: 'عنبربو',
    nameEn: 'Anbarboo (Fragrant Amber)',
    type: 'southern_warm',
    regionFa: 'خوزستان (شوشتر، شادگان، اهواز)، ایلام و لرستان',
    regionEn: 'Khuzestan (Shushtar, Shadegan), Ilam & Lorestan',
    growthDays: 110,
    plantHeightCm: 105,
    rawLengthMm: 5.8,
    cookedLengthMm: 9.8,
    aromaScore: 5,
    paddyYieldKgPerHa: { min: 3500, max: 4600 },
    blastResistance: 'high',
    stemBorerResistance: 'high',
    lodgingResistance: 'high',
    featuresFa: [
      'برنج خوش‌عطر و دانه گرد/توپر با طبع گرم بر خلاف برنج‌های شمال',
      'بسیار مقاوم به گرمای شدید، خشکی و شوری آب و خاک',
      'مناسب مصرف روزمره خانوار با قیمت اقتصادی و هضم بسیار آسان',
      'آبیاری با آب رودخانه‌های کارون و کرخه در دمای بالای ۴۵ درجه'
    ],
    featuresEn: [
      'Deeply fragrant short/medium grain with warm dietary temperament',
      'Highly tolerant to extreme summer heat, mild salinity and drought',
      'Affordable daily staple with excellent stomach tolerance',
      'Grown in southern river plains under temperatures exceeding 45°C'
    ],
    optimalSoilFa: 'اراضی رسی گرمسیری جنوب با آفتاب تند و آب جاری',
    optimalSoilEn: 'Warm tropical clay plains with direct full sun'
  },
  {
    id: 'shiroudi',
    nameFa: 'شیرودی',
    nameEn: 'Shiroudi',
    type: 'high_yield',
    regionFa: 'مازندران و گلستان',
    regionEn: 'Mazandaran & Golestan',
    growthDays: 130,
    plantHeightCm: 110,
    rawLengthMm: 7.2,
    cookedLengthMm: 12.5,
    aromaScore: 3,
    paddyYieldKgPerHa: { min: 6500, max: 8000 },
    blastResistance: 'high',
    stemBorerResistance: 'high',
    lodgingResistance: 'high',
    featuresFa: [
      'رقم پرمحصول اصلاح‌شده با ظاهر شبیه به طارم و هاشمی',
      'عملکرد چشمگیر شلتوک تا ۸ تن در هکتار و صرفه اقتصادی بالا',
      'ساقه محکم و مقاوم به بادهای موسمی و عدم خوابیدگی بوته‌ها',
      'مقاومت ژنتیکی عالی به بیماری خطرناک بلاست برنج'
    ],
    featuresEn: [
      'High-yield improved cultivar mimicking the visual slender look of Tarom',
      'Outstanding yield reaching up to 8 tons of paddy per hectare',
      'Sturdy dwarf stem resistant to lodging from stormy northern winds',
      'Genetically resilient against devastating rice blast fungus'
    ],
    optimalSoilFa: 'خاک‌های حاصلخیز با حاصلخیزی متوسط و کودپذیری مناسب',
    optimalSoilEn: 'Fertile soils capable of handling balanced NPK inputs'
  },
  {
    id: 'fajr',
    nameFa: 'فجر',
    nameEn: 'Fajr',
    type: 'high_yield',
    regionFa: 'گلستان، مازندران و گیلان',
    regionEn: 'Golestan, Mazandaran & Gilan',
    growthDays: 130,
    plantHeightCm: 105,
    rawLengthMm: 6.8,
    cookedLengthMm: 11.8,
    aromaScore: 4,
    paddyYieldKgPerHa: { min: 6000, max: 7500 },
    blastResistance: 'high',
    stemBorerResistance: 'moderate',
    lodgingResistance: 'high',
    featuresFa: [
      'تنها رقم پرمحصول که عطر و بوی نزدیک به ارقام محلی طارم دارد',
      'دانه شیشه‌ای و خوش‌فرم با پخت مطلوب در رستوران‌ها و کترینگ‌ها',
      'پاسخگویی فوق‌العاده به کودهای فسفاته و پتاسه و مقاوم به سرما',
      'برداشت آسان با کمباین به دلیل عدم ریزش دانه‌ها از خوشه'
    ],
    featuresEn: [
      'The only high-yield cultivar exhibiting aroma close to heirloom Tarom',
      'Translucent glassy grain with excellent banquet volume',
      'Strong response to potassium & phosphorus nutrition and cold resistance',
      'Non-shattering panicles ideal for high-speed combine harvesting'
    ],
    optimalSoilFa: 'اراضی جلگه‌ای و کوهپایه‌ای غنی با سیستم زهکشی مطلوب',
    optimalSoilEn: 'Lowland and foothill alluvial soils with good drainage'
  },
  {
    id: 'neda',
    nameFa: 'ندا',
    nameEn: 'Neda',
    type: 'high_yield',
    regionFa: 'مازندران و گلستان',
    regionEn: 'Mazandaran & Golestan',
    growthDays: 135,
    plantHeightCm: 100,
    rawLengthMm: 6.9,
    cookedLengthMm: 11.2,
    aromaScore: 2,
    paddyYieldKgPerHa: { min: 7000, max: 8500 },
    blastResistance: 'high',
    stemBorerResistance: 'moderate',
    lodgingResistance: 'high',
    featuresFa: [
      'بالاترین عملکرد تناژ شلتوک در میان ارقام تجاری شمال (تا ۹ تن)',
      'ساقه کوتاه، ضخیم و بدون هیچ‌گونه ورس و افتادگی ساقه',
      'درصد شکستگی بسیار پایین در مرحله سفید کردن و تبدیل شالیکوبی',
      'مناسب کارخانجات فرآوری، نشاسته و بسته‌بندی صنعتی'
    ],
    featuresEn: [
      'Highest paddy tonnage among commercial cultivars (up to 9 tons/ha)',
      'Thick dwarf stem with zero field lodging issues',
      'Exceptionally low breakage rate during milling and polishing',
      'Popular for industrial catering and meal packaging'
    ],
    optimalSoilFa: 'اراضی سنگین با توان نگهداری آب طولانی مدت',
    optimalSoilEn: 'Heavy clay soils that retain water well'
  },
  {
    id: 'lenjan',
    nameFa: 'لنجان اصفهان',
    nameEn: 'Lenjan (Isfahan)',
    type: 'southern_warm',
    regionFa: 'لنجان اصفهان (حاشیه زاینده‌رود)',
    regionEn: 'Lenjan, Isfahan (Zayandeh Rood Basin)',
    growthDays: 125,
    plantHeightCm: 115,
    rawLengthMm: 6.2,
    cookedLengthMm: 10.5,
    aromaScore: 4,
    paddyYieldKgPerHa: { min: 4200, max: 5200 },
    blastResistance: 'moderate',
    stemBorerResistance: 'moderate',
    lodgingResistance: 'moderate',
    featuresFa: [
      'برنج سنتی کویری با عطر ملایم و نشاسته بسیار لعاب‌دار',
      'بسیار مناسب برای دم‌پختک، آش‌ها و شله‌زرد اصیل ایرانی',
      'کشت شده با آب معدنی زلال کوهستان‌های زاگرس',
      'مقاومت نسبی به نوسانات دمای شب و روز کویری'
    ],
    featuresEn: [
      'Historic desert-plateau rice with distinct sweet aroma and high starch richness',
      'Traditional favorite for Persian Dami dishes, stews, and rice puddings',
      'Irrigated with fresh Zagros mountain snowmelt water',
      'Resilient to sharp desert diurnal temperature fluctuations'
    ],
    optimalSoilFa: 'خاک‌های آهکی و شنی-رسی حاشیه رودخانه',
    optimalSoilEn: 'Calcareous sandy-loam riverbanks'
  }
];
