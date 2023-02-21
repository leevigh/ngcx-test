import React from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

import data from '../data/fxradar.json'

const FXRadar = () => {

    const options: ApexCharts.ApexOptions = {
        chart: {
            id: 'fx-radar',
            toolbar: {
                show: false
            }
        },
        colors: ['#FDC14B', '#72E128'],
        fill: {
            colors: ['#FDC14B', '#72E128'],
            opacity: 1
        },
        xaxis: {
            categories: data?.map(item => item.data),
            labels: {
                show: false
            }
        },
        yaxis: {
            title: {
                text: ""
            },
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        }
        // series: data
    }

    const series:ApexCharts.ApexOptions['series'] = data;

  return (
    <div className='flex justify-center'>
        <Chart 
            options={options} 
            series={series}
            type="radar" width={408} height={278} />
    </div>
  )
}

export default FXRadar