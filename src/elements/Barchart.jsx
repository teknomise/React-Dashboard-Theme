import { useState, useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import PropTypes from 'prop-types'

export const Barchart = ({data, categories}) => {

    const [dataSeries, setDataseries] = useState([])
    const [options, setOptions] = useState({})

    useEffect(() => {

        setDataseries(data)

        setOptions({
            chart: {
                type: 'bar',
                height: 200,
                toolbar:{
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: false,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: categories,
            },
            yaxis: {
                stepSize:20,
                labels:{
                    show: true,
                    formatter: (val) => {
                        return `$${val}`
                    }
                }
            },
            fill: {
                opacity: 1
            },
            legend:{
                show: false
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val 
                    }
                }
            },
           
        })
    }, [data,categories]);

    return <ReactApexChart options={options} series={dataSeries} type="bar" height={200} />
}

Barchart.propTypes = {
    data: PropTypes.array,
    categories: PropTypes.array
}