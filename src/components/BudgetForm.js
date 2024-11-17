import React, { useState } from 'react';

const BudgetForm = ({ onAddBudget }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBudget({ category, amount: parseFloat(amount) });
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Budget</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;
