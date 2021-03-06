import React from 'react'
import { LineChart } from "react-native-chart-kit";
import { View, Text, Dimensions, StyleSheet } from 'react-native'

interface IProps {
  labels: string[],
  customers: number[],
  expense: number[],
  profit: number[],
  revenue: number[],
  transaction: number[]
}

const GraphContainer = (props: IProps) => {
  return <View>
    <LineChart
      data={{
        labels: props.labels,
        datasets: [
          {
            data: [...props.customers],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(255, 170, 0, 1)`,
          },{
            data: [...props.expense],
            strokeWidth: 2,
            color: (opacity = 1) => `rgb(214,58,171,1)`,
          },{
            data: [...props.profit],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(224, 45, 30,1)`,
          },{
            data: [...props.transaction],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(30,42,108,1)`,
          },{
            data: [...props.revenue],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(51,51,51,1)`,
          }
        ],
        legend: ['Customers', 'Expense', 'Profits', 'Transaction', 'Revenues'],
      }}
      width={Dimensions.get("window").width - 10} // from react-native
      height={220}
      withHorizontalLabels={false}
      // yAxisLabel="$"
      // yAxisSuffix="k"
      // yAxisInterval={1}
      chartConfig={{
        fillShadowGradientOpacity: 0,
        backgroundColor: "#fff",
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: "#fff",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(30, 42, 108, 0.5)`,
        labelColor: (opacity = 1) => `rgba(30, 42, 108, ${opacity})`,
        style: {
          borderRadius: 16,
          // paddingLeft: 40
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 0,
        paddingRight: 30,
        paddingLeft: 30
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  graphTitle: {

  }
})

export default GraphContainer