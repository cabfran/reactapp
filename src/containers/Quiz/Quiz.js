import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js";
class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого хера ты здесь делаешь? ",
        rightAnswerId: 2,
        answers: [
          { text: "Дрочу писю тебе", id: 1 },
          { text: "Тебя не ебет, собака сутулая", id: 2 },
          { text: "Ты че, обезьяна, на винде сидишь?", id: 3 },
          { text: "Произешел троллинг", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("Answer Id: ", answerId);
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы!</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
