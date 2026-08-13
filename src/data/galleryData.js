// 0
import prepare from '../assets/img/gallery/1.png'
//1
import sketsa from '../assets/img/gallery/2.png'
//2
import muralWorkInProgress from '../assets/img/gallery/3.jpg';
//3
import together from '../assets/img/gallery/4.png';
//4
import detail from '../assets/img/gallery/5.jpeg';
//5
import Finished from '../assets/img/gallery/6.jpeg';


const GALLERY_IMAGES = [prepare,sketsa,muralWorkInProgress, detail,together,Finished];

const galleryImage = (index) => GALLERY_IMAGES[index % GALLERY_IMAGES.length];

export const GALLERY_ACTIVITIES = [
  {
    id: 1,
    category: 'Preparation',
    title: 'Preparing the Wall',
    description:
      'Tahap awal dimulai dengan mempersiapkan permukaan dinding agar siap digunakan sebagai media mural.',
    imageKey: 'galleryPreparation',
    image: galleryImage(0),
  },
  {
    id: 2,
    category: 'Sketching',
    title: 'Developing the Concept',
    description:
      'Membuat sketsa awal untuk menentukan komposisi, bentuk, dan posisi setiap elemen visual pada mural.',
    imageKey: 'gallerySketching',
    image: galleryImage(1),
  },
  {
    id: 3,
    category: 'Painting',
    title: 'Bringing the Idea to Life',
    description:
      'Proses pewarnaan dan pengecatan mulai dilakukan untuk mengubah konsep menjadi karya visual nyata.',
    imageKey: 'galleryPainting',
    image: galleryImage(2),
  },
  {
    id: 4,
    category: 'Details',
    title: 'Adding the Details',
    description:
      'Setiap detail diperhatikan untuk memperkuat karakter, pesan, dan visual keseluruhan dari mural.',
    imageKey: 'galleryDetails',
    image: galleryImage(3),
  },
  {
    id: 5,
    category: 'Process',
    title: 'Working Together',
    description:
      'Proses pengerjaan mural dilakukan melalui kolaborasi, pembagian tugas, dan komunikasi antaranggota.',
    imageKey: 'galleryProcess',
    image: galleryImage(4),
  },
  {
    id: 6,
    category: 'Final',
    title: 'The Finished Mural',
    description:
      'Hasil akhir mural menjadi representasi dari ide, kreativitas, kerja sama, dan keberanian untuk berkarya.',
    imageKey: 'galleryFinal',
    image: galleryImage(5),
  },
];

export const ARTWORKS = GALLERY_ACTIVITIES.map((activity, index) => ({
  id: activity.id,
  name: activity.title,
  category: activity.category,
  price: [120, 140, 155, 165, 150, 180][index] ?? 120,
  artworkUrl: activity.image,
  description: activity.description,
}));

export const EXHIBITIONS = [
  {
    id: 1,
    category: 'Studio Notes',
    title: 'Preparing the Wall for Color',
    date: 'August 2026',
    readTime: '4 min read',
    image: galleryImage(0),
    excerpt:
      'A closer look at how the mural surface is cleaned, primed, and mapped before the first brushstroke.',
  },
  {
    id: 2,
    category: 'Exhibition',
    title: 'Sketches Into Structure',
    date: 'July 2026',
    readTime: '5 min read',
    image: galleryImage(1),
    excerpt:
      'From pencil studies to a complete composition, this update follows how the team locked the final layout.',
  },
  {
    id: 3,
    category: 'Process',
    title: 'Color, Teamwork, and Rhythm',
    date: 'June 2026',
    readTime: '4 min read',
    image: galleryImage(0),
    excerpt:
      'An inside look at how the class split tasks, mixed paint, and kept the mural consistent from start to finish.',
  },
  {
    id: 4,
    category: 'Spotlight',
    title: 'The Finished Wall',
    date: 'May 2026',
    readTime: '3 min read',
    image: galleryImage(1),
    excerpt:
      'A reflection on the completed mural and the details that bring the full composition together.',
  },
];

export const COMMISSION_SWATCHES = [
  '#1E1C1B',
  '#2F4858',
  '#6C8C5E',
  '#C97B63',
  '#D9B08C',
  '#E8DDD0',
];

export const GALLERY_ACTIVITY_CATEGORIES = [
  'All',
  'Preparation',
  'Sketching',
  'Painting',
  'Details',
  'Process',
  'Final',
];
