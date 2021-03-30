import Swal from 'sweetalert2'


const success = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Registro completado'
      })
};

const error = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Revisa los campos'
      })
};

const confirmation = () => {
    Swal.fire({
        title: '¿Eliminar registro?',
        text: "Esta acción no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        confirmCancelText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            'El registro se ha eliminado',
            'success'
          )
        }
      })
}

const errorRequest = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contacta con un administrador',
      })
}


  export default {
    error,
    success,
    confirmation,
    errorRequest
  };
  