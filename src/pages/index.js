import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <h1>hello!</h1>
        <h2>i'm rhapsodist</h2>
        <p>
          need a developer?
          <a href="/contact">contact me</a>
        </p>
        <p>
          need a developer?
          <Link to="/contact">contact me</Link>
        </p>
      </div>
    </Layout>
  )
}