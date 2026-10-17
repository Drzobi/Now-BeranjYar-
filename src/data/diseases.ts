import { DiseasePest } from '../types';

export const DISEASES_PESTS: DiseasePest[] = [
  {
    id: 'blast',
    nameFa: 'بیماری بلاست برنج (برگ و گردن خوشه)',
    nameEn: 'Rice Blast (Leaf & Neck Blast)',
    scientificName: 'Pyricularia oryzae (Magnaporthe oryzae)',
    category: 'fungal',
    affectedParts: ['leaf', 'neck', 'panicle'],
    riskLevel: 'critical',
    symptomsFa: [
      'لکه‌های دوکی‌شکل با مرکز خاکستری یا سفید و حاشیه قهوه‌ای مایل به قرمز روی برگ‌ها',
      'پوسیدگی و تیرگی در ناحیه گره ساقه و اتصال خوشه (بلاست گلوگاه یا گردن)',
      'سفید شدن و پوک ماندن کامل دانه‌های خوشه بر اثر قطع آوندهای غذایی',
      'در صورت حمله شدید برگ‌ها سوخته و خشک به نظر می‌رسند'
    ],
    symptomsEn: [
      'Spindle/diamond-shaped lesions with grey/white centers and reddish-brown margins on leaves',
      'Blackish necrotic lesions around panicle node/neck causing neck blast',
      'Entire panicle turns white and sterile (empty chaff) due to vascular block',
      'Leaves show burned, scorched appearance under severe epidemics'
    ],
    favorableConditionsFa: 'رطوبت نسبی بالای ۹۰٪، شبنم طولانی، بارندگی مداوم، دمای بین ۲۲ تا ۲۸ درجه، و مصرف بیش از حد کود ازته (اوره)',
    favorableConditionsEn: 'Relative humidity > 90%, prolonged dew, cloudy rainy spells, temperatures 22-28°C, and excessive nitrogen fertilizer',
    preventionFa: [
      'ضدعفونی بذر قبل از بذرپاشی با قارچ‌کش‌های مناسب',
      'کاشت ارقام متحمل یا پرمحصول مقاوم نظیر شیرودی و فجر',
      'پرهیز از مصرف بیش از حد کود اوره و مصرف تقسیطی به همراه پتاسیم و سیلیس',
      'حفظ تناوب آبیاری و جلوگیری از ماندابی یا خشکی مفرط خاک'
    ],
    preventionEn: [
      'Seed disinfection with certified fungicides before nursery sowing',
      'Planting resistant cultivars like Shiroudi and Fajr',
      'Avoiding excessive urea; splitting nitrogen and adding potassium and silica',
      'Maintaining balanced flood cycles without prolonged severe drought stress'
    ],
    chemicalControlFa: [
      'تریکلازول (بیم) به میزان ۰.۵ کیلوگرم در هکتار (بسیار موثر در پیشگیری بلاست برگ و گردن)',
      'ناتیوو (تبوکونازول + تری‌فلوکسی استروبین) به میزان ۱۶۰ تا ۲۰۰ گرم در هکتار',
      'ایزوپروتیولان (فوجی وان) به میزان ۱ تا ۱.۲ لیتر در هکتار'
    ],
    chemicalControlEn: [
      'Tricyclazole (Beam 75% WP) at 0.5 kg/ha (standard preventive protection)',
      'Nativo (Tebuconazole + Trifloxystrobin) at 160-200 g/ha',
      'Isoprothiolane (Fuji-One) at 1.0-1.2 L/ha'
    ],
    biologicalControlFa: [
      'محلول‌پاشی ترکیبات سیلیکات پتاسیم جهت تقویت دیواره سلولی برگ و جلوگیری از نفوذ میسلیوم قارچ',
      'استفاده از قارچ آنتاگونیست تریکودرما (Trichoderma harzianum) در خزانه'
    ],
    biologicalControlEn: [
      'Foliar spraying of potassium silicate to strengthen plant cell cuticle',
      'Bio-fungicide Trichoderma harzianum soil inoculation in nursery beds'
    ]
  },
  {
    id: 'stem_borer',
    nameFa: 'کرم ساقه‌خوار نواری برنج',
    nameEn: 'Striped Stem Borer',
    scientificName: 'Chilo suppressalis',
    category: 'insect',
    affectedParts: ['stem', 'panicle'],
    riskLevel: 'critical',
    symptomsFa: [
      'خشک شدن جوانه مرکزی در مرحله رویشی که به راحتی با کشیدن جدا می‌شود (عارضه دالمرگ یا مرگ جوانه)',
      'سفید شدن و پوک شدن کامل خوشه‌ها در مرحله زایشی (عارضه سفید شدن خوشه یا White Head)',
      'مشاهده سوراخ‌های ریز روی ساقه همراه با فضولات پودری لارو داخل میانگره‌ها',
      'شکستن ساقه‌ها از محل تغذیه لارو در اثر وزش باد'
    ],
    symptomsEn: [
      'Drying of central leaf whorl during tillering, easily pulled out ("Dead Heart")',
      'White, hollow, upright empty panicles at heading stage ("White Head")',
      'Tiny entrance holes in stem internodes filled with larval frass',
      'Stems snapping and lodging under moderate wind pressure'
    ],
    favorableConditionsFa: 'زمستان‌های معتدل که بقای لاروها در کاه و کلش را بالا می‌برد، کشت‌های دیرهنگام، عدم شخم زمستانه و تراکم بالای بوته‌ها',
    favorableConditionsEn: 'Mild winters allowing high larval overwintering in stubble, late transplanting, delayed winter plowing',
    preventionFa: [
      'شخم زمستانه و آب‌تخت کردن شالیزار در اواخر پاییز یا زمستان برای نابودی لاروهای زمستان‌گذران',
      'کف‌بر کردن ساقه برنج هنگام درو و مدیریت صحیح کاه و کلش',
      'نصب تله‌های نوری و فرمونی جهت پایش و رصد زمان پیک پرواز پروانه‌ها'
    ],
    preventionEn: [
      'Winter deep plowing followed by shallow flooding to destroy overwintering larvae',
      'Low stubble harvesting close to soil line and clearing old straw',
      'Pheromone and light traps to monitor peak moth flight flights'
    ],
    chemicalControlFa: [
      'گرانول دیازینون ۱۰٪ به میزان ۱۵ تا ۲۰ کیلوگرم در هکتار (هنگام تفریخ تخم‌ها)',
      'گرانول ریپکورد / کلرانترانیلیپرول (فروانیا / کوراجن) ۵۰ سی‌سی در هکتار یا گرانول فرترا',
      'پادان (کارتپ) گرانول ۴٪ به میزان ۳۰ کیلوگرم در هکتار'
    ],
    chemicalControlEn: [
      'Diazinon 10% Granules at 15-20 kg/ha timed at egg hatch',
      'Chlorantraniliprole (Coragen / Ferterra) at recommended label rates',
      'Cartap hydrochloride (Padan 4% GR) at 30 kg/ha'
    ],
    biologicalControlFa: [
      'رهاسازی زنبور تریکوگراما (Trichogramma brassicae) به تعداد ۱۰۰ تریکوکارت در هکتار در ۳ نوبت در زمان تخم‌ریزی پروانه‌ها',
      'حفظ شکارچیان طبیعی مانند سن‌های شکارگر و عنکبوت‌های شالیزار با کاهش سمپاشی بی‌رویه'
    ],
    biologicalControlEn: [
      'Trichogramma brassicae parasitoid wasp release (100 cards/ha) over 3 intervals',
      'Conserving beneficial predatory spiders and mirid bugs by limiting broad-spectrum sprays'
    ]
  },
  {
    id: 'sheath_blight',
    nameFa: 'سوختگی غلاف برنج (شیت بلایت)',
    nameEn: 'Sheath Blight',
    scientificName: 'Rhizoctonia solani',
    category: 'fungal',
    affectedParts: ['sheath', 'stem', 'leaf'],
    riskLevel: 'high',
    symptomsFa: [
      'ایجاد لکه‌های بیضی یا نامنظم خاکستری-سبز در غلاف برگ نزدیک به سطح آب شالیزار',
      'حاشیه قهوه‌ای تیره دور لکه‌ها که شبیه پوست مار یا تخم مارمولک به نظر می‌رسد',
      'پیشروی لکه‌ها به سمت برگ‌های بالایی و ساقه در تراکم‌های کاشت بالا',
      'تشکیل اسکلروت‌های سفید تا قهوه‌ای تیره (اندام‌های مقاوم قارچ) روی غلاف‌ها'
    ],
    symptomsEn: [
      'Greenish-grey oval or irregular lesions on leaf sheath near the waterline',
      'Dark brown margins giving a snake-skin or serpentine appearance',
      'Vertical advancement of lesions into upper leaf canopies under dense stands',
      'Formation of white to dark brown sclerotia on infected sheaths'
    ],
    favorableConditionsFa: 'دمای گرم (۲۸ تا ۳۲ درجه)، رطوبت نسبی بالای ۸۵٪، مصرف بیش از حد کود ازت و تراکم شدید کاشت بوته‌ها',
    favorableConditionsEn: 'Warm weather (28-32°C), high humidity (>85%), dense planting canopies, excessive nitrogen',
    preventionFa: [
      'رعایت فاصله کاشت استاندارد (حداقل ۲۰×۲۰ سانتی‌متر در نشاکاری سنتی و مکانیزه)',
      'جمع‌آوری و سوزاندن یا پوساندن بقایای اسکلروت‌های شناور در زمان گل‌خرابی و تسطیح',
      'خشکاندن میان‌فصل شالیزار برای تهویه کف بوته‌ها و کاهش رطوبت پای بوته'
    ],
    preventionEn: [
      'Proper plant spacing (at least 20x20 cm) to improve airflow in canopy',
      'Skimming and removal of floating sclerotia during puddling land preparation',
      'Mid-season intermittent aeration to dry out lower sheath micro-climate'
    ],
    chemicalControlFa: [
      'فلودیوکسونیل یا هگزاکونازول (انویل) ۱ لیتر در هکتار',
      'آزوکسی استروبین (آمستار) ۰.۵ لیتر در هکتار',
      'والیامایسین به میزان ۲ لیتر در هکتار در زمان آغاز علائم روی غلاف'
    ],
    chemicalControlEn: [
      'Hexaconazole (Anvil 5% SC) at 1 L/ha',
      'Azoxystrobin (Amistar) at 0.5 L/ha',
      'Validamycin 3% L at 2 L/ha applied at initial sheath symptom onset'
    ]
  },
  {
    id: 'bakanae',
    nameFa: 'بیماری بوته‌میری / باکانائه (سبک سری برنج)',
    nameEn: 'Bakanae Disease (Foolish Seedling)',
    scientificName: 'Fusarium fujikuroi',
    category: 'fungal',
    affectedParts: ['root', 'stem', 'leaf'],
    riskLevel: 'high',
    symptomsFa: [
      'رشد طولی غیرعادی، قد بلند و باریک شدن بوته‌های آلوده نسبت به سایر بوته‌های سالم در خزانه و زمین اصلی',
      'رنگ سبز کم‌رنگ متمایل به زرد برگ‌ها همراه با تشکیل ریشه‌های هوایی از گره‌های پایینی ساقه',
      'پوسیدگی طوقه و خشکیدگی بوته‌ها قبل از خوشه‌دهی',
      'مشاهده گرد صورتی یا سفید قارچ در طوقه بوته‌های پوسیده'
    ],
    symptomsEn: [
      'Abnormal tall, slender, elongated seedling growth towering over healthy neighbor plants',
      'Pale yellowish green leaves with adventitious aerial roots developing at lower stem nodes',
      'Foot/crown rot causing sudden wilting and seedling mortality before flowering',
      'Pinkish to white mycelial powder coating at the base of decayed stems'
    ],
    favorableConditionsFa: 'انتقال قارچ از طریق بذرهای آلوده، دمای بالای خزانه (۳۰ تا ۳۵ درجه) و زخم‌های ریشه در هنگام نشاکاری',
    favorableConditionsEn: 'Seed-borne transmission, hot humid nursery microclimate (30-35°C), root tears during pulling',
    preventionFa: [
      'استفاده از بذر بوجاری شده و عاری از آلودگی از مزارع سالم',
      'سبک کردن بذر در محلول آب‌نمک با تخم‌مرغ تازه (حذف بذرهای سبک و آلوده)',
      'ضدعفونی حتمی بذر قبل از جوانه‌زنی با سموم قارچ‌کش حفاظتی و سیستمیک'
    ],
    preventionEn: [
      'Clean, certified seed selection from disease-free fields',
      'Specific gravity salt-water floating test with fresh egg to discard light, hollow seeds',
      'Mandatory chemical/hot-water seed disinfection prior to germination'
    ],
    chemicalControlFa: [
      'ضدعفونی بذر با بنومیل ۵۰٪ یا کربوکسین تیرام به میزان ۲ گرم به ازای هر کیلو بذر',
      'قارچ‌کش تبوکونازول یا تری‌فلوکسی‌استروبین جهت تیمار بذرها'
    ],
    chemicalControlEn: [
      'Seed dressing with Benomyl 50% WP or Carboxin-Thiram at 2 g/kg seed',
      'Tebuconazole seed soaking formulation'
    ]
  },
  {
    id: 'brown_spot',
    nameFa: 'بیماری لکه قهوه‌ای برنج',
    nameEn: 'Brown Spot',
    scientificName: 'Bipolaris oryzae (Cochliobolus miyabeanus)',
    category: 'fungal',
    affectedParts: ['leaf', 'panicle', 'sheath'],
    riskLevel: 'medium',
    symptomsFa: [
      'لکه‌های دایره‌ای یا بیضی کوچک به رنگ قهوه‌ای با هاله زرد رنگ شبیه دانه کنجد روی برگ‌ها',
      'تیرگی و تغییر رنگ پوسته شلتوک و لکه‌دار شدن دانه‌های سفید برنج',
      'معمولاً نشان‌دهنده فقر خاک از نظر پتاسیم، منگنز، روی یا سیلیکات است'
    ],
    symptomsEn: [
      'Small circular or oval brown spots resembling sesame seeds with a yellow halo on foliage',
      'Glume discoloration and spotty dark staining on milled polished grains',
      'Strongly correlated with poor, nutrient-depleted soil (low K, Mn, Zn, Si)'
    ],
    favorableConditionsFa: 'خاک‌های ضعیف، کمبود آب و خشکی مفرط، فقر عناصر ریزمغذی (روی و سیلیس)',
    favorableConditionsEn: 'Nutrient-deficient soils, soil water stress, drought spells, low micronutrients',
    preventionFa: [
      'تقویت حاصلخیزی خاک با کودهای دامی پوسیده و مصرف متعادل پتاس و ریزمغذی‌ها',
      'مدیریت صحیح آب و جلوگیری از خشکیدن تنش‌زای خاک شالیزار'
    ],
    preventionEn: [
      'Soil nutrient enrichment with compost, balanced potassium and zinc foliar sprays',
      'Preventing severe drought stress by scheduling consistent watering'
    ],
    chemicalControlFa: [
      'مانکوزب به میزان ۲ کیلوگرم در هکتار در مراحل اولیه بیماری',
      'ایپودیون کاربندازیم به میزان ۱.۵ لیتر در هکتار'
    ],
    chemicalControlEn: [
      'Mancozeb 80% WP at 2 kg/ha during initial infection signs',
      'Iprodione + Carbendazim at 1.5 L/ha'
    ]
  },
  {
    id: 'barnyard_grass',
    nameFa: 'علف هرز سوروف (مهم‌ترین علف هرز شالیزار)',
    nameEn: 'Barnyard Grass',
    scientificName: 'Echinochloa crus-galli',
    category: 'weed',
    affectedParts: ['root', 'stem', 'leaf'],
    riskLevel: 'high',
    symptomsFa: [
      'شباهت ظاهری بسیار زیاد به بوته برنج در مراحل اولیه رشد اما فاقد گوشواره و زبانک در محل اتصال غلاف به پهنک',
      'رقابت شدید با نشاء برنج بر سر جذب نیتروژن، فسفر، آب و نور آفتاب',
      'کاهش عملکرد شلتوک تا ۴۰ الی ۶۰ درصد در صورت عدم مبارزه'
    ],
    symptomsEn: [
      'Mimics rice seedlings in early stages but lacks ligules and auricles at blade-sheath collar',
      'Aggressive nutrient, light and water competitor with rice tillers',
      'Reduces paddy yield by up to 40-60% if left unmanaged'
    ],
    favorableConditionsFa: 'تسطیح نبودن شالیزار و بیرون ماندن خاک از آب، عدم مدیریت آب به صورت پیوسته در هفته‌های اول نشاکاری',
    favorableConditionsEn: 'Uneven field topography exposing mud patches, shallow water gaps during initial weeks',
    preventionFa: [
      'تسطیح دقیق زمین و گل‌خرابی یکنواخت پیش از نشاکاری',
      'حفظ ارتفاع آب در حدود ۵ تا ۷ سانتی‌متر پس از نشا جهت خفه کردن بذور علف‌های هرز',
      'وجین دستی سنتی یا استفاده از چرخ وجین‌کن مکانیزه'
    ],
    preventionEn: [
      'Precision laser land leveling and thorough puddling before transplanting',
      'Continuous 5-7 cm standing water layer after transplanting to drown weed emergence',
      'Manual hand weeding or rotary motorized paddy weeders'
    ],
    chemicalControlFa: [
      'علف‌کش بوتاکلر (ماچتی) به میزان ۳ تا ۴ لیتر در هکتار قبل یا چند روز پس از نشاکاری با حفظ آب شالیزار',
      'پره‌تیلاکلر (ریفیت) به میزان ۱.۵ تا ۲ لیتر در هکتار',
      'بنسولفورون متیل (لونداکس) به میزان ۵۰ تا ۷۵ گرم در هکتار مخلوط با ماسه یا کود سرک'
    ],
    chemicalControlEn: [
      'Butachlor (Machete 60% EC) at 3-4 L/ha applied to standing water 3-5 days post-transplanting',
      'Pretilachlor (Rifit 50% EC) at 1.5-2 L/ha',
      'Bensulfuron-methyl (Londax) at 50-75 g/ha applied mixed with sand or topdress urea'
    ]
  }
];
