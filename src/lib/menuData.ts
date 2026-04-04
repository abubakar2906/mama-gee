export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: MenuCategory;
  badge?: string;
  badgeColor?: "green" | "orange";
}

export type MenuCategory =
  | "swallows"
  | "rice"
  | "sides";

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  swallows:  "Swallow & Soups",
  rice:      "Rice Dishes",
  sides:     "Sides & Small Chops",
};

export const CATEGORY_ORDER: MenuCategory[] = [
  "swallows",
  "rice",
  "sides",
];

export const menuItems: MenuItem[] = [
  // ── Swallows ──────────────────────────────────────────
  {
    id: "pounded-yam-edikaikong",
    name: "Poundo & Edikaikong",
    description: "Soft, fluffy traditional yam mash perfectly paired with richly prepared Edikaikong soup.",
    image: "/PoundandEdikaikonCombo.jpeg",
    category: "swallows",
    badge: "Bestseller",
    badgeColor: "green",
  },
  {
    id: "pounded-yam-white-soup",
    name: "Pounded Yam & White Soup",
    description: "Smooth pounded yam paired with authentic, light, and spicy traditional white soup.",
    image: "/Poundo%20and%20white%20soup.jpeg",
    category: "swallows",
  },
  {
    id: "pounded-yam-fisherman-okra",
    name: "Pounded Yam & Fisherman Okra",
    description: "Hearty pounded yam served with fresh seafood-rich Fisherman Okra soup.",
    image: "/PoundoandFishermanOkra.jpeg",
    category: "swallows",
    badge: "Seafood",
    badgeColor: "orange",
  },
  {
    id: "pounded-yam-egusi",
    name: "Fufu & Edikaikong",
    description: "Classic pounded yam paired with a rich, nutty melon seed soup loaded with assorted proteins.",
    image: "/poundoandegusi.jpeg",
    category: "swallows",
  },
  {
    id: "fufu-edikaikong",
    name: "Fufu & Edikaikong",
    description: "Silky smooth fermented cassava swallow served with our signature nutritious Edikaikong vegetable soup.",
    image: "/FufuandEdikaikon.jpeg",
    category: "swallows",
  },
  {
    id: "fufu-white-soup",
    name: "Fufu & White Soup",
    description: "Traditional fufu paired with spicy and deeply aromatic white soup.",
    image: "/FufuandWhitesoup.jpeg",
    category: "swallows",
  },
  {
    id: "eba-afang",
    name: "Eba & Afang",
    description: "Firm garri dough served with the legendary Afang soup rich in vegetables and assorted meat.",
    image: "/EbaandAfang.jpeg",
    category: "swallows",
  },
  {
    id: "eba-egusi",
    name: "Eba & Egusi",
    description: "Classic firm cassava dough served alongside our hearty, flavour-packed Egusi soup.",
    image: "/EbaandEgusi.jpeg",
    category: "swallows",
    badge: "Soul Food",
    badgeColor: "orange",
  },
  {
    id: "amala-abula",
    name: "Amala & Abula (Ewedu/Gbegiri)",
    description: "The ultimate Yoruba delicacy: soft amala served with ewedu, gbegiri, and rich assorted meat stew.",
    image: "/EbaandegusiAndwhiteamalaandAbula.jpeg",
    category: "swallows",
    badge: "Classic",
    badgeColor: "orange",
  },
  {
    id: "swallow-platter-1",
    name: "Mama Gee Swallow Platter",
    description: "A combination of your favourite swallows and rich local soups.",
    image: "/Swallow.jpeg",
    category: "swallows",
  },
  {
    id: "swallow-platter-2",
    name: "Deluxe Swallow Feast",
    description: "An assorted feast featuring perfectly textured swallow and rich, deeply spiced soup.",
    image: "/Swallow%20(2).jpeg",
    category: "swallows",
  },

  // ── Rice Dishes ───────────────────────────────────────
  {
    id: "jollof-rice-combo",
    name: "Jollof Rice Combo",
    description: "The legendary West African rice dish. Long-grain rice simmered in a rich tomato base, served with proteins and plantain.",
    image: "/Jollof%20Rice%20combo.jpeg",
    category: "rice",
    badge: "Bestseller",
    badgeColor: "orange",
  },
  {
    id: "fried-rice-combo",
    name: "Fried Rice Combo",
    description: "Fragrant rice stir-fried with mixed vegetables, perfectly seasoned and served with assorted sides.",
    image: "/friedRiceCombo.jpeg",
    category: "rice",
  },
  {
    id: "ofada-ayanmase",
    name: "Ofada Rice & Ayamase",
    description: "Indigenous fermented rice paired with the legendary Designer Stew (Ayamase) made from green peppers.",
    image: "/OfadaandAyanmase.jpeg",
    category: "rice",
    badge: "Spicy",
    badgeColor: "green",
  },
  {
    id: "ricemenu-plate",
    name: "Signature Rice Feast",
    description: "A combination of our finest rice offerings, packed with smoky flavor and grilled proteins.",
    image: "/RiceMenu.jpeg",
    category: "rice",
  },
  {
    id: "ricemenu2-plate",
    name: "Party Rice Deluxe",
    description: "A generous serving of our smokey party rice, garnished with veggies, plantains, and rich stew.",
    image: "/RiceMenu2.jpeg",
    category: "rice",
  },
  {
    id: "ricemenu3-plate",
    name: "Premium Rice Special",
    description: "Our signature seasoned rice served with an array of meats and delightful local sides.",
    image: "/RiceMenu3.jpeg",
    category: "rice",
  },
  {
    id: "rice-classic",
    name: "Mama Gee Rice Classic",
    description: "A classic portion of Mama Gee's savory rice, perfectly spiced and cooked to perfection.",
    image: "/Rice.jpeg",
    category: "rice",
  },
  {
    id: "rice-beef",
    name: "Rice & Peppered Beef",
    description: "Golden rice paired with spicy, succulent peppered beef strips.",
    image: "/Rice2.jpeg",
    category: "rice",
  },
  {
    id: "rice3",
    name: "Assorted Rice Platter",
    description: "A grand platter of rice served up with extra love, assorted meats, and fried plantain.",
    image: "/rice3.jpeg",
    category: "rice",
  },
  {
    id: "rice4",
    name: "Sunday Rice Special",
    description: "The ultimate Sunday afternoon rice, complete with a rich sauce and savory toppings.",
    image: "/rice4.jpeg",
    category: "rice",
  },
  {
    id: "veg-rice-sauce",
    name: "Veggie Rice & Sauce",
    description: "A lighter twist featuring fresh vegetable-infused rice served with our rich, hearty house sauce.",
    image: "/Veg%20Rice%20and%20sauce.jpeg",
    category: "rice",
  },
  {
    id: "rice-moimoi",
    name: "Rice & Moin Moin",
    description: "A flavorful plate of rice accompanied by a large slice of our protein-rich steamed bean pudding.",
    image: "/ricemoimoi.jpeg",
    category: "rice",
  },
  {
    id: "spag-stirfry",
    name: "Spaghetti Stir-fry",
    description: "Rich, spicy, and colorful spaghetti stir-fried with vegetables and savory proteins.",
    image: "/spagstirfry.jpeg",
    category: "rice",
  },

  // ── Sides ─────────────────────────────────────────────
  {
    id: "banana-bread",
    name: "Banana Bread",
    description: "Moist, freshly baked banana bread. A perfect sweet finish to your meal.",
    image: "/Banana%20Bread.jpeg",
    category: "sides",
  },
  {
    id: "buns-bread",
    name: "Fresh Buns Bread",
    description: "Soft, freshly baked Nigerian buns and sweet bread, perfect alongside a hot cup of tea or cocoa.",
    image: "/BunsandBread.jpeg",
    category: "sides",
  },
  {
    id: "donuts-rolls",
    name: "Donuts & Cinnamon Rolls",
    description: "A delightful mix of soft, glazed donuts and rich, sticky cinnamon rolls.",
    image: "/donutandrolls.jpeg",
    category: "sides",
  },
  {
    id: "small-chops-1",
    name: "Mama Gee Small Chops",
    description: "A classic platter of Nigerian light bites, including puff puff, samosas, and spring rolls.",
    image: "/Sides1.jpeg",
    category: "sides",
    badge: "Shareable",
    badgeColor: "green",
  },
  {
    id: "small-chops-2",
    name: "Deluxe Party Chops",
    description: "An assorted mix of our finest savory pastries and bites for you and your friends.",
    image: "/Sides2.jpeg",
    category: "sides",
  },
];

export function getItemsByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}
