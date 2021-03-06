import React, {useReducer, useContext, createContext} from 'react'
import scales from '../utils/scales'

const defaultContext = {
    ...scales.light,
    volume: 0,
}

const AppContext = createContext(defaultContext)

const reducer = (state, action) => {
 return state
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultContext)

    console.log(state)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export { AppProvider, useAppContext }