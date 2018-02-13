import React, { Component } from 'react';

class Expense extends Component {
    render() {
        return (
            <div>${this.props.amount}, {this.props.categ}, {this.props.descr}</div>
        );
    }
}

export default Expense;