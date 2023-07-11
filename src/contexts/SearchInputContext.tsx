import React, { createContext, useState } from 'react'
import { SearchInputContextProps } from '../models/inputTypes';

export const SearchInputContext = createContext<SearchInputContextProps>({inputObj: null, setInputObj: () => null});

export const SearchInputContextProvider: React.FC = ({children}: any) => {
  const [inputObj, setInputObj] = useState(null);

  return (
    <SearchInputContext.Provider value={{inputObj, setInputObj}}>
      {children}
    </SearchInputContext.Provider>
  )
}