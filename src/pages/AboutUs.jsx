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
      <div className="mx-48 mt-10 font-semibold lg:text-3xl ">
        ABOUT US
        <p className="w-20 mt-1 myhr"></p>
      </div>
      <div className="grid grid-cols-4 mx-40 mt-9">
        <div className="flex col-span-3 ml-6 font-medium text-center lg:text-lg">
          {/* <img className="h-8 w-36" src={TnakReanOnly} alt="" /> */}
          <div className="flex mt-12 bg-blue-200">
            
              <span className="text-base text-mygreen ">Tnak</span>
              <span className="text-base text-myorange">Rean</span>
            
            is website that created by Korea Software HRD Center in 2022. The
            best option and it useful for teachers an students in many
            institutes.
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
      <section className="mt-4 bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto ">
          <p className="text-2xl font-semibold text-center uppercase text-black-900 lg:text-4xl">
            meet our team
          </p>
          <p className="w-20 mx-auto mt-2 myhr"></p>
          <div className="container mx-1 mt-14">
            <div className="flex flex-row flex-wrap m-auto text-center">
              {/* first card phanit*/}
              <div className="items-center p-3 transition-colors duration-200 transform bg-blue-400 cursor-pointer basis-1/3 rounded-xl">
                <div className="">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <p className="pt-6 mt-2 text-2xl font-semibold uppercase">
                  chea phanith
                </p>

                <p className="mt-2 text-base text-myorange ">
                  "Do what is right not what is easy."
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* second card sinuon*/}
              <div className="items-center p-3 transition-colors duration-200 transform bg-pink-300 cursor-pointer basis-1/3 rounded-xl ">
                <div className="">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>
                <p className="w-20 m-auto mt-5 myhr"></p>
                <h1 className="pt-6 mt-4 text-3xl font-semibold uppercase">
                  sok sinuon
                </h1>

                <p className="mt-2 text-lg text-myorange">
                  "People respect the money not the person."
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* third card bora*/}
              <div className="items-center p-8 transition-colors duration-200 transform bg-pink-900 cursor-pointer basis-1/3 rounded-xl ">
                <div className="">
                  <img
                    className="flex object-cover w-48 h-48 m-auto rounded-full ring-4 ring-myorange "
                    src={bora}
                    alt=""
                  />
                </div>

                <h1 className="pt-6 mt-4 text-3xl font-semibold uppercase border-t-2 border-t-red-300 ">
                  un bora
                </h1>

                <p className="mt-2 text-lg text-myorange">
                  "He alone, who owns the youth, gains the future."
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* forth card chantha*/}
              <div className="items-center p-8 transition-colors duration-200 transform cursor-pointer basis-1/3 rounded-xl ">
                <div className="">
                  <img
                    className="flex object-cover m-auto rounded-full w-52 h-52 ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>

                <h1 className="pt-6 mt-4 text-3xl font-semibold uppercase border-t-2 border-t-red-300 ">
                  meng chantha
                </h1>

                <p className="mt-2 text-lg text-myorange">
                  "Don't stop when you're tired, Stop when you're done."
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* fifth card kimgech*/}
              <div className="items-center p-8 transition-colors duration-200 transform cursor-pointer basis-1/3 rounded-xl">
                <div className="">
                  <img
                    className="flex object-cover m-auto rounded-full w-52 h-52 ring-4 ring-myorange "
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                  />
                </div>

                <h1 className="pt-6 mt-4 text-3xl font-semibold uppercase border-t-2 border-t-red-300 ">
                  khou kimgech
                </h1>

                <p className="mt-2 text-lg text-myorange ">
                  "it's good, but not enjoy"
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="https://kh.linkedin.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gmail`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGoogleCircle />
                    </div>
                  </a>
                </div>
              </div>
              {/* sixth card kimhab */}
              <div className="items-center p-8 transition-colors duration-200 transform cursor-pointer basis-1/3 ">
                <div className="">
                  <img
                    className="flex object-cover m-auto rounded-full w-52 h-52 ring-4 ring-mygreen "
                    src={kimhab}
                    alt=""
                  />
                </div>

                <h1 className="pt-6 mt-4 text-3xl font-semibold uppercase border-t-2 border-t-red-300 ">
                  thoeun kimhab
                </h1>

                <p className="mt-2 text-base text-myorange">
                  "Follow your own path, no matter what people say"
                </p>

                <div className="flex justify-center mt-5">
                  <a
                    href="kimhab"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Linkedin`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://about.gitlab.com/"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="`Gitlab`"
                  >
                    <div className="text-AboutIcon">
                      <AiFillGitlab />
                    </div>
                  </a>
                  <a
                    href="www.gmail.com"
                    className="mr-3 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
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
      <div className="flex justify-center mt-10 mb-10 text-center text-gray-500">
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
