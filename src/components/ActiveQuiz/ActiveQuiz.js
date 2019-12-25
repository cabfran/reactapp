import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Questions}>
      <span>
        <strong>2.&nbsp; {props.question} </strong>
      </span>

      <small>4 of 12</small>
    </p>

    <ul>
      <AnswersList answers={props.answers}
      onAnswerClick={props.onAnswerClick}
       />
    </ul>
  </div>
);

export default ActiveQuiz;
