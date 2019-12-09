import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class QuizResult extends Component {

    state = {
        email: null,
        fullname: null,
        quizId: null,
        answers: []
    };

    constructor() {
        super();
    };

    setEmail(email) {
        console.log(this.state);
        return this.setState({email : email});
    }

    setQuizId(quizId) {
        this.setState({
            quizId: quizId
        });
    }

    setAnswers(answers) {
        this.setState({
            answers: answers
        });
    }
}

export default QuizResult;