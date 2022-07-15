import React, { useState } from "react";
import { MdOutlineAddLink, MdOutlineHomeWork } from "react-icons/md";
import ReactPlayer from "react-player";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { assigntask } from "../../service/classMaterial";
import { fetchSelectClass } from "../../service/classesService";

const AssignClasswork = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Name is required")
      .min(4, "Name must be at least 4 characters")
      .matches(/^[a-zA-Z0-9 ]+$/, "Only alphabets are allowed for Name "),
    score: Yup.number()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr)),
    // .required("point is required")
    // .typeError("you must specify a number"),
    deadline: Yup.date()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .min(new Date(), "Deadline must be later than today"),
    // .typeError("you must specify deadline"),
    link: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr)),
  });
  // const [file,s]
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } =
    useForm(formOptions);
  const { errors } = formState;
  const [link, setLink] = useState("");
  const [file, setfile] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const filehandler = (e) => {
    if (e.target.files.length !== 0) {
      setfile(e.target.files[0]);
      console.log("i am file ", file);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === -1 || e.target.value === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onSubmit = (data) => {
    // if (!data.deadline) {
    //   setError("deadline", {
    //     type: "custom",
    //     message: "Deadline is required",
    //   });
    // }

    assigntask(data, file);
  };
  const [classes, setClass] = useState([]);
  useEffect(() => {
    fetchSelectClass().then((r) => setClass(r.data));
  }, []);

  return (
    <div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle " />
      <div className="modal ">
        <div className="flex-shrink-0 w-screen h-screen overflow-y-scroll shadow-xl card bg-smoke ">
          <label
            for="my-modal-2"
            className="absolute z-10 btn btn-sm btn-circle right-3 top-3"
          >
            ✕
          </label>

          {/* Assign card */}
          <section className="p-6 ">
            <p className="flex text-2xl font-semibold ">
              <MdOutlineHomeWork className="w-10 h-10 p-2 mr-2 text-white border rounded-full bg-mygreen" />
              Assign Classwork
            </p>
            <div className="pt-1 myhr"></div>
            <form className="w-full max-w-3xl p-5 m-auto mt-3 bg-white border rounded-lg">
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                  <p className="font-medium">Title</p>
                  <input
                    {...register("title")}
                    className="block w-full px-4 py-3 mt-1 mb-3 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:ring-1 focus:ring-mygreen"
                    id="title"
                    type="text"
                    placeholder="Title"
                  />
                  <div className="ml-4 text-sm invalid-feedback text-myred">
                    {errors.title?.message}
                  </div>
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                  <p className="font-medium">Description</p>
                  <input
                    {...register("description")}
                    className="block w-full px-4 py-3 mt-1 mb-3 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:ring-1 focus:ring-mygreen"
                    id="Description"
                    type="text"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-full md:mb-0 ">
                  <p className="font-medium ">Classroom</p>
                  <select
                    {...register("class")}
                    onChange={handleChange}
                  multiple
                    id="class"
                    type="text"
                    className="w-full h-20 px-4 py-3 text-gray-700 bg-white border rounded-md shadow-lg focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
                  >
                    <option value={-1} className="p-6 text-md">
                      None
                    </option>
                    <option value={0} className="p-6 text-md">
                      All Class
                    </option>
                    {classes?.map((index) => (
                      <option value={index.id} className="p-6 text-md">
                        {index.className}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 md:w-1/2">
                  <p className="font-medium ">Point</p>
                  <input
                    {...register("score")}
                    className="block w-full px-4 py-3 mb-3 text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:ring-1 focus:ring-mygreen"
                    id="point"
                    type="number"
                    placeholder="Point"
                  />
                  <div className="ml-4 text-sm invalid-feedback text-myred">
                    {errors.point?.message}
                  </div>
                  <div className="ml-4 text-sm invalid-feedback text-myred">
                    {errors.name?.message}
                  </div>
                </div>
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <p className="font-medium ">Deadline</p>
                  <input
                    {...register("deadline")}
                    // disabled={isDisabled}
                    className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded shadow-md appearance-none focus:outline-none focus:ring-1 focus:ring-mygreen"
                    id="userdate"
                    type="datetime-local"
                  />
                  <div className="ml-4 text-sm invalid-feedback text-myred">
                    {errors.deadline?.message}
                  </div>
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="flex flex-col items-center py-1 mb-3 tracking-wide uppercase border rounded shadow-lg cursor-pointer ">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="text-sm font-normal rounded focus:ring-1 focus:ring-mygreen">
                      Upload File
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => filehandler(e)}
                      {...register("file")}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                  <div className="flex space-x-2">
                    <MdOutlineAddLink className="text-2xl" />
                    <label for="my-modal-link">
                      <p className="font-medium cursor-pointer">
                        {link ? link : "Add link"}
                      </p>
                      <div className="invalid-feedback">
                        {errors.link?.message}
                      </div>
                    </label>
                    <div>
                      {/* Add link */}
                      <input
                        type="checkbox"
                        id="my-modal-link"
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
                          <label
                            for="my-modal-link"
                            className="absolute btn btn-xs btn-circle right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="mb-2 text-lg font-bold">Add link</h3>
                          <div className="col-span-full sm:col-span-3">
                            <input
                              {...register("link")}
                              id="username"
                              type="text"
                              placeholder="Add link"
                              onChange={(e) => setLink(e.target.value)}
                              className="w-full px-4 py-2 mt-1 leading-tight text-gray-700 bg-white border rounded-md focus:ring-1 focus:ring-mygreen focus:mygreen focus:outline-none focus:bg-white"
                            />
                          </div>
                          <div className="modal-action">
                            <label
                              onClick={() => console.log(link)}
                              for="my-modal-link"
                              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                            >
                              Add
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* ========== */}
                    </div>
                  </div>

                  <div className="mt-3 player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://reactjsexample.com/tag/loading/"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="flex justify-end mt-2">
                    <label
                      type="button"
                      className="px-5 mt-3 ml-1 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
                      onClick={handleSubmit(onSubmit)}
                      for="my-modal-2"
                    >
                      Assign
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </section>
          {/* End card */}
        </div>
      </div>
    </div>
  );
};

export default AssignClasswork;
