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
      data: ['3', '87', '1823', '1282', '290', '65', '87', '53', '34']
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
      data: ['1', '171', '593', '859', '1035', '517', '230', '99', '47', '19', '45', '15', '22', '26', '45'],
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
      data: ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','≥12'],
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
      data: ['846', '904', '880', '564', '302', '109', '84', '15', '14', '3', '1', '0', '2'],
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
      data:['35', '66', '202', '475', '762', '1029', '751', '302', '78', '24'],
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
      data: ['170', '1200', '999', '839', '265', '122', '45', '27', '16', '41']
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
      data: ['1173', '634', '753', '708', '150', '142', '70', '5', '16', '5', '6', '3', '59'],
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
      data:['1053', '11', '1362', '108', '278', '175', '622', '115'],
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
      data: ['0', '1066', '2143', '362', '86', '31', '27', '9'],
    }
  ]
};
myChart.setOption(option);