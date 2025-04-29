import React, { useState } from 'react';
import axios from 'axios';

function AddGoods() {
  const [goodsName, setGoodsName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/goods/add', {
        goodsName,
        quantity,
        price,
      });
      alert('Goods Added');
    } catch (err) {
      console.error('Error adding goods:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Goods</h2>
      <div>
        <label>Goods Name:</label>
        <input type="text" value={goodsName} onChange={(e) => setGoodsName(e.target.value)} required />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <button type="submit">Add Goods</button>
    </form>
  );
}

export default AddGoods;
