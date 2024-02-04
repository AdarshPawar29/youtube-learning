import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Analysis from "./Analysis";
import BottomNav from "./BottomNav";

export default function MainCard() {
  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              YouTube Learning Tracker
            </Typography>
          </Stack>
          <Typography color="text.secondary" variant="body2">
            YouTube Learning Tracker Chrome Extension: Track your educational
            video time, generate weekly or monthly reports for learning
            activities on YouTube.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="subtitle1">
            How to use this extension?
          </Typography>
          <Typography variant="body2" gutterBottom>
            Click on the
          </Typography>
          <Typography variant="button" gutterBottom>
            Start
          </Typography>
          <Typography variant="body2" gutterBottom>
            when you want to start the session, once you are done with your
            learning click on
          </Typography>
          <Typography variant="button" gutterBottom>
            Stop
          </Typography>
          <Typography variant="body2" gutterBottom>
            button to end your session.
          </Typography>
        </Box>
        <Divider />
        <Analysis />
      </Card>
      <BottomNav />
    </>
  );
}
