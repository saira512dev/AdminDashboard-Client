import React from 'react';
import { ResponsivePie } from "@nivo/pie";
import {Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useGetSalesQuery } from "../state/api"

const BreakdownChart = ({ isDashboard = false }) => {
    const { data, isLoading } = useGetSalesQuery()
    const isMobileScreen = useMediaQuery("(max-width: 600px)");
    const isXsSmallScreen = useMediaQuery("(max-width: 376px)");
    const theme = useTheme()
    if(!data || isLoading) return "Loading..."

    const colors = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
    ];

    const formattedData = Object.entries(data.salesByCategory).map(([category, sales], i) => ({
        id: category,
        label: category,
        value: sales,
        color: colors[i]
    }))
  return (
    <Box height={isXsSmallScreen ? "300px" : !isDashboard && isMobileScreen ? "500px" :  "90%"}
    width={isXsSmallScreen ? "250px" :undefined} //sx={{background: "yellow"}}
    minHeight={isDashboard  ? "325px" : isMobileScreen ? "350px" : "50%"}
    minWidth={isXsSmallScreen ? "250px" : isDashboard || isMobileScreen ? "325px" : "50%"}
    position="relative"
   // display="flex"
    //flex-direction="column"
    //justifyContent="space-between"
    //alignItems="center"
    //gap="10px"
    >
        <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        // margin={
        //   isDashboard && isMobileScreen ? {top: 0, bottom:210, left: 180, right: 100} :isDashboard ?
        //      { top: 10, right: 80, bottom: 180, left: 10 }
        //     : { top: 40, right: 80, bottom: 80, left: 80 }
        // }
        margin={isXsSmallScreen ? { top: 20, right: 30, bottom: 120, left: 50 } :
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard && !isXsSmallScreen}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction:"column",
            justify: false,
            margin: "70px 0px",
            translateX: isDashboard && isMobileScreen ? 0: isDashboard ? 20 : 10,
            translateY: isXsSmallScreen ? 100 : isDashboard ? 90 : 56,
            itemsSpacing: 2,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
      <Box
        position="absolute"
        top={isXsSmallScreen ? "40%" : "50%"}
        left="50%"
        color={theme.palette.secondary[400]}
        textAlign="center"
        pointerEvents="none"
        sx={{
          transform: isDashboard
            ? "translate(-75%, -170%)"
            : "translate(-50%, -100%)",
        }}
      >
        <Typography variant="h6">
          {!isDashboard && "Total:"} ${data.yearlySalesTotal}
        </Typography>
      </Box>
    </Box>
  )
}

export default BreakdownChart