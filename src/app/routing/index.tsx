import { RouteObject, useRoutes } from "react-router-dom";
import {
  COMMENTS_ROUTE,
  STICKERS_ROUTE,
  HOME_ROUTE,
  MEDITATESTEPS_ROUTE,
  FORM_ROUTE,
} from "./config";
import Home from "../../pages/home";
import StickersPage from "../../pages/stickers";
import CommentsPage from "../../pages/comments";
import MeditationStepsPage from "../../pages/meditation-steps";
import Form from "../../components/Form";

const MainRouter = ({ isAuth = false }) => {
  const basePath: RouteObject[] = [{ path: HOME_ROUTE, element: <Home /> }];

  const authPath: RouteObject[] = [
    { path: STICKERS_ROUTE, element: <StickersPage /> },
    { path: COMMENTS_ROUTE, element: <CommentsPage /> },
    { path: MEDITATESTEPS_ROUTE, element: <MeditationStepsPage /> },
    { path: FORM_ROUTE, element: <Form /> },
  ];

  const resultPaths: RouteObject[] = basePath;

  if (isAuth) {
    resultPaths.push(...authPath);
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
