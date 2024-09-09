import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExternalLink } from "react-external-link";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do you deliver?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>I always deliver.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can we order online?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This isn't a restaurant, despite what the charts suggest, but you
            can request me to work on your website online.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are there any discounts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Only if you're a member of the club.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why don't you have a website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You're looking at one of them. You can also visit{" "}
            <ExternalLink
              href="http://www.joshuavargas.com"
              style={{ color: colors.greenAccent[500] }}
            >
              joshuavargas.com
            </ExternalLink>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can you build a frontend for us?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>The answer to that question is yes.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
