import React, { useEffect, useState } from "react";
import { ResponsiveLine } from '@nivo/line'
import * as dayjs from 'dayjs'

import "./style.css";


export function LineChart({data}) {
    const [ChartData, setChartData] = useState([]);
    useEffect(()=>{
        setChartData(getChartData(data))
    },[data]);
    function getChartData(data){
        let formatedData = [];
        let clickData = {
            id: 'Clicks',
            data : []
        }
        let impressionData = {
            id: 'Impression',
            data: []
        }
        data.forEach(item => {
            if(item.clicks){
                clickData.data.push({x : dayjs(item.date).format('YYYY-MM-DD'), y : item.clicks});
            }
            if(item.impressions){
                impressionData.data.push({x : dayjs(item.date).format('YYYY-MM-DD'), y: item.impressions})
            }
        })

        formatedData.push(clickData);
        formatedData.push(impressionData);

        console.log("FROM CHART", formatedData);
        return formatedData;
    }
   return <>
   <p>Products Trends by Month</p>
   <div style={{height: "30rem"}}>
   <ResponsiveLine
        data={ChartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        // xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Impression',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
   </div>
    
   </>
}