import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Layout.css"
class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div className="Layout">
                <div className="LayoutHeader">
                    Current Counter: {this.props.ctr}
                </div>
                <button  onClick={this.props.onIncrementCounter}>Increment</button>
                <button  onClick={this.props.onAddCounter}>Add</button>
                <button  onClick={this.props.onDecCounter}>Decrement</button>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onAddCounter: () => dispatch ({type : "ADD" , value: 5}),
        onDecCounter: () => dispatch ({type : "DECREMENT" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);