import React from 'react';
import { Link } from 'gatsby';


export default function () {
  const links = [
    'vision',
    'algorithm',
    'team',
    'legal',
  ]

  return (
    <div className='menu'>
      {links.map((link, index) =>
        <div className='menuItem' key={index}>
          <Link
            to={`/${link}`}
            style={inactive}
            activeStyle={active}
            onClick={() => window.scrollTo(0, 0)}
          >
              {link}
          </Link>
        </div>
      )}
    </div>
  )
}

const active = {
  boxShadow: 'inset 0 -2px 0 #ffffff',
}

const inactive = {
  color: 'white',
  marginLeft: '0',
  textDecoration: 'none',
  marginRight: '2rem',
}