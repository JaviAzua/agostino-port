import { ReviewsT } from "@/types";
import Link from "next/link";
import React from "react";
import ReviewCard from "./ReviewCard";

type Props = {
  reviewsDB: ReviewsT[];
};

function AboutBottom({ reviewsDB }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-5 flex-wrap py-10 items-center">
        {reviewsDB.map((review) => (
          <div
            key={review._id}
            className="flex-1 last:hidden md:last:inline-flex"
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
