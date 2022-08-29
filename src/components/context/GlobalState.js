import React, { createContext, useReducer} from 'react';

//initial state for update delete and add transaction this state mage these type of data

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}


// Create context

export const GlobalContext = createContext(initialState);


// now we need to use provider so every component(those using in app js) can access the transaction data 

export const GlobalProvider = ({ children }) => {                               // Children is app as a prop and theey are all children represent all component use in app addtransaction,balance,header,incomeexpense etc

const [state,dispatch] = useReducer(AppReducer, initialState);

return(<GlobalContext.Provider>
    {children}
</GlobalContext.Provider>

)

}