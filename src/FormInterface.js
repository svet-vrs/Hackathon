// src/FormInterface.js
import React, { useState } from 'react';

function FormInterface() {
  const [formData, setFormData] = useState({
    name: 'Max Mustermann',
    birthdate: '15. Mai 1980',
    address: 'Musterstraße 123',
    careGrade: '',
    authorizedPerson: '',
    careType: ''
  });

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="form-interface">
      <h2>Antragsformular</h2>
      <p>Name: {formData.name}</p>
      <p>Geburtsdatum: {formData.birthdate}</p>
      <p>Adresse: {formData.address}</p>
      <p>Pflegegrad: {formData.careGrade}</p>
      <p>Bevollmächtigter: {formData.authorizedPerson}</p>
      <p>Pflegeart: {formData.careType}</p>
    </div>
  );
}

export default FormInterface;
