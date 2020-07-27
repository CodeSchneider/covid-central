import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ScrollTo extends Component {
  componentDidUpdate(prevProps) {
    const { values : prevValues } = prevProps;
    const { values, name } = this.props;
    if (prevValues[name] !== values[name]) {
      ReactDOM.findDOMNode(this.props.inputRef.current).scrollIntoView({ behavior: 'smooth' });
    }
    // console.log('prevProps: ',prevProps);
    // console.log('props: ',this.props);
    // if prevProps.values[this.props.name]
    // if (prevProps.submitCount !== this.props.submitCount && !this.props.isValid) {
    //   if (Object.keys(this.props.errors)[0] === this.props.name) {
    //     ReactDOM.findDOMNode(this.props.inputRef.current).scrollIntoView({ behavior: 'smooth' });
    //   }
    // }
    console.log('it updated...');
  }

  render() {
    return null;
  }
}
