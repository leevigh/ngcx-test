import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

import data from '../data/expense.json'

// const DynamicApexCharts = dynamic(() => import('react-apexcharts'), {ssr: false})

const TotalFXChart = () => {

    const options: ApexCharts.ApexOptions = {
        chart: {
            id: 'total-expense',
            toolbar: {
                show: false
            }
        },
        colors: ['#72E128', '#FDC14B'],
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
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
            }
        },
        dataLabels: {
            enabled: false
        }
        // series: data
    }

    const series:ApexCharts.ApexOptions['series'] = data;

  return (
    <div className='flex justify-center'>
        <Chart 
            options={options} 
            series={series}
            type="bar" width={'100%'} height={'100%'} style={{borderRadius: '5px 5px 0 0'}} />
    </div>
    // width={408} height={108}
  )
}

export default TotalFXChart