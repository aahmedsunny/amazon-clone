import React, { createContext, useContext, useReducer } from "react";

// ! Preparing DATA LAYER
export const StateContext = createContext();

//! wrap the app and provide DATA from DATA LAYER as needed
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//! Pulling info from DATA LAYER
export const useStateValue = () => useContext(StateContext);
