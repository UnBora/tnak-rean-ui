import React from "react";
import TnakRean from "../assets/images/logo/TnakRean.jpg";
import Register from "../components/Register";
import RegisterV2 from "../components/Register";
import {
  AiFillGitlab,
  AiFillGoogleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";
import TnakReanOnly from "../assets/images/logo/TnakReanOnly.png";
import kimhab from "../assets/images/logo/IMG_20220613_160539-01.jpeg";
import bora from "../assets/images/logo/photo_2022-06-13_19-22-40 copy.jpg";

export default function AboutUs() {
  return (
    <div>
      <div class="lg:text-3xl mx-48 font-semibold mt-10 ">
        ABOUT US
        <p className="w-20 mt-1 myhr"></p>
      </div>
      <div class="grid grid-cols-4 mt-9 mx-40">
        <div class="col-span-3 ml-6 font-medium lg:text-lg text-center flex">
          {/* <img className="h-8 w-36" src={TnakReanOnly} alt="" /> */}
          <div className="flex mt-12 bg-blue-200">
            
              <span className="text-base text-mygreen ">Tnak</span>
              <span className="text-base text-myorange">Rean</span>
            
            is website that created by Korea Software HRD Center in 2022. The
            best option and it useful for teachers an students in many
            institutes.
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
      <section class="bg-white dark:bg-gray-900 mt-4">
        <div class="container px-6 py-10 mx-auto ">
          <p class="text-2xl font-semibold text-center text-black-900 uppercase lg:text-4xl">
            meet our team
          </p>
          <p className="w-20 mx-auto mt-2 myhr"></p>
          <div class="container mt-14 mx-1">
            <div class="flex flex-row flex-wrap text-center m-auto">
              {/* first card phanit*/}
              <div class="basis-1/3 items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl bg-blue-400">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <p class="mt-2 text-2xl font-semibold uppercase pt-6">
                  chea phanith
                </p>

                <p class="mt-2 text-myorange text-base ">
                  "Do what is right not what is easy."
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
              {/* second card sinuon*/}
              <div class="basis-1/3 bg-pink-300 items-center p-3 transition-colors duration-200 transform cursor-pointer rounded-xl ">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 class="mt-4 text-3xl font-semibold uppercase pt-6">
                  sok sinuon
                </h1>

                <p class="mt-2 text-myorange text-lg">
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
              <div class="basis-1/3 bg-pink-900 items-center p-8 transition-colors duration-200 transform cursor-pointer rounded-xl ">
                <div class="">
                  <img
                    class="object-cover w-48 h-48 flex m-auto rounded-full ring-4 ring-myorange "
                    src={bora}
                    alt=""
                  />
                </div>

                <h1 class="mt-4 text-3xl font-semibold uppercase pt-6 border-t-2 border-t-red-300 ">
                  un bora
                </h1>

                <p class="mt-2 text-myorange text-lg">
                  "He alone, who owns the youth, gains the future."
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
              {/* forth card chantha*/}
              <div class="basis-1/3 items-center p-8 transition-colors duration-200 transform cursor-pointer rounded-xl ">
                <div class="">
                  <img
                    class="object-cover w-52 h-52 flex m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>

                <h1 class="mt-4 text-3xl font-semibold uppercase pt-6 border-t-2 border-t-red-300 ">
                  meng chantha
                </h1>

                <p class="mt-2 text-myorange text-lg">
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
              <div class="basis-1/3 items-center p-8 transition-colors duration-200 transform cursor-pointer rounded-xl">
                <div class="">
                  <img
                    class="object-cover w-52 h-52 flex m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>

                <h1 class="mt-4 text-3xl font-semibold uppercase pt-6 border-t-2 border-t-red-300 ">
                  khou kimgech
                </h1>

                <p class="mt-2 text-myorange text-lg ">
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
              <div class="basis-1/3 items-center p-8 transition-colors duration-200 transform cursor-pointer ">
                <div class="">
                  <img
                    class="object-cover w-52 h-52 flex m-auto rounded-full ring-4 ring-mygreen "
                    src={kimhab}
                    alt=""
                  />
                </div>

                <h1 class="mt-4 text-3xl font-semibold uppercase pt-6 border-t-2 border-t-red-300 ">
                  thoeun kimhab
                </h1>

                <p class="mt-2 text-myorange text-base">
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
