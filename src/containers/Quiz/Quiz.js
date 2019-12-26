import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz.js";
class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null, //{[id]:'cuccess' 'error'}
    quiz: [
      {
        question: "Какого цвета небо? ",
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: "Синего", id: 1 },
          { text: "Белого", id: 2 },
          { text: "Черного?", id: 3 },
          { text: "Красного", id: 4 }
        ]
      },
      {
        question: "каком году основали Санкт-Петербург? ",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "1700", id: 1 },
          { text: "1703", id: 2 },
          { text: "1803", id: 3 },
          { text: "1701", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("Answer Id: ", answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finnished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" }
      });
    }
  };
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы!</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
