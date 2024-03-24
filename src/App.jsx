
import React, { useState } from 'react';
import './App.css';
import DashboardChart from './chart';


const dashboardData = 
[
  // Research section
  {
    label:"Research",
    data: [
      {
        name: 'P+',
        uv: 12000,
        pv: 10000,
        amt: 100,
      },
      {
        name: 'N-',
        uv: 800,
        pv: 1000,
        amt: 100,
      },
      {
        name: 'Cmt',
        uv: 1100,
        pv: 2000,
        amt:100,
      },
    ],
    submenu: [
      {
        label: "External",
        data: [
          {
            name: 'P+',
            uv: 14000,
            pv: 11000,
            amt: 2400,
          },
          {
            name: 'N-',
            uv: 2000,
            pv: 139,
            amt: 2210,
          },
          {
            name: 'Cmt',
            uv: 3000,
            pv: 3000,
            amt: 2290,
          },
        ],
        submenu: [
          {
            label: "B2C",
            data: [
              {
                name: 'P+',
                uv: 10000,
                pv: 9000,
                amt: 2400,
              },
              {
                name: 'N-',
                uv: 1000,
                pv:234,
                amt: 2210,
              },
              {
                name: 'Cmt',
                uv: 2000,
                pv: 980,
                amt: 2290,
              },
            ],
            submenu: [
              { label: "Online",     
              data: [
                      {
                       name: 'P+',
                       uv: 13000,
                       pv: 9500,
                       amt: 2043,
                      },
                      {
                       name: 'N-',
                       uv: 9000,
                       pv: 1034,
                       amt: 2044,
                      },
                      {
                      name: 'Cmt',
                      uv: 3000,
                      pv: 1000,
                      amt: 2044,
                      },
                    ],},
              
              { label: "Interview" ,   
               data: [
      {
        name: 'P+',
        uv: 11000,
        pv: 12000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 2000,
        pv: 1100,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 3500,
        pv: 980,
        amt: 2290,
      },
                     ],},
              { label: "Public-Data",    
              data: [
      {
        name: 'P+',
        uv: 15000,
        pv: 11500,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 11000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 4000,
        pv: 900,
        amt: 2290,
      },
                    ], },
              { label: "Health" ,   
               data: [
      {
        name: 'P+',
        uv: 12000,
        pv: 10500,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 1000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 2570,
        pv: 1100,
        amt: 2290,
      },
                     ],}
            ]
          },
          { label: "B2C" ,
          data: [
            {
              name: 'P+',
              uv: 14000,
              pv: 12000,
              amt: 2400,
            },
            {
              name: 'N-',
              uv: 2000,
              pv: 1298,
              amt: 2210,
            },
            {
              name: 'Cmt',
              uv: 4000,
              pv: 1334,
              amt: 2290,
            },
                ],}
        ]
      },
      { label: "Internal",
      data: [
        {
          name: 'P+',
          uv: 23000,
          pv: 13000,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 4000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 4000,
          pv: 800,
          amt: 2290,
        },
      ], }
    ]
  },
  // Planning section
  {
    label: "Planning",
    data: [
      {
        name: 'P+',
        uv: 13000,
        pv: 9000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 2000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 3500,
        pv: 1800,
        amt: 2290,
      },
    ],
    submenu: [
      { label: "RRD" ,
      data: [
        {
          name: 'P+',
          uv: 10000,
          pv: 11300,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 1500,
          pv: 1108,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 2000,
          pv: 1400,
          amt: 2290,
        },
      ],},
      { label: "Spacs",
      data: [
        {
          name: 'P+',
          uv: 11500,
          pv: 10600,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 1240,
          pv: 1598,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 1550,
          pv: 1700,
          amt: 2290,
        },
      ], }
    ]
  },
  // Designing section
  {
    label: "Designing",
    data: [
      {
        name: 'P+',
        uv: 14050,
        pv: 13000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 2000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 2500,
        pv: 9800,
        amt: 2290,
      },
    ],
    submenu: [
      { label: "Hardware",
      data: [
        {
          name: 'P+',
          uv: 15000,
          pv: 13000,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 1600,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 3000,
          pv: 9800,
          amt: 2290,
        },
      ], },
      { label: "Software",
      data: [
        {
          name: 'P+',
          uv: 12000,
          pv: 13000,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 1000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 1000,
          pv: 9800,
          amt: 2290,
        },
      ], }
    ]
  },
  // Manufacturing section
  {
    label: "Manufacturing",
    data: [
      {
        name: 'P+',
        uv: 16000,
        pv: 13000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 500,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 4000,
        pv: 9800,
        amt: 2290,
      },
    ],
    submenu: [
      { label: "Material",    
      data: [
      {
        name: 'P+',
        uv: 13000,
        pv: 13000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 1400,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 3000,
        pv: 9800,
        amt: 2290,
      },
    ], },
      { label: "Production",    
      data: [
      {
        name: 'P+',
        uv: 14000,
        pv: 13000,
        amt: 2400,
      },
      {
        name: 'N-',
        uv: 1100,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 2060,
        pv: 9800,
        amt: 2290,
      },
    ], }
    ]
  },
  // Sales/Marketing section
  {
    label: "Sales/Marketing",
    data: [
      {
        name: 'P+',
        uv: 13000,
        pv: 1000,
        amt: 400,
      },
      {
        name: 'N-',
        uv: 1100,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Cmt',
        uv: 2060,
        pv: 9800,
        amt: 2290,
      },
    ],
    submenu: [
      { label: "Online" ,
      data: [
        {
          name: 'P+',
          uv: 10000,
          pv: 13000,
          amt: 2400,
        },
        {
          name: 'N-',
          uv: 1020,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 3000,
          pv: 9800,
          amt: 2290,
        },
      ],},
      { label: "Dealership",
      data: [
        {
          name: 'P+',
          uv: 14000,
          pv: 130,
          amt: 240,
        },
        {
          name: 'N-',
          uv: 1100,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Cmt',
          uv: 3070,
          pv: 9800,
          amt: 2290,
        },
      ], }
    ]
  }
];

