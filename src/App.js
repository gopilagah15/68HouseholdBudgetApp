import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import BudgetList from './components/BudgetList';
import ExpenseList from './components/ExpenseList';
import SummaryReport from './components/SummaryReport';

const App = () => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || [];
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setBudgets(savedBudgets);
    setExpenses(savedExpenses);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [budgets, expenses]);

  const addBudget = (budget) => setBudgets([...budgets, budget]);
  const addExpense = (expense) => setExpenses([...expenses, expense]);

  return (
    <div>
      <h1>Household Budget App</h1>
      <BudgetForm onAddBudget={addBudget} />
      <ExpenseForm onAddExpense={addExpense} budgets={budgets} />
      <BudgetList budgets={budgets} />
      <ExpenseList expenses={expenses} />
      <SummaryReport budgets={budgets} expenses={expenses} />
    </div>
  );
};

export default App;
