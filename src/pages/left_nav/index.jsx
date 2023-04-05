import React, { useState } from "react";

import "./style.css";

const Nav_list = [
  {
    key: "analytical",
    label: "Analytical",
  },
  {
    key: "ecommerce",
    label: "Ecommerce",
  },
  {
    key: "calendar",
    label: "Calendar",
  },
  {
    key: "notes",
    label: "Notes",
  },
  {
    key: "extras",
    label: "Extras",
  },
];

export function LeftNav() {
    let [activeNav, setActiveNav] = useState('analytical');
  return (
    <div className="navContainer">
      <p className="nav_title">Dashboard</p>
      <div className="nav_list_wrapper">
            {Nav_list.map(item => <div className={`nav_item ${activeNav?.key === item.key ? 'active_nav' : ''}`}>
                <p>{item.label}</p>
            </div>)}
      </div>
    </div>
  );
}
