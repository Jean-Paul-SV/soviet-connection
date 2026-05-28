export interface Product {
  id: number
  name: string
  category: string
  colorway: string
  image: string
  isNew: boolean
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  n: string
  label: string
}

// ─── Products ──────────────────────────────────────────────
export const products: Product[] = [
  {
    id: 1,
    name: 'CONSTRUCTIVIST HOODIE',
    category: 'HEAVYWEIGHT FLEECE',
    colorway: 'CEMENT GREY',
    image: 'https://loremflickr.com/480/640/streetwear?lock=1',
    isNew: true,
  },
  {
    id: 2,
    name: 'ARCHITECT JACKET',
    category: 'COACH JACKET',
    colorway: 'MILITARY OLIVE',
    image: 'https://loremflickr.com/480/640/streetwear?lock=3',
    isNew: false,
  },
  {
    id: 3,
    name: 'COLLECTIVE CARGO',
    category: 'CARGO TROUSERS',
    colorway: 'WASHED BLACK',
    image: 'https://loremflickr.com/480/640/streetwear?lock=7',
    isNew: false,
  },
  {
    id: 4,
    name: 'PROPAGANDA TEE',
    category: 'GRAPHIC TEE',
    colorway: 'OFF WHITE',
    image: 'https://loremflickr.com/480/640/streetwear?lock=12',
    isNew: true,
  },
  {
    id: 5,
    name: 'COSMONAUT BOMBER',
    category: 'NYLON BOMBER',
    colorway: 'PITCH BLACK',
    image: 'https://loremflickr.com/480/640/streetwear?lock=18',
    isNew: false,
  },
  {
    id: 6,
    name: 'COLLECTIVE CAP',
    category: '6-PANEL STRAPBACK',
    colorway: 'SOVIET RED',
    image: 'https://loremflickr.com/480/640/streetwear?lock=25',
    isNew: true,
  },
]

// ─── Navigation ────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'COLLECTION', href: '#collection' },
  { label: 'LOOKBOOK', href: '#lookbook' },
  { label: 'ABOUT', href: '#about' },
  { label: 'STOCKISTS', href: '#' },
]

export const footerNavLinks: NavLink[] = [
  { label: 'COLLECTION', href: '#collection' },
  { label: 'LOOKBOOK', href: '#lookbook' },
  { label: 'ABOUT', href: '#about' },
  { label: 'STOCKISTS', href: '#' },
  { label: 'CONTACT', href: '#' },
]

export const socialLinks: NavLink[] = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'TIKTOK', href: '#' },
  { label: 'PINTEREST', href: '#' },
]

export const legalLinks: NavLink[] = [
  { label: 'PRIVACY', href: '#' },
  { label: 'TERMS', href: '#' },
  { label: 'SHIPPING', href: '#' },
]

// ─── Manifesto stats ───────────────────────────────────────
export const stats: Stat[] = [
  { n: '2019', label: 'FOUNDED' },
  { n: '12+', label: 'COUNTRIES' },
  { n: 'SS26', label: 'CURRENT DROP' },
]
