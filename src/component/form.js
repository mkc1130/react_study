import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/form.css';


function Form() {
  const [id,setID] = useState("");
  const [pw,setPW] = useState("");

  function handleChangeID(event) {
    setID(event.target.value);
  }
  function handleChangePW(event) {
    setPW(event.target.value);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //    onSubmit={this.handleSubmit}
  // }
  return (
    <form>
      <label>
        ID :
        <input type="text" value={id} onChange={handleChangeID} />
        <br />
      </label>
      <label>
        PW :
        <input type="password" value={pw} onChange={handleChangePW} />
        <br />
      </label>
      <button type="submit"><Link to ="/main" state={{id, pw}}>로그인</Link></button>
    </form>
  );
}

export default Form;
