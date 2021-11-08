import { Route, Switch } from 'react-router-dom'
import LifeCycleProvider from '../features/exchange/FXConverter/LifeCycleProvider/LifeCycleProvider'
import HomePage from '../features/home/HomePage/HomePage'

// TODO add Layout (LoggedInLayout)

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/exchange">
                <LifeCycleProvider />
            </Route>
        </Switch>
    )
}

export default Routes
