import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';

function noop() {
}

class MaskInput extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      selectionStart: 0,
      selectionEnd: 0,
      lastValue: '',
      formatedValue: ''
    };
  }

  componentWillMount() {
    //process some properties
    this.groupByArray = this.props.group.map( (item, index) => {
      return this.props.group.slice(0, index + 1).reduce( (mem, current) => {
        return mem + current;
      });
    });
    // console.log(this.groupByArray);

    this.maskMaxLength = this.groupByArray[this.groupByArray.length - 1];
    // console.log(this.maskMaxLength);
    // this.dom = ReactDOM.findDOMNode(this);
  }

  //split the user input
  smartFormat(position, value) {
    var first = value.substr(0, position).replace(/\s/g, ''),
        second = value.substr(position).replace(/\s/g, ''),
        formatedFirst = '',
        formatedSecond = '',
        originFirst = value.substr(0, position),
        originSecond = value.substr(position),
        result = '',
        groupByArray = this.groupByArray;

    first.split('').forEach( (code, index) => {
      if(index >= groupByArray[groupByArray.length - 1]) {
        return;
      }
      formatedFirst += code;
      if(groupByArray.indexOf(index + 1) >= 0) {
        formatedFirst += ' ';
      }
    });

    second.split('').forEach((code, index) => {
      if (index + first.length >= groupByArray[groupByArray.length - 1]) {
        return;
      }
      formatedSecond += code;
      if (groupByArray.indexOf(index + first.length + 1) >= 0) {
        formatedSecond += ' ';
      }
    });

    result = formatedFirst + formatedSecond;
      // return result.trim(' ');
      return {
        result: result.trim(' '),
        first: formatedFirst,
        second: formatedSecond,
        originFirst: originFirst,
        originSecond: originSecond
      };
  }

  handleChange(e) {
    var target = e.target,
        selectionStart = target.selectionStart,
        selectionEnd = target.selectionEnd,
        originVal = target.value,
        actualVal = target.value.replace(/\s/g, '');

    if(selectionEnd > selectionStart) {
      //just return when using different language input method
      return;
    }

    if(this.state.lastValue.length > originVal.length) {
      //when user back to remove characters
      this.setState({
        formatedValue: originVal,
        lastValue: originVal
      });
      this.props.onBack.call(this, originVal, actualVal);
      return;
    }

    var processed = this.smartFormat(selectionEnd, originVal);
    var result = processed.result,
        originFirst = processed.originFirst,
        formatedFirst = processed.first;

    var caret = selectionStart + formatedFirst.split(' ').length - originFirst.split(' ').length;

    this.setState({
      formatedValue: result,
      lastValue: result
    }, function() {
      this.refs.maskedInput.setSelectionRange(caret, caret);
    });

    if(result.replace(/\s/g, '').length == this.maskMaxLength) {
      this.props.onComplete.call(this, result);
    }
  }

  render() {
    return (
      <input ref="maskedInput" onChange={this.handleChange.bind(this)} value={this.state.formatedValue} />
    )
  }
}

MaskInput.propTypes = {
  acceptType: React.PropTypes.oneOf(['number', 'all']),
  group: React.PropTypes.array,
  onComplete: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onBack: React.PropTypes.func
}

MaskInput.defaultProps = {
  acceptType: 'number',
  group: [3, 4, 4],
  onComplete: noop,
  onFocus: noop,
  onBlur: noop,
  onBack: noop
}

export default MaskInput;
