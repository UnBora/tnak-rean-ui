import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import swal from "sweetalert";
import logo from "../../assets/images/logo/TnakRean2.png";
export default function CreateClass() {
  const classcreated = () => {
    swal("Classroom was created successfully", "", "success");
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal ">
        <div class="card flex-shrink-0  shadow-xl bg-smoke  ">
          {/* CreateClassroom*/}
          <section className="p-6 ">
            <form
              novalidate=""
              action=""
              className="flex flex-col max-w-lg mx-auto space-y-2 ng-untouched ng-pristine ng-valid"
            >
              <h1 className="text-2xl font-semibold ">Create Classroom</h1>
              <p className="w-full pt-1 myhr"></p>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md ">
                <div className="grid grid-cols-6 gap-4 col-span-full md:col-span-4">
                  {/* Name class */}
                  <div className="col-span-full">
                    <div className="col-span-full sm:col-span-3">
                      <label for="username" className="text-sm font-medium">
                        Class name <span className="text-red-600 ">*</span>
                      </label>
                      <input
                        id="username"
                        type="text"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:mygreen dark:border-gray-700 focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>
                  {/* School */}
                  <div className="col-span-full ">
                    <label for="username" className="text-sm font-medium">
                      School <span className="text-red-600 ">*</span>
                    </label>
                    <select
                      id="username"
                      type="text"
                      placeholder="Username"
                      className="w-full px-4 py-2 mt-1 leading-tight bg-white border rounded-md focus:mygreen focus:mygreen-opacity-75 focus:outline-none focus:bg-white"
                    >
                      {" "}
                      <option className="p-6 text-md">Royal University</option>
                      <option className="p-6 text-md ">KSHRD</option>
                      <option className="p-6 text-md ">NUM</option>
                    </select>
                    <div className="flex justify-between mt-3">
                      <div>
                        <label class=" flex flex-col items-center  rounded-lg shadow-lg tracking-wide uppercase border cursor-pointer  border-myorange  px-5">
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                          </svg>
                          <span class=" text-sm leading-normal">Image</span>
                          <input type="file" class="hidden" />
                        </label>
                      </div>

                      <label
                        for="my-modal-5"
                        className="flex mt-2 space-x-1 cursor-pointer row text-md "
                      >
                        {" "}
                        <IoMdAddCircleOutline className="mt-1 " />
                        Add School
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className="flex justify-center mt-2 space-x-4">
              <label
                for="my-modal-3"
                className="p-2 border-none rounded-full btn btn-sm bg-myorange hover:bg-myhoverorange"
              >
                Cancel
              </label>

              <button
                for="my-modal-3"
                className="border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
              >
                <label for="my-modal-3" onClick={() => classcreated()}>
                  Create
                </label>
              </button>
            </div>
          </section>

          {/* End card */}
        </div>
      </div>
      {/* Add School */}
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class=" bg-smoke max-w-sm p-6 rounded-md relative">
          <label
            for="my-modal-5"
            class="btn btn-xs btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg mb-2">Add your school</h3>

          <div className="col-span-full sm:col-span-3">
            <input
              id="username"
              type="text"
              placeholder="Enter school name"
              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring focus:ring-opacity-75 focus:mygreen dark:border-gray-700 focus:outline-none focus:bg-white"
            />
          </div>
          <div class="modal-action">
            <label
              for="my-modal-5"
              class="border-none rounded-full btn btn-sm px-4 bg-mygreen hover:bg-myhovergreen"
            >
              Add
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
}
