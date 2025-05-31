"use client";

import { useState, useEffect } from "react";

interface Review {
  id: number;
  rating: number;
  content: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    content:
      "I recently worked with Everest Solar to install a solar energy system on my home, and overall, the experience was excellent. From the initial consultation through installation and follow-up, the team was professional, responsive, and highly knowledgeable. \n\nWhat sets Everest Solar apart, in my opinion, is their customer service. Any questions I had were answered promptly, and they checked in after the installation to make sure everything was working properly. \n\nIf you're considering going solar, I highly recommend Everest Solar for their professionalism, quality of work, and commitment to customer satisfaction.",
    author: "Ashok Parajuli",
  },
  {
    id: 2,
    rating: 5,
    content:
      "Very professional team from Everest Solar is still helping me to put the beautiful solar panels on my roof. They helped me to understand everything from the very beginning, communicating with the HOA and updating me on every steps. I’m super happy and excited so far.",
    author: "Mohammad Waqas",
  },
  {
    id: 3,
    rating: 5,
    content:
      "I have had experience in the solar industry for a while now, and I must say I was pleasantly surprised by the diversity and quality of service that Everest Solar offers. They truly CARE about families, providing a tailored and beneficial product/service. I highly recommend them to anyone considering making the switch to solar!",
    author: "Gemma",
  },
  {
    id: 4,
    rating: 5,
    content:
      "Surgeon is a professional and knowledgeable solar consultant. I was fully satisfied from his counseling and installed solar panels last year.",
    author: "Bijay Tamang",
  },
  {
    id: 5,
    rating: 5,
    content:
      "I really appreciate this solar company,they are very knowledgeable.They understand you and explain every details,It really makes difference in electricity bill,They are smooth and up to date.I highly recommended this company.",
    author: "Sarika Sharma",
  },
  {
    id: 6,
    rating: 5,
    content:
      "Surgeon is One of the professional Guy i have come across in this field So Far and service was phenomenal he made everything looks so easysatisfied custome 100%.",
    author: "Hamza Noor",
  },
  {
    id: 7,
    rating: 5,
    content:
      "Everest Solar delivered exactly what they promised. Professional installation, great follow-up service, and our solar system is performing above expectations. Highly recommend!",
    author: "ROBERT T",
  },
  {
    id: 8,
    rating: 5,
    content:
      "Very professional and experienced professionals. They explained me every detail and saved lots money. I would highly recommend.",
    author: "Doma Sherpa",
  },
  {
    id: 9,
    rating: 5,
    content: "Thank you Everest Solar for helping me to save 30% of my electricity bill every month.",
    author: "Wangche Sherpa",
  },
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Auto-advance every 5 seconds

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
                        <p className="text-slate-700 text-sm leading-relaxed mb-6 whitespace-pre-line">{review.content}</p>
                      </div>

                      {/* Author */}
                      <div className="border-t border-slate-200 pt-4 mt-auto">
                        <div className="text-sky-600 font-semibold text-sm">{review.author}</div>
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
