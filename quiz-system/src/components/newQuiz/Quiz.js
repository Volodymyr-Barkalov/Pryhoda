import React, { Component } from 'react';

class Quiz extends Component {

    constructor() {
        super();
        this.state = {
            answerList : []
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const answers = {
            answerList : this.state.answerList
        }
        console.log(answers);
    }

    // const quizes = this.props.quizes.map((quiz) => );

    render() {
        return (
            <div className="container mt-4">
                <div className="form-group">
                    <div className="form-group">
                        <label>
                            <h4>Quiz question?</h4>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="variant1" id="checkbox1" value="option1" />
                        <label className="form-check-label" >
                            First answer
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="variant2" id="checkbox1" value="option2" />
                        <label className="form-check-label" >
                            Second answer
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="variant3" id="checkbox1" value="option3" />
                        <label className="form-check-label" >
                            Third answer
                            </label>
                    </div>

                </div>
                <div className="row mx-2 float-md-none">
                    <button type="submit" className="btn btn-success mx-2">Next</button>
                </div>
            </div>

        );
    }
}
export default Quiz;