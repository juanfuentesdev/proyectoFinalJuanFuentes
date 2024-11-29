import React from 'react'

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm}> 
    <label>Nombre completo</label>
    <input type="text" name ="fullname" value= {dataForm.fullname} onChange={handleChangeInput} />

    <label>Teléfono</label>
    <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

    <label>Email</label>
    
    <label>Dirección</label>
    <input type="text" name="adress" value={dataForm.adress} onChange={handleChangeInput} />

    <button>Enviar mi orden</button>

</form>
  )
}

export default FormCheckout