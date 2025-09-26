import React from "react";

const FilmTV = () => {
  const films = [
    {
      title: "Cleverman : S2 Episode 6",
      link: "https://m.imdb.com/title/tt4649420/?ref_=ext_shr_lnk"
    },
    {
      title: "Deadly Women : S5 6 & 7",
      link: "https://www.imdb.com/title/tt1319260/?ref_=ext_shr_lnk"
    },
    {
      title: "OpenShop Shopping Network",
      link: "https://share.google/HIRgSeIcYUE3xyQ74"
    },
    {
      title: "Behind Mansion Walls : S1 2 & 3",
      link: "https://www.imdb.com/title/tt1961967/?ref_=ext_shr_lnk"
    },
    {
      title: "Outlook TV & Out TV Canada",
      link: "https://m.youtube.com/@OutLookTVSHAW"
    },
    {
      title: "The Navigator",
      link: "https://www.imdb.com/title/tt2389290/?ref_=ext_shr_lnk"
    },
    {
      title: "Bent Television & 94.9JoyFM",
      link: "https://m.youtube.com/@benttvinc/videos"
    },
    {
      title: "Crownies : S1 Episodes 11 & 12",
      link: "https://www.imdb.com/title/tt1822469/?ref_=ext_shr_lnk"
    },
    {
      title: "Satisfaction : S1 Episode 9",
      link: "https://www.imdb.com/title/tt2546024/?ref_=ext_shr_lnk"
    },
    {
      title: "The Wedge : S2 Episode 6",
      link: "https://www.imdb.com/title/tt1156280/?ref_=ext_shr_lnk"
    },
    {
      title: "The Librarians : S1 Episode 2",
      link: "https://www.imdb.com/title/tt0934744/?ref_=ext_shr_lnk"
    }
  ];

  return (
    <div className="w-full px-6">
      <div className="text-left flex sm:mt-12 lg:mt-16 lg:pt-20 text-[27vw] md:text-[12em] font-druk-xcond">
        <h1 className="flex items-center gap-2 font-extrabold">
          FILM <span className="text-[27vw] md:text-[1.2em] ">/</span> TV
        </h1>
      </div>

      <div className="space-y-0 ">
        {films.map((film, index) => (
          <div key={index} className="group">
            <a
              href={film.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg"
            >
              <div className="border-b border-current py-2 transition-colors duration-300">
                <h2 className="text-[5vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold transition-colors duration-300 leading-tight"
                // style={{lineHeight: "5.9vw"}}
                >
                  {film.title.toUpperCase()}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
      <a
        href="/uploads/cv.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-md bg-[#0B3D2E] text-white py-2 px-4 text-sm hover:opacity-90"
      >
        View CV
      </a>
    </div>
  );
};

export default FilmTV;