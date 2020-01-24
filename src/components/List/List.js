import React from 'react'
import PropTypes from 'prop-types'

export default function List() {
  const items = [
    {
      id: 0,
      title: 'Fake name 1',
      description: 'fake.email.1@email.com'
    },
    {
      id: 1,
      title: 'Fake name 2',
      description: 'fake.email.2@email.com'
    }
  ]

  return (
    <main>
      <input type="text" placeholder="search name or email" />
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <article>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
