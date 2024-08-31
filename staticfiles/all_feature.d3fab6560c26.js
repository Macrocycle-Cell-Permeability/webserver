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
      data: ['3', '124', '1973', '1444', '379', '143', '82', '37','37']
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
      data: ['5', '171', '598', '922', '1168', '655', '297', '149', '71', '37', '36', '13', '24', '24','46'],
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
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '11', '19'],
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
      data: ['875', '1066', '1019', '686', '358', '118', '83', '11', '4', '1', '1'],
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
      data: ['17', '63', '219', '507', '903', '1151', '827', '406', '104', '25'],
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
      data: ['171','1283', '1207', '997', '325', '135', '60', '12', '13','19']
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
      data: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','>24'],
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
      data: ['1296', '719', '924', '735', '216', '147', '95', '4', '15', '21', '5', '7', '38'],
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
      data: ['1115', '51', '1680', '136', '321', '207', '610', '102'],
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
      data: ['12', '1213', '2407', '443', '91', '35', '11', '10'],
    }
  ]
};
myChart.setOption(option);

