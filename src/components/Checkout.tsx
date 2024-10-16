import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement checkout logic here
    console.log('Checkout data:', formData);
    // You would typically send this data to your server for processing
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">ZIP Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label htmlFor="expirationDate" className="block text-gray-700 font-bold mb-2">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;