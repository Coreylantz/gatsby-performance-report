import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StatComparisonBlock from "../components/stat-comparison-block";

const sortStats = (beforeObject, afterObject, key) => {
  const beforeStat = beforeObject[key];
  const afterStat = afterObject[key];
  const title = beforeStat.title;

  return [title, beforeStat.displayValue, afterStat.displayValue];
}

const IndexPage = ({data}) => {
  const beforeStats = data.allBeforeJson.edges[0].node.audits;
  const afterStats = data.allAfterJson.edges[0].node.audits;
  const statKeyArray = Object.keys(beforeStats);
  const statsArray = statKeyArray.map(key => {
    return sortStats(beforeStats, afterStats, key);
  });

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Lighthouse report</h1>
      <p>Overview of the before and after lighthouse report</p>
      <section>
      {statsArray.map((data, index) => (
        <StatComparisonBlock title={data[0]} beforeStat={data[1]} afterStat={data[2]} key={index} />
      ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  allAfterJson {
    edges {
      node {
        audits {
          first_meaningful_paint {
            displayValue
            rawValue
            title
          }
          first_contentful_paint {
            displayValue
            title
            rawValue
          }
        }
      }
    }
  }
  allBeforeJson {
    edges {
      node {
        audits {
          first_contentful_paint {
            displayValue
            title
          }
          first_meaningful_paint {
            title
            displayValue
            rawValue
          }
        }
      }
    }
  }
}
`

export default IndexPage
