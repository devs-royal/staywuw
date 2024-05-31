import React from "react";

export function InputFormRh({ onChange }){
    const handleChange = (event) => {
        // Validar que solo se ingresen letras
        const nuevoValor = event.target.value.replace(/^[A-Za-z ]{1,40}$/g, '');
        onChange(nuevoValor);
      };
    
      return <input type="text" onChange={handleChange} />;
}