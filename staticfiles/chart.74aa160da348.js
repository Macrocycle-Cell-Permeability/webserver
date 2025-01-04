    var myChart = echarts.init(document.getElementById('main'));
    option = {
        tooltip: {
          trigger: 'item',
        },
        title: {
            text: 'Assays',
            left: 'center'
          },
        legend: {
          top: '10%',
          left: 'center'
        },
        series: [
          {
            name: 'Assays',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
                {name: 'PAMPA', value: 4052},
                {name: 'Caco-2', value: 1679},
                {name: 'MDCK', value: 360},
                {name: 'RRCK', value: 50},
                {name: 'Others', value: 112},
            ]
        }]
    }
    myChart.setOption(option);

   
    var myChart = echarts.init(document.getElementById('main2'));
    option = {
        tooltip: {
          trigger: 'item'
        },
        title: {
            text: 'Endpoints',
            left: 'center'
          },
        legend: {
          top: '10%',
          left: 'center'
        },
        series: [
          {
            name: 'Endpoints',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
                {name: 'Log Papp AB', value: 668},
                {name: 'Log Papp BA', value: 369},
                {name: 'ER', value: 534},
                {name: 'Log Papp BA+', value: 109},
                {name: 'Log Papp AB+', value: 125},
                {name: 'ER+', value: 120},
                {name: 'Log Papp', value: 787},
                {name: 'Log Pe', value: 3544},
                {name: 'Log Papp+', value: 1},
            ]
        }]
    }
    myChart.setOption(option);