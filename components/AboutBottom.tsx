import React from "react";
import ReviewCard from "./ReviewCard";

type Props = {};

function AboutBottom({}: Props) {
  return (
    <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-5 py-10">
      <div className="">
        <ReviewCard />
      </div>
      <div>
        <button className="bg-orangeL px-10 py-5 text-xl font-bold hover:scale-110 duration-500">
          CONTACT
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <ReviewCard />
        <div className="hidden lg:inline-flex">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default AboutBottom;
