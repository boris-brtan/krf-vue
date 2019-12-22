<template>
    <div>
        <span class="md-title">{{ title }}</span>
        <GChart
            type="ColumnChart"
            :data="params"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts'
import { GChart } from 'vue-google-charts'

Vue.use(VueGoogleCharts)

export default {
    name: 'Chart',
    components: {
        GChart
    },
    props: {
        data: Array,
        title: String,
    },
    computed: {
        params: function() {
            return [
                ['Year', 'Value'],
                ...this.data.map(item => [item.Datum, item.Hodnota]),
            ]
        }
    },
    data() {
        return {
            chartOptions: {
                animation: {
                    startup: true,
                    duration: 200,
                },
                annotations:{
                    textStyle: {
                        fontSize: 12,
                    },
                },
                // backgroundColor: theme.palette.background.default,
                chartArea: {
                    width: '100%',
                    left: 40,
                    top: 40,
                },
                // colors: [theme.palette.primary.main],
                hAxis: {
                    title: 'Dátum odberu',
                    gridlines: {
                        count: 20,
                        color: '#fff',
                    },
                    // baselineColor: theme.palette.text.primary,
                    // textColor: theme.palette.text.primary,
                    // titleTextStyle: {
                        // color: theme.palette.text.primary,
                    // }
                },
                vAxis: {
                    title: 'Hodnota zložky krvi',
                    minValue: 0,
                    // textColor: theme.palette.text.primary,
                    // baselineColor: theme.palette.text.primary,
                    // titleTextStyle: {
                        // color: theme.palette.text.primary,
                    // },
                },
                legend: {
                    position: 'none',
                },
                height: 250,
                width: '100%',
                // title: props.title,
                // titleTextStyle: {
                    // color: theme.palette.text.primary,
                    // fontSize: 15,
                // },
            },
        }
    },
}
</script>