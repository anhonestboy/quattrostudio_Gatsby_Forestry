import React from "react"
// import Header from "./header/header";
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/jgd3urv.css" />
    </Helmet>



    <div className=""></div>

    <footer className="">
      <div className="">
        <div className="">
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
  )
}