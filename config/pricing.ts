// Kainos vienoje vietoje – pakeitus čia, atsinaujina visuose puslapiuose.
export const PRICING = {
  website: {
    title: 'Reprezentacinė svetainė',
    price: 'nuo 590 €',
    note: 'už projektą',
    href: '/svetainiu-kurimas',
    features: [
      'Iki 5 puslapių pagal jūsų turinį',
      'Individualus, mobiliems pritaikytas dizainas',
      'Užklausų forma ir kontaktai',
      'SEO pagrindai',
      'Pagalba su domenu ir talpinimu',
    ],
  },
  shopify: {
    title: 'Shopify el. parduotuvė',
    price: 'nuo 1 490 €',
    note: 'už projektą',
    href: '/shopify-el-parduotuves',
    features: [
      'Dizainas pagal jūsų prekės ženklą',
      'Prekių katalogas ir importas',
      'Mokėjimai, pristatymas ir paštomatai',
      'Kelios kalbos ir laiškai pirkėjams',
      'SEO pagrindai',
      'Mokymai, kaip valdyti parduotuvę',
    ],
  },
  maintenance: {
    title: 'Priežiūra',
    price: 'nuo 99 €',
    note: 'per mėnesį',
    href: '/shopify-el-parduotuves#prieziura',
    features: [
      'Smulkūs pakeitimai ir naujos skiltys',
      'Programėlių ir temos atnaujinimai',
      'Greičio ir klaidų stebėsena',
      'Pagalba darbo dienomis',
    ],
  },
} as const;
