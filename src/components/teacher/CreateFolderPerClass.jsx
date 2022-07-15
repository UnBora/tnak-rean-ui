import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  createClassworkFolderInClass,
  createClassworkFolders,
  createCourseFolderInClass,
  createCourseFolders,
} from "../../service/folderService";
import { useParams } from "react-router-dom";

function CreateFolder() {
  const { id } = useParams();
  const validationSchema = Yup.object().shape({
    folderName: Yup.string()
      .required("Folder Name is required")
      .min(4, "Folder Name must be at least 6 characters")
      .matches(
        /^[a-zA-Z0-9 ]+$/,
        "Folder Name Only alphabets are allowed for Name "
      ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setError } =
    useForm(formOptions);
  const { errors } = formState;
  let material;

  if (window.location.pathname == `/classroom/${id}/classworks`) {
    material = 2;
  } else if (window.location.pathname == `/classroom/${id}/courses`) {
    material = 1;
  }
  const onSubmit = (data) => {
    if (material == 2) {
      createClassworkFolderInClass(data.folderName, id);
    } else if (material == 1) {
      createCourseFolderInClass(data.folderName, id);
    }
  };

  return (
    <div>
      {/* Add new folder */}
      <input type="checkbox" id="my-modal-folder" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="relative max-w-sm p-6 rounded-md bg-smoke">
          <label
            for="my-modal-folder"
            className="absolute btn btn-xs btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-1 text-lg font-bold">New Folder</h3>
          <div className="col-span-full sm:col-span-3">
            <input
              {...register("folderName")}
              id="folder"
              type="text"
              placeholder="Enter folder name"
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 bg-white border rounded-md shadow-md focus:ring-1 focus:ring-mygreen focus:outline-none focus:bg-white"
            />
          </div>
          <div class="w-full"></div>
          {/* dropdown select class */}
          {/* <div className="w-full mb-6 md:w-full md:mb-0 ">
            <p className="font-medium ">Classroom</p>
            <select
              id="class"
              type="text"
              className="w-full px-2 py-3 text-sm leading-tight text-gray-700 bg-white border rounded-md shadow-md focus:ring-1 focus:ring-mygreen focus:outline-none"
            >
              <option className="p-6 text-sm">All classes</option>
              <option className="p-6 text-sm">PP</option>
              <option className="p-6 text-sm">M5</option>
              <option className="p-6 text-sm">BTB</option>
            </select>
          </div> */}
          <div className="modal-action">
            <label
              onClick={handleSubmit(onSubmit)}
              for="my-modal-folder"
              className="px-4 border-none rounded-full btn btn-sm bg-mygreen hover:bg-myhovergreen"
            >
              Create
            </label>
          </div>
        </div>
      </div>
      {/* ========== */}
    </div>
  );
}

export default CreateFolder;
