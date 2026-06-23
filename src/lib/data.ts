import { getDictionary, TranslationKey } from "./translations";

// Define type for the localization dictionary with index signature
type Dictionary = {
  [key: string]: string;
};

export type Service = {
  id: string;
  "price-en": number;
  "price-he": number;
  "price-it": number;
  duration: number;
  nameKey: string; // Note: keep as string, as keys are dynamic
  descKey: string;
  imageUrl?: string;
  name?: string;
  description?: string;
};

export interface Master {
  id: string;
  nameKey: string;
  specializationKey: string;
  infoKey: string;
  services: string[];
  image: string;
  hint: string;
  name?: string;
  specialization?: string;
  info?: string;
}

// Define your images for masters keyed by id for consistency
const masterImages: Record<string, string> = {
  "aviva-mar": "/images/masters/aviva-mar.webp",
  "sharon-katz": "/images/masters/sharon-katz.webp",
  "mark-franklin": "/images/masters/mark-franklin.webp",
  "maria-garcia": "/images/masters/maria-garcia.webp",
};

// List of services
const rawServices: Service[] = [
  {
    id: "laser_epilation",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 60,
    nameKey: "service_hairdressing_name",
    descKey: "service_hairdressing_desc",
    imageUrl: "/images/service-images/laser-hair-removal.webp",
  },
  {
    id: "male_laser_epilation",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 75,
    nameKey: "service_laser_hair_removal_name",
    descKey: "service_laser_hair_removal_desc",
    imageUrl: "/images/service-images/laser-hair-removal.webp",
  },
  {
    id: "needle_epilation",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 45,
    nameKey: "service_manicure_name",
    descKey: "service_manicure_desc",
    imageUrl: "/images/service-images/needle-epilation.webp",
  },
  {
    id: "skin_care",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 60,
    nameKey: "service_facial_name",
    descKey: "service_facial_desc",
    imageUrl: "/images/service-images/facial.webp",
  },
  {
    id: "regional_slimming",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 60,
    nameKey: "service_makeup_name",
    descKey: "service_makeup_desc",
    imageUrl: "/images/service-images/regional-slimming.webp",
  },
  {
    id: "ems",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 40,
    nameKey: "service_brow_shaping_name",
    descKey: "service_brow_shaping_desc",
    imageUrl: "/images/service-images/ems.webp",
  },
  {
    id: "permanent_makeup",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 90,
    nameKey: "service_hair_coloring_name",
    descKey: "service_hair_coloring_desc",
    imageUrl: "/images/service-images/makeup.webp",
  },
  {
    id: "microblading",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 60,
    nameKey: "service_hot_stone_massage_name",
    descKey: "service_hot_stone_massage_desc",
    imageUrl: "/images/service-images/microblading.webp",
  },
  {
    id: "prosthetic_nails",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 70,
    nameKey: "service_body_wrap_name",
    descKey: "service_body_wrap_desc",
    imageUrl: "/images/service-images/manicure.webp",
  },
  {
    id: "dermapen",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 60,
    nameKey: "service_aromatherapy_name",
    descKey: "service_aromatherapy_desc",
    imageUrl: "/images/service-images/facial.webp",
  },
  {
    id: "free_skin_analysis",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 20,
    nameKey: "service_skin_analysis_name",
    descKey: "service_skin_analysis_desc",
    imageUrl: "/images/service-images/skin-analysis.webp",
  },
  {
    id: "golden_ratio_brow",
    "price-en": 0,
    "price-he": 0,
    "price-it": 0,
    duration: 30,
    nameKey: "service_golden_ratio_brow_name",
    descKey: "service_golden_ratio_brow_desc",
    imageUrl: "/images/service-images/brow-shaping.webp",
  },
];

export const rawMasters: Master[] = [
  {
    id: "aviva-mar",
    nameKey: "master_aviva_name",
    specializationKey: "master_aviva_specialization",
    infoKey: "master_aviva_info",
    services: ["laser_epilation", "male_laser_epilation", "needle_epilation"],
    image: "",
    hint: "GY",
  },
  {
    id: "sharon-katz",
    nameKey: "master_sharon_name",
    specializationKey: "master_sharon_specialization",
    infoKey: "master_sharon_info",
    services: [
      "skin_care",
      "dermapen",
      "free_skin_analysis",
      "permanent_makeup",
      "microblading",
      "prosthetic_nails",
      "golden_ratio_brow",
    ],
    image: "",
    hint: "NE",
  },
  {
    id: "mark-franklin",
    nameKey: "master_mark_name",
    specializationKey: "master_mark_specialization",
    infoKey: "master_mark_info",
    services: ["laser_epilation", "male_laser_epilation", "regional_slimming", "ems"],
    image: "",
    hint: "DA",
  },
];

export async function getLocalizedData(locale: string) {
  const dict = (await getDictionary(locale)) as Dictionary;
  const currencySymbol = dict["currency_symbol"] || "$";

  const services = rawServices.map((s) => ({
    ...s,
    name: s.nameKey ? dict[s.nameKey] || s.id : s.id,
    description: s.descKey ? dict[s.descKey] || "Description not available" : "Description not available",
  }));

  const masters = rawMasters.map((m) => ({
    ...m,
    name: dict[m.nameKey] || m.id,
    specialization: dict[m.specializationKey] || "Specialist",
    info: dict[m.infoKey] || "",
  }));

  return { services, masters, currencySymbol };
}
