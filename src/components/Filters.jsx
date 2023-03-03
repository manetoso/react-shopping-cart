import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters() {
  const { filter, setFilter } = useFilters()
  const minPriceFilterId = useId()
  const minCategoryFilterId = useId()

  const handleChangePrice = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilter((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          step='10'
          onChange={handleChangePrice}
          value={filter.minPrice}
        />
        <span>${filter.minPrice}</span>
      </div>
      <div>
        <label htmlFor={minCategoryFilterId}>Category</label>
        <select id={minCategoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
