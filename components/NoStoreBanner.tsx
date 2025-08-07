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
    <section className="scale-90 md:scale-100 -mt-48 md:-mt-0  mx-auto max-w-full sm:max-w-3xl lg:max-w-6xl px-4 sm:px-6 py-10 md:py-16">
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-center text-white py-10 sm:py-12 lg:py-14 px-6 shadow-lg">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4">
          Can&#39;t Find a Store Near You?
        </h2>

        {/* Sub-text */}
        <p className="max-w-md sm:max-w-xl mx-auto text-sm sm:text-base mb-6 sm:mb-8 opacity-90 leading-relaxed">
          We&#39;re constantly expanding our network. Contact us to become a dealer partner or to request a new store in your area.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={onBecomeDealer}
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg shadow-md hover:bg-indigo-50 transition-colors text-sm sm:text-base"
          >
            <Zap className="w-4 h-4" />
            Become a Dealer
          </button>

          <button
            onClick={onContact}
            className="inline-flex items-center justify-center gap-2 border border-white/80 text-white font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default NoStoreBanner;
