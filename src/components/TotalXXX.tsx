import React from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

import data from '../data/totalxxx.json'

const TotalXXX = () => {

    const options: ApexCharts.ApexOptions = {
        chart: {
            id: 'total-expense',
            toolbar: {
                show: false
            }
        },
        colors: ['#72E128'],
        xaxis: {
            categories: data?.map(item => item.data),
            labels: {
                show: true
            },
            position: 'top',
        },
        yaxis: {
            title: {
                text: ""
            },
            labels: {
                show: false
            },
        },
        grid: {
            show: true,
            yaxis: {
                lines: {
                    show: false
                }
            },
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        }
        // series: data
    }

    const series:ApexCharts.ApexOptions['series'] = data;

  return (
    <div>
        <Chart 
            options={options} 
            series={series}
            type="bar" width={'100%'} height={'100%'} />
    </div>
    // width={496} height={278}
  )
}

export default TotalXXX