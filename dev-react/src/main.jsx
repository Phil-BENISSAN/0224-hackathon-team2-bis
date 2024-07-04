import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Question from "./components/Question";
import AboutUs from "./pages/AboutUs";
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

import "./index.css";
import Congrat from "./pages/Congrat";

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
          const response = await fetch("http://localhost:8000/softskills_test");
          const data = await response.json();
          console.log(data);
          const limitedData = Object.keys(data)
      .slice(0, 5)
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    return limitedData;
        },
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/themes",
        element: <Theme />,
      },
      {
        path: "/select_level_python",
        element: <Level_python />,
      },
      {
        path: "/select_level_powerBI",
        element: <LevelPowerBI />,
      },
      {
        path: "/select_level_sql",
        element: <LevelSQL />,
      },
      {
        path:"/congratulation",
        element: <Congrat />
      },
      {
        path: "question_sql_3",
        element: <QuestionSqlCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/2/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_SQL_confirme: Object.keys(data.QCM_SQL_confirme)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_SQL_confirme[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_sql_2",
        element: <QuestionSql />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/1/");
          const data = await response.json();
          const limitedData = {
            QCM_SQL_intermediaire: Object.keys(data.QCM_SQL_intermediaire)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_SQL_intermediaire[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_sql_1",
        element: <QuestionSqlDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/sql/0/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_SQL_debutant: Object.keys(data.QCM_SQL_debutant)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_SQL_debutant[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_python_1",
        element: <QuestionPythonDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/0/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_python_debutant: Object.keys(data.QCM_python_debutant)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_python_debutant[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_python_2",
        element: <QuestionPythonInt />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/1/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_python_intermediaire: Object.keys(data.QCM_python_intermediaire)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_python_intermediaire[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_python_3",
        element: <QuestionPythonCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/python/2/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_python_confirme: Object.keys(data.QCM_python_confirme)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_python_confirme[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_powerBI_1",
        element: <QuestionPowerBiDeb />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/0/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_PowerBI_debutant: Object.keys(data.QCM_PowerBI_debutant)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_PowerBI_debutant[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_powerBI_2",
        element: <QuestionPowerBiInt />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/1/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_PowerBI_intermediaire: Object.keys(
              data.QCM_PowerBI_intermediaire
            )
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_PowerBI_intermediaire[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
      },
      {
        path: "question_powerBI_3",
        element: <QuestionPowerBiCon />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/tech/powerBI/2/");
          const data = await response.json();
          console.log(data);
          const limitedData = {
            QCM_PowerBI_confirme: Object.keys(data.QCM_PowerBI_confirme)
              .slice(0, 5)
              .reduce((obj, key) => {
                obj[key] = data.QCM_PowerBI_confirme[key];
                return obj;
              }, {}),
          };
          console.log(limitedData);
          return limitedData;
        },
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
