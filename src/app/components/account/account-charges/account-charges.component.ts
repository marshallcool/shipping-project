import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-charges',
  templateUrl: './account-charges.component.html',
  styleUrls: ['./account-charges.component.scss']
})
export class AccountChargesComponent implements OnInit {
  data: any;

  msgs: any;

  options: any;

  testData: any = [
    {
      date: 'January',
      value: 15,
      user_name: 'aloha',
      parcels: 4
    },
    {
      date: 'January',
      value: 2,
      user_name: 'Sanqa',
      parcels: 12
    },
    {
      date: 'January',
      value: 20,
      user_name: 'petqa',
      parcels: 9
    },
    {
      date: 'January',
      value: 34,
      user_name: 'tester',
      parcels: 72
    },
    {
      date: 'January',
      value: 90,
      user_name: 'vasqa',
      parcels: 21
    }
  ];

  constructor() {
    this.data = {
      labels: this.testData.map(x => x.date),
      datasets: [
        {
          label: 'First Dataset',
          data: this.testData.map(x => x.value),
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#fff',
          backgroundColor: '#ff6556',
          borderColor: '#fff'
        }
      ]
    };
    this.options = {
      title: {
        display: false
      },
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          title: function(tooltipItem, chart) {
            return tooltipItem[0].yLabel;
          },
          label: function(tooltipItem, chart) {
            return console.log(tooltipItem)
            // return `Посылки + ${tooltipItem[0].yLabel}`;
          }
        }
      }
    };
  }

  ngOnInit() {
  }

}
