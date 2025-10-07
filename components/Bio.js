import React from "react";

const Bio = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8" 
    style={{fontFamily: "sans-serif"}}
    >
      <div 
        className="text-left mb-8 sm:mb-12 lg:mb-16"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <h1 className="text-[32vw] md:text-[37vw] font-druk-xcond font-black leading-none">
          CHAD MATHEW
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12 max-w-7xl mx-auto font-bold">
        <div
          className="text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <p className="mb-3 lg:mb-6">
            I&apos;m a professional Actor, Model, Presenter, and Content Creator with over 20 years of experience in the international entertainment industry. My career spans film, television, modelling, live presenting, commercials, and branded content—both within Australia and abroad.
          </p>
          <p className="mb-3 lg:mb-6">
            My passion for performance began early, singing in my high school choir and appearing in stage productions. That drive led me to study at respected training institutions including NIDA, TAFTA, the Actors Centre Sydney, VCA Melbourne, Sydney Drama School, Rogues West Vancouver, and RADA London.
          </p>
        </div>

        {/* Column 2 */}
        <div
          className="text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <p className="mb-3 lg:mb-6">
            Over the years, I&apos;ve collaborated with directors, producers, photographers, and production teams worldwide, representing leading global and Australian brands such as Qantas, Jetstar, BMW, RSPCA, ING, Chemist Warehouse, Cancer Council, DiDi, OzCar, Luxaflex, and Car Australia.
          </p>
          <p className="mb-3 lg:mb-6">
            On screen, I&apos;ve worked across leading, featured, and supporting roles in productions including <em>Cleverman</em>, <em>Crownies</em>, <em>Behind Mansion Walls</em>, <em>Deadly Women</em>, <em>The Wedge</em>, <em>Satisfaction</em>, and <em>The Librarians</em>.
          </p>
        </div>

        {/* Column 3 */}
        <div
          className="text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
        >
          <p className="mb-3 lg:mb-6">
            I&apos;ve also presented live on OpenShop and TV Shop, and hosted programs for Outlook TV, Out TV, Bent TV, and JOY 96.9FM. Alongside this, I&apos;ve embraced digital media—building a strong presence as a modern actor and content creator, connecting directly with audiences through authentic storytelling.
          </p>
          <p>
            Beyond performance, I&apos;m passionate about health, fitness, and wellness. I&apos;ve worked with lifestyle, travel, and wellness brands while championing adventure, positivity, and self-growth. Born and proud to be Australian, my career has taken me across the globe and back again—and the adventure is far from over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
