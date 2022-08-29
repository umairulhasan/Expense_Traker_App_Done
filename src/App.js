import React from "react";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from './components/context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance /> {/* they are all children */}
        <IncomeExpenses />                               {/* they are all children */}
        <TransactionList />                              {/* they are all children */}
        <AddTransaction />                               {/* they are all children */}
      </div>
    </GlobalProvider>
  );
}

export default App;
