var myChart = echarts.init(document.getElementById('nest'));
var data = [

  {
    name: 'Others',
    itemStyle: {
      color: '#F1948A'
    },
    children: [
    
      {
        name: 'ER',
        value: 46,
        itemStyle: {
          color: '#F2D7D5'
        }
      },

      {
        name: '㏒ P(app)',
        value: 52,
        itemStyle: {
          color: '#F5B7B1'
        }
      },
    ]
  },
  {
     name: 'Caco-2',
     itemStyle: {
       color: '#5DADE2'
     },
     children: [
     
       {
         name: 'ER',
         value: 342,
         itemStyle: {
           color: '#EAF2F8'
         }
       },
       {
         name: 'ER+Inh.',
         value: 111,
         itemStyle: {
           color: '#EBF5FB'
         }
       },
       {
         name: '㏒ P(app)',
         value: 74,
         itemStyle: {
           color: '#D4E6F1'
         }
       },
       {
         name: '㏒ P(app) AB',
         value:414,
         itemStyle: {
           color: '#D6EAF8'
         }
       },    
       {
         name: '㏒ P(app) AB+Inh.',
         value:119,
         itemStyle: {
           color: '#A9CCE3'
         }
       },     
       {
         name: '㏒ P(app) BA',
         value:337,
         itemStyle: {
           color: '#AED6F1'
         }
       },
       {
         name: '㏒ P(app) BA+Inh.',
         value:104,
         itemStyle: {
           color: '#85C1E9'
         }
       },
/*        {
         name: '㏒ P(app)+Inh.',
         value: 1,
         itemStyle: {
           color: '#d0545f'
         }
       } */
     ]
   },
   {
    name: 'RRCK',
    itemStyle: {
      color: '#C39BD3'
    },
    children: [
    
      {
        name: 'ER',
        value: 3,
        itemStyle: {
          color: '#D7BDE2'
        }
      },
   
      {
        name: '㏒ P(app) AB',
        value:2,
        itemStyle: {
          color: '#D2B4DE'
        }
      },
   
      {
        name: '㏒ P(app) BA',
        value:2,
        itemStyle: {
          color: '#EBDEF0'
        }
      },

    ]
  },

   {
    name: 'MDCK',
    itemStyle: {
      color: '#ABEBC6'
    },
    children: [
    
      {
        name: 'ER',
        value: 112,
        itemStyle: {
          color: '#E8F8F5'
        }
      },
      {
        name: 'ER+Inh.',
        value: 5,
        itemStyle: {
          color: '#E9F7EF'
        }
      },
      {
        name: '㏒ P(app)',
        value: 16,
        itemStyle: {
          color: '#D1F2EB'
        }
      },
      {
        name: '㏒ P(app) AB',
        value:114,
        itemStyle: {
          color: '#D4EFDF'
        }
      },    
      {
        name: '㏒ P(app) AB+Inh.',
        value:5,
        itemStyle: {
          color: '#A3E4D7'
        }
      },     
      {
        name: '㏒ P(app) BA',
        value:7,
        itemStyle: {
          color: '#A9DFBF'
        }
      },
      {
        name: '㏒ P(app) BA+Inh.',
        value:5,
        itemStyle: {
          color: '#76D7C4'
        }
      },
  
    ]
  },



 
   {
     name: 'PAMPA',
     itemStyle: {
       color: '#F7DC6F'
     },
     children: [
     
       {
         name: '㏒ P(app)',
         value: 305,
         itemStyle: {
           color: '#FAD7A0'
         }
       },
       {
         name: '㏒ P(eff)',
         value: 3462,
         itemStyle: {
           color: '#F6DDCC'
         }
       },

       
      

     ]
   }
 ];


 option = {

  title: {
    text: 'Statistics of the Assays and Endpoints',

    textStyle: {
      fontSize: 20,
      align: 'center'

    },

  }, 

  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      dataView: {
        readOnly: false
      },

      restore: {},
      saveAsImage: {}
    }
  },

  series: {
    type: 'sunburst',
    data: data,
    radius: [0, '95%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },

    
    
    levels: [
      {}, // Center layer, no changes needed here.
      {
        r0: '15%',
        r: '30%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          fontSize: 12,
          position: 'outside'
        },
        // Assuming label lines are not needed for this level, but adjust here if necessary.
      },
      {
        r0: '50%',
        r: '65%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false,
          fontSize: 10
        },
        itemStyle: {
          borderWidth: 3
        },

      },
    
    ]
    
  }
};

option && myChart.setOption(option);
