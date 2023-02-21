import ContactHeader from "@/components/ContactHeader";
import Image from "next/image";
import React from "react";
import PageWrapper from "../page-wrapper";
import { RiDeleteBack2Fill } from "react-icons/ri";
import Link from "next/link";
import { SiUpwork, SiVimeo } from "react-icons/si";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageWrapper>
        <ContactHeader />
        <main className="min-h-[85vh] flex flex-col justify-start">
          <section className="flex min-h-[80%] justify-center p-5 items-center">
            <div className="bg-blueF  w-[90%] md:w-[70%] lg:w-[60%] rounded-t-lg ">
              <div className="relative h-16 w-full">
                <Image
                  src={"/crop.jpeg"}
                  fill
                  alt=""
                  className=" object-cover object-right-center rounded-t-lg"
                />
              </div>
              <div className="flex justify-between">
                <Link href={"/"}>
                  <div className="flex gap-2 items-center p-3 group">
                    <RiDeleteBack2Fill className="group-hover:scale-110 md:w-10 md:h-10 transition-all duration-500" />
                    <p className="font-semibold">Back</p>
                  </div>
                </Link>
                <div className="flex gap-2 items-center p-3">
                  <Link
                    target={"_blank"}
                    href={
                      "https://www.upwork.com/freelancers/~014f58dbab80832b3f"
                    }
                  >
                    <div className="hover:scale-110 transition-all duration-500 bg-white rounded-full p-2 flex justify-center items-center">
                      <SiUpwork className="cursor-pointer w-6 h-6 md:w-8 md:h-8 text-[#108A00]" />
                    </div>
                  </Link>
                  <Link
                    href={"https://vimeo.com/user53523138"}
                    target={"_blank"}
                  >
                    <div className="hover:scale-110 transition-all duration-500 bg-white rounded-full p-2 flex justify-center items-center">
                      <SiVimeo className="cursor-pointer w-6 h-6 md:w-8 md:h-8 text-[#0FAEF1]" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col py-16">
                <h2 className="text-center font-bold text-xl lg:text-2xl py-2">
                  CONTACT
                </h2>
                <form
                  action="https://formspree.io/f/xknarnpq"
                  method="POST"
                  className="flex flex-col p-5 gap-3"
                >
                  <div className="form_item">
                    <label className="text-sm" htmlFor="email">
                      E-mail:
                    </label>
                    <input
                      className=" text-blackB text-sm focus:outline-none"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form_item">
                    <label className="text-sm" htmlFor="subject">
                      Subject:
                    </label>
                    <input
                      className=" text-blackB text-sm focus:outline-none"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="form_item">
                    <label className="text-sm" htmlFor="mssj">
                      Message:
                    </label>
                    <textarea
                      name="mssj"
                      className="h-20 text-blackB text-sm focus:outline-none"
                      required
                    />
                  </div>
                  <div className="text-center py-4">
                    <button
                      className="bg-white text-blackB min-w-[80%] py-2  font-semibold hover:scale-105 duration-300"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  );
}

export default page;
