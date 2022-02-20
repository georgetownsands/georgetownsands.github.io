import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h3>An ocean-side townhome community on the Outer Banks of North Carolina</h3>
    <p>Georgetown Sands is an oceanside townhome community located at the edge of the town of Duck, NC within walking distance of great restaurants, shopping, Atlantic Ocean beach and Currituck Sound access. Relax and enjoy a variety of activities including walking, running, tennis, watersports, and memorable sunrises and sunsets.</p>
    <StaticImage
      src="../images/georgetownsands.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Georgetown Sands"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
