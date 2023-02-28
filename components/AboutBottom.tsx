import { ReviewsT } from "@/types";
import Link from "next/link";
import React from "react";
import ReviewCard from "./ReviewCard";

type Props = {
  reviewsDB: ReviewsT[];
};

function AboutBottom({ reviewsDB }: Props) {
  return (
    <div
      className="flex flex-col gap-4
     justify-center items-center py-10"
    >
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center md:max-w-[60%]">
        {reviewsDB[3]?.review}
      </p>
      <div className="flex flex-wrap md:flex-nowrap gap-5 py-10 items-center">
        {reviewsDB.slice(0, 3).map((review) => (
          <div
            key={review._id}
            className="last:hidden md:flex-1 md:last:inline-flex"
          >
            <ReviewCard reviewsDB={review} />
          </div>
        ))}
      </div>
      <Link href={"/contact"}>
        <button className="bg-orangeL px-10 py-5 text-xl font-bold hover:scale-110 duration-500">
          CONTACT
        </button>
      </Link>
    </div>
  );
}

export default AboutBottom;
