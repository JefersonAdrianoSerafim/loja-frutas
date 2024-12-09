// src/pages/Contatos.jsx
import React, { useState } from 'react';

const Contatos = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send the form data to your backend here if needed
  };

  return (
    <div className="text-center py-10 mx-5">
      <h1 className="text-4xl font-bold">Contate-nos</h1>
      <p className="text-lg mt-4">Se você tiver alguma dúvida ou precisar de ajuda, envie-nos uma mensagem.</p>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button type="submit" className="primary-btn px-6 py-2 bg-primary text-white font-semibold rounded-full">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contatos;