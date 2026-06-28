type Locale = 'ro' | 'ru' | 'en'

interface DoctorTranslation {
  desc: Record<Locale, string>
  bio: Record<Locale, string>
}

const doctorTranslations: Record<number, DoctorTranslation> = {
  1: {
    desc: {
      ro: 'Medic Dentist – Estetică și Protetică Dentară',
      ru: 'Врач-стоматолог – Эстетика и протезирование',
      en: 'Dentist – Aesthetic & Prosthetic Dentistry',
    },
    bio: {
      ro: '„Un zâmbet frumos începe cu o dantură sănătoasă. Scopul meu este să ofer fiecărui pacient o experiență relaxantă, sigură și rezultate care să le redea încrederea în sine."\n\nDr. Eliza Reed este specialistul nostru în tratamente minim invazive și estetică dentară. Cu o abordare caldă și o atenție deosebită la detalii, ea reușește să transforme vizitele la stomatolog în experiențe confortabile și fără stres pentru pacienți de toate vârstele.',
      ru: '«Красивая улыбка начинается со здоровых зубов. Моя цель — подарить каждому пациенту расслабляющий, безопасный опыт и результаты, которые вернут им уверенность в себе.»\n\nДр. Элиза Рид — наш специалист по малоинвазивным процедурам и эстетической стоматологии. Благодаря тёплому подходу и особому вниманию к деталям она превращает визиты к стоматологу в комфортные и безстрессовые процедуры для пациентов всех возрастов.',
      en: '"A beautiful smile starts with healthy teeth. My goal is to give every patient a relaxing, safe experience and results that restore their confidence."\n\nDr. Eliza Reed is our specialist in minimally invasive treatments and dental aesthetics. With a warm approach and keen attention to detail, she transforms dental visits into comfortable, stress-free experiences for patients of all ages.',
    },
  },
  2: {
    desc: {
      ro: 'Medic Dentist – Ortodonție și Pediatrică',
      ru: 'Врач-стоматолог – Ортодонтия и педиатрия',
      en: 'Dentist – Orthodontics & Pediatric Dentistry',
    },
    bio: {
      ro: '„Un zâmbet complet și funcțional este temelia sănătății tale. Scopul meu este să ofer soluții chirurgicale de înaltă precizie, transformând procedurile complexe în tratamente sigure, predictibile și complet lipsite de disconfort."\n\nDr. Adrian Dumitrescu este specialistul nostru în chirurgie orală și restaurări complexe prin implanturi dentare. Îmbinând tehnologia de ultimă generație cu o empatie profundă față de pacient, el reușește să înlăture teama de intervenții chirurgicale și să redea funcționalitatea și frumusețea zâmbetului chiar și în cele mai dificile cazuri.',
      ru: '«Полная и функциональная улыбка — основа вашего здоровья. Моя цель — предлагать высокоточные хирургические решения, превращая сложные процедуры в безопасные, предсказуемые и полностью безболезненные лечения.»\n\nДр. Адриан Думитреску — наш специалист по хирургии полости рта и сложным реставрациям с использованием зубных имплантов. Сочетая передовые технологии с глубокой эмпатией к пациентам, он устраняет страх перед операциями и возвращает функциональность и красоту улыбки даже в самых сложных случаях.',
      en: '"A complete and functional smile is the foundation of your health. My goal is to provide high-precision surgical solutions, turning complex procedures into safe, predictable and completely comfortable treatments."\n\nDr. Adrian Dumitrescu is our specialist in oral surgery and complex restorations through dental implants. Combining cutting-edge technology with deep patient empathy, he removes the fear of surgical procedures and restores smile functionality and beauty even in the most difficult cases.',
    },
  },
  3: {
    desc: {
      ro: 'Medic Dentist – Specializată în Profilaxie și Estetică Dentară',
      ru: 'Врач-стоматолог – Профилактика и эстетическая стоматология',
      en: 'Dentist – Prophylaxis & Aesthetic Dentistry',
    },
    bio: {
      ro: '„Zâmbetul unui copil este cea mai pură formă de fericire, iar misiunea mea este să îl ghidez să crească armonios și sănătos. Scopul meu este ca fiecare mic pacient sau adolescent să vină la cabinet cu drag și să plece cu un zâmbet perfect aliniat și plin de încredere."\n\nDr. Elena Radu este specialistul nostru în ortodonție și stomatologie pediatrică. Cu multă răbdare, joc și o abordare psihologică blândă, ea reușește să transforme teama de dentist într-o prietenie de lungă durată, oferind în același timp tratamente moderne pentru corectarea mușcăturii și dezvoltarea corectă a arcadelor dentare.',
      ru: '«Улыбка ребёнка — самая чистая форма счастья, и моя миссия — помочь ей вырасти гармоничной и здоровой. Моя цель — чтобы каждый маленький пациент или подросток приходил в кабинет с удовольствием и уходил с идеально выровненной, уверенной улыбкой.»\n\nДр. Елена Раду — наш специалист по ортодонтии и детской стоматологии. С большим терпением, игрой и мягким психологическим подходом она превращает страх перед стоматологом в долгосрочную дружбу, предлагая при этом современные методы лечения для коррекции прикуса и правильного развития зубных рядов.',
      en: '"A child\'s smile is the purest form of happiness, and my mission is to guide it to grow harmoniously and healthily. My goal is for every young patient or teenager to come to the clinic eagerly and leave with a perfectly aligned, confident smile."\n\nDr. Elena Radu is our specialist in orthodontics and pediatric dentistry. With great patience, play, and a gentle psychological approach, she transforms the fear of the dentist into a lasting friendship, while offering modern treatments for bite correction and proper dental arch development.',
    },
  },
  4: {
    desc: {
      ro: 'Medic Primar Chirurgie Orală și Implantologie',
      ru: 'Врач высшей категории – Хирургия полости рта и имплантология',
      en: 'Senior Oral Surgeon & Implantologist',
    },
    bio: {
      ro: '„Un zâmbet complet și funcțional este temelia sănătății tale. Scopul meu este să ofer soluții chirurgicale de înaltă precizie, transformând procedurile complexe în tratamente sigure, predictibile și lipsite de disconfort."\n\nDr. Adrian Dumitrescu este specialistul nostru în chirurgie orală și restaurări complexe prin implanturi dentare. Îmbinând tehnologia modernă cu empatia față de pacient, el redă funcționalitatea și frumusețea zâmbetului chiar și în cazuri dificile.',
      ru: '«Полная и функциональная улыбка — основа вашего здоровья. Моя цель — предлагать высокоточные хирургические решения, превращая сложные процедуры в безопасные, предсказуемые и комфортные лечения.»\n\nДр. Адриан Думитреску — наш специалист по хирургии полости рта и сложным реставрациям с использованием зубных имплантов. Сочетая современные технологии с эмпатией к пациентам, он возвращает функциональность и красоту улыбки даже в сложных случаях.',
      en: '"A complete and functional smile is the foundation of your health. My goal is to provide high-precision surgical solutions, turning complex procedures into safe, predictable and comfortable treatments."\n\nDr. Adrian Dumitrescu is our specialist in oral surgery and complex restorations through dental implants. Combining modern technology with patient empathy, he restores smile functionality and beauty even in difficult cases.',
    },
  },
}

export function translateDoctorField(
  field: 'desc' | 'bio',
  doctorId: number,
  locale: string,
  fallback: string
): string {
  const translation = doctorTranslations[doctorId]
  if (!translation) return fallback

  const loc = (locale === 'ro' || locale === 'ru' || locale === 'en') ? locale : 'ro'
  return translation[field][loc] ?? fallback
}