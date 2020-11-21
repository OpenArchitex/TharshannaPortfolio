import React from "react"
import Banner from "@openarchitex/gatsby-theme-academic-portfolio/src/components/banner";
import Layout from "@openarchitex/gatsby-theme-academic-portfolio/src/components/layout";
import SEO from "@openarchitex/gatsby-theme-academic-portfolio/src/components/seo";
import About from "@openarchitex/gatsby-theme-academic-portfolio/src/components/about";
import {Divider} from "theme-ui";
import Teaching from "@openarchitex/gatsby-theme-academic-portfolio/src/components/teaching";
import Research from "@openarchitex/gatsby-theme-academic-portfolio/src/components/research";
import Footer from "@openarchitex/gatsby-theme-academic-portfolio/src/components/footer";
import StatApplets from "../@openarchitex/gatsby-theme-academic-portfolio/src/components/stat-applets";
import StatConsulting from "../@openarchitex/gatsby-theme-academic-portfolio/src/components/stat-consulting";

export default function Home() {
  return (
      <>
        <Banner />
        <Layout>
          <SEO title="Home" />
          <About/>
          <Divider />
          <Teaching />
          <Divider />
          <Research />
          <Divider />
          <StatApplets />
          <Divider />
          <StatConsulting />
          <Footer/>
        </Layout>
      </>
  )
}