import React from 'react';
import './login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.result.setEmail(document.querySelector('#email').value);
    console.log(this.props.result.email);
  }

  render() {
    return (
      <div className='my-form'>
      <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
                 placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Full Name</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="Your name" required/>
        </div>
        <button
          className="btn btn-primary">
          Begin
         </button>
      </form>
      </div>
    )
  }
}
export default Login;