import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

export default function QuestionPythonDeb() {
  const data = useLoaderData();
  const questions = Object.values(data.QCM_python_debutant);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    setQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, questions.length - 1)
    );
  };

  const handlePrevious = () => {
    setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", answers);
    navigate("/congratulation");
  };

  const currentQuestion = questions[questionIndex];
  const currentAnswer = answers[`q${questionIndex + 1}`];

  return (
    <main>
      <h1 className="text-4xl m-4">Question</h1>
      <div className="flex justify-center">
        <form className="space-y-4 m-8 w-[1000px]" onSubmit={handleSubmit}>
          <legend className="text-lg font-bold">{`Question ${
            questionIndex + 1
          }`}</legend>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{currentQuestion.Question}</span>
            </label>
            {["A", "B", "C", "D"].map((option) => (
              <label key={option} className="label cursor-pointer">
                <span className="label-text">{currentQuestion[option]}</span>
                <input
                  type="radio"
                  name={`q${questionIndex + 1}`}
                  value={option}
                  className="radio checked:bg-red-500"
                  onChange={handleAnswerChange}
                  checked={answers[`q${questionIndex + 1}`] === option}
                />
              </label>
            ))}
          </div>
          <div className="flex justify-around">
            {questionIndex > 0 && (
              <button type="button" onClick={handlePrevious} className="btn">
                Précédent
              </button>
            )}
            {questionIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn"
                disabled={!currentAnswer}
              >
                Suivant
              </button>
            ) : (
              <button type="submit" className="btn" disabled={!currentAnswer}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
