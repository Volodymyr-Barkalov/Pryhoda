export default class QuizService {

  _questions = [
    {
      id: 1,
      name: "Структура компьютера — это:",
      answers: [{
        label: '1',
        variant: 'Комплекс электронных устройств, осуществляющих обработку информации'
      },
      {
        label: '2',
        variant: 'Некоторая модель, устанавливающая состав, порядок и принципы взаимодействия входящих в нее компонентов',
        correct: true
      },
      {
        label: '3',
        variant: ' Комплекс программных и аппаратных средств'
      }
      ]
    },
    {
      id: 2,
      name: "Основная функция ЭВМ:",
      answers: [{
        label: '1',
        variant: 'общение человека и машины'
      },
      {
        label: '2',
        variant: 'разработка задач'
      },
      {
        label: '3',
        variant: ' принцип программного управления',
        correct: true
      }
      ]
    },
    {
      id: 3,
      name: "Персональный компьютер состоит из:",
      answers: [{
        label: '1',
        variant: 'системного блока, монитора, клавиатуры',
        correct: true
      },
      {
        label: '2',
        variant: 'дополнительных устройств'
      },
      {
        label: '3',
        variant: ' комплекса мультимедиа.',
      }
      ]
    },
    {
      id: 4,
      name: "Микропроцессор предназначен для:",
      answers: [{
        label: '1',
        variant: 'управления работой компьютера и обработки данных',
        correct: true
      },
      {
        label: '2',
        variant: 'ввода информации в ЭВМ и вывода ее на принтер'
      },
      {
        label: '3',
        variant: ' обработки текстовых данных.'
      }
      ]
    },
    {
      id: 5,
      name: "Разрядность микропроцессора — это:",
      answers: [{
        label: '1',
        variant: ' наибольшая единица информации',
      },
      {
        label: '2',
        variant: 'количество битов, которое воспринимается микропроцессором как единое целое',
        correct: true
      },
      {
        label: '3',
        variant: ' наименьшая единица информации.'
      }
      ]
    },

  ] //end
  _answers = {
    '0' : 2,
    '1' : 3,
    '2' : 1,
    '3' : 3,
    '4' : 2
  }

  getQuestions = async () => {
    return this._questions;
  };
  getAnswers = async () => {
    return this._answers;
  };

// for Web API
  _apiUrl = 'https://www.api.com';
    // func conneting to url and return promise => json answer
    getResource = async () => {
        const res = await fetch(`${this._apiUrl}`); //response in shape of promise
        if (!res.ok) {
            throw new Error(`Could not fetch url`)
        }
        return res.json();
    }

    getAllQuestions = async () => {
        // res = json
        const res = await this.getResource();
        // get array
        return res.results.map(this._transform);
    }
    _transform = (question) => {
      return {
          id: question.id,
          name: question.name,
          answers: question.answers //array
      }
    }
}