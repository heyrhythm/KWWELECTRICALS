"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// desktop (or shared) images
import fanDesk       from "@/public/assets/herosection/Home-Page-banner_BLDC-Fan.webp";
import coolerDesk    from "@/public/assets/herosection/Home-Page-banner_Cooler.webp";
import applianceDesk from "@/public/assets/herosection/Home-Page-banner_Home-Appliances.webp";
import ledDesk       from "@/public/assets/herosection/Home-Page-banner_LED-Lights.webp";

// mobile-specific images
import fanMob        from "@/public/assets/herosection/Home-Page-banner_BLDC-Fan.jpg";
import coolerMob     from "@/public/assets/herosection/Home-Page-banner_Cooler.jpg";
import applianceMob  from "@/public/assets/herosection/Home-Page-banner_Home-Appliances.jpg";
import ledMob        from "@/public/assets/herosection/Home-Page-banner_LED-Lights.jpg";

/*──────────────── TYPES ────────────────*/
type TitlePart = { text:string; color:"blue"|"red"|"white"; newLine?:boolean };

/*──────────────── COMPONENT ────────────*/
const HeroSection:React.FC = () => {
  const [current, setCurrent] = useState(0);

  /* slides */
  const slides = [
    {
      id:1,
      title:[
        {text:"Stay Cool",         color:"blue"},
        {text:"with",             color:"white"},
        {text:"KWW",              color:"red"},
        {text:"BLDC Ceiling Fans-",color:"white",newLine:true},
        {text:"Power Meets Silence",color:"white",newLine:true},
      ] as TitlePart[],
      desc:"Explore our advanced BLDC and\n"+"high-speed ceiling fans designed for\n"+"superior air delivery, silent operation,\n"+ "and up to 65% energy savings. Stylish,\n"+" smart & durable.",
      imageDesk:fanDesk,
      imageMob:fanMob
    },
    {
      id:2,
      title:[
        {text:"Stay Cool",          color:"blue"},
        {text:"& Efficient with",   color:"white"},
        {text:"Air Coolers",        color:"white",newLine:true},
        {text:"by",                 color:"white"},
        {text:"KWW",                color:"red"},
      ] as TitlePart[],
      desc:"Experience powerful airflow,\n"+" low energy consumption, and all-season\n"+" comfort with KWW's energy efficient air coolers\n"+"designed for Indian summers.",
      imageDesk:coolerDesk,
      imageMob:coolerMob
    },
    {
      id:3,
      title:[
        {text:"KWW",               color:"red"},
        {text:"Appliances ",       color:"white"},
        {text:"Efficient,",        color:"blue",newLine:true},
        {text:"Reliable.",         color:"white"},
        {text:"Everyday Living",   color:"white",newLine:true},
      ] as TitlePart[],
      desc:"From water heaters to room heaters\n"+" and more, our home appliances deliver\n"+" performance and safety with every use\n"+"Designed for Indian homes and seasons.",
      imageDesk:applianceDesk,
      imageMob:applianceMob
    },
    {
      id:4,
      title:[
        {text:"Brighten Smart",    color:"blue"},
        {text:"Save More",       color:"white"},
        {text:"Choose",            color:"white",newLine:true},
        {text:"KWW",               color:"red"},
        {text:"LED Lights",        color:"white"},
      ] as TitlePart[],
      desc:"Energy-efficient LED lighting solutions\n"+" for homes, offices, and industries.\n"+" Experience long-lasting brightness with\n"+"co-friendly technology — trusted across India.",
      imageDesk:ledDesk,
      imageMob:ledMob
    }
  ];

  /* auto-advance */
  useEffect(() => {
    const id = setInterval(()=>setCurrent(p=>(p+1)%slides.length),4000);
    return()=>clearInterval(id);
  },[slides.length]);

  /* title renderer */
  /* ---------- colour helper (optional) ---------- */
const colourClass = (c: TitlePart["color"]) =>
  c === "blue" ? "text-blue-400"
  : c === "red" ? "text-red-600"
  :               "text-white";

/* ---------- title renderer ---------- */
const renderTitle = (parts: TitlePart[]) =>
  parts.map((part, idx) => {
    const next = parts[idx + 1];                    // look-ahead
    return (
      <React.Fragment key={idx}>
        {part.newLine && <br />}
        <span className={colourClass(part.color)}>{part.text}</span>
        {next && !next.newLine && " "}
      </React.Fragment>
    );
  });

/* ---------- description renderer ---------- */
const renderDesc = (desc: string) =>
  desc.split("\n").map((line, idx, arr) => (
    <React.Fragment key={idx}>
      {line}
      {idx < arr.length - 1 && <br />}
    </React.Fragment>
  ));


  /*──────────── RENDER ────────────*/
  return(
    <section className="bg-transparent relative overflow-hidden">
      {/* slide track */}
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{transform:`translateX(-${current*100}%)`}}>
        {slides.map(slide=>(
          <div key={slide.id}
               className="w-full flex-shrink-0 relative sm:min-h-[60vh] lg:min-h-[70vh] ">
            
            {/* mobile background image */}
            <Image src={slide.imageMob} alt="" fill priority quality={90}
                   sizes="(max-width:639px) 100vw"
                   className="object-contain absolute inset-0 sm:hidden"/>
            
            {/* desktop background image */}
            <Image src={slide.imageDesk} alt="" fill priority quality={95}
                   sizes="(min-width:640px) 100vw"
                   className="object-cover absolute inset-0 hidden sm:block"/>
            
            {/* overlay for text contrast */}
            <div className="absolute inset-0
  bg-gradient-to-r from-black/70 via-black/50 to-black/0
  pointer-events-none -my-24 md:-my-0 md:h-4/4 top-0 "/>

            {/* content container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-3 sm:px-4 lg:px-6 pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-16 ">
              <div className="max-w-xs sm:max-w-lg lg:max-w-2xl space-y-3 sm:space-y-4 lg:space-y-6">
                
                {/* title */}
                <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
                  {renderTitle(slide.title)}
                </h1>
                  
                {/* description */}
                <p className="text-white text-[10px] sm:text-base lg:text-lg leading-relaxed max-w-full lg:max-w-lg">
                  {renderDesc(slide.desc)}
                </p>

                {/* buttons - always show both, scaled for mobile */}
                <div className="flex gap-2 sm:gap-4 mt-1 scale-70 md:scale-100 origin-left">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold flex items-center shadow-lg text-xs sm:text-sm lg:text-base">
                    <span className="truncate">Explore Products</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                  
                  <button className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold flex items-center shadow-lg text-xs sm:text-sm lg:text-base">
                    <span className="truncate">Shop Now</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* indicators - smaller on mobile */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_,i)=>(
          <button key={i} aria-label={`slide ${i+1}`}
                  onClick={()=>setCurrent(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 transition-colors ${
                    current===i? "bg-white border-white":"bg-transparent border-white/50"}`}/>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
