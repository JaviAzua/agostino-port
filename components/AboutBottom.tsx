import { ReviewsT } from "@/types";
import Link from "next/link";
import React from "react";
import ReviewCard from "./ReviewCard";

type Props = {
  reviewsDB: ReviewsT[];
};

function AboutBottom({ reviewsDB }: Props) {
  return (
    <div className="flex items-center flex-col justify-center flex-wrap lg:flex-nowrap gap-5 py-10">
      <ReviewCard reviewsDB={reviewsDB[0]} />
      <ReviewCard reviewsDB={reviewsDB[1]} />
      <ReviewCard reviewsDB={reviewsDB[2]} />
      <Link href={"/contact"}>
        <button className="bg-orangeL px-10 py-5 text-xl font-bold hover:scale-110 duration-500">
          CONTACT
        </button>
      </Link>
    </div>
  );
}

export default AboutBottom;
