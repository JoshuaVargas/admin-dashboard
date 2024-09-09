import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import StreamChart from "../../components/StreamChart";

const Stream = () => {
  return (
    <Box m="20px">
      <Header title="Stream Chart" subtitle="Simple Stream Chart" />
      <Box height="75vh">
        <StreamChart />
      </Box>
    </Box>
  );
};

export default Stream;
