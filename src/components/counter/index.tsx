import React from "react";

export default class Counter extends React.Component<{ initialValue: number}, { counter: number}> {
    state = { counter: this.props.initialValue};
    render() {
      return  React.createElement(
          'div',
          { className: 'flex' },
          React.createElement('button', { onClick: () => this.modify(-1) }, '-'),
          React.createElement('p', { }, this.state.counter),
          React.createElement('button', { onClick: () => this.modify(1) }, '+'))
      }

      modify = (amount: number) => {
        this.setState((state) => ({
            counter: state.counter + amount,
        }));
    };
}
