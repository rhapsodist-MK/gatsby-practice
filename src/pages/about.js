import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <h1>About page</h1>
        <h2>my About page</h2>
        <p>
          <Link to="/contact">contact me</Link>
        </p>
      </div>
    </Layout>
  )
}