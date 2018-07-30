import React from 'react';

class Article extends React.Component {
    state = {
        name: '',
        amount: ''
    };

    changeName = (e) => {
        this.setState({name: e.target.value})
    };
    changeAmount = (e) => {
        this.setState({amount: Number(e.target.value)})
    };

    render() {
        const list = this.props.content.map((listItem, i) => {
            return (
                <div key={i}>
                    <div>
                        {listItem.name}: {listItem.amount} $
                    </div>
                </div>
            );
        });
        const total = this.props.content.reduce((total, curr) => total + curr.amount, 0);

        return (
            <article>
                <h4>{this.props.type}</h4>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        onChange={this.changeName}
                        value={this.state.name}
                    />
                    <input
                        type="text"
                        placeholder="value"
                        onChange={this.changeAmount}
                        value={this.state.amount}
                    />
                    <button
                        onClick={() => {
                            this.state.amount ? this.props.addItem(this.state.name, this.state.amount, this.props.type) : null;
                            this.setState({name: '', amount: ''});
                        }}>Add
                    </button>
                </div>

                <div>
                    {list}
                </div>

                <div>
                    Total: {total} $
                </div>
            </article>
        )
    }
}

export default Article;