import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Media = () => {
    const [imageLoadErrors, setImageLoadErrors] = useState({});
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);
    const scrollContainerRef = useRef(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);

    const mainImage = "/images/image7.jpeg";

    const galleryImages = [
        "/images/carousel/1.jpeg",
        "/images/carousel/2.jpeg",
        "/images/carousel/3.JPG",
        "/images/carousel/4.jpeg",
        "/images/carousel/5.jpg",
        "/images/carousel/6.jpg",
        "/images/carousel/7.JPG",
        "/images/carousel/8.jpg",
        "/images/carousel/9.jpeg",
        "/images/carousel/10.jpeg",
        "/images/carousel/11.jpeg",
        "/images/carousel/12.jpeg",
        "/images/carousel/13.jpeg",
        "/images/carousel/14.jpeg",
        "/images/carousel/15.jpeg",
        "/images/carousel/16.JPG",
        "/images/carousel/17.jpeg"
    ];

    const duplicatedImages = [...galleryImages, ...galleryImages];

    useEffect(() => {
        if (loadedImages.size >= 4) {
            setAllImagesLoaded(true);
            setIsAutoScrolling(true);
        }
    }, [loadedImages]);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || !isAutoScrolling || !allImagesLoaded) return;

        const scrollSpeed = 0.5;
        let animationId;

        const autoScroll = () => {
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += scrollSpeed;
            }
            animationId = requestAnimationFrame(autoScroll);
        };

        animationId = requestAnimationFrame(autoScroll);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isAutoScrolling, allImagesLoaded]);

    const handleImageLoad = (imageSrc) => {
        setLoadedImages(prev => new Set([...prev, imageSrc]));
    };

    const handleImageError = (imageSrc) => {
        setImageLoadErrors(prev => ({
            ...prev,
            [imageSrc]: true
        }));
    };

    const scrollLeft = () => {
        setIsAutoScrolling(false);
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            const startPosition = container.scrollLeft;
            const targetPosition = startPosition - scrollAmount;
            animateScroll(container, startPosition, targetPosition, 200);
        }
        setTimeout(() => setIsAutoScrolling(true), 2000);
    };

    const scrollRight = () => {
        setIsAutoScrolling(false);
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            const startPosition = container.scrollLeft;
            const targetPosition = startPosition + scrollAmount;
            animateScroll(container, startPosition, targetPosition, 200);
        }
        setTimeout(() => setIsAutoScrolling(true), 2000);
    };

    const animateScroll = (container, start, target, duration) => {
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            container.scrollLeft = start + (target - start) * easeInOutCubic;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }; return (
        <div className="w-full p-4 ">
            <div className="text-left">
                <h1 className="text-[27vw] font-druk-xcond">
                    MEDIA
                </h1>
            </div>

            <div className="relative mb-6 border-b-2 pb-10  ">
                <div className="relative w-full overflow-hidden rounded-4xl">
                    <Image
                        src={mainImage}
                        alt="Featured Media"
                        width={1200}
                        height={800}
                        priority
                        className="w-full hover:scale-101 cursor-pointer transition h-auto object-cover rounded-[60px] "
                        onError={() => handleImageError(mainImage)}
                        sizes="100vw"
                    />
                    {imageLoadErrors[mainImage] && (
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-4xl">
                            <span className="text-gray-500">Image not available</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="">
                {/* {!allImagesLoaded && (
                    <div className="flex justify-center items-center mb-6">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
                        <span className="ml-3">Loading gallery images... ({loadedImages.size}/4)</span>
                    </div>
                )} */}

                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide"
                    onMouseEnter={() => setIsAutoScrolling(false)}
                    onMouseLeave={() => setIsAutoScrolling(true)}
                >
                    <div className="flex gap-4 sm:gap-6 lg:gap-8 pb-4">
                        {duplicatedImages.map((imageSrc, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative">
                                    <Image
                                        src={imageSrc}
                                        alt={`Gallery ${index + 1}`}
                                        width={300}
                                        height={400}
                                        className={`w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 object-cover hover:scale-105 transition-all duration-300 ${loadedImages.has(imageSrc) ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => handleImageLoad(imageSrc)}
                                        onError={() => handleImageError(imageSrc)}
                                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 256px, 288px"
                                    />
                                    {!loadedImages.has(imageSrc) && !imageLoadErrors[imageSrc] && (
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center animate-pulse rounded-xl">
                                            <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
                                        </div>
                                    )}
                                </div>
                                {imageLoadErrors[imageSrc] && (
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-xl">
                                        <span className="text-xs text-gray-500 text-center px-2">
                                            Image not available
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        onClick={scrollLeft}
                        disabled={!allImagesLoaded}
                        className={`bg-[#0B3D2E] hover:bg-[#0B3D2E]/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl ${!allImagesLoaded ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollRight}
                        disabled={!allImagesLoaded}
                        className={`bg-[#0B3D2E] hover:bg-[#0B3D2E]/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl ${!allImagesLoaded ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default Media;