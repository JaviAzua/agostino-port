import ContactHeader from "@/components/ContactHeader";
import Image from "next/image";
import React from "react";
import PageWrapper from "../page-wrapper";

type Props = {};

function page({}: Props) {
  return (
    <>
      <PageWrapper>
        <ContactHeader />
        <main className="min-h-[90vh] flex justify-center items-center">
          <section>
            <div>
              <div className=" bg-blueF min-h-[60vh] w-[90vw] md:w-[70vw] rounded-t-lg">
                <div className="relative h-[10vh] w-full">
                  <Image
                    src={"/crop.jpeg"}
                    fill
                    alt=""
                    className=" object-cover object-right-center rounded-t-lg"
                  />
                </div>
                <h2 className="text-center font-bold text-2xl py-5">CONTACT</h2>
                <form
                  action=""
                  method="POST"
                  className="flex flex-col p-5 gap-4"
                >
                  <div className="form_item">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className="form_item">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" required />
                  </div>
                  <div className="form_item">
                    <label htmlFor="mssj">Message:</label>
                    <textarea name="mssj" className="min-h-[30vh]" required />
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-white text-blackB min-w-[15vw] py-2 px-5 font-semibold hover:scale-105 duration-300"
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
