import React from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import AppHeader from './views/appHeader';
import Login from './views/login';
import PostList from './views/posts/list';
import PostView from './views/posts/view';
import PostEdit from './views/posts/edit';
import UserList from './views/users/list';
import UserView from './views/users/view';
import UserEdit from './views/users/edit';

import '../css/app.less';

// Components must be uppercase - regular DOM is lowercase
// https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components
function AppLayout(props) {
  return (
    <div className="app-container">
      <AppHeader />
      <main>
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route
            path="posts/:pageNum/?"
            component={PostList}
          />
          <Route
            path="/posts/create"
            component={PostEdit}
          />
          <Route
            path="/posts/:postId/edit"
            component={PostEdit}
          />
          <Route
            path="posts/:postId"
            component={PostView}
          />
          <Route path="/users" exact component={UserList} />
          <Route
            path="/users/create"
            component={UserEdit}
          />
          <Route
            path="/users/:userId"
            component={UserView}
          />
          <Route
            path="/users/:userId/edit"
            component={UserEdit}
          />
          <Route path="/login" component={Login} />
          <Route path="*" component={PostList} />
        </Switch>
      </main>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>,
  document.getElementById('app'),
);
