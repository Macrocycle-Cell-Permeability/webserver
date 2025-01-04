
var app = {};
var chartDom = document.getElementById('heatmap');
var myChart = echarts.init(chartDom);
var option;

// prettier-ignore
const Assays = [
    "Caco-2","MDCK","RRCK","PAMPA","Others"];
// prettier-ignore
const Endpoints = [
    'ER', 'ER+Inh.', '㏒ P(app)', 
    '㏒ P(app) AB', '㏒ P(app) AB+Inh.', 
    '㏒ P(app) BA', '㏒ P(app) BA+Inh.', '㏒ P(app)+Inh.', '㏒ P(eff)'
    
    ];
/*     const Endpoints = [
      'ER', 'ER+Inh.', '㏒ Pₐₚₚ', 
      '㏒ Pₐₚₚ AB', '㏒ Pₐₚₚ AB+Inh.', 
      '㏒ Pₐₚₚ BA', '㏒ Pₐₚₚ BA+Inh.', '㏒ Pₐₚₚ+Inh.', '㏒ Pₑff'
      ]; */
// prettier-ignore
const data = [ [0, 0, 375],
          [0, 1, 112],
          [0, 2, 3],
          [0, 4, 46],
          [1, 0, 132],
          [1, 1, 5],
          [2, 0, 75],
          [2, 1, 18],
          [2, 3, 314],
          [2, 4, 52],
          [3, 0, 447],
          [3, 1, 114],
          [3, 2, 2],
          [4, 0, 140],
          [4, 1, 5],
          [5, 0, 356],
          [5, 1, 7],
          [5, 2, 2],
          [6, 0, 122],
          [6, 1, 5],
          [7, 0, 1],
          [8, 3, 3501]
                  
                  ]
        .map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });
option = {
  title: { /* Add the distance */
    text: 'Heatmap of the Entries',

    textStyle: {
      fontSize: 20,
      align: 'center',

    },

  }, 
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '20%'
  },
  xAxis: {
    type: 'category',
    data: Assays,
    position :'top',
    axisLabel: { 
    fontWeight:'bold'},
   

    splitArea: {
      show: true
    },
    
  },
  yAxis: {
    type: 'category',
    data: Endpoints,
    position :'left',
    axisLabel: { interval: 0, 
                  rotate: 45,
                fontWeight:'bold',
                fontSize:'12px' },
    splitArea: {
      show: true
    }
  },

  visualMap: {
    min: 0,
    max: 500,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    
    bottom: '15%',
    inRange: {
      color: ['#c3defa', '#3976ca']
    }
  },
  series: [
    {
      name: 'Entires',
      type: 'heatmap',
      data: data,
      label: {
        show: true,
        fontSize:'14px'
      },

      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);