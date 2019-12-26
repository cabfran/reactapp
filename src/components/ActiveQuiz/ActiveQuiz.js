import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Questions}>
        <span>
          <strong>
            {props.answerNumber}.&nbsp; {props.question}{" "}
          </strong>
        </span>

        <small>
          {props.answerNumber} of {props.quizLength}
        </small>
      </p>

      <ul>
        <AnswersList
        state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </ul>
    </div>
  );
};
export default ActiveQuiz;
