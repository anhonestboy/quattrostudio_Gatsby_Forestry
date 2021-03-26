import { graphql, useStaticQuery } from "gatsby"

export default function useWeddingData() {
  const data = useStaticQuery(graphql`
    query WeddingData {
    allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/content/weddings/"}}
        limit: 10
        sort: {fields: frontmatter___date, order: ASC}
    ) {
        edges {
        node {
            frontmatter {
            catoegories {
                parent_category
                category
            }
            story {
                one_column
                three_column_three
                template
                three_column_one
                three_column_two
                two_column_one
                two_column_two
                image
            }
            title
            }
            fields {
            slug
            }
            id
         }
        }
      }
    } 
  `)
  return data.allMarkdownRemark.edges
}