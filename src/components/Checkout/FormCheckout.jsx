import React from 'react'
import "./FormCheckout.css"

const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <div className="div-form">
        <form className="formu" onSubmit={handleSubmitForm}> 
            <label>Nombre completo</label>
            <input type="text" name ="fullname" value= {dataForm.fullname} onChange={handleChangeInput} />

            <label>Teléfono</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <label>Email</label>
            
            <label>Dirección</label>
            <input type="text" name="adress" value={dataForm.adress} onChange={handleChangeInput} />

            <button className="send-order">Enviar mi orden</button>

        </form>
    </div>
        )
}


export default FormCheckout