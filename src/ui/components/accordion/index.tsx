import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage({ title, paragraph }: { title: string; paragraph: string }) {
  return (
    <div className="w-2/5 min-w-80 sm:min-w-96 lg:p-3 lg:pl-0">
      <Accordion sx={{ border: "1px solid #1E3A8A" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#1E3A8A" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{paragraph}</AccordionDetails>
      </Accordion>
    </div>
  );
}
