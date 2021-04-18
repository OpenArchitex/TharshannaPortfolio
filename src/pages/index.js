import React from "react"
import Banner from "@openarchitex/gatsby-theme-academic-portfolio/src/components/banner";
import Layout from "@openarchitex/gatsby-theme-academic-portfolio/src/components/layout";
import SEO from "@openarchitex/gatsby-theme-academic-portfolio/src/components/seo";
import About from "@openarchitex/gatsby-theme-academic-portfolio/src/components/about";
import Teaching from "@openarchitex/gatsby-theme-academic-portfolio/src/components/teaching";
import Research from "@openarchitex/gatsby-theme-academic-portfolio/src/components/research";
import Footer from "@openarchitex/gatsby-theme-academic-portfolio/src/components/footer";
import StatApplets from "../@openarchitex/gatsby-theme-academic-portfolio/components/stat-applets";
import StatConsulting from "../@openarchitex/gatsby-theme-academic-portfolio/components/stat-consulting";

export default function Home(props) {
  return (
      <>
        <Banner />
        <Layout>
          <SEO title="Home" />
          {props.location.hash === "" && <About/>}
          {props.location.hash === "#about" && <About/>}
          {props.location.hash === "#teaching" && <Teaching />}
          {props.location.hash === "#research" && <Research />}
          {props.location.hash === "#stat-applets" && <StatApplets />}
          {props.location.hash === "#stat-consulting" && <StatConsulting />}
          <Footer/>
        </Layout>
      </>
  )
}