// Everything about the salon lives here. Photos: public/images/
export const site = {
  name: 'FRO NATION', tag: 'HAIR & BEAUTY SALON',
  phone: '+234 909 905 0450', whatsapp: '2349099050450',
  area: 'Rumuogba, Port Harcourt', region: 'Rivers State, Nigeria',
  mapQuery: 'Rumuogba Port Harcourt', hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  rating: '4.6', reviewCount: '100+',
  socials: [{ label: 'Instagram', short: 'ig', href: '#' }, { label: 'Facebook', short: 'f', href: '#' }, { label: 'TikTok', short: 'tt', href: '#' }], // add real URLs
}
const img = (n) => `/images/${n}.jpg`
export const nav = [['home', 'Home'], ['about', 'About'], ['services', 'Services'], ['gallery', 'Gallery'], ['reviews', 'Reviews'], ['contact', 'Contact']]
export const features = [['♀', 'Professional Stylists', 'Skilled & experienced team'], ['✦', 'Quality Products', 'Safe & trusted brands'], ['❀', 'Comfortable Environment', 'Relax, unwind, be yourself'], ['♡', 'Customer Satisfaction', 'Your happiness matters']]
export const services = [
  { name: 'Braiding', img: img('s1'), desc: 'Classic, knotless, box braids and more.' },
  { name: 'Wig Installation', img: img('s2'), desc: 'Luxury wigs, quick weaves and custom units.' },
  { name: 'Makeup', img: img('s3'), desc: 'For everyday looks and special occasions.' },
  { name: 'Nails', img: img('s4'), desc: 'Neat, long-lasting sets and fresh manicures.' },
]
export const gallery = [
  { src: img('gal1'), alt: 'Braids with gold cuffs' },
  { src: img('gal2'), alt: 'Braided style with gold cuffs' },
  { src: img('gal3'), alt: 'Body wave styling' },
  { src: img('gal4'), alt: 'Stylist installing a sleek style' },
  { src: img('gal5'), alt: 'Soft waves from behind' },
  { src: img('gal6'), alt: 'Hair wash and treatment' },
  { src: img('gal7'), alt: 'Sleek bun with baby hairs' },
  { src: img('gal8'), alt: 'Ombre nails' },
  { src: img('gal9'), alt: 'Salon interior with pink accents' },
  { src: img('gal10'), alt: 'Salon with crown logo wall' },
  { src: img('gal11'), alt: 'Salon hair care products' },
]
export const prices = [['Knotless Braids', '₦25,000+'], ['Loc Maintenance', '₦15,000+'], ['Wig Installation', '₦30,000+'], ['Natural Hair Treatment', '₦20,000+'], ['Makeup (Full Face)', '₦25,000+'], ['Sew-In', '₦20,000+']] // confirm with the salon
export const reviews = [ // replace with real Google reviews
  ['Chioma D.', 'FRO Nation is the best! My braids are always neat and last long. The team is super friendly and professional.'],
  ['Temiwa A.', 'I love the atmosphere and the quality of service. My locs always look amazing when I leave here.'],
  ['Blessing E.', 'The makeup was flawless and lasted the whole day. I will definitely be back!'],
  ['Adeeze N.', 'Great service, clean environment and very affordable. Highly recommended!'],
]
export const options = ['Braiding', 'Locs', 'Wig Installation', 'Makeup', 'Nails', 'Natural Hair Treatment', 'Sew-In']
export const images = { hero: img('hero'), about: img('about'), price: img('price'), logo: '/images/logo.png' }
