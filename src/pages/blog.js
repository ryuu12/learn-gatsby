import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
        }
        id
        body
      }
    }
  }
  
  
`

export default BlogPage