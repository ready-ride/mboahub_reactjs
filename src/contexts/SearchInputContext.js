import React, { createContext, useState } from 'react'

export const SearchInputContext = createContext()

export const SearchInputContextProvider = ({ children }) => {
  const [inputObj, setInputObj] = useState(null)

  return <SearchInputContext.Provider value={{ inputObj, setInputObj }}>{children}</SearchInputContext.Provider>
}
