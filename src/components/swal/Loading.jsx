import Swal from "sweetalert2";

//loading
export const showLoading = function() {
    Swal.fire({
      title: 'Loading...',
      html: 'Please wait...',
      timer:1000,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  };