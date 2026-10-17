import { CropStage } from '../types';

export const CROP_STAGES: CropStage[] = [
  {
    id: 'seed_prep',
    stepNumber: 1,
    titleFa: 'بذرگیری، سبک‌سنگین و ضدعفونی بذر',
    titleEn: 'Seed Selection & Disinfection',
    jalaliMonthFa: 'نیمه اول فروردین',
    jalaliMonthEn: 'Early April',
    durationDays: '۳ الی ۵ روز',
    waterDepthCm: 'غوطه‌وری در وان / گونی',
    summaryFa: 'انتخاب بذر مرغوب و خالص، جداسازی بذرهای پوک با آب‌نمک غلیظ و ضدعفونی شیمیایی با قارچ‌کش جهت مهار باکانائه و بلاست اولیه.',
    summaryEn: 'Sorting viable seed with saltwater density test and chemical fungicide dressing to suppress bakanae and early blast.',
    criticalTasksFa: [
      'آزمون آب‌نمک با تخم‌مرغ تازه (تخم‌مرغ باید به اندازه یک سکه روی سطح آب قرار گیرد)',
      'شستشوی فوری بذور سنگین با آب شیرین جهت زدودن کامل اثر نمک',
      'ضدعفونی بذر به مدت ۲۴ تا ۴۸ ساعت در محلول بنومیل یا کربوکسین تیرام (۲ گرم در لیتر)',
      'خیساندن در کیسه‌های کنفی و گرم نگه‌داشتن تا ظاهر شدن جوانه قلابی شکل سفید رنگ'
    ],
    criticalTasksEn: [
      'Saltwater test using fresh egg buoyancy benchmark (egg floats showing coin-sized area)',
      'Immediate fresh water rinse of heavy sunk seeds to remove all residual salt',
      'Soaking seeds 24-48 hours in Benomyl or Carboxin-Thiram solution (2g/L)',
      'Incubating in moist burlap sacks at 25-30°C until white hook-shaped radicle sprouts'
    ],
    fertilizerTipsFa: 'در این مرحله کود مصرف نمی‌شود؛ تنها جذب اکسیژن و دمای ملایم (۲۵-۳۰ درجه) برای جوانه‌زنی یکدست کافی است.',
    fertilizerTipsEn: 'No chemical fertilizers used at this stage; focus on oxygenation and steady 25-30°C warmth.',
    warningAlertFa: 'اگر دمای خیساندن از ۳۵ درجه فراتر رود بذرها ترشیده و فاسد می‌شوند؛ روزانه کیسه‌ها را زیر و رو کنید.',
    warningAlertEn: 'If soaking temp exceeds 35°C seeds ferment and die; turn and aerate burlap bags daily.'
  },
  {
    id: 'nursery',
    stepNumber: 2,
    titleFa: 'احداث و مراقبت خزانه (توم‌جار)',
    titleEn: 'Nursery Bed & Seedling Rearing',
    jalaliMonthFa: 'نیمه دوم فروردین تا اوایل اردیبهشت',
    jalaliMonthEn: 'Mid to Late April',
    durationDays: '۲۵ الی ۳۰ روز',
    waterDepthCm: '۱ الی ۳ سانتی‌متر (تنظیم رطوبت)',
    summaryFa: 'کاشت بذر جوانه‌زده در کرت‌های خزانه زیر پوشش نایلونی و تنظیم دما و رطوبت تا رسیدن نشاء به مرحله ۴ برگی.',
    summaryEn: 'Sowing pre-germinated seed in raised nursery beds under plastic tunnels, regulating ventilation until 4-leaf stage.',
    criticalTasksFa: [
      'آماده‌سازی بستر خزانه با خاک پودر شده و اضافه کردن کود فسفاته و ازته پایه',
      'بذرپاشی یکنواخت (۴۰ الی ۵۰ گرم بذر در هر متر مربع)',
      'کشیدن نایلون جهت حفظ گرما و جلوگیری از سرمازدگی شبانه',
      'هواگیری خزانه از روز دهم به بعد با بالا زدن حاشیه‌های نایلون در ساعات گرم روز'
    ],
    criticalTasksEn: [
      'Preparing fine raised beds with decomposed organic matter and starter phosphorus',
      'Even broadcast sowing (40-50g seed per square meter)',
      'Tensioning clear plastic tunnels to guard against chilly northern spring nights',
      'Gradual hardening off by lifting plastic sides during warm afternoon hours after day 10'
    ],
    fertilizerTipsFa: 'مصرف کود اوره به میزان کم (۱۰ تا ۱۵ گرم در متر مربع) ۱۰ روز قبل از کندن نشاء جهت تقویت رنگدانه کلروفیل.',
    fertilizerTipsEn: 'Light topdressing of urea (10-15g/m²) 10 days before pulling to boost vigor and root strength.',
    warningAlertFa: 'بسته ماندن نایلون در روزهای آفتابی باعث داغ شدن بستر و پخته شدن نشاءها می‌شود!',
    warningAlertEn: 'Leaving plastic sealed on hot sunny days overheats bed and scorches young seedlings!'
  },
  {
    id: 'field_prep',
    stepNumber: 3,
    titleFa: 'شخم، گل‌خرابی و تسطیح زمین اصلی',
    titleEn: 'Plowing, Puddling & Laser Leveling',
    jalaliMonthFa: 'اوایل اردیبهشت',
    jalaliMonthEn: 'Early May',
    durationDays: '۷ الی ۱۰ روز',
    waterDepthCm: '۳ الی ۵ سانتی‌متر (گل نرم)',
    summaryFa: 'شخم اولیه و ثانویه با تیلور یا تراکتور، گل‌خرابی (پادلینگ) برای کاهش نفوذپذیری آب و تسطیح لیزری یا تخته‌مالی.',
    summaryEn: 'Primary and secondary plowing, puddling to destroy soil macro-pores and prevent water seepage, and leveling.',
    criticalTasksFa: [
      'شخم دوم و پادلینگ تا گل کاملاً نرم و یکدست حاصل شود',
      'تسطیح کرت‌ها با تخته‌مالی دقیق (عدم تسطیح باعث هدررفت آب و طغیان علف هرز می‌شود)',
      'ترمیم و محکم‌کاری مرزهای بین کرت‌ها برای مهار نشت آب',
      'پخش کودهای پایه فسفاته، پتاسه و سولفات روی قبل از آخرین گل‌کشی'
    ],
    criticalTasksEn: [
      'Second plowing and churning until a smooth impermeable muddy puddle is formed',
      'Accurate board leveling (uneven hollows cause water stagnation or weed invasion)',
      'Rebuilding and compacting boundary dikes (bunds) to stop boundary leakage',
      'Broadcasting base fertilizers (triple superphosphate, potassium sulfate, zinc sulfate)'
    ],
    fertilizerTipsFa: '۱۰۰٪ کود فسفاته، ۵۰٪ کود پتاسه و یک‌سوم کود اوره به عنوان کود پایه با خاک مخلوط شود.',
    fertilizerTipsEn: 'Incorporate 100% of phosphate, 50% of potassium and 1/3 of urea into the mud bed before planting.',
    warningAlertFa: 'از شناور ماندن اسکلروت‌های قارچی و علف‌های هرز بر روی آب غفلت نکنید؛ آنها را به سمت گوشه کرت جمع‌آوری کنید.',
    warningAlertEn: 'Skim and discard floating fungal sclerotia and weed debris gathered in corners.'
  },
  {
    id: 'transplanting',
    stepNumber: 4,
    titleFa: 'نشاکاری (سنتی یا مکانیزه)',
    titleEn: 'Transplanting (Manual or Mechanical)',
    jalaliMonthFa: 'نیمه اردیبهشت',
    jalaliMonthEn: 'Mid May',
    durationDays: '۳ الی ۷ روز',
    waterDepthCm: '۲ الی ۳ سانتی‌متر',
    summaryFa: 'انتقال نشاءهای ۴ برگی با قد ۱۵-۲۰ سانتی‌متر به زمین اصلی با تراکم ۳ تا ۴ بوته در هر کپه.',
    summaryEn: 'Transferring 4-leaf robust seedlings (15-20cm tall) to muddy field at 3-4 stems per hill spacing.',
    criticalTasksFa: [
      'کاشت در عمق کم (حداکثر ۲ تا ۳ سانتی‌متر)؛ کاشت عمیق باعث کاهش چشمگیر پنجه‌زنی می‌شود',
      'رعایت فاصله بوته‌ها (۲۰×۲۰ سانتی‌متر برای ارقام محلی و ۲۰×۲۵ برای پرمحصول‌ها)',
      'حفظ آب با ارتفاع کم در کرت تا نشاءها در اثر جریان آب جابجا نشوند',
      'واکاری (پر کردن جاهای خالی احتمالی) ظرف ۴۸ ساعت پس از نشا'
    ],
    criticalTasksEn: [
      'Shallow planting (2-3 cm deep); deep planting severely retards and suppresses early tillering',
      'Strict hill spacing: 20x20 cm for heirloom varieties, 20x25 cm for vigorous high-yield types',
      'Maintain very shallow water layer (2-3 cm) so seedlings do not float away',
      'Gap filling (replacing dead or missing hills) within 48 hours'
    ],
    fertilizerTipsFa: 'تا استقرار کامل ریشه (حدود ۵ روز اول) هیچ‌گونه کود مصرف نشود تا ریشه‌ها نسوزند.',
    fertilizerTipsEn: 'Zero fertilizer in first 5 days until seedling roots firmly anchor in the anaerobic mud layer.',
    warningAlertFa: 'نشاکاری در روزهای باد شدید یا گرمای ناگهانی منجر به شوک تبخیر و خشک شدن نوک برگ‌ها می‌شود.',
    warningAlertEn: 'Transplanting during dry windy spells shocks plants causing severe tip desiccation.'
  },
  {
    id: 'tillering_weed',
    stepNumber: 5,
    titleFa: 'پنجه‌زنی، وجین و مبارزه با علف هرز',
    titleEn: 'Tillering, Weeding & Weed Control',
    jalaliMonthFa: 'اواخر اردیبهشت تا نیمه خرداد',
    jalaliMonthEn: 'Late May to Mid June',
    durationDays: '۲۵ الی ۳۰ روز',
    waterDepthCm: '۳ الی ۵ سانتی‌متر',
    summaryFa: 'مرحله حیاتی تشکیل ساقه‌های جانبی (پنجه‌ها)، کنترل علف هرز سوروف با علف‌کش و وجین اول و دوم.',
    summaryEn: 'Critical vegetative tillering stage; weed suppression of barnyard grass with herbicides and hand weeding.',
    criticalTasksFa: [
      'مصرف علف‌کش بوتاکلر یا پره‌تیلاکلر در آب ۳ تا ۵ سانتی‌متری در ۵ روز اول نشا',
      'وجین اول در روز ۱۵ تا ۲۰ پس از نشا و وجین دوم در روز ۳۰',
      'مصرف اولین نوبت کود سرک اوره همزمان با وجین اول',
      'رصد آفت کرم ساقه‌خوار نسل اول (علائم دالمرگ در بوته‌ها)'
    ],
    criticalTasksEn: [
      'Apply Butachlor or Pretilachlor in 3-5 cm standing calm water 3-5 days after planting',
      'First hand weeding 15-20 days post-transplanting, second weeding around day 30',
      'First topdressing of urea coordinated with the first weeding process',
      'Scout for first generation striped stem borer ("Dead heart" central shoot withering)'
    ],
    fertilizerTipsFa: 'یک‌سوم دیگر از سهمیه کود اوره به همراه سولفات پتاسیم سرک در این مرحله مصرف شود.',
    fertilizerTipsEn: 'Apply second 1/3 split of urea along with available potassium sulfate topdress.',
    warningAlertFa: 'تخلیه آب در زمان مصرف علف‌کش اثر آن را خنثی کرده و اجازه رویش به بذور سوروف می‌دهد.',
    warningAlertEn: 'Draining water right after herbicide nullifies weed killing barrier.'
  },
  {
    id: 'midseason_drainage',
    stepNumber: 6,
    titleFa: 'خشکاندن میان‌فصل (هوادهی ریشه)',
    titleEn: 'Mid-Season Drainage & Root Aeration',
    jalaliMonthFa: 'اواخر خرداد تا اوایل تیر',
    jalaliMonthEn: 'Late June',
    durationDays: '۵ الی ۷ روز',
    waterDepthCm: 'صفر (خشکاندن تا ترک مویی)',
    summaryFa: 'قطع موقت ورود آب تا ترک‌های بسیار ریز در بستر گل ظاهر شود؛ تخلیه گازهای سمی (متان و هیدروژن سولفید) و توقف پنجه‌های غیرموثر.',
    summaryEn: 'Temporary water stoppage until fine hairline soil cracks appear; expels toxic soil gases and stops unproductive tillers.',
    criticalTasksFa: [
      'تخلیه کامل آب کرت‌ها به مدت ۵ تا ۷ روز بسته به دمای هوا و بافت خاک',
      'رسیدن اکسیژن به اعماق ریشه و تحریک ریشه‌زایی عمقی',
      'جلوگیری از تشکیل پنجه‌های ضعیف و بی‌ثمر که مانع نورگیری خوشه اصلی هستند',
      'بررسی زمین؛ به محض ایجاد ترک‌های مویی باریک سریعاً آب‌اندازی مجدد انجام شود'
    ],
    criticalTasksEn: [
      'Full drainage for 5-7 days depending on temperature and clay density',
      'Oxygenating deep root layer to stimulate vigorous vertical root branching',
      'Arresting late weak non-productive tillers to conserve plant energy for main panicles',
      'Re-flood immediately once hairline cracks appear without allowing deep soil fissure splits'
    ],
    fertilizerTipsFa: 'پس از پایان خشکاندن و آب‌اندازی مجدد، آخرین سهمیه کود اوره و پتاسیم و سیلیکات مصرف شود.',
    fertilizerTipsEn: 'Immediately after re-flooding, apply final nitrogen topdress alongside potassium silicate.',
    warningAlertFa: 'اجازه ندهید ترک‌های خاک عمیق شوند و ریشه‌ها پاره شوند؛ این کار شوک جبران‌ناپذیری به بوته وارد می‌کند.',
    warningAlertEn: 'Do NOT let cracks widen into deep splits that sever roots; strictly hairline surface cracks only.'
  },
  {
    id: 'booting_heading',
    stepNumber: 7,
    titleFa: 'آبستنی، خوشه‌دهی و گرده‌افشانی',
    titleEn: 'Booting, Heading & Flowering',
    jalaliMonthFa: 'تیر ماه',
    jalaliMonthEn: 'July',
    durationDays: '۲۰ الی ۲۵ روز',
    waterDepthCm: '۵ الی ۷ سانتی‌متر ثابت',
    summaryFa: 'حساس‌ترین مرحله نسبت به تنش آبی و بیماری بلاست گردن؛ باز شدن سنبلچه‌ها، لقاح و شروع شیری شدن دانه‌ها.',
    summaryEn: 'Most sensitive phase to water deficit and neck blast; flowering spikelets open, fertilize and begin milk stage.',
    criticalTasksFa: [
      'تثبیت ارتفاع آب در کرت (۵ تا ۷ سانتی‌متر)؛ تنش بی‌آبی در این مرحله موجب پوکی ۵۰٪ خوشه‌ها می‌شود',
      'محلول‌پاشی کودهای غنی از سیلیکات پتاسیم جهت افزایش مقاومت مکانیکی ساقه و گردن خوشه',
      'سمپاشی پیشگیرانه قارچ‌کش بیم (تریکلازول) جهت مصونیت در برابر بلاست گردن خوشه',
      'پایش دقیق نسل دوم کرم ساقه‌خوار و پروانه‌ها'
    ],
    criticalTasksEn: [
      'Maintain steady 5-7 cm standing water; any drought now causes up to 50% grain sterility/emptiness',
      'Foliar potassium silicate application to fortify panicle neck against fungal penetration and wind snap',
      'Preventive spray of Tricyclazole (Beam) right before heading emerges to prevent neck blast',
      'Scout for 2nd generation stem borer larvae and moth egg masses'
    ],
    fertilizerTipsFa: 'محلول‌پاشی کلات روی و ریزمغذی‌ها در مرحله آبستنی وزن هزار دانه و درخشندگی برنج را به شدت افزایش می‌دهد.',
    fertilizerTipsEn: 'Zinc chelate foliar spray during booting stage substantially boosts 1000-grain weight and gloss.',
    warningAlertFa: 'در زمان گرده‌افشانی فعال (ساعات ۱۰ صبح تا ۲ بعدازظهر) از سمپاشی بپرهیزید تا گرده‌ها آسیب نبینند.',
    warningAlertEn: 'Do not spray chemicals between 10am and 2pm during active flowering anthesis.'
  },
  {
    id: 'harvest_raton',
    stepNumber: 8,
    titleFa: 'رسیدگی دانه‌ها، درو و پرورش راتون',
    titleEn: 'Ripening, Harvesting & Ratooning',
    jalaliMonthFa: 'مرداد تا شهریور',
    jalaliMonthEn: 'August to September',
    durationDays: '۳۰ الی ۴۰ روز',
    waterDepthCm: 'خشک (قطع آب ۱۰ روز قبل درو)',
    summaryFa: 'زرد شدن ۸۵ الی ۹۰ درصد سنبلچه‌ها، قطع کامل آبیاری جهت سفت شدن زمین، درو با کمباین مخصوص شالیزار و در صورت امکان کوددهی برای کشت دوم دونوج (راتون).',
    summaryEn: '85-90% panicles turn golden yellow, cut irrigation 10-14 days prior to harvest for combine traction; optional ratooning.',
    criticalTasksFa: [
      'قطع کامل آب ۱۰ الی ۱۴ روز پیش از درو تا بستر خاک شالیزار برای تردد کمباین سفت شود',
      'تنظیم دقیق دور استوانه کوبنده کمباین جهت جلوگیری از ترک خوردن و خرد شدن دانه شلتوک',
      'انتقال فوری شلتوک به خشک‌کن شالیکوبی (رطوبت باید ظرف ۲۴ ساعت به زیر ۱۴٪ کاهش یابد)',
      'برای پرورش راتون (دونوج): خرد کردن منظم کاه، پخش ۵۰ کیلو کود اوره در هکتار و آبیاری مجدد'
    ],
    criticalTasksEn: [
      'Cut water 10-14 days prior to harvest to firm ground for harvester tracks',
      'Calibrate combine cylinder threshing speed to avoid internal microscopic fissure grain cracks',
      'Immediate delivery of harvested paddy to kiln dryers to drop moisture below 14% within 24 hours',
      'For second-growth ratooning (Donooj): spread 50kg urea/ha, maintain shallow irrigation'
    ],
    fertilizerTipsFa: 'در راتون (کشت دوم): ۵۰ کیلوگرم اوره به ازای هر هکتار بلافاصله پس از دروی اول موجب جوانه‌زنی شاخه‌های جدید می‌شود.',
    fertilizerTipsEn: 'For ratoon crop: 50 kg urea/ha right after primary harvest spurs vigorous secondary tillers.',
    warningAlertFa: 'تأخیر در خشک‌کردن شلتوک مرطوب باعث کپک‌زدگی، بوی نامطبوع و زردی دانه برنج می‌شود.',
    warningAlertEn: 'Delaying drying of wet threshed paddy causes fungal mold, musty odor and grain yellowing.'
  }
];