function App() {
  const [showChart, setShowChart] = useState(false);
  const [chartPosition, setChartPosition] = useState({ x:0, y:0 });
  const [chartData, setChartData] = useState(null)

  const handleHover = (e,value) => {
    e.stopPropagation()
    setChartData(value.data)
    console.log('fsdfsdfds',value)
    setShowChart(true);
    setChartPosition({ x: e.clientX, y: e.clientY });
  }

  const handleMouseLeave=()=>{
    setShowChart(false)
    setChartData(null)
  }


  const toggleSubMenu = (e) => {
    console.log('value', e.target)
    e.stopPropagation();

    let submenu = e.target.querySelector("ul");

    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }  

  }

  const renderSubMenu = (subMenu) => {
    return (
      <ul className="submenu">
        {
          subMenu.map((subItem, index) => (
            <li key={index} onClick={toggleSubMenu} onMouseMove={(e) => handleHover(e,subItem)} onMouseLeave={handleMouseLeave}>
              {subItem.label}
              {subItem.submenu && renderSubMenu(subItem.submenu)}
            </li>
          ))

        
        }
      </ul>
    )
  }

  return (
    <div className="container" >
      <ul>
        {
          dashboardData.map((item, index) => (
            <li key={index} onClick={toggleSubMenu} value={item} onMouseMove={(e) => handleHover(e,item)} onMouseLeave={handleMouseLeave}>
              {item.label}
              {item.submenu && renderSubMenu(item.submenu)}
            </li>
          ))
        }
      </ul>
      {showChart &&
        <div className="chart-container" style={{ position: 'absolute', top: chartPosition.y, left: chartPosition.x, margin:"15px" }}>
          <DashboardChart chartData={chartData} />
        </div>
      }
    </div>
  )
}

export default App;
