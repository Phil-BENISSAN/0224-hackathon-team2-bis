import { useNavigate, useLoaderData } from "react-router-dom";
import  { useState } from "react";

export default function Question() {
  const questions = useLoaderData();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    setQuestionIndex((prevIndex) =>
      Math.min(prevIndex + 1, Object.keys(questions).length - 1)
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

  const currentQuestionKey = `${questionIndex}`;
  const currentQuestion = questions[currentQuestionKey];
  const currentAnswer = answers[currentQuestionKey];

  return (
    <main>
      <h1 className="text-4xl m-4">Question</h1>
      <div className="flex justify-center">
        <form className="space-y-4 m-8 w-[1000px]" onSubmit={handleSubmit}>
          <legend className="text-lg font-bold">
            {currentQuestion.Question}
          </legend>
          <div className="form-control">
            {Object.keys(currentQuestion)
              .filter((key) => key !== "Question")
              .map((optionKey, index) => (
                <label key={index} className="label cursor-pointer">
                  <span className="label-text">
                    {currentQuestion[optionKey]}
                  </span>
                  <input
                    type="radio"
                    name={currentQuestionKey}
                    value={optionKey}
                    className="radio checked:bg-red-500"
                    onChange={handleAnswerChange}
                    checked={currentAnswer === optionKey}
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
            {questionIndex < Object.keys(questions).length - 1 ? (
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
