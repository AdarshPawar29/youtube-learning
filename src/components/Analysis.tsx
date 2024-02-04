import { PieChart } from "@mui/x-charts/PieChart";
import React, { useEffect } from "react";
import { fetchData } from "../contentScript";

export default function Analysis() {
  const pieParams = { height: 200 };
  React.useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.message === "data_received") {
        const pageUrl = request.url;
        const pageContent = request.content;

        // Now you have the page URL and content, you can handle them in your React component
        console.log("Page URL:", pageUrl);
        console.log("Page Content:", pageContent);
      }
    });
  }, []);
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "React" },
            { id: 1, value: 15, label: "JavaScript" },
            { id: 2, value: 20, label: "Python" },
            { id: 3, value: 30, label: "C++" },
          ],
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          innerRadius: 35,
          outerRadius: 80,
          paddingAngle: 2,
          cornerRadius: 5,
          startAngle: -180,
          endAngle: 180,
          cx: 150,
          cy: 100,
        },
      ]}
      slotProps={{
        legend: { hidden: true },
      }}
      {...pieParams}
    />
  );
}
