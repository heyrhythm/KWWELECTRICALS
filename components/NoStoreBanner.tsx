// components/NoStoreBanner.tsx
import React from 'react';
import { Zap, Phone } from 'lucide-react';

interface NoStoreBannerProps {
  onBecomeDealer?: () => void;
  onContact?: () => void;
}

const NoStoreBanner: React.FC<NoStoreBannerProps> = ({
  onBecomeDealer,
  onContact,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-center text-white py-12 px-6 shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          Can&#39;t Find a Store Near You?
        </h2>

        {/* Sub-text */}
        <p className="max-w-xl mx-auto text-sm md:text-base mb-8 opacity-90">
          We&#39;re constantly expanding our network. Contact us to become a
          dealer partner or to request a new store in your area.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onBecomeDealer}
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-50 transition-colors"
          >
            <Zap className="w-4 h-4" />
            <span>Become a Dealer</span>
          </button>

          <button
            onClick={onContact}
            className="inline-flex items-center justify-center gap-2 border border-white/80 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NoStoreBanner;
