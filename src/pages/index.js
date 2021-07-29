import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this to learn about Gatsby</p>
      <StaticImage
        alt="My beloved cat"
        src="https://cdn.discordapp.com/attachments/616638914530246656/795271638131933204/4-05.jpg"
      />
    </Layout>
  )
}

export default IndexPage