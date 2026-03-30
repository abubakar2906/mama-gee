import { parseToCents } from "./formatCurrency";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  image: string;
  category: MenuCategory;
  badge?: string;           // e.g. "Bestseller", "Spicy", "Soul Food"
  badgeColor?: "green" | "orange";
}

export type MenuCategory =
  | "swallows"
  | "rice"
  | "soups"
  | "proteins"
  | "sides"
  | "drinks";

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  swallows:  "Swallows",
  rice:      "Rice Dishes",
  soups:     "Soups",
  proteins:  "Proteins",
  sides:     "Small Chops & Sides",
  drinks:    "Drinks",
};

export const CATEGORY_ORDER: MenuCategory[] = [
  "swallows",
  "rice",
  "soups",
  "proteins",
  "sides",
  "drinks",
];

// TODO: Replace placeholder images with real Mama Gee photography
export const menuItems: MenuItem[] = [
  // ── Swallows ──────────────────────────────────────────
  {
    id: "pounded-yam",
    name: "Pounded Yam",
    description:
      "Soft, fluffy, and smooth traditional yam mash. Perfectly paired with any of our signature soups.",
    priceCents: parseToCents(12.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwc6jFT6zVjEvYUkOEj814JTD-4cxZ-wicVwUQZ482KiqWPa5Dtr2zAOp9km3wIQ9rv3F5BbutNk39kUWJZddZpufPRlS1Rh_olSItaU8Xsi_r9Fj7rG_6Czwl474BHSer1LEL9671ZSZ2eftRhWJRlrLsrr4bqr-5HY1n3rblIxJtOmPynbulMJjW4DK8PBYZGXuFiIDCAf63UaUd7-kaF22aSuF-s2aDkqNLrfHXM9_KXeMw5gwego081FatGMGMO76xA8FzBaiB",
    category: "swallows",
    badge: "Bestseller",
    badgeColor: "green",
  },
  {
    id: "eba",
    name: "Eba (Garri)",
    description:
      "Firm cassava dough with a subtle smoky flavour. The staple choice for soup lovers across Nigeria.",
    priceCents: parseToCents(9.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwc6jFT6zVjEvYUkOEj814JTD-4cxZ-wicVwUQZ482KiqWPa5Dtr2zAOp9km3wIQ9rv3F5BbutNk39kUWJZddZpufPRlS1Rh_olSItaU8Xsi_r9Fj7rG_6Czwl474BHSer1LEL9671ZSZ2eftRhWJRlrLsrr4bqr-5HY1n3rblIxJtOmPynbulMJjW4DK8PBYZGXuFiIDCAf63UaUd7-kaF22aSuF-s2aDkqNLrfHXM9_KXeMw5gwego081FatGMGMO76xA8FzBaiB",
    category: "swallows",
  },
  {
    id: "fufu",
    name: "Fufu",
    description:
      "Silky smooth fermented cassava swallow. A traditional favourite that pairs beautifully with any of our soups.",
    priceCents: parseToCents(10.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwc6jFT6zVjEvYUkOEj814JTD-4cxZ-wicVwUQZ482KiqWPa5Dtr2zAOp9km3wIQ9rv3F5BbutNk39kUWJZddZpufPRlS1Rh_olSItaU8Xsi_r9Fj7rG_6Czwl474BHSer1LEL9671ZSZ2eftRhWJRlrLsrr4bqr-5HY1n3rblIxJtOmPynbulMJjW4DK8PBYZGXuFiIDCAf63UaUd7-kaF22aSuF-s2aDkqNLrfHXM9_KXeMw5gwego081FatGMGMO76xA8FzBaiB",
    category: "swallows",
  },
  {
    id: "semolina",
    name: "Semolina",
    description:
      "Light golden wheat swallow with a delicate texture. The perfect pairing for rich, hearty soups.",
    priceCents: parseToCents(10.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwc6jFT6zVjEvYUkOEj814JTD-4cxZ-wicVwUQZ482KiqWPa5Dtr2zAOp9km3wIQ9rv3F5BbutNk39kUWJZddZpufPRlS1Rh_olSItaU8Xsi_r9Fj7rG_6Czwl474BHSer1LEL9671ZSZ2eftRhWJRlrLsrr4bqr-5HY1n3rblIxJtOmPynbulMJjW4DK8PBYZGXuFiIDCAf63UaUd7-kaF22aSuF-s2aDkqNLrfHXM9_KXeMw5gwego081FatGMGMO76xA8FzBaiB",
    category: "swallows",
  },

  // ── Rice Dishes ───────────────────────────────────────
  {
    id: "smoky-jollof",
    name: "Smoky Jollof Rice",
    description:
      "The legendary West African rice dish. Long-grain rice simmered in a rich tomato and bell pepper base with party-style smokiness.",
    priceCents: parseToCents(14.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJwcOj8P-yZrgy0J5971HDDuO4u8BGpYkQX-cOeni_6LuuYE4GV3rpv46T4zA_16BmDG0nAc4JMJcE3mFjUek3kVYJYMljgBnGcNVEX3U7HaKuTMBB_cnlqAEZlK8BoXy_JpVNuUEU5HJObeTpKanzLjMR9DJyq3_gLrxiQ66a602yN_aBDpsD2c3xz1nUnqX5i6UN7pAhV04uVwItMRsAbxHiuFUM160hfd4qbWxZJ6wYFQyYZVJRN8Ye2vO9seTYjUNYLlPGN3G",
    category: "rice",
    badge: "Bestseller",
    badgeColor: "green",
  },
  {
    id: "fried-rice",
    name: "Nigerian Fried Rice",
    description:
      "Fragrant rice stir-fried with mixed vegetables, liver, and perfectly seasoned with curry and thyme.",
    priceCents: parseToCents(14.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJwcOj8P-yZrgy0J5971HDDuO4u8BGpYkQX-cOeni_6LuuYE4GV3rpv46T4zA_16BmDG0nAc4JMJcE3mFjUek3kVYJYMljgBnGcNVEX3U7HaKuTMBB_cnlqAEZlK8BoXy_JpVNuUEU5HJObeTpKanzLjMR9DJyq3_gLrxiQ66a602yN_aBDpsD2c3xz1nUnqX5i6UN7pAhV04uVwItMRsAbxHiuFUM160hfd4qbWxZJ6wYFQyYZVJRN8Ye2vO9seTYjUNYLlPGN3G",
    category: "rice",
  },
  {
    id: "ofada-rice",
    name: "Ofada Rice & Sauce",
    description:
      "Indigenous unpolished rice served with rich, spicy ofada sauce made with assorted peppers and locust beans.",
    priceCents: parseToCents(16.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJwcOj8P-yZrgy0J5971HDDuO4u8BGpYkQX-cOeni_6LuuYE4GV3rpv46T4zA_16BmDG0nAc4JMJcE3mFjUek3kVYJYMljgBnGcNVEX3U7HaKuTMBB_cnlqAEZlK8BoXy_JpVNuUEU5HJObeTpKanzLjMR9DJyq3_gLrxiQ66a602yN_aBDpsD2c3xz1nUnqX5i6UN7pAhV04uVwItMRsAbxHiuFUM160hfd4qbWxZJ6wYFQyYZVJRN8Ye2vO9seTYjUNYLlPGN3G",
    category: "rice",
    badge: "Soul Food",
    badgeColor: "orange",
  },
  {
    id: "native-jollof",
    name: "Native Jollof (Palm Oil)",
    description:
      "Traditional village-style jollof rice cooked with palm oil, crayfish, and indigenous spices. A taste of the motherland.",
    priceCents: parseToCents(15.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdJwcOj8P-yZrgy0J5971HDDuO4u8BGpYkQX-cOeni_6LuuYE4GV3rpv46T4zA_16BmDG0nAc4JMJcE3mFjUek3kVYJYMljgBnGcNVEX3U7HaKuTMBB_cnlqAEZlK8BoXy_JpVNuUEU5HJObeTpKanzLjMR9DJyq3_gLrxiQ66a602yN_aBDpsD2c3xz1nUnqX5i6UN7pAhV04uVwItMRsAbxHiuFUM160hfd4qbWxZJ6wYFQyYZVJRN8Ye2vO9seTYjUNYLlPGN3G",
    category: "rice",
  },

  // ── Soups ─────────────────────────────────────────────
  {
    id: "egusi-soup",
    name: "Egusi Soup",
    description:
      "Rich melon seed soup cooked with spinach, stockfish, and aromatic Nigerian spices. The king of all soups.",
    priceCents: parseToCents(18.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkUXmKtctuMopjBv5265U2m6UD3g8ut3lCwuBKKl6M1ZgU1khm6ZdwW-bsDlAT4E5ICSlhnBfaDcyXSFPQI_Nxpb2n0dA63Qe2yuRTjvCbGacj7rho-r77-Tp5ELS8oZv-cl7BhpRKa-2CTsMblGJGGMYPJG-ctD5URe9mWn1L5jvybnG-rpfzgQqvH5GmXCseFBIMBc-E53sUl3FczxKhQKN0ic2gdzANODQCCLNY11yepHxDDi5kKOjhBzfVC26I30ccvW9ErEf4",
    category: "soups",
    badge: "Soul Food",
    badgeColor: "orange",
  },
  {
    id: "ogbono-soup",
    name: "Ogbono Soup",
    description:
      "Thick, draw soup made from ground ogbono seeds with spinach, palm oil, and an array of assorted proteins.",
    priceCents: parseToCents(18.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkUXmKtctuMopjBv5265U2m6UD3g8ut3lCwuBKKl6M1ZgU1khm6ZdwW-bsDlAT4E5ICSlhnBfaDcyXSFPQI_Nxpb2n0dA63Qe2yuRTjvCbGacj7rho-r77-Tp5ELS8oZv-cl7BhpRKa-2CTsMblGJGGMYPJG-ctD5URe9mWn1L5jvybnG-rpfzgQqvH5GmXCseFBIMBc-E53sUl3FczxKhQKN0ic2gdzANODQCCLNY11yepHxDDi5kKOjhBzfVC26I30ccvW9ErEf4",
    category: "soups",
  },
  {
    id: "efo-riro",
    name: "Efo Riro",
    description:
      "A rich Yoruba spinach stew simmered in palm oil with locust beans, scotch bonnets, and tender proteins.",
    priceCents: parseToCents(17.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkUXmKtctuMopjBv5265U2m6UD3g8ut3lCwuBKKl6M1ZgU1khm6ZdwW-bsDlAT4E5ICSlhnBfaDcyXSFPQI_Nxpb2n0dA63Qe2yuRTjvCbGacj7rho-r77-Tp5ELS8oZv-cl7BhpRKa-2CTsMblGJGGMYPJG-ctD5URe9mWn1L5jvybnG-rpfzgQqvH5GmXCseFBIMBc-E53sUl3FczxKhQKN0ic2gdzANODQCCLNY11yepHxDDi5kKOjhBzfVC26I30ccvW9ErEf4",
    category: "soups",
    badge: "Spicy",
    badgeColor: "green",
  },
  {
    id: "bitterleaf-soup",
    name: "Ofe Onugbu (Bitterleaf)",
    description:
      "Classic Igbo bitterleaf soup with cocoyam thickener, assorted meat, and stockfish. Deep, earthy, soulful.",
    priceCents: parseToCents(19.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkUXmKtctuMopjBv5265U2m6UD3g8ut3lCwuBKKl6M1ZgU1khm6ZdwW-bsDlAT4E5ICSlhnBfaDcyXSFPQI_Nxpb2n0dA63Qe2yuRTjvCbGacj7rho-r77-Tp5ELS8oZv-cl7BhpRKa-2CTsMblGJGGMYPJG-ctD5URe9mWn1L5jvybnG-rpfzgQqvH5GmXCseFBIMBc-E53sUl3FczxKhQKN0ic2gdzANODQCCLNY11yepHxDDi5kKOjhBzfVC26I30ccvW9ErEf4",
    category: "soups",
  },
  {
    id: "catfish-pepper-soup",
    name: "Catfish Pepper Soup",
    description:
      "A light, spicy, and intensely aromatic broth made with fresh catfish and indigenous herbs.",
    priceCents: parseToCents(21.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD97Rrc1BLE3VZfy9PzX937n1OwU7VKVVp5K025QXGpsjgXHmF3jTdULuQ9Z9VaO_qtWrP_2wwm5DdWVGUSLX1_PlfEGNb1wpKNhR-Bb9StqKaMvlrvROfHKf7fnl7bwgsMBANOQu2n-NMhVa1wtAmTGLZ6_fCSxpaCVdSzqDFmv5joqux91IDfbNydfcPKBsBxMHL9qBLLSSxuuM9UhmjoryoSn9L4Kv_ARJLEjNC3QKx5sqq8bierDKX5YHQPUfeB9in6bHOsFSbU",
    category: "soups",
  },

  // ── Proteins ──────────────────────────────────────────
  {
    id: "beef-suya",
    name: "Beef Suya",
    description:
      "Flame-grilled thin beef strips coated in our secret yaji spice blend. Served with fresh onions and tomatoes.",
    priceCents: parseToCents(16.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFkLHdODtwNrsGSpr6YE2YYhfnCMAdHh99ogqzE6409v9z_ivcGF6wbwjOITG40rvTzFtIF7jvgGmvNRlzTtj-3AXtoo1SSBInHhkvzShlSGaHxKaHr-mpFREy6D5D048DYLuNC-YrMs38tSnt799gUzk1GfEKEHbtePM16-l4Sr476pKLz-1mnVvbQ6aIGCP2iMOXpWqzO7QpO-R6ZHoLro3mg6SABlnGCkpwmo9kaNbIUSWOPcO6pVmNUPZx-OSYQ1j6RIMrMVC",
    category: "proteins",
    badge: "Spicy",
    badgeColor: "green",
  },
  {
    id: "peppered-chicken",
    name: "Peppered Chicken",
    description:
      "Tender grilled chicken tossed in a fiery blend of scotch bonnet peppers, onions, and bell peppers.",
    priceCents: parseToCents(14.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFkLHdODtwNrsGSpr6YE2YYhfnCMAdHh99ogqzE6409v9z_ivcGF6wbwjOITG40rvTzFtIF7jvgGmvNRlzTtj-3AXtoo1SSBInHhkvzShlSGaHxKaHr-mpFREy6D5D048DYLuNC-YrMs38tSnt799gUzk1GfEKEHbtePM16-l4Sr476pKLz-1mnVvbQ6aIGCP2iMOXpWqzO7QpO-R6ZHoLro3mg6SABlnGCkpwmo9kaNbIUSWOPcO6pVmNUPZx-OSYQ1j6RIMrMVC",
    category: "proteins",
    badge: "Spicy",
    badgeColor: "green",
  },
  {
    id: "goat-meat",
    name: "Peppered Goat Meat",
    description:
      "Slow-cooked goat meat simmered in a spicy pepper sauce. Tender, smoky, and deeply flavoured.",
    priceCents: parseToCents(18.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFkLHdODtwNrsGSpr6YE2YYhfnCMAdHh99ogqzE6409v9z_ivcGF6wbwjOITG40rvTzFtIF7jvgGmvNRlzTtj-3AXtoo1SSBInHhkvzShlSGaHxKaHr-mpFREy6D5D048DYLuNC-YrMs38tSnt799gUzk1GfEKEHbtePM16-l4Sr476pKLz-1mnVvbQ6aIGCP2iMOXpWqzO7QpO-R6ZHoLro3mg6SABlnGCkpwmo9kaNbIUSWOPcO6pVmNUPZx-OSYQ1j6RIMrMVC",
    category: "proteins",
  },
  {
    id: "grilled-fish",
    name: "Grilled Tilapia",
    description:
      "Whole tilapia marinated in a blend of herbs, peppers, and onions — grilled to perfection and served sizzling.",
    priceCents: parseToCents(22.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFkLHdODtwNrsGSpr6YE2YYhfnCMAdHh99ogqzE6409v9z_ivcGF6wbwjOITG40rvTzFtIF7jvgGmvNRlzTtj-3AXtoo1SSBInHhkvzShlSGaHxKaHr-mpFREy6D5D048DYLuNC-YrMs38tSnt799gUzk1GfEKEHbtePM16-l4Sr476pKLz-1mnVvbQ6aIGCP2iMOXpWqzO7QpO-R6ZHoLro3mg6SABlnGCkpwmo9kaNbIUSWOPcO6pVmNUPZx-OSYQ1j6RIMrMVC",
    category: "proteins",
    badge: "Bestseller",
    badgeColor: "green",
  },

  // ── Small Chops & Sides ───────────────────────────────
  {
    id: "dodo",
    name: "Dodo (Fried Plantain)",
    description:
      "Sweet, ripe plantains fried to golden perfection. The ultimate side for every Nigerian meal.",
    priceCents: parseToCents(6.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nR77-Vcbqc6oXZCQyA__BIE3qTKuIx2BoQGZQPcCmFucQ2xysccbaYs8hzEdLUOlKJ2h6SS9wtggIBCGgj_TvxMzsGx5RoVgB0bEXyhw3J3TaQYsb0a4v1Il_p0cEFdpFds9_mKuQzL-MdLmxHTHbz_-4nv24vnYU2AcNv5N0UokVI3PLxMa9ayH1gOgBLaCVvZmYX3-dh1GqqnRrVcDWY4pcAd0OcnPXxajwC8_tNAXJ5wKlleRYopM67sA0Nu4qiGBaMTiNl7Y",
    category: "sides",
  },
  {
    id: "puff-puff",
    name: "Puff Puff",
    description:
      "Golden, fluffy Nigerian doughnuts lightly dusted with powdered sugar. Soft on the inside, crisp on the outside.",
    priceCents: parseToCents(5.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nR77-Vcbqc6oXZCQyA__BIE3qTKuIx2BoQGZQPcCmFucQ2xysccbaYs8hzEdLUOlKJ2h6SS9wtggIBCGgj_TvxMzsGx5RoVgB0bEXyhw3J3TaQYsb0a4v1Il_p0cEFdpFds9_mKuQzL-MdLmxHTHbz_-4nv24vnYU2AcNv5N0UokVI3PLxMa9ayH1gOgBLaCVvZmYX3-dh1GqqnRrVcDWY4pcAd0OcnPXxajwC8_tNAXJ5wKlleRYopM67sA0Nu4qiGBaMTiNl7Y",
    category: "sides",
    badge: "Street Food",
    badgeColor: "orange",
  },
  {
    id: "moin-moin",
    name: "Moin Moin",
    description:
      "Steamed bean pudding made from blended black-eyed peas, peppers, and onions. Rich in protein and packed with flavour.",
    priceCents: parseToCents(7.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nR77-Vcbqc6oXZCQyA__BIE3qTKuIx2BoQGZQPcCmFucQ2xysccbaYs8hzEdLUOlKJ2h6SS9wtggIBCGgj_TvxMzsGx5RoVgB0bEXyhw3J3TaQYsb0a4v1Il_p0cEFdpFds9_mKuQzL-MdLmxHTHbz_-4nv24vnYU2AcNv5N0UokVI3PLxMa9ayH1gOgBLaCVvZmYX3-dh1GqqnRrVcDWY4pcAd0OcnPXxajwC8_tNAXJ5wKlleRYopM67sA0Nu4qiGBaMTiNl7Y",
    category: "sides",
  },
  {
    id: "chin-chin",
    name: "Chin Chin",
    description:
      "Crunchy, lightly sweetened fried dough bites. A beloved Nigerian snack perfect for sharing.",
    priceCents: parseToCents(4.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nR77-Vcbqc6oXZCQyA__BIE3qTKuIx2BoQGZQPcCmFucQ2xysccbaYs8hzEdLUOlKJ2h6SS9wtggIBCGgj_TvxMzsGx5RoVgB0bEXyhw3J3TaQYsb0a4v1Il_p0cEFdpFds9_mKuQzL-MdLmxHTHbz_-4nv24vnYU2AcNv5N0UokVI3PLxMa9ayH1gOgBLaCVvZmYX3-dh1GqqnRrVcDWY4pcAd0OcnPXxajwC8_tNAXJ5wKlleRYopM67sA0Nu4qiGBaMTiNl7Y",
    category: "sides",
  },

  // ── Drinks ────────────────────────────────────────────
  {
    id: "zobo",
    name: "Zobo (Hibiscus Drink)",
    description:
      "Refreshing hibiscus infusion brewed with ginger, cloves, and a hint of pineapple. Served chilled.",
    priceCents: parseToCents(4.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJaAcT3rh-QsRxIRK1cSV4w4jMGvKQkQXaE2_f70ESmMEXsMMSisIE78cz_3kdz45bLd32ckr-ryF_6XHd9y2lLik5VKi-o11CLMqi6IJrdjJ3eUwNWWjTYyCjaxaPgaSsBZFHJbWbELkhzKDHC9qe32nVm6vRdTk2eQq8LDEXg7S4qODoWR5W6RZSbrV3ibxLe0uvoVj-FCPL2RZtPlG1hB3rdnSy3eXDUcep0rINGwgy6QToSXvnu43PSe5EIoX5Z9yGceYREE",
    category: "drinks",
    badge: "Refreshing",
    badgeColor: "green",
  },
  {
    id: "chapman",
    name: "Chapman",
    description:
      "Nigeria's signature cocktail (non-alcoholic). A sweet, fruity blend of Fanta, Sprite, grenadine, and Angostura bitters.",
    priceCents: parseToCents(5.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJaAcT3rh-QsRxIRK1cSV4w4jMGvKQkQXaE2_f70ESmMEXsMMSisIE78cz_3kdz45bLd32ckr-ryF_6XHd9y2lLik5VKi-o11CLMqi6IJrdjJ3eUwNWWjTYyCjaxaPgaSsBZFHJbWbELkhzKDHC9qe32nVm6vRdTk2eQq8LDEXg7S4qODoWR5W6RZSbrV3ibxLe0uvoVj-FCPL2RZtPlG1hB3rdnSy3eXDUcep0rINGwgy6QToSXvnu43PSe5EIoX5Z9yGceYREE",
    category: "drinks",
  },
  {
    id: "ginger-beer",
    name: "Ginger Beer",
    description:
      "Fiery, house-crafted ginger brew with a zesty lime kick. Bold flavour, naturally sweetened with honey.",
    priceCents: parseToCents(4.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJaAcT3rh-QsRxIRK1cSV4w4jMGvKQkQXaE2_f70ESmMEXsMMSisIE78cz_3kdz45bLd32ckr-ryF_6XHd9y2lLik5VKi-o11CLMqi6IJrdjJ3eUwNWWjTYyCjaxaPgaSsBZFHJbWbELkhzKDHC9qe32nVm6vRdTk2eQq8LDEXg7S4qODoWR5W6RZSbrV3ibxLe0uvoVj-FCPL2RZtPlG1hB3rdnSy3eXDUcep0rINGwgy6QToSXvnu43PSe5EIoX5Z9yGceYREE",
    category: "drinks",
  },
  {
    id: "palm-wine",
    name: "Palm Wine (Fresh)",
    description:
      "Naturally fermented palm sap served fresh. Sweet, lightly effervescent, and authentically Nigerian.",
    priceCents: parseToCents(6.99),
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJaAcT3rh-QsRxIRK1cSV4w4jMGvKQkQXaE2_f70ESmMEXsMMSisIE78cz_3kdz45bLd32ckr-ryF_6XHd9y2lLik5VKi-o11CLMqi6IJrdjJ3eUwNWWjTYyCjaxaPgaSsBZFHJbWbELkhzKDHC9qe32nVm6vRdTk2eQq8LDEXg7S4qODoWR5W6RZSbrV3ibxLe0uvoVj-FCPL2RZtPlG1hB3rdnSy3eXDUcep0rINGwgy6QToSXvnu43PSe5EIoX5Z9yGceYREE",
    category: "drinks",
    badge: "Traditional",
    badgeColor: "orange",
  },
];

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
