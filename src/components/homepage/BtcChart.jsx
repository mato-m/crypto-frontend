import React from "react";
import styles from "./BtcChart.module.css";
import Chart from "react-apexcharts";

const BtcChart = () => {
  return (
    <div className={styles.mainChartWrapper}>
      <div className={styles.mainChartInnerWrapper}>
        <div>
          <h3>Bitcoin price (in USD)</h3>
          <h4>Current price: 25640.11$</h4>
        </div>
        <div className={styles.chartWrap}>
          <Chart
            options={{
              tooltip: {
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                  return (
                    "<span style='color: #8835D3;background:transparent;padding:6px'>" +
                    series[seriesIndex][dataPointIndex] +
                    "</span>"
                  );
                },
              },
              markers: { colors: ["#8835D3"], discrete: true },
              grid: { show: false },
              fill: { colors: ["#8b95ed"] },
              stroke: {
                width: 1,
                colors: ["#8835D3"],
              },
              chart: {
                fontFamily: "Josefin Sans",
                toolbar: { show: false },
                zoom: { enabled: false },
              },
              xaxis: {
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                ],
              },
              dataLabels: {
                enabled: false,
              },
            }}
            series={[
              {
                name: "Price",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
              },
            ]}
            type="area"
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default BtcChart;
