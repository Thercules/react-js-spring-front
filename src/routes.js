import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //A partir da versão 6 o switch deixou de estar na router dom

//Importações telas
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login";
import Books from "./pages/Book";
import NewBook from "./pages/NewBook";

//Export default no começo por boas práticas para reduzir código.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/books" component={Books}/>
                <Route path="/book/new/:bookId" component={NewBook}/>
            </Switch>
        </BrowserRouter>
    );
}