import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FrontPage from '../components/screens/FrontPage'
import Articles from '../components/screens/Articles'
import Teams from '../components/screens/Teams'
import CreateArticles from '../components/screens/CreateArticle'
import Widget from '../components/screens/Widget'


export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path= '/' component={FrontPage} />
            <Route exact path='/Articles' component={Articles} />
            <Route exact path='/Teams' component={Teams} />
            <Route exact path='/Articles/CreateArticle' component={CreateArticles}/>
            <Route exact path='/Widget' component={Widget}/>





        </Switch>
    )
}