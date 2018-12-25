import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Layout.css"
import * as actions from "../../store/actions"
class Layout extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div className="Layout">
                <div className="LayoutHeader">
                    Current Counter: {this.props.ctr}
                    <br/>
                    Current State: {this.props.lgc.toString()}
                </div>
                <button  onClick={this.props.onIncrementCounter}>Increment</button>
                <button  onClick={this.props.onAddCounter}>Add 5</button>
                <button  onClick={this.props.onDecCounter}>Decrement</button>
                <button  onClick={this.props.onToggle}>Toggle</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        lgc: state.lgc.logic
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
        onAddCounter: () => dispatch ({type : actions.ADD , value: 5}),
        onDecCounter: () => dispatch ({type : actions.DECREMENT }),
        onToggle: () => dispatch ({type : actions.TOGGLE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);