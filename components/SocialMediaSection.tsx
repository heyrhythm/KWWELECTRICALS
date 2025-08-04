// components/SocialMediaSection.tsx
import React from 'react';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  MessageCircle,
} from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Instagram className="w-7 h-7 text-pink-600" />,
    count: '45.2K',
    label: 'Instagram Followers',
  },
  {
    id: 2,
    icon: <Facebook className="w-7 h-7 text-blue-600" />,
    count: '32.8K',
    label: 'Facebook Followers',
  },
  {
    id: 3,
    icon: <Twitter className="w-7 h-7 text-sky-500" />,
    count: '18.5K',
    label: 'Twitter Followers',
  },
  {
    id: 4,
    icon: <Youtube className="w-7 h-7 text-red-600" />,
    count: '12.3K',
    label: 'YouTube Followers',
  },
];

const posts = [
  {
    id: 1,
    platform: 'instagram',
    img: '/images/social/led-lamp.jpg',
    title:
      'New LED collection now available! Energy-efficient and stylish. #LEDlights #EnergyEfficient',
    likes: 234,
    time: '2 hours ago',
  },
  {
    id: 2,
    platform: 'facebook',
    img: '/images/social/bldc-gradient.jpg',
    title:
      'BLDC fans – the future of cooling technology. Silent, efficient, and smart!',
    likes: 156,
    time: '1 day ago',
  },
  {
    id: 3,
    platform: 'instagram',
    img: '/images/social/smart-plant.jpg',
    title:
      'Smart home automation made simple with KWW smart switches. Control from anywhere!',
    likes: 189,
    time: '2 days ago',
  },
  {
    id: 4,
    platform: 'facebook',
    img: '/images/social/factory-qc.jpg',
    title:
      'Quality testing in progress at our manufacturing facility. Your safety is our priority.',
    likes: 298,
    time: '3 days ago',
  },
];

const SocialMediaSection: React.FC = () => {
  /* ─────────────────────────────────────────────────────────────── */
  /* 1) HEADER                                                       */
  /* ─────────────────────────────────────────────────────────────── */
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Follow Us on Social Media
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay connected with KWW Electricals for the latest updates, tips, and
          exclusive offers
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2) FOUR SOCIAL-MEDIA STAT CARDS                              */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto">
              {s.icon}
            </div>
            <p className="text-2xl font-extrabold text-gray-900">{s.count}</p>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3) LATEST POSTS + 4 POST CARDS                               */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="space-y-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
          Latest Posts
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute top-2 left-2 bg-white/80 rounded-full p-1">
                  {p.platform === 'instagram' ? (
                    <Instagram className="w-4 h-4 text-pink-600" />
                  ) : (
                    <Facebook className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>

              <div className="p-4 text-xs">
                <p className="line-clamp-3 text-gray-800 mb-3">{p.title}</p>
                <div className="flex items-center justify-between text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {p.likes} likes
                  </span>
                  <span>{p.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 4) JOIN COMMUNITY BANNER                                     */}
      {/* ──────────────────────────────────────────────────────────── */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-center py-12 px-6 space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Join Our Social Community
          </h3>
          <p className="max-w-3xl mx-auto text-sm md:text-base opacity-90">
            Follow us for energy-saving tips, product updates, special offers,
            and behind-the-scenes content from KWW Electricals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Like on Facebook
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Subscribe
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
