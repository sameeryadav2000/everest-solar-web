"use client";

import { useState, useEffect } from "react";

interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
  title: string;
  isWorstReview?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 4,
    content:
      "Everest Solar has been with me the entire time. Now 4+ years. There was an issue with a panel but it was repaired as quickly as possible even though there were supply chain issues. Happy with them and all their assistance, especially Ryan. Better than paying JCP&L.",
    author: "DAVE F",
    title: "OUR WORST REVIEW",
    isWorstReview: true,
  },
  {
    id: 2,
    rating: 5,
    content:
      "The system works exactly as they described it would. This company's honesty is the main reason why I chose to go green with them.",
    author: "JEFF L",
    title: "VALUED RESIDENTIAL CUSTOMER",
  },
  {
    id: 3,
    rating: 5,
    content:
      "Over the last five years, I've had the pleasure of working with Everest Solar on more than a dozen innovative solar and storage projects in New York City, primarily on multifamily affordable housing. Their team is organized, communicative, and solution-oriented. Whether it's a straightforward ballasted installation or a rooftop canopy with an energy storage system, they always go the extra mile and get the job done right.",
    author: "NOAH GINSBURG",
    title: "EXECUTIVE DIRECTOR, NYSEIA (FORMERLY OF SOLAR ONE)",
  },
  {
    id: 4,
    rating: 5,
    content:
      "Excellent customer service from start to finish. The installation team was professional, clean, and efficient. Our energy bills have dropped significantly since going solar with Everest Solar.",
    author: "SARAH M",
    title: "RESIDENTIAL CUSTOMER",
  },
  {
    id: 5,
    rating: 5,
    content:
      "As a property manager, I've worked with several solar companies. Everest Solar stands out for their reliability and expertise. They handled our commercial installation flawlessly.",
    author: "MICHAEL R",
    title: "COMMERCIAL PROPERTY MANAGER",
  },
  {
    id: 6,
    rating: 4,
    content:
      "Great experience overall. The team was knowledgeable and the installation process was smooth. Only minor issue was with scheduling, but they made it right quickly.",
    author: "JENNIFER K",
    title: "HOMEOWNER",
  },
  {
    id: 7,
    rating: 5,
    content:
      "Everest Solar delivered exactly what they promised. Professional installation, great follow-up service, and our solar system is performing above expectations. Highly recommend!",
    author: "ROBERT T",
    title: "SATISFIED CUSTOMER",
  },
  {
    id: 8,
    rating: 5,
    content:
      "Working with Everest Solar was a pleasure from consultation to final inspection. Their team is knowledgeable, honest, and delivers quality work. Our solar investment is paying off beautifully.",
    author: "LINDA W",
    title: "LONG-TIME CUSTOMER",
  },
  {
    id: 9,
    rating: 5,
    content:
      "Impressed by their professionalism and attention to detail. The solar installation exceeded our expectations and the energy savings are substantial. Great company to work with!",
    author: "JAMES H",
    title: "BUSINESS OWNER",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide;
    return reviews.slice(startIndex, startIndex + reviewsPerSlide);
  };

  return (
    <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 py-8 relative">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Reviews container */}
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                  {reviews.slice(slideIndex * reviewsPerSlide, (slideIndex + 1) * reviewsPerSlide).map((review) => (
                    <div key={review.id} className="bg-white rounded-lg p-6 shadow-lg flex flex-col min-h-[320px]">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${star <= review.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <p className="text-slate-700 text-sm leading-relaxed mb-6">{review.content}</p>
                      </div>

                      {/* Author */}
                      <div className="border-t border-slate-200 pt-4 mt-auto">
                        <div className="text-sky-600 font-semibold text-sm">{review.author}</div>
                        <div className={`text-xs font-medium mt-1 ${review.isWorstReview ? "text-sky-600" : "text-sky-500"}`}>
                          {review.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots on the bottom */}
        <div className="flex justify-center items-center mt-8 gap-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
