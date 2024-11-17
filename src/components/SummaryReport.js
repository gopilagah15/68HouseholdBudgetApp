import React from 'react';

const SummaryReport = ({ budgets, expenses }) => {
  const totalBudget = budgets.reduce((acc, budget) => acc + budget.amount, 0);
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = totalBudget - totalExpense;

  return (
    <div>
      <h2>Monthly Summary</h2>
      <p>Total Budget: ${totalBudget.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpense.toFixed(2)}</p>
      <p>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
    </div>
  );
};

export default SummaryReport;
