import { useState } from 'react';


function useForm(objeto) {
    const [values, setValues] = useState(objeto);
  
    function setValue(chave, valor) {
      setValues({
        ...values,
        [chave]: valor,
      });
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
  
    function clearForm(objeto) {
      setValues(objeto);
    }
  
      return {
        values,
        handleChange,
        clearForm,
      }
  }

export default useForm;
