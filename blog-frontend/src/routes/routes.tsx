import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsGrid from '../components/posts-grid/posts-grid'
import Login from '../components/login/login'
import Page404 from '../components/404/404'
import PostView from '../components/post-view/post-view'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} exact={true} component={PostsGrid} />
      <Route path={'/login'} exact={true} component={Login} />
      <Route path={'/post/:id'} exact={true} component={PostView} />
      <Route path={'/'} component={Page404} />
    </Switch>
  )
}

export default Routes
