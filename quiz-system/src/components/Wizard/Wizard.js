import React from 'react';
import QuizService from "../../services/quizService";
import QuizResult from "../QuizResult";
import QuestionBlock from "../QuestionBlock";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import Header from "../Header";

class Wizard extends React.Component {

    result = new QuizResult();
    quizService = new QuizService();

    render() {
        return (
            <div className='container my-format'>
                {(!this.result.state.email) ? <Login result={this.result}/>
                : <>
                        <Header/>
                        <QuestionBlock
                            result={this.result}
                            getData={this.quizService.getQuestions}
                            getAnswers={this.quizService.getAnswers}
                        />
                    </>}
            </div>
        );
    }

}

export default Wizard;