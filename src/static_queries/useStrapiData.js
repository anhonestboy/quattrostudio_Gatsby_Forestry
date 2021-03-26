import { graphql, useStaticQuery } from "gatsby"

export default function useStrapiData() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allStrapiWedding {
      edges {
        node {
          Story
          Title
        }
      }
    }
  }
  `)
  return data.allStrapiWedding.edges
}