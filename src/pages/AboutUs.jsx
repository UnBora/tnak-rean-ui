import React from "react";
import TnakRean from "../assets/images/logo/TnakRean.jpg";
import RegisterV2 from "../components/Register";
import {
  AiFillGitlab,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import kimhab from "../assets/images/logo/IMG_20220613_160539-01.jpeg";
import bora from "../assets/images/logo/photo_2022-06-13_19-22-40 copy.jpg";
import phanith from "../assets/images/logo/photo_2022-06-13_19-22-40 copy.jpg";

export default function AboutUs() {
  return (
    <div>
      <div class="grid grid-cols-4 mt-8 px-48">
        <div class="col-span-3 ml-6 font-medium lg:text-lg text-center ">
        <p class="text-2xl font-semibold text-center uppercase lg:text-4xl mt-5">
        About US
      </p>
      <p className="w-20 mx-auto mt-2 myhr"></p>
          <div className="flex mt-10 ">
            <span className="text-base text-mygreen ">Tnak</span>
            <span className="text-base text-myorange">Rean</span>
            <span className="-ml-4 text-base">
              is website that created by Korea Software HRD Center in 2022. The
              best option and it useful for teachers an students in many
              institutes.
            </span>
          </div>
        </div>
        <div class="col-span-1">
          <img
            class="object-cover lg:w-40 lg:h-40 flex m-auto rounded-full ring-4 ring-mygreen "
            src={TnakRean}
            alt="TnakRean logo"
          />
        </div>
      </div>
      <section class="dark:bg-gray-900 mt-4 px-8">
        <div class="container px-6 py-10 mx-auto ">
          <p class="text-2xl font-semibold text-center text-black-900 uppercase lg:text-4xl">
            meet our team
          </p>
          <p className="w-20 mx-auto mt-2 myhr"></p>
          <div class="container mt-14 justify-between">
            <div class="flex flex-row flex-wrap text-center m-auto">
              {/* first card phanit*/}
              <div class="card basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={phanith}
                    alt="Phanith"
                  />
                </div>
                <p className="w-20 mt-5 myhr"></p>
                <p class="mt-2 text-2xl font-semibold uppercase pt-2">
                  chea phanith
                </p>

                <p class="mt-2 text-myorange text-md">
                  "Do what is right not what is easy."
                </p>
                {/* icon link social media */}
                <div class="flex justify-center mt-5 content-end">
                  <a
                    href="https://kh.linkedin.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* second card sinuon*/}
              <div class="card basis-[30%] mx-5 items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={phanith}
                    alt="Sinuon"
                  />
                </div>
                <p className="w-20 mt-5 myhr"></p>
                <h1 class="mt-2 text-2xl font-semibold uppercase pt-2">
                  sok sinuon
                </h1>

                <p class="mt-2 text-myorange text-md">
                  "People respect the money not the person."
                </p>

                <div class="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* third card bora*/}
              <div class="basis-[30%]  items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={bora}
                    alt="Bora"
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 class="mt-2 text-2xl font-semibold uppercase pt-2">
                  un bora
                </h1>

                <p class="mt-2 text-myorange text-md">
                  "He alone, who owns the youth, gains the future."
                </p>
                {/* <p>It okay</p> */}

                <div class="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* forth card chantha*/}
              <div class="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl mt-5 bg-white shadow-md">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={kimhab}
                    alt="Chantha"
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 class="mt-2 text-2xl font-semibold uppercase pt-2">
                  meng chantha
                </h1>

                <p class="mt-2 text-myorange text-md">
                  "Don't stop when you're tired, Stop when you're done."
                </p>

                <div class="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* fifth card kimgech*/}
              <div class="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md mt-5 mx-5">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={kimhab}
                    alt="Kimgech"
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 class="mt-2 text-2xl font-semibold uppercase pt-2 ">
                  khou kimgech
                </h1>

                <p class="mt-2 text-myorange text-md ">
                  "it's good, but not enjoy"
                </p>

                <div class="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* sixth card kimhab */}
              <div class="basis-[30%] items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-white shadow-md mt-5">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={kimhab}
                    alt="Kimhab"
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 class="mt-2 text-2xl font-semibold uppercase pt-2">
                  thoeun kimhab
                </h1>

                <p class="mt-2 text-myorange text-md">
                  "Follow your own path, no matter what people say"
                </p>

                <div class="flex justify-center mt-5">
                  <a
                    href="kimhab"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    class="text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white mr-3"
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
      </section>
      <div class="flex text-center text-gray-500 mb-10 mt-10 justify-center">
        Copyright{" "}
        <p className="px-1 pt-1">
          <BiCopyright />
        </p>{" "}
        2022 TnakRean. All right reserved.
      </div>
      <RegisterV2 />
    </div>
  );
}
