import * as React from "react"
import { Link } from "gatsby"
import areaData from "../../data/area"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AreaItems from "../components/areaitems"

const Shopping = () => (
  <Layout>
    <Seo title="Shopping" />
    <h3>Shopping</h3>
    <ul>
      {areaData
        .filter(sectionItem => sectionItem.section === 6)
        .map(sectionItem =>
          sectionItem.data.map(data => {
            return (
              <>
                {data.name}
                <AreaItems
                  items={data.detail}
                  sectionNumber={sectionItem.section}
                ></AreaItems>
              </>
            )
          })
        )}
    </ul>
  </Layout>
)

export default Shopping
