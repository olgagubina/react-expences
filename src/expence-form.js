import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.state = { amount: 0, categ: "", descr: "" };
        console.log(this.state);
    }

    changeExpense = (e) => {
        this.setState({[e.target.id]:e.target.value});
      //e.target.id <-- the element id (which matches our state)
      //e.target.value <-- the element value
      //[e.target.id] <-- is the way to define a dynamic var name
    }

    onBtnClick = () => {
        this.props.addExpense(this.state);
        this.setState({ amount: 0, categ: '', descr: '' });
    }

    render() {
        return (
            <div>
                <form>
                    <SingleInput id="amount" type="number" placeholder="$" content={this.state.amount} controlFunc={this.changeExpense} />
                    <SingleInput id="categ" type="text" placeholder="Category" content={this.state.categ} controlFunc={this.changeExpense} />
                    <SingleInput id="descr" type="text" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense} />
                    <button type="button" onClick={this.onBtnClick}>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;