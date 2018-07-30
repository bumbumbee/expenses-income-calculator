import React, { Component } from 'react';
import Article from './components/Content';


class App extends Component {
    constructor(){
        super();

        const expenseStor = JSON.parse(localStorage.getItem('expense'));
        const incomeStor = JSON.parse(localStorage.getItem('income'));
        this.state = {
            type:['expense', 'income'],
            expense:expenseStor? expenseStor : [],
            income:incomeStor? incomeStor : []
        }
    }


    addItem = (name,amount,type) => {
        console.log(name, amount, type);
        this.setState({[type]: [...this.state[type],{name,amount}]});
        localStorage.setItem(type, JSON.stringify([...this.state[type],{name,amount}]));
    };

    render() {
        const article = this.state.type.map((item,i) => {
            return (
                <Article
                    addItem = {this.addItem}
                    key={i}
                    index={i}
                    type={item}
                    content={this.state[item]}
                />
            )
        });

        const balance = this.state.income.reduce((total,current)=>total+current.amount,0)-this.state.expense.reduce((total,current)=>total+current.amount,0);
        return (
            <div>
                <div>
                    <div>Balance: { balance } $</div>
                    <div>
                        { article }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;