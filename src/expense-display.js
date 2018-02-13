import React, { Component } from 'react';
import Expense from './expence';

class ExpenseDisplay extends Component {

    renderExpenses = () => {
        var arr = this.props.expenses;
        return arr.map((expense, index) =>  
            //  <Expense key={index} amount={expense.amount} categ={expense.categ} descr={expense.descr} /> ----- the same in ES5
            <Expense key={index} {...expense} />
        );
    }

    render() {
        return (
             <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;