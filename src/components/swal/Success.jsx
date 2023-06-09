import Swal from "sweetalert2";
// updateclass
export const classedited = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your class has been updated',
    showConfirmButton: false,
    timer: 1500
  })
};

//Create class
export const createClass = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your class has been created',
    showConfirmButton: false,
    timer: 1500
  })
};

//assignedclasswork
export const assigned = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your classwork have been assigned to students',
    showConfirmButton: false,
    timer: 1500
  })
};

//assignedclasswork
export const upload = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your course have been uploaded successfully',
    showConfirmButton: false,
    timer: 1500
  })
};

//post result
export const posted = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'The result have been posted public ',
    showConfirmButton: false,
    timer: 1500
  })
};

//student submit work
export const submit= () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Thank you, Gook luck! ',
    showConfirmButton: false,
    timer: 1500
  })
};


//general setting
export const accountupdate = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your account have been updated successfully',
    showConfirmButton: false,
    timer: 1500
  })
};
 // ChangePassword
export const changepassword = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Your password have been changed successfully',
    showConfirmButton: false,
    timer: 1500
  })
};
// 
export const registerAlert = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    iconColor:'#48AD9B',
    title: 'Register successfully',
    showConfirmButton: false,
    timer: 1500
  })}

  // change done
  // export const MyChange = Swal.mixin({
  //   toast: false,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })
  
  // MyChange.fire({
  //   iconColor:'#48AD9B',
  //   title: 'Changed successfully'
  // })