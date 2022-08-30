const alertCarga = (tipo,param) => {
    if (tipo == 1) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${param} fue cargado con Exito!`,
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `El ${param} ya existe`,
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

  