import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";

class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        // e.preventDefault();
        // const { project_tasks } = this.props.project_tasks; = {
        //
        // };
        // // console.log(newProjectTask);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                               aria-describedby="emailHelp" placeholder="Enter email"
                               value={this.state.email}
                               onChange={this.onChange}
                        >
                        </input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}

export default EmailForm;