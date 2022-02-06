import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {id: '',
    pw: ''};

    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangePW = this.handleChangePW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeID(event) {
    this.setState({id: event.target.value});
  }
  handleChangePW(event) {
    this.setState({pw: event.target.value});
  }

  handleSubmit(event) {
    // Navigate.goMain();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          ID :
          <input className="ID" type="text" value={this.state.id} onChange={this.handleChangeID} />
          <br />
        </label>
        <label>
          PW :
          <input className="PW" type="password" value={this.state.pw} onChange={this.handleChangePW} />
          <br />
        </label>
        <button type="submit"><Link to ="/main" state={{
          id : this.state.id,
          pw : this.state.pw
        }}>로그인</Link></button>
      </form>
    );
  }
}

export default Form;
