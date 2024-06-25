import React, { useState } from 'react';

const N = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    model: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required field validation
    const requiredFields = ['name', 'email', 'model', 'quantity'];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        alert(`Please enter ${field}`);
        isValid = false;
      }
    });

    if (isValid) {
      // Form submission logic (you can replace this with your desired action)
      console.log('Form submitted:', formData);

      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        model: '',
        quantity: '',
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Application Form</h2>
      <form
        style={{
          maxWidth: '400px',
          margin: 'auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" style={{ display: 'block', margin: '10px 0' }}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Username"
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="email" style={{ display: 'block', margin: '10px 0' }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="model" style={{ display: 'block', margin: '10px 0' }}>
          Model:
        </label>
        <input
          type="text"
          id="model"
          name="model"
          placeholder="Enter Model"
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          value={formData.model}
          onChange={handleInputChange}
        />

        <label htmlFor="quantity" style={{ display: 'block', margin: '10px 0' }}>
          Quantity:
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Enter Quantity"
          style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
          value={formData.quantity}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default N;
