import React from 'react'
import { useFilterContext } from '../context/filter_context'
import filter_reducer from '../reducers/filter_reducer'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products:products }= useFilterContext()
  return <GridView products={products}>product list</GridView>
}

export default ProductList
