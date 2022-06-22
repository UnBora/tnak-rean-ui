import React from "react";
import { IoChevronBackCircle } from "react-icons/io5";
// import { MdOutlineAssignment } from "react-icons/md";
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-build-classic";
export default function FormSubmit() {
  // const [textarea, setTextarea] = useState();

  // const handleChange = (event) => {
  //   setTextarea(event.target.value);
  // };
  return (
    
    <div className="mx-32 mt-10 mb-40">
    <div >
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
       
            </div>
      <div className="flex">
        <NavLink to="/work-submit" className="text-AboutIcon text-mygreen">
          <IoChevronBackCircle />
        </NavLink>
        <NavLink to="/classwork" className="ml-2 font-medium">
          Back
        </NavLink>
      </div>
      <p className="mt-5 text-2xl font-semibold">Phnom Penh Classroom</p>
      <p className="mt-2 text-sm font-normal">Homework 001, Chea Phanith</p>
      <div className="mx-8 mt-7">
        <div className="text-2xl font-semibold text-center">
          <p>Answer Sheet</p>
          <p className="w-20 m-auto mt-1 myhr"></p>
        </div>
        {/* <div >
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
       
            </div> */}
        <div className="flex mt-6">
        
          {/* <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-mygreen focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows="20"
            placeholder="Type your answer here"
            value={textarea}
            onChange={handleChange}
          ></textarea> */}
        </div>
        <div class="mt-5 flex flex-row">
          <button
            type="button"
            className="w-20 py-2 ml-auto text-sm font-medium text-center text-white rounded-full shadow-md bg-mygreen "
          >
            Submit
          </button>
          <button
            type="button"
            className="w-20 py-2 ml-3 text-sm font-semibold text-center text-white rounded-full shadow-md bg-myorange"
          >
            Cancel
          </button>
        </div>
       
      </div>
    </div>
  );
}
