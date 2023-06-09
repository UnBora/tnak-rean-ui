import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import {QueryClientProvider,QueryClient} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import { configureStore } from '@reduxjs/toolkit'
import {persistStore,persistReducer,  FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'

import {PersistGate} from 'redux-persist/integration/react'
// import { Provider } from 'react-redux';
let persistor = persistStore(store)

/*

  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
            <App />
    </PersistGate>
    </Provider>
    </React.StrictMode> 

* */

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({});
root.render(


  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
