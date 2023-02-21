import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function ContactHeader({}: Props) {
  return (
    <header
      className={`sticky top-0 flex bg-blackB items-center justify-around py-6 z-50 select-none`}
    >
      <Link href={"/"}>
        <Image
          src={"/logoW.svg"}
          alt=""
          width={160}
          height={200}
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
}

export default ContactHeader;
