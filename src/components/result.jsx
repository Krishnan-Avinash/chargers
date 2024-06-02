/* eslint-disable react/prop-types */

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You scored {correctAnswers} out of {questions.length}{" "}
      </p>
      <h2 className="special">⚠Kindly check your email inbox⚠</h2>
    </div>
  );
};

export default Result;
