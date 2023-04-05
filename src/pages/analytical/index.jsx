import React, { useState } from 'react';
import { DatePicker } from 'antd';
import Mock from "./mock.json";
import { AreaChartOutlined, PieChartOutlined } from '@ant-design/icons';
import { LineChart } from '../widgets/line_chart';
import { LeftNav } from '../left_nav';
import "./style.css";

const { RangePicker } = DatePicker;

export function AnalyticalPage(){
    const [analyticalData, setAnalyticalData] = useState([]);
    const [totalStats, setTotalStats] = useState({click : 0, impressions: 0});
    
    function handleDateChange(date, dateStrings){
        if(!date) {
            setAnalyticalData([]);
            setTotalStats({click : 0, impressions: 0})
            return null
        };
        let startDate = new Date(dateStrings[0]);
        let endDate = new Date(dateStrings[1]);
        const results = Mock.filter(item => new Date(item.date) >= startDate && new Date(item.date) <= endDate);
        const accumulatedResults = results.reduce((total,item) => {
            if(item){
                total.click+=item.clicks;
                total.impressions+=item.impressions;
            };
            return total;
        },{click: 0, impressions: 0});
        setAnalyticalData(results);
        setTotalStats(accumulatedResults);
    }

    return <div className='analytical_container'>
        <div className='range_picker'>
            <RangePicker onChange={handleDateChange} />
        </div>
        { analyticalData.length > 0 && <>
            <div className='state_board'>
                <div className='state_item'>
                    <p><AreaChartOutlined className='iconStyle' /> Total Clicks</p>
                    <p>{totalStats.click}</p>
                </div>
                <div className='state_item'>
                    <p> <PieChartOutlined className='iconStyle' />Total Impressions</p>
                    <p>{totalStats.impressions}</p>
                </div>
             </div>

             <LineChart data={analyticalData} />
        
        </>}
    </div>
}