import { createContext, useState } from 'react'

export const FiltersContext = createContext({
  filter: {
    category: 'all',
    minPrice: 0
  },
  setFilter: () => {}
})

export const FiltersProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider
      value={{
        filter,
        setFilter
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
