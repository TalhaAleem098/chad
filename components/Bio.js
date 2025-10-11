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

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12 max-w-7xl mx-auto font-normal">
        <div
          className="text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <p className="mb-3 lg:mb-6">
            Based in Sydney, Australia, I am a professional <strong className="bio-strong">Actor, Model, Presenter, and Content Creator</strong> with over 20 years of experience across the international entertainment industry. My career has taken me from film and television sets to photo studios, live stages, radio stations, and digital platforms—each offering new opportunities to perform, connect, and create.
          </p>
          <p className="mb-3 lg:mb-6">
            Over the years, I have worked extensively across film, television, modelling, and presenting for both stage and screen, including radio and community television. Alongside numerous commercial campaigns within Australia and abroad, I’ve been fortunate to collaborate with exceptional creative teams and production companies around the world.
          </p>
          <p className="mb-3 lg:mb-6">
            I have commercially represented some of the world’s most recognised brands—including <strong className="bio-strong">Qantas, Jetstar, BMW, RSPCA, Cancer Council, Car Australia, DiDi, ING, Chemist Warehouse, Luxaflex, OzCar,</strong> and many more—both online and on air.
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
            My passion for performance began early, singing in my school choir and taking part in yearly stage productions. That early love of storytelling evolved into a lifelong pursuit of the craft. To refine my skills, I’ve studied at some of the most respected acting schools and institutions both locally and internationally, including <strong className="bio-strong">National Institute of Dramatic Art (NIDA), Australian Film and Television Academy (TAFTA), The Actors Centre (Sydney), Victorian College of the Arts (VCA), Sydney Drama School, Rogues West Acting School (Vancouver, Canada), and Royal Academy of Dramatic Art (RADA, London).</strong>
          </p>
          <p className="mb-3 lg:mb-6">
            Throughout my career, I’ve had the privilege of working with many talented directors, producers, ADs, photographers, videographers, and production crews across the globe. I’ve appeared in a wide range of film and television productions and have commercially represented some of the world’s most recognised brands.
          </p>
          <p className="mb-3 lg:mb-6">
            Acting has always been at the heart of what I do. I’ve had the opportunity to play lead, featured, supporting, and character roles across both film and television, with screen credits including <strong className="bio-strong">Cleverman, Crownies, Behind Mansion Walls, Deadly Women, The Wedge, Satisfaction, and The Librarians.</strong>
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
            I have also enjoyed a strong career in live television presenting—appearing on <strong className="bio-strong">OpenShop, TV Shop,</strong> and hosting community programs and radio shows for <strong className="bio-strong">Outlook TV, Out TV, Bent TV, and JOY 96.9FM,</strong> celebrating diverse voices within the LGBTQIA+ community.
          </p>
          <p className="mb-3 lg:mb-6">
            In recent years, I have embraced the creative potential of digital platforms and social media. Working directly with clients online has opened new doors for collaboration, storytelling, and brand partnerships, allowing me to merge my industry experience with modern content creation.
          </p>
          <p className="mt-4">
            Health, fitness, and wellness are core parts of who I am, both personally and professionally. I believe in maintaining a healthy lifestyle and positive mindset, and I’ve had the pleasure of working on campaigns that promote wellbeing, adventure, and self-improvement. My sense of self and adventure has taken me all around the world and back again—and what an incredible journey it’s been. I’m Australian born, Australian proud, and more motivated than ever to keep creating, collaborating, and moving forward.
          </p>
        </div>
      </div>
      <style jsx>{`
        .bio-strong {
          /* Try to use a very heavy weight; if the font doesn't support 1000 the browser will use the closest available (usually 900) */
          font-weight: 1000;
          font-size: calc(1em + 2px);
          color: #000; /* pure black */
          -webkit-text-fill-color: #000; /* ensure black fill on WebKit/Safari */
          text-shadow: none;
        }
        /* Ensure normal text is visually lighter */
        .text-sm, .text-base, p {
          font-weight: 400;
          color: inherit;
        }
      `}</style>
    </div>
  );
};

export default Bio;
