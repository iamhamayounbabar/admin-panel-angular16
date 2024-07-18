import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';

@Component({
  selector: 'app-user-history-chart',
  templateUrl: './user-history-chart.component.html',
  styleUrls: ['./user-history-chart.component.css']
})
export class UserHistoryChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      // width:'530'
    },
    title: {
      text: 'User Registration History',
      align: 'left',
      x: 0,
      margin:50,
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: null 
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px;">{point.key}</span><table>',
      pointFormat: '<tr><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    legend: {
      enabled: false 
    },
    series: [{
      type: 'column',
      data: [179.9, 261.5, 106.4, 129.2, 44.0, 276.0, 135.6, 248.5, 216.4, 194.1]
    }],
    credits: {
      enabled: false,
    },
    responsive: {
      rules: [{
        condition: {
          minWidth: 200,
        },
      }]
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
