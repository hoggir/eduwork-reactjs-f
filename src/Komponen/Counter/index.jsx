import React from "react";
import "./counter.css";

class Counter extends React.Component {
state = {
    value: 0
}

handleMinus = () => {
    if(this.state.value > 0) {
        this.setState({value: this.state.value - 1
        }, () => this.props.receiveValue(this.state.value));
    }
}

handlePlus = () => {
    this.setState({value: this.state.value + 1
    }, () => this.props.receiveValue(this.state.value));
}

    render() {
        return (
            <div className="container">
                <div className="btn" onClick={this.handleMinus}>-</div>
                <p className="qty">{this.state.value}</p>
                <div className="btn" onClick={this.handlePlus}>+</div>
            </div>
        )
    }
}

export default Counter;