import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"



const ComponentName = () => {
  const data = useStaticQuery(graphql`
    query FirstQ {
      site {
        siteMetadata {
          description
          simpleData
          title
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `)
  return <div>
    <h2>{data.site.siteMetadata.person.name}</h2>
    <div>
      {/* {data.site.siteMetadata.complexData.map((item, index) => {
        return <p key={index}>{item.name}-{item.age}</p>
      })} */}
    </div>
  </div>
  // <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
