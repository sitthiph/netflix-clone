import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return user ? <Navigate to={{pathname: loggedInPath}}></Navigate> : children;
}

export function ProtectedRoute({ user, children, location, ...rest }) {
  return user ? children : <Navigate to={{
    pathname: '/signin',
    state: { from: location },}}/>
}
