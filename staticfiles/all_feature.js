var myChart = echarts.init(document.getElementById('all_MW'));
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
      data: ['6', '130', '2163', '1482', '409', '146', '118', '59','40']
    }
  ]
};

myChart.setOption(option);

var myChart = echarts.init(document.getElementById('all_HBA'));
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
      data: ['5', '171', '612', '1037', '1224', '697', '324', '166', '83', '50', '58', '23', '27', '26', '50'],
    }
  ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('all_HBD'));
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
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '≥12'],
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
      data: ['882', '1219', '1079', '723', '394', '125', '90', '18', '16', '3', '1', '0', '3'],
    }
  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('all_cLogP'));
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
      data: ['36', '73', '237', '586', '993', '1200', '854', '431', '110', '33'],
    }
  ]
};
myChart.setOption(option);



var myChart = echarts.init(document.getElementById('all_TPSA'));
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
      data: ['170', '1274', '1324', '1057', '373', '182', '80', '34', '16', '43']
    }
  ]
};

myChart.setOption(option);

var myChart = echarts.init(document.getElementById('all_MRS'));
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
      data: ['1302', '873', '930', '774', '225', '151', '148', '20', '21', '24', '11', '9', '65'],
    }
  ]
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('all_AR'));
option = {
  title: {
    text: 'Amide Ratio¹ ',
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
      data: ['1175', '63', '1789', '184', '356', '223', '648', '115'],
    }
  ]
};
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('all_KI'));
option = {
  title: {
    text: 'Kier Flexibility Index²',
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
      data: ['12', '1411', '2489', '466', '101', '38', '27', '9'],
    }
  ]
};
myChart.setOption(option);