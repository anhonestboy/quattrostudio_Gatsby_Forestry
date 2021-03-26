import React from "react"
import Header from "./header/header";
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import "../styles/layout.css";

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata()
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/jgd3urv.css" />
    </Helmet>


    
    <Header title={title} />
    <div className="">{children}</div>

    <footer>
    </footer>
  </>
  )
}