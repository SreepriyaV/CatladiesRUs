import React from 'react'

import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const AllCatsComponent = (props) => {
  const {cats} = props

  return (
    <div>

    {
        cats.map(cat=><li key={cat.id}>{cat.name}</li>)
      
    }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    cats: state.cats
  }
}

export default connect(mapState)(AllCatsComponent)

