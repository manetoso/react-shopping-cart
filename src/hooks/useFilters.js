import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilters = () => {
  const { filter, setFilter } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    })
  }

  return {
    filter,
    filterProducts,
    setFilter
  }
}
