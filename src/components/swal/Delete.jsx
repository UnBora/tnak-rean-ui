import Swal from "sweetalert2";

// class delete
export const classDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#48AD9B",
    cancelButtonColor: "#EE8F49",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#48AD9B",
        title: "Your class has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

// student remove in class
export const removeStudent = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#48AD9B",
    cancelButtonColor: "#EE8F49",
    confirmButtonText: "Yes, remove",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#48AD9B",
        title: "Student have been removed from class",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

// decline student
export const declineStu = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#48AD9B",
    cancelButtonColor: "#EE8F49",
    confirmButtonText: "Yes, decline",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#48AD9B",
        title: "Decline successfully ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

//folder
export const deleteFolder = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: "#48AD9B",
    title: 'Folder have been deleted',
    showConfirmButton: false,
    timer: 1500
  })
};

//taskwork
export const deleteClasswork = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: "#48AD9B",
    title: 'Classwork have been deleted',
    showConfirmButton: false,
    timer: 1500
  })
};

// Delate Account
export const deleteaccount = () => {

  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: "#48AD9B",
    title: 'Your account have been deleted successfully',
    title: 'File have been deleted',
    showConfirmButton: false,
    timer: 1500
  })
};

//DeactiveAccount
export const deactivateaccount = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: "#48AD9B",
    title: 'Your deactivate account have been deleted successfully',
    showConfirmButton: false,
    timer: 1500
  })
};
//file document
export const deleteFile = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor: "#48AD9B",
    title: 'File have been deleted',
    showConfirmButton: false,
    timer: 1500
  })
};







