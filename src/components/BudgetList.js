import React from 'react';

const BudgetList = ({ budgets }) => {
  return (
    <div>
      <h2>Budget List</h2>
      <ul>
        {budgets.map((budget, index) => (
          <li key={index}>
            <strong>{budget.category}</strong>: ${budget.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetList;
