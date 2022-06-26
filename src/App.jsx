import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, SignIn, SignUp, Browse } from './pages/pages.export';
import * as ROUTES from './env/routes';
import { IsUserRedirect, ProtectedRoute } from './middleware/redirect.routes';
import { useAuthListener } from './middleware/hooks/hooks.export';

export function App() {
  const { user } = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>} />
        <Route path={ROUTES.SIGN_UP} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        } />
        <Route path={ROUTES.BROWSE} element={
          <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        } />
        <Route path={ROUTES.HOME} element={
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
        } />
      </Routes>
    </BrowserRouter>
  );
};
