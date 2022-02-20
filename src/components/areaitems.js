import * as React from "react"
import AreaItem from "./areaitem"

export default function AreaItems({ items, sectionNumber }) {
  return (
    <ul>
      {items.map(sectionItem => {
        return (
          <AreaItem
            name={sectionItem.name}
            description={sectionItem.description}
            address={sectionItem.address}
            phoneNumber={sectionItem.phoneNumber}
            webSite={sectionItem.webSite}
          ></AreaItem>
        )
      })}
    </ul>
  )
}
