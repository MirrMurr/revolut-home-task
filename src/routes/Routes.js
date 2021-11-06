import { Route, Switch } from 'react-router-dom'
import FXConverter from '../features/exchange/FXConverter/FXConverter'
import HomePage from '../features/home/HomePage/HomePage'

// TODO add Layout (LoggedInLayout)

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/exchange">
                <FXConverter />
            </Route>
        </Switch>
    )
}

export default Routes
