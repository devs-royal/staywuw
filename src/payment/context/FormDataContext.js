import React, { createContext, useState } from 'react';

const FormDataContext = createContext();

export default FormDataContext;


export const FormDataProvider = ({ children }) => {
  // State variable for form data
  const [formData, setFormData] = useState({
    email: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    telephoneNumber: '',
    showPhoneNumberField: false,
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
