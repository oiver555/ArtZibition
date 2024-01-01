import * as React from "react"
const SVGChat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 61 61",
    }}
    viewBox="0 0 61 61"
    {...props}
  >
    <circle
      cx={30.5}
      cy={30.5}
      r={30}
      style={{
        fill: "#ffb000",
      }}
    />
    <path
      d="M47.67 50.42c.15.33-.2.65-.52.48-1.1-.59-2.9-1.4-4.48-1.4H18.62c-2.45 0-4.44-1.99-4.44-4.44V15.94c0-2.45 1.99-4.44 4.44-4.44h23.12c2.45 0 4.44 1.99 4.44 4.44v29.71c0 1.24.9 3.45 1.49 4.77z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M20.82 37.5c6 5 15.47 5 20.23 0"
      style={{
        fill: "#fff",
        stroke: "#fbb03b",
        strokeWidth: 3,
        strokeMiterlimit: 10,
      }}
    />
  </svg>
)
export default SVGChat
