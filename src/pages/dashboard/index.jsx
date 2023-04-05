import React, { useState } from 'react';
import { LeftNav } from '../left_nav';
import { AnalyticalPage } from '../analytical';
import "./style.css";

export function DashBoard(){
    return <div className='dashBoardContainer'>
        <div className='leftNav'>
            <LeftNav />
        </div>
        <div className='body'>
           <AnalyticalPage />
        </div>
    </div>
}