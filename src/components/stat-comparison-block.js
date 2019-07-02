import React from "react"
import styles from "./stat-comparison-block.module.css"

const getDiff = (before, after) => {
  const beforeNumb = parseFloat(before, 3);
  const afterNumb = parseFloat(after, 3);
  return Math.round((afterNumb - beforeNumb) * 10) / 10;
}

const StatComparisonBlock = (data) => {
const diff = getDiff(data.beforeStat, data.afterStat);
return (
  <div>
    <h3>{data.title}</h3>
    <div className={styles.statContainer}>
      <div className={styles.statBlock}>
        <h4>Before:</h4>
        <p>{data.beforeStat}</p>
      </div>
      <div className={styles.statBlock}>
        <h4>After:</h4>
        <p>{data.afterStat}</p>
      </div>

      <div className={`${styles.statBlock}  ${(diff < 0 ? 'green' : 'red')}`}>
        <h4>Difference</h4>
        <p>{diff} s</p>
      </div>
    </div>
  </div>
)};

export default StatComparisonBlock;