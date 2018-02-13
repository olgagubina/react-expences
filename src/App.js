import React, { Component } from 'react';
import './App.css';
import ExpenseForm from './expence-form';
import ExpenseDisplay from './expense-display'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { expenses: [] };
  }

  addExpense = (expense) => {
    this.setState({ expenses: this.state.expenses.concat(expense) }, ()=>{console.log(this.state.expenses)});
  } 

  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense} />
        <ExpenseDisplay expenses={this.state.expenses}/>
      </div>
    );
  }
}

export default App;
