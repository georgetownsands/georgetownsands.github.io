import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Rent = () => (
  <Layout>
    <Seo title="Rent" />
    <h2>Rent</h2>
    <p>Many townhomes are available for rent.</p>
    <h3>Featured units</h3>
    <p>
        <a href="https://www.byowner.com/vacation-rentals-details/townhome/gsnd-31-favorite-song-sat-sat-633129" target="_blank">Favorite Song - Unit 31</a>
    </p>
    <h3>Rental Agencies</h3>
    <p>
      <a href="https://www.brindleybeach.com/georgetown-sands" target="_blank">
        Brindley Beach
      </a>
    </p>
    <p>
      <a href="https://www.resortrealty.com/outer-banks/duck/georgetown-sands-condos/?neighborhood_area_id=11447&home_type_id=4616" target="_blank">
        Resort Realty
      </a>
    </p>
    <p>
      <a href="https://www.sunrealtync.com/georgetown-sands" target="_blank">
        Sun Realty
      </a>
    </p>
  </Layout>
)

export default Rent
