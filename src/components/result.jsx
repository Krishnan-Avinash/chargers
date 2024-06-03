/* eslint-disable react/prop-types */
import { transform } from "framer-motion";
import { Link } from "react-router-dom";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You scored {correctAnswers} out of {questions.length}{" "}
      </p>
      <h2 className="special">
        <Link
          to="/welcome"
          style={{
            fontSize: "2rem",
            filter: "drop-shadow(1px 1px 10px #E64833)",
            fontWeight: "700",
            textDecoration: "underline",
          }}
          className="inside-special"
        >
          Click Here🙌
        </Link>
      </h2>
    </div>
  );
};

export default Result;
