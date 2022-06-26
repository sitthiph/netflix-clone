import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Home, SignIn, SignUp } from './pages/pages.export';
import * as ROUTES from './env/routes';
import { IsUserRedirect, ProtectedRoute } from './middleware/redirect.routes';
import { useAuthListener } from './middleware/hooks/hooks.export';

export function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Routes>
    </BrowserRouter>
  );
};
