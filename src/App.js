import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./sb-admin-2.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardsPage from "./CardsPage";
import ColorsPage from "./ColorsPage";
import Borders from "./Borders";
import ChartsPage from "./ChartsPage";
import UsersTable from "./UsersTable";
import Profile from "./Profile";
import Users from "./Users";
function App() {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Dashboard />} />
            <Route exact path="/cards" render={() => <CardsPage />} />
            <Route path="/colors" render={() => <ColorsPage />} />
            <Route path="/borders" render={() => <Borders />} />
            <Route path="/charts" render={() => <ChartsPage />} />
            <Route path="/crud" render={() => <Users />} />
            <Route path="/users" render={() => <UsersTable />} />
            <Route path="/profile" render={() => <Profile />} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
