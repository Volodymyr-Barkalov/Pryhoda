import React, { Component } from 'react';
import QuizService from '../services/quizService';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../components/Header';
import QuestionBlock from '../components/QuestionBlock';
import EmailForm from "../components/EmailForm";
import Wizard from "../components/Wizard/Wizard"
import './App.css';

export default class App extends Component {

  // QuizConstructor = new QuizService();

  render() {
    return (
      <Wizard />
    );
  }
}
