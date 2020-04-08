import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

// gatsby-node 에서 셋팅한 context에서 $slug가 날라옴
export const query = graphql`
  query ($slug: String!){
    markdownRemark( fields: { slug: { eq: $slug }}) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}