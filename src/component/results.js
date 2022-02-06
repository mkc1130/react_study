import React, {Component} from 'react';
import '../styles/result.css';

class Result extends Component {
  static defaultProps = {
    id: 'missing data',
    pw: 'missing data'
  }
  render() {
    return (
      <div>ID : {this.props.id}<br />
           PW : {this.props.pw}</div>
    );
  }
}



export default Result;
