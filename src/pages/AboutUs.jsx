import React from "react";
import TnakRean from "../assets/images/logo/TnakRean.jpg";
import {
  AiFillGitlab,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import kimhab from "../assets/images/logo/IMG_20220613_160539-01.jpeg";
import bora from "../assets/images/logo/photo_2022-06-13_19-22-40 copy.jpg";
import phanith from "../assets/images/members/phanith.jpg";
import sinuon from "../assets/images/members/sinuon.jpg";
import chantha from "../assets/images/members/chantha.jpg";
import kimgech from "../assets/images/members/kimgech.jpg";
import Navbar from "../components/Navbar";

export default function AboutUs() {
  return (
    <div>
      <Navbar/>
      <div className=" bg-smoke">
        <div className="grid grid-cols-4 px-48 pt-8 ">
          <div className="col-span-3 ml-6 font-medium text-center lg:text-lg ">
            <p className="mt-5 text-2xl font-semibold text-center uppercase lg:text-4xl">
              About US
            </p>
            <p className="w-20 mx-auto mt-2 myhr"></p>
            <div className="flex mt-10 ">
              <span className="text-base text-mygreen ">Tnak</span>
              <span className="text-base text-myorange">Rean</span>
              <span className="-ml-4 text-base">
                is website that created by Korea Software HRD Center in 2022.
                The best option and it useful for teachers an students in many
                institutes.
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <img
              className="flex object-cover m-auto rounded-full lg:w-40 lg:h-40 ring-4 ring-mygreen "
              src={TnakRean}
              alt="TnakRean logo"
            />
          </div>
        </div>
        <div className="px-8 mt-4">
          <div className="px-1 py-10 ">
            <p className="text-2xl font-semibold text-center uppercase text-black-900 lg:text-4xl">
              meet our team
            </p>
            <p className="w-20 mx-auto mt-2 myhr"></p>
            <div className="flex justify-center mt-14">
              <div className="flex flex-row flex-wrap justify-center text-center ">
                {/* first card phanit*/}
                <div className="items-center p-3 transition-colors duration-200 transform bg-white shadow-md cursor-pointer basis-[30%] rounded-xl">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={phanith}
                    alt="Phanith"
                  />
                  <p className="w-20 mx-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase">
                    chea phanith
                  </h1>

                  <p className="mx-2 mt-2 text-myorange text-md">
                    "Do what is right not what is easy."
                  </p>
                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/chea-phanith-963b421a5/"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/cheaphanith"
                      class="text-gray-800 hover:text-gray-500  group-hover:text-white mr-3"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab href="mailto: abc@example.com" />
                      </div>
                    </a>
                    <a
                      href="mailto:https://gitlab.com/cheaphanith"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>

                {/* second card sinuon*/}
                <div className="items-center mx-8 p-3 transition-colors duration-200 transform bg-white shadow-md cursor-pointer basis-[30%] rounded-xl">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={sinuon}
                    alt="Sinuon"
                  />
                  <p className="w-20 mx-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase">
                    chea phanith
                  </h1>

                  <p className="mx-2 mt-2 text-myorange text-md">
                    "People respect the money not the person."
                  </p>
                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/sok-sinuon-3800ab14a/?trk=public-profile-join-page"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/soksinuon16"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab href="mailto: soksinuon16@gmail.com" />
                      </div>
                    </a>
                    <a
                      href="www.gmail.com"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>
                {/* third card bora*/}
                <div className="items-center p-3 transition-colors duration-200 transform bg-white shadow-md cursor-pointer basis-[30%] rounded-xl">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={bora}
                    alt="Bora"
                  />
                  <p className="w-20 m-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase">
                    un bora
                  </h1>
                  <p className="mx-2 mt-2 text-myorange text-md">
                    "He alone, who owns the youth, gains the future."
                  </p>
                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/bora-un-467751226"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/UnBora"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab/>
                      </div>
                    </a>
                    <a
                      href="mailto:bora.un2000@gmail.com"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>
                {/* forth card chantha*/}
                <div className="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl mt-9 bg-white shadow-md">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={chantha}
                    alt="Chantha"
                  />
                  <p className="w-20 m-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase">
                    meng chantha
                  </h1>

                  <p className="mx-2 mt-2 text-myorange text-md">
                    "Don't stop when you're tired, Stop when you're done."
                  </p>

                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/chantha-meng-556aa9243/"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/chanthaamengg"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab />
                      </div>
                    </a>
                    <a
                      href="mailto:chanthaamengg@gmail.com"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>
                {/* fifth card kimgech*/}
                <div className="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md mt-9 mx-8 ">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={kimgech}
                    alt="Kimgech"
                  />
                  <p className="w-20 m-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase ">
                    khou kimgech
                  </h1>

                  <p className="mx-2 mt-2 text-myorange text-md">
                    "It's good but not enjoy.
                  </p>
                  <p className="mx-2 text-myorange text-md">
                    And I don't know is not the answer."
                  </p>

                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/kimgech-khou-280a06243"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/kimgech"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab />
                      </div>
                    </a>
                    <a
                      href="mailto: kimgech309@gmail.com"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>
                {/* sixth card kimhab */}
                <div className="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md mt-9">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={kimhab}
                    alt="Kimhab"
                  />
                  <p className="w-20 m-auto mt-5 myhr"></p>
                  <h1 className="pt-2 mt-2 text-2xl font-semibold uppercase">
                    thoeun kimhab
                  </h1>
                  <p className="mx-2 mt-2 text-myorange text-md">
                  "Don't wait for the perfect moment, take the moment and make it perfect"
                  </p>
                  <div className="flex justify-center mt-5">
                    <a
                      href="https://www.linkedin.com/in/kimhab-thoeun-2626a716b/"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Linkedin`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://gitlab.com/keomhab"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gitlab`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGitlab />
                      </div>
                    </a>
                    <a
                      href="mailto:keomhab@gmail.com"
                      className="mr-3 text-gray-800 hover:text-gray-500 group-hover:text-white"
                      aria-label="`Gmail`"
                    >
                      <div className="text-AboutIcon">
                        <AiFillGoogleCircle />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-10 text-center text-gray-500">
          Copyright
          <p className="px-1 pt-1">
            <BiCopyright />
          </p>
          2022 TnakRean. All right reserved.
        </div>
      </div>
    </div>
  );
}
