import * as React from "react"

export default function AreaItem({ name, description, address, phoneNumber, webSite }) {
  return (
    <li>
      <span className="name"><a href={webSite} target="_blank">{name}</a></span>
      <div>
        <span classNmae="description">{description}</span>
      </div>
      <div>
        <span classNmae="address">{address}</span>
      </div>
      <div>
        <span classNmae="phoneNumber">{phoneNumber}</span>
      </div>
    </li>
  )
}
