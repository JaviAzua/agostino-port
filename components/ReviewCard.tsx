import React from "react";
import { BsFillStarFill } from "react-icons/bs";

type Props = {};

function ReviewCard({}: Props) {
  return (
    <div className="border relative bg-slate-200 rounded-2xl min-h-[5rem] p-5 ">
      <div className="border-b border-blackB space-y-2">
        <div className="flex text-orangeL">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <p className="text-sm text-blackB/70">{`"Gonzalo's work exceeded our expectations. He delivered all work on time. He was always available to answer any questions, and he even provided us with helpful suggestions."`}</p>
      </div>
      <p className="text-right font-semibold text-xs text-blackB">{`(Review from Upwork)`}</p>
    </div>
  );
}

export default ReviewCard;
