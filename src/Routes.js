import { Route, Switch } from "react-router-dom";
import Contacts from "./components/Contacts";
import About from "./pages/about";
import Reports from "./pages/reports";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/reports" component={Reports} />
        </Switch>
    );
}

export default Routes;