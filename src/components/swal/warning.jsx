import swal from "sweetalert";
import form from "sweetalert";
export const removeStudent = () => {
    swal({
      title: "Are you sure to remove this student?",
      text: "You will lost all information of this student",
      icon: "warning",
      buttons: ["Cancel ", "Yes, I am sure!"],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        swal({
          title: "Student was removed successfully",
  
          icon: "success",
        }).then(function () {
          form.submit(); // <--- submit form programmatically
        });
      } else {
        swal("Cancelled", "This student is still in your class", "error");
      }
    });
  };
  export const decline = () => {
    swal({
      title: "Are you sure to decline?",
      text: "You won't be able to revert this",
      icon: "warning",
      buttons: ["Cancel ", "Yes, I am sure!"],
      dangerMode: true,
    }).then(function (isConfirm) {
      if (isConfirm) {
        swal({
          title: "Student was removed successfully",
  
          icon: "success",
        }).then(function () {
          form.submit(); // <--- submit form programmatically
        });
      } else {
        swal("Cancelled", "This student is still pending", "error");
      }
    });
  };