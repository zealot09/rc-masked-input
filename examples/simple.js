// use jsx to render html, do not modify simple.html

import 'rc-mask-input/assets/index.less';
import MaskInput from 'rc-mask-input';
import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <div>
        <label>手机号:</label>
        <MaskInput></MaskInput>
        <label>银行卡号:</label>
        <MaskInput group={[4, 4, 4, 4, 3]}></MaskInput>
          <label>信用卡:</label>
          <MaskInput group={[4, 4, 4, 4]}></MaskInput>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));
