

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,} from 'recharts';


const DashboardChart = ({chartData}) => {
  const [reviewData, setReviewData] = useState({posData:0,negData:0,totalReview:0, totalCmt:0});
  console.log({chartData})
  React.useEffect(() => {
    const positiveData = chartData.find(chart => chart.name === "P+");
    const negativeData = chartData.find(chart => chart.name === "N-");
    const commentData = chartData.find(chart => chart.name === "Cmt");
    setReviewData({
      posData: positiveData.uv || 0,
      negData: negativeData.uv || 0,
      totalReview: positiveData.uv + negativeData.uv ,
      totalCmt: commentData.uv || 0
    })
  },[chartData])
  
  return (
    <div className="chart">
      <BarChart
        width={200}
        height={250}
        data={chartData}
        padding={10}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
      <h4 style={{color:"gray", fontFamily:"fantasy", fontWeight:"500",paddingLeft:"8px",letterSpacing:"1px"}}>TotalReviews: <span style={{color:"black", fontWeight:"500",fontFamily:"fantasy"}}>{reviewData.totalReview}</span></h4>
      <h4 style={{color:"gray", fontFamily:"fantasy", fontWeight:"500",paddingLeft:"8px",letterSpacing:"1px"}}>PositiveReviews: <span style={{color:"green", fontWeight:"500",fontFamily:"fantasy"}}>{reviewData.posData}</span></h4>
      <h4 style={{color:"gray", fontFamily:"fantasy", fontWeight:"500",paddingLeft:"8px",letterSpacing:"1px"}}>NegativeReviews: <span style={{color:"#FF6347", fontWeight:"500",fontFamily:"fantasy"}}>{reviewData.negData}</span></h4>
      <h4 style={{color:"gray", fontFamily:"fantasy", fontWeight:"500",paddingLeft:"8px",letterSpacing:"1px"}}>Comments: <span style={{color:"#4F50AD", fontWeight:"500",fontFamily:"fantasy"}}>{reviewData.totalCmt}</span></h4>
    </div>
  );
};

export default DashboardChart;

