import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Routes from "./routes/";
import UserHeader from "./components/userheader";

const checkAuth = (val: number): boolean => {
  return val ? true : false;
};



const App: React.FC = () => {
  return (
    <div className="default">
      <BrowserRouter>
        {checkAuth(0) ? <UserHeader /> : <Header />}
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
