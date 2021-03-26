import * as styles from "./wedding.module.css";
import useWeddingData from "../../static_queries/useWeddingData"
import { Link } from "gatsby";
import React from "react";
import Image from 'gatsby-image';


function WeddingPreviewGrid() {

  const WeddingData = useWeddingData()
  function renderWeddingData() {
    return (
      <div>
        {WeddingData.map(wedding => {
          const categories = wedding.node.frontmatter.categories
          const title = wedding.node.frontmatter.title
            return (
              <Link to={`/weddings/${wedding.node.fields.slug}`} key={wedding.node.id}>
              <li className='w-full' key={wedding.node.fields.slug}> 
                <div className={`border-gray dark:border-text_dark ${styles.post_list_link}`}>

                  <div className={styles.category_badge}></div>     
                  {wedding.node.frontmatter.categories && (
                    <div className="flex flex-row ml-20">
                    {wedding.node.frontmatter.categories.map((category) => (
                      <h5 className="py-2 px-5 m-0 uppercase" >{category}</h5>
                    ))}
                  </div>
                      )}
                    <h2 className="text-5xl m-10">{title}</h2>        
                </div>
        
                
                  <div className=''>
                  <Image fluid={wedding.node.frontmatter.cover_image} alt="avatar" />
                  <img src={wedding.node.frontmatter.cover_image} />
                    {/* <Img 
                      fluid={
                        wedding.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={wedding.node.frontmatter.title}
                    /> */}
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  
  return (
    <div className="">
    <h3 className="font-bold uppercase text-center py-20">Latest stories</h3>

      <ul className={`${styles.qs_portfolio_grid} grid sm:grid-cols-1 md:grid-cols-2 gap-0`}>
       {renderWeddingData()}
      </ul>

    </div>
  );
}

export default WeddingPreviewGrid;
