export const procedureTranslations: Record<string, Record<string, string>> = {
  "Consultație primară + Plan de tratament": {
    ro: "Consultație primară + Plan de tratament",
    en: "Primary consultation + Treatment plan",
    ru: "Первичная консультация + План лечения",
  },
  "Radiografie retroalveolară / digitală": {
    ro: "Radiografie retroalveolară / digitală",
    en: "Retroalveolar / digital X-ray",
    ru: "Ретроальвеолярный / цифровой рентген",
  },
  "Pachet Igienizare Completă (Detartraj, Periaj, Airflow)": {
    ro: "Pachet Igienizare Completă (Detartraj, Periaj, Airflow)",
    en: "Complete Hygiene Package (Scaling, Brushing, Airflow)",
    ru: "Полный пакет гигиены (Снятие камня, Чистка, Airflow)",
  },
  "Fluorizare profesională (ambele arcade)": {
    ro: "Fluorizare profesională (ambele arcade)",
    en: "Professional fluoridation (both arches)",
    ru: "Профессиональное фторирование (обе дуги)",
  },
  "Obturație fizionomică (Plombă) - suprafață mică": {
    ro: "Obturație fizionomică (Plombă) - suprafață mică",
    en: "Aesthetic filling - small surface",
    ru: "Эстетическая пломба - небольшая поверхность",
  },
  "Obturație fizionomică (Plombă) - cavitate medie/mare": {
    ro: "Obturație fizionomică (Plombă) - cavitate medie/mare",
    en: "Aesthetic filling - medium/large cavity",
    ru: "Эстетическая пломба - средняя/большая полость",
  },
  "Reconstrucţie dinte cu pivot din fibră de sticlă": {
    ro: "Reconstrucţie dinte cu pivot din fibră de sticlă",
    en: "Tooth reconstruction with fiberglass post",
    ru: "Восстановление зуба со стекловолоконным штифтом",
  },
  "Coafaj direct/indirect (protecţia pulpei la carii adânci)": {
    ro: "Coafaj direct/indirect (protecţia pulpei la carii adânci)",
    en: "Direct/indirect pulp capping (deep cavity protection)",
    ru: "Прямое/косвенное покрытие пульпы (защита при глубоком кариесе)",
  },
  "Tratament endodontic monoradicular (1 canal)": {
    ro: "Tratament endodontic monoradicular (1 canal)",
    en: "Single-root canal treatment (1 canal)",
    ru: "Эндодонтическое лечение однокорневое (1 канал)",
  },
  "Tratament endodontic biradicular (2 canale)": {
    ro: "Tratament endodontic biradicular (2 canale)",
    en: "Two-root canal treatment (2 canals)",
    ru: "Эндодонтическое лечение двухкорневое (2 канала)",
  },
  "Tratament endodontic pluriradicular (3-4 canale)": {
    ro: "Tratament endodontic pluriradicular (3-4 canale)",
    en: "Multi-root canal treatment (3-4 canals)",
    ru: "Эндодонтическое лечение многокорневое (3-4 канала)",
  },
  "Retratament endodontic (despobturare și dezinfectare canal)": {
    ro: "Retratament endodontic (despobturare și dezinfectare canal)",
    en: "Endodontic retreatment (canal debridement and disinfection)",
    ru: "Повторное эндодонтическое лечение (распломбировка и дезинфекция)",
  },
  "Extracție dinte monoradicular / simplă": {
    ro: "Extracție dinte monoradicular / simplă",
    en: "Single-root / simple tooth extraction",
    ru: "Удаление однокорневого / простого зуба",
  },
  "Extracție molar de minte (inclus sau semi-inclus)": {
    ro: "Extracție molar de minte (inclus sau semi-inclus)",
    en: "Wisdom tooth extraction (impacted or semi-impacted)",
    ru: "Удаление зуба мудрости (ретинированного или полуретинированного)",
  },
  "Implant Dentar (partea chirurgicală, brand standard)": {
    ro: "Implant Dentar (partea chirurgicală, brand standard)",
    en: "Dental Implant (surgical phase, standard brand)",
    ru: "Дентальный имплант (хирургическая фаза, стандартный бренд)",
  },
  "Adiție de os / Sinus Lift (procedură de chirurgie osoasă)": {
    ro: "Adiție de os / Sinus Lift (procedură de chirurgie osoasă)",
    en: "Bone graft / Sinus Lift (bone surgery procedure)",
    ru: "Костная пластика / Синус-лифтинг (хирургическая процедура)",
  },
  "Coroană metalo-ceramică": {
    ro: "Coroană metalo-ceramică",
    en: "Metal-ceramic crown",
    ru: "Металлокерамическая коронка",
  },
  "Coroană zirconiu (fizionomie premium)": {
    ro: "Coroană zirconiu (fizionomie premium)",
    en: "Zirconia crown (premium aesthetics)",
    ru: "Циркониевая коронка (премиум эстетика)",
  },
  "Fațetă ceramică (E-max)": {
    ro: "Fațetă ceramică (E-max)",
    en: "Ceramic veneer (E-max)",
    ru: "Керамический винир (E-max)",
  },
  "Albire profesională în cabinet (cu lampă LED)": {
    ro: "Albire profesională în cabinet (cu lampă LED)",
    en: "Professional in-office whitening (LED lamp)",
    ru: "Профессиональное отбеливание в кабинете (LED-лампа)",
  },
}

export function translateProcedure(name: string, locale: string): string {
  return procedureTranslations[name]?.[locale] ?? name
}