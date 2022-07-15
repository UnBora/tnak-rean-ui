import { api } from "../utils/api";

// classwork folder
export const fetchClassworkFolder = async (classId, classRoomId) => {
  try {
    let response = await api.get("folder/get-classWorkFolders-by-class-id", {
      params: {
        classId: classId,
        classRoomId: classRoomId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// course folder
export const fetchCourseFolder = async (classId, classRoomId) => {
  try {
    let response = await api.get("folder/get-courseFolders-by-class-id", {
      params: {
        classId: classId,
        classRoomId: classRoomId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// get all classwork folder
export const fetchallClassworkFolder = async () => {
  try {
    let response = await api.get("folder/get-classworkFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

//getall course folder
export const fetchallCourseFolder = async () => {
  try {
    let response = await api.get("folder/get-courseFolder-by-teacherUserId");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// create folder in all classwork

export const createClassworkFolders = async (folder_name, material_type_id) => {
  let data = {
    folder_name: folder_name,
    parent_id: null,
    material_type_id: material_type_id,
  };
  console.log("before respon data:", data);

  try {
    let response = await api.post("folder/create-classWorkFolder", data);
    return response.data;
  } catch (error) {
    console.log("create-classworkFolder", error);
  }
};

// create all course folder
export const createCourseFolders = async (folder_name) => {
  let data = {
    folder_name: folder_name,
    parent_id: null,
  };
  console.log("before respon data course:", data);

  try {
    let response = await api.post("folder/create-courseWorkFolder", data);
    return response.data;
  } catch (error) {
    console.log("create-courseFolder", error);
  }
};

// create classwork folder in class================================
export const createClassworkFolderInClass = async (folder_name, class_id) => {
  let data = {
    folder_name: folder_name,
    parent_id: null,
    classroom_id: 1,
    class_id: class_id,
  };
  console.log("before respon data classwork:", data);

  try {
    let response = await api.post(
      "folder/create-classworkFolder-in-class",
      data
    );
    console.log("server response",response);
    return response.data;
  } catch (error) {
    console.log("create-classworkFolder", error);
  }
};
// in folder of course
export const createCourseFolderInClass = async (folder_name, class_id) => {
  let data = {
    folder_name: folder_name,
    parent_id: null,
    classroom_id: 1,
    class_id: class_id,
  };
  console.log("before respon data course:", data);

  try {
    let response = await api.post("folder/create-courseFolder-in-class", data);
    return response.data;
  } catch (error) {
    console.log("create-courseFolder", error);
  }
};

//edit_folder_name
export const editFolderName = async (id, folder_name) => {
  let data = {
    id: id,
    folder_name: folder_name,
  };
  console.log("folder name update from before res:", data);

  try {
    let response = await api.put("folder/edit-folder", data);
    return response.data;
  } catch (error) {
    console.log("ERR", error);
  }
};

// delete_folder

export const removeStudent = async (id) => {
  let data = {
    id:id
  };
  console.log("before respon data:", data);
  // let response = await api.delete(
  //   "teacher/teacher-remove-student-by-id",data
  // );

  try {
    let response = await api.delete("folder/delete-by-FolderId", {
      data,
    });
    return response.data;
  } catch (error) {
    console.log("deleteERRR", error);
  }
  console.log("data from service", data);}
//folder classwork student
//folder classwork course student
export const fetchClassworkFolderStu = async (material_type_id) => {
  try {
    let response = await api.get("folder/get-folders-by-studentId", {
      params: {
        material_type_id: material_type_id,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}


