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
      data: ['1', '85', '1795', '1279', '281', '61', '63','35','31']
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
      data: ['1', '171', '583', '841', '1035', '514', '224', '87', '40', '12', '28', '11', '20', '24','40'],
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
      data: ['845', '901', '869', '547', '283', '101', '75','7','3'],
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
      data: ['15','60','198', '446', '756', '1020', '742', '300', '76', '18'],
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
      data: ['171','1241', '983', '820', '240', '99', '40', '7', '14','16']
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
      data: ['1169', '633', '753', '681', '147', '140', '55', '3', '12', '3', '0', '2', '33'],
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
      data: ['1049', '10', '1358', '101', '261', '162', '588', '102'],
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
      data: ['0', '1056', '2104', '344', '79', '28', '11', '9'],
    }
  ]
};
myChart.setOption(option);




