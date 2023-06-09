// import { api } from "../utils/api";

import { api } from "../utils/api"

// export const fetchCountCommentByMaterialAndClass = async (
//   class_material_id,
//   classroom_id,
//   class_id
// ) => {
//   try {
//     let response = await api.get(
//       "comment/get-count-comment-by-materialId-classroomId-classId",
//       {
//         params: {
//           class_material_id: class_material_id,
//           classroom_id: classroom_id,
//           class_id: class_id,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// export const fetchCommentByMaterialAndClass = async (
//   class_material_id,
//   classroom_id,
//   class_id
// ) => {
//   try {
//     let response = await api.get(
//       "comment/get-by-materialId-classroomId-classId",
//       {
//         params: {
//           class_material_id: class_material_id,
//           classroom_id: classroom_id,
//           class_id: class_id,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// export const fetchCommentByCommentId = async (comment_id) => {
//   try {
//     let response = await api.get(
//       "comment/get-by-materialId-classroomId-classId",
//       {
//         params: {
//           comment_id: comment_id,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// export const fetchAllComment = async () => {
//   try {
//     let response = await api.get("comment/get-all");
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };

//get comment

export const fetchAllCommentByClassMaterial=async(material_id)=>{
    try{
        let response = await api.get("comment/get-by-materialId",
        {
            params: {
               material_id:material_id
            },
          });
        return response.data;

    }catch(error){
        console.log("error",error)
    }
}

export const fetchAllCommentByClassMaterialDetail=async(material_detail_id)=>{
    try{
        let response = await api.get("comment/get-by-materialDetailId",
        {
            params: {
                material_detail_id:material_detail_id
            },
          });
        return response.data;

    }catch(error){
        console.log("error",error)
    }
}