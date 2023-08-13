import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import butaneyo from "../assets/butaneyo.mp4"
import xLogo from "../assets/x.svg"
import discordLogo from "../assets/discord.svg"

const headerStyle = { color: 'rgb(55, 126, 247)', marginTop: '3rem' }
const textStyle = { color: 'white', textAlign: 'center' }
const socialContainerStyle = { width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '4rem', paddingRight: '12rem', paddingLeft: '12rem'}

const IndexPage = () => (
  <Layout>
    <video controls width="100%">
      <source src={butaneyo} type="video/mp4" />
    </video>
    <main style={{ textAlign: 'center', margin: '0 auto' }}>
      <h1 style={headerStyle}>Synthetics on Cardano</h1>
      <br />
      <a 
        href="https://pool.pm/asset1vv3wgsx9xpg5gpl4629mparm7hlpqnavpdwnj3" 
        style={textStyle}
      >asset1vv3wgsx9xpg5gpl4629mparm7hlpqnavpdwnj3</a>
      <br />
      <br />
      <span style={textStyle}>$BTN</span>
      <div className="social-container" style={socialContainerStyle}>
        <a href="https://discord.gg/butane" style={{ display: 'inline-block' }}>
          <img style={{ height: '2rem', width: 'auto'}} src={discordLogo} />
        </a>
        <a href="https://twitter.com/butaneprotocol" style={{ display: 'inline-block' }}>
          <img style={{ height: '2rem', width: 'auto'}} height="1rem" width="auto" src={xLogo} />
        </a>
      </div>
    </main>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
