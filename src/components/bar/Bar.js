import React from 'react';
import {Link} from 'gatsby';
import './barPrimary.css'
import './barSecondary.css'

export const BarPrimary = ({category_names}) => {
  return (
    <div className='barPrimary'>
      {category_names.map((category, index) =>
        <Link
          key={index}
          to={'/' + category.toLowerCase()}
          tag={Link}
          style={inactivePrimary}
          activeStyle={activePrimary}
          >
              {category.replace(/_/g, " ")}
        </Link>
      )}
    </div>
  )
}

export const BarSecondary = ({allocation_names, category_name}) => {
  return (
    <div className='barSecondary'>
      <ul className='barSecondaryUl'>
        {allocation_names.map((allocation_name, index) =>
          <Link
          key={allocation_name}
          to={'/' + category_name + '/' + allocation_name}
          tag={Link}
          style={inactiveSecondary}
          activeStyle={activeSecondary}
          >
              {allocation_name.replace(/_/g, " ")}
          </Link>
        )}
      </ul>
    </div>
  )
}


const activePrimary = {
  boxShadow: 'inset 0 -3px 0 #ffffff',
  fontSize: '110%',
  fontWeight: 'bold',
  fontFamily: 'Noto Sans',
}

const inactivePrimary = {
    fontSize: '110%',
    fontWeight: 'regular',
    fontFamily: 'Noto Sans',
    listStyle: 'none',
    margin: '6px 3px',
    padding: '3px 3px',
    verticalAlign: 'middle',
    color: 'white',
}


const activeSecondary = {
  fontSize: '110%',
  fontFamily: 'Noto Sans Bold',
  fontWeight: 'bold',
}

const inactiveSecondary = {
  fontSize: '90%',
  fontFamily: 'Noto Sans',
  fontWeight: 'normal',
  paddingRight: '30px',
  marginLeft: '5px',
  float: 'left',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  color: '#036',
  textAlign: 'left',
  // ::lastChild { margin-right: 200px; }
}

