import React from 'react';
import { Box, useMediaQuery} from "@mui/material";
import Header from "../../components/Header";
import BreakdownChart from "../../components/BreakdownChart";

const Breakdown = () => {

  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box m="1.5rem 2.5rem" height={isMobileScreen ? "75%" : "70%"} width={isMobileScreen ? "75%" : "70%"}
       //flexDirection="column"
       >
        <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
        {/* <Box mt="40px" minWidth={"200px"}  height="80%"> */}
            <BreakdownChart />
        {/* </Box> */}
    </Box>
  )
}

export default Breakdown