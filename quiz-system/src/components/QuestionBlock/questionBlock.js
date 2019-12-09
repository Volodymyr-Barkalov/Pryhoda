import React from 'react';
import {Quiz, Result, Warning} from '../renderUI/renderUI';
import './questionBlock.css';
import Spinner from '../spinner';
import SendPOST from '../../services/send';

export default class QuestionBlock extends React.Component {

    state = {
        data: null,
        id: 0,
        correctAnswers: null,
        answered: null,
        answers: {},
        finish: false
    };

    componentDidMount() {
        const {getData, getAnswers} = this.props;
        getData()
            .then((data) => {
                this.setState({data})
            });
        getAnswers()
        // .then((correctAnswers) => {
        //     this.setState({correctAnswers});
        // }

    }

    showTasks(arr, id) {
        let tempRes = [];
        arr.map((item) => {
            tempRes.push(item.name);
            return true;
        });
        return tempRes[id]
    }

    getUserAnswers(arr, id) {
        let answers = [];
        arr.map((item, index) => {
            if (index === id) {
                item.answers.map(i => answers.push(i))
            } return false;
        });
        return answers.map((el) => {
            return (
                <li /* onClick={(e) => this.writeAnswer(el.label, id, e.target)} */
                    className='my-list list-group-item list-group-item-action' key={el.label} id={el.label}>
                    {el.variant}
                </li>)
        })
    }

    addChoiceStyle = (label) => {
        const clazz = document.querySelectorAll('li');
        clazz.forEach(
            (el) => {
                const add = el.classList;
                (label === el.id) ? add.add('my-choise') : add.remove('my-choise');
            }
        )
    };

    removeChoiceStyle = () => {
        const clazz = document.querySelectorAll('li');
        clazz.forEach((el) => el.classList.remove('my-choise'));
    };

    writeAnswer = (el, id) => {
        const {answers} = this.state;
        answers[id] = el.id;
        this.setState({answers});
        this.addChoiceStyle(el.id);
    };

    onNextClick = () => {
        let {id, data, answers, correctAnswers} = this.state;
        const compare = (data.length - 1);
        if (id < compare) {
            this.removeChoiceStyle();
            id++;
            this.setState({id});
            if (id === compare) {
                document.getElementById('btn')
                    .innerHTML = 'Закончить';
            }
        } else {
            const answered = this.countMark(correctAnswers, answers);
            this.setState({
                finish: true,
                answered
            });
        }
    };

    countMark = (apiAnswers, variants) => {
        let counter = 0;
        const {data} = this.state;
        const j = data.length;
        for (let i = 0; i < j; i++) {
            apiAnswers[i] = +(apiAnswers[i]);
            variants[i] = +(variants[i]);
            if (apiAnswers[i] === variants[i]) {
                counter += 1;
            }
        }
        return counter;
    };

    sendDataOnServer(result){
        const {quizResult} = this.props.result;
        return (
            <SendPOST quizResult={quizResult}
                    email={this.result.email}/>
        )
    };

    render() {
        const {id, data, answered, finish} = this.state;
        if (!data) {
            return <Spinner/>
        }
        const task = this.showTasks(data, id),
            answers = this.getUserAnswers(data, id);

        if (!finish) {
            return <Quiz task={task}
                         answers={answers}
                         id={id}
                         btn={this.onNextClick}
                         write={this.writeAnswer}
            />
        } else {
            if (answered >= 0) {
                const {result} = this.props.result;
                result.setAnswers(this.state.answers);
                this.sendDataOnServer(result);
                return <Result answered={answered}/>
            } else {
                return <Warning/>
            }
        }
    }
}
