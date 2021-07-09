import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
