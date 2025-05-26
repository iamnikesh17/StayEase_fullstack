import React from "react";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <div className="bg-gray-200 my-10 py-20">
      <div className="text-center max-w-3xl mx-auto px-6 pb-10">
        <h1 className="font-playfair text-5xl font-semibold pb-5">
          What Our Guests say
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ipsa quae necessitatibus sapiente doloribus incidunt enim cumque
          eligendi aut consectetur.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div class="flex flex-wrap items-center justify-center gap-10 pt-14">
          <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="userImage1"
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium text-gray-800">
                  Donald Jackman
                </h1>
                <p class="text-gray-800/80">Content Creator</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <StarRating />
              </div>
            </div>
          </div>

          <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="userImage1"
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium text-gray-800">
                  Donald Jackman
                </h1>
                <p class="text-gray-800/80">Content Creator</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <StarRating />
              </div>
            </div>
          </div>

          <div class="text-sm w-80 border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
            <div class="flex flex-col items-center px-5 py-4 relative">
              <img
                class="h-24 w-24 absolute -top-14 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="userImage1"
              />
              <div class="pt-8 text-center">
                <h1 class="text-lg font-medium text-gray-800">
                  Donald Jackman
                </h1>
                <p class="text-gray-800/80">Content Creator</p>
              </div>
            </div>
            <p class="text-gray-500 px-6 text-center">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
            <div class="flex justify-center pt-4">
              <div class="flex gap-0.5">
                <StarRating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
