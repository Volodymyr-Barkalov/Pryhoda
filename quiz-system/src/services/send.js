
function SendPOST(props) {
  const quizResult = this.props.quizResult;
  const url = this.props.email;
  const xhr = new XMLHttpRequest();
  const json = JSON.stringify({ quizResult });
  xhr.open("POST", 'http://localhost:8080/quiz/98/email' + url, true)
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.send(json);
  console.log(quizResult);
}

export default SendPOST;