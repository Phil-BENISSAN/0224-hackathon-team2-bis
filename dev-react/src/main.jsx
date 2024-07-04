import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Question from "./components/Question"
import AboutUs from "./pages/AboutUs"
import Theme from "./pages/Theme";
import QuestionSql from "./components/QuestionSql";
import QuestionPythonDeb from "./components/QuestionPythonDeb";
import QuestionPythonInt from "./components/QuestionPythonInt";
import QuestionPythonCon from "./components/QuestionPythonCon";
import QuestionPowerBiCon from "./components/powerBi/QuestionPowerBiCon";
import QuestionPowerBiDeb from "./components/powerBi/QuestionPowerBiDeb";
import QuestionPowerBiInt from "./components/powerBi/QuestionPowerBiInt";
import Level_python from "./components/Levelpython/Level_python";
import QuestionSqlCon from "./components/SQL/QuestionSqlCon";
import QuestionSqlDeb from "./components/SQL/QuestionSqlDeb";
import LevelPowerBI from "./components/LevelPowerBI/LevelPowerBI";
import LevelSQL from "./components/LevelSQL/LevelSQL";
import Entreprise from "./pages/Entreprise";

import "./index.css";
import Annonce from "./pages/Annonce";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/question",
        element: <Question />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/softskills_test")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/themes",
        element: <Theme />
      },
      {
        path: "/entreprise/wild_code_school",
        element: <Entreprise />
      },
      {
        path: "/entreprise/wild_code_school/CqInovDBV96hBZ5j7",
        element: <Annonce />
      },
      {
        path: "/select_level_python",
        element: <Level_python />
      },
      {
        path: "/select_level_powerBI",
        element: <LevelPowerBI />
      },
      {
        path: "/select_level_sql",
        element: <LevelSQL />
      },
      {
        path: "question_sql_3",
        element: <QuestionSqlCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/2/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_sql_2",
        element: <QuestionSql />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/1/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_sql_1",
        element: <QuestionSqlDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/0/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_python_1",
        element : <QuestionPythonDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/0/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_python_2",
        element : <QuestionPythonInt />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/1/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_python_3",
        element : <QuestionPythonCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/2/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_powerBI_1",
        element : <QuestionPowerBiDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/0/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_powerBI_2",
        element : <QuestionPowerBiInt />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/1/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "question_powerBI_3",
        element : <QuestionPowerBiCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/2/")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);