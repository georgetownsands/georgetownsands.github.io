import * as React from "react"
import areaData from '../../data/area'
import AreaItems from "../components/areaitems"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Activities = () => (
  <Layout>
    <Seo title="Activities" />
    <h3>Activities</h3>
    <ul>
      {areaData
        .filter(sectionItem => sectionItem.section === 8)
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

export default Activities