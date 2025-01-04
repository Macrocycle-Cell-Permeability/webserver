var myChart = echarts.init(document.getElementById('pampa_MW'));
option = {
  title: {
    text: 'Molecular Weight (Da)',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
  
    {
      type: 'category',
      data: ['200-300', '300-400', '400-500', '500-600', '600-700', '700-800', '800-900', '900-1000','>1000'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: { interval: 0, rotate: 30 },
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['3', '87', '1824', '1386', '309', '71', '90', '55', '35']
    }
  ]
};

myChart.setOption(option);

var myChart = echarts.init(document.getElementById('pampa_HBA'));
option = {
  title: {
    text: 'Hydrogen Bond Acceptor',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15','≥16'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['1', '171', '598', '898', '1089', '543', '232', '100', '45', '20', '52', '18', '23', '26', '44'],
    }
  ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('pampa_HBD'));
option = {
  title: {
    text: 'Hydrogen Bond Donor',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6','7','≥8'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['846', '904', '948', '612', '306', '119', '84', '16', '25'],
    }
  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('pampa_cLogP'));
option = {
  title: {
    text: 'cLogP',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['-1<', '-1-0', '0-1', '1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '>7'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data:['32', '69', '210', '495', '804', '1068', '768', '305', '87', '22'],
    }
  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('pampa_TPSA'));
option = {
  title: {
    text: 'Topological Polar Surface Area (Å²)',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['20-50', '50-80', '80-110', '110-140', '140-170', '170-200', '200-230', '230-260','260-290','>290'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: { interval: 0, rotate: 30 },
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['172', '1245', '1062', '887', '257', '117', '54', '27', '18', '21']
    }
  ]
};

myChart.setOption(option);

var myChart = echarts.init(document.getElementById('pampa_MRS'));
option = {
  title: {
    text: 'Macrocycle Ring Size',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','≥24'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['1173', '635', '818', '762', '160', '144', '72', '5', '19', '6', '8', '3', '55'],
    }
  ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('pampa_AR'));
option = {
  title: {
    text: 'Amide Ratio',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['0-0.1', '0.1-0.2', '0.2-0.3', '0.3-0.4', '0.4-0.5', '0.5-0.6', '0.6-0.7', '>0.7'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data:['1069', '15', '1359', '115', '341', '183', '676', '102'],
    }
  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('pampa_KI'));
option = {
  title: {
    text: 'Kier Flexibility Index',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['4<', '4-8', '8-12', '12-16', '16-20', '20-24', '24-28', '>28'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: ['0', '1068', '2259', '382', '88', '31', '23', '9'],
    }
  ]
};
myChart.setOption(option);




