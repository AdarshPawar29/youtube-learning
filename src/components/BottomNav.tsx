import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const handleGetReport = () => {
    console.log("handleGetReport");
    fetchReport();
  };
  return (
    <>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Start"
            icon={<PlayCircleFilledWhiteOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Stop"
            icon={<StopCircleOutlinedIcon />}
          />
          <BottomNavigationAction
            onClick={handleGetReport}
            label="Get Report"
            icon={<AssessmentOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
function fetchReport() {
  throw new Error("Function not implemented.");
}
