import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  Contact,
  Error,
  HomeLayout,
  Landing,
  Portfolio,
  Services,
  SinglePortfolio,
} from './pages';
import { ErrorElement } from './components';

import { action as ContactAction } from './pages/Contact';

import { loader as SinglePortfolioLoader } from './pages/SinglePortfolio';
import SingleTeam, { loader as SingleTeamLoader } from './pages/SingleTeam';
import { loader as SingleBlogLoader } from './pages/SingleBlog';
import SingleBlog from './pages/SingleBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'contact',
        errorElement: <ErrorElement />,
        element: <Contact />,
        action: ContactAction,
      },
      {
        path: 'services',
        element: <Services />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'singlePortfolio/:id',
        errorElement: <ErrorElement />,
        element: <SinglePortfolio />,
        loader: SinglePortfolioLoader,
      },
      {
        path: 'singleBlog/:id',
        errorElement: <ErrorElement />,
        element: <SingleBlog />,
        loader: SingleBlogLoader,
      },
      {
        path: 'singleTeam/:id',
        errorElement: <ErrorElement />,
        element: <SingleTeam />,
        loader: SingleTeamLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
