import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import WeddingPreviewGrid from "../components/wedding/wedding-preview-list";
import Container from "../components/Container";
import Hero01 from "../components/blocks/hero01"
import useStrapiData from "../static_queries/useStrapiData"
import { StaticQuery, graphql } from 'gatsby';



const query = graphql`
  query {
    allStrapiWedding {
      edges {
        node {
          strapiId
          Title
          Story
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout page="home" bgColor="inherit">
   <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiWedding.edges.map(wedding => (
          <li>{wedding.node.Title}</li>
        ))}
      </ul>
    )}
  />


<Container>

  <Hero01 />


  <WeddingPreviewGrid />

</Container>
</Layout> 
);

export default IndexPage;
