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
    console.log(isDisabled);
    if (e.target.value === "-1" || e.target.value === "0") {
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
      <input type="checkbox" id="my-modal-pop" className="modal-toggle " />
      <div className="modal ">
        <div className="flex-shrink-0 shadow-xl card bg-smoke ">
          <label
            for="my-modal-pop"
            className="absolute z-10 btn btn-sm btn-circle right-3 top-3"
          >
            ✕
          </label>

          {/* Assign card */}
          <section className="p-6 ">
            <p className="flex text-2xl font-semibold ">
              <MdOutlineHomeWork className="w-10 h-10 p-2 mr-2 text-white border rounded-full bg-mygreen" />
              Share
            </p>
            <div className="pt-1 myhr"></div>
            <form className="w-full max-w-3xl p-5 m-auto mt-3 bg-white border rounded-lg">
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3 mb-6 md:w-full md:mb-0 ">
                  <p className="font-medium ">Classroom</p>
                  <select
                    {...register("class")}
                    onClick={handleChange}
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
                      <option value={index.id} className="p-4 text-md">
                        {index.className}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="ml-3">
                <h2 className="mt-3 font-bold">Shared</h2>
                <ul>
                    <li>PP</li>
                    <li>KPS</li>
                </ul>
              </div>
              </div>
             <div className="flex justify-end">
             <button class="btn bg-mygreen border-none hover:bg-myhovergreen">Confirm</button>
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
