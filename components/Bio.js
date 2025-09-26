import React from "react";

const Bio = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="text-left mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-[32vw] md:text-[37vw] font-druk-xcond font-black leading-none">
          CHAD MATHEW
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto poppins font-bold">
        {/* Column 1 */}
        <div className="text-sm sm:text-base leading-relaxed">
          <p className="mb-6">
            I&apos;m a Sydney-based Actor, Model, Presenter, and Content Creator with over two decades of experience across the international entertainment industry.
          </p>
          <p className="mb-6">
            From film and television to digital media and live events, my career has taken me across the globe and onto a wide range of screens—big and small. I&apos;ve starred in and featured across mainstream productions, independent films, television series, vertical content, and commercial campaigns.
          </p>
          <p>
            My work also spans presenting for radio and community television, as well as modelling for stage, print, and broadcast. My passion for performance began early, singing in my school choir and taking part in annual stage productions.
          </p>
        </div>

        {/* Column 2 */}
        <div className="text-sm sm:text-base leading-relaxed">
          <p className="mb-6">
            That early love of storytelling led me to study at some of the world&apos;s most respected institutions, including the National Institute of Dramatic Art (NIDA), the Australian Film and Television Academy (TAFTA), the Actors Centre in Sydney, the Victorian College of the Arts (VCA) in Melbourne, Sydney Drama School, Rogues West Acting School in Vancouver, and the Royal Academy of Dramatic Art (RADA) in London.
          </p>
          <p className="mb-6">
            Over the years, I&apos;ve had the privilege of collaborating with award-winning directors, producers, photographers, and production teams from around the world. I&apos;ve also been trusted to represent iconic global and Australian brands, including Qantas, Jetstar, BMW, RSPCA, Cancer Council, ING, Chemist Warehouse, Luxaflex, DiDi, OzCar, and many more—both on screen and online.
          </p>
          <p>
            Some of my on-screen credits include Cleverman, Crownies, Behind Mansion Walls, Deadly Women, The Wedge, Satisfaction, and The Librarians.
          </p>
        </div>

        {/* Column 3 */}
        <div className="text-sm sm:text-base leading-relaxed">
          <p className="mb-6">
            I&apos;ve also hosted and presented for OpenShop, TV Shop, and a variety of community and LGBTQIA+ platforms including OutlookTV, Out TV, Bent TV, and JOY 96.9 FM. In recent years, I&apos;ve embraced the power of social media and vertical content creation to connect with new audiences and collaborators.
          </p>
          <p className="mb-6">
            Working directly with brands and clients online has allowed me to evolve as a modern creative—developing fresh, authentic content as a digital storyteller, vertical actor, and influencer. Outside of the spotlight, I&apos;m passionate about health, fitness, and wellness.
          </p>
          <p>
            I strongly believe in the power of a positive mindset, a healthy lifestyle, and the importance of self-growth. My journey has taken me around the world and back—and what an adventure it&apos;s been. I&apos;m proudly Australian, and I&apos;m just getting started. The best is yet to come.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Bio;