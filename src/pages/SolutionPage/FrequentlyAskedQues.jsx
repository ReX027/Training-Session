import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircle from '../../assets/icons/AddCircle'

import "./FrequentlyAskedQues.scss";

function FrequentlyAskedQuestions() {
  return (
    <div className="frequently_asked_ques">
      <div className="heading">
        <h4>Frequently Asked Questions</h4>
        <span>Got Questions? We've Got Answers</span>
      </div>
      <div className="accordion">
        <div>
          <Accordion
            sx={{
              borderBottom: "solid 2px #fff",
              margin: "10px 0"
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                background: "#000",
                color: '#fff',
                padding: '0'
              }}
            >
              What industries does Rework AI cater to?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#000",
                color: '#fff',
                paddingLeft: '0',
                paddingRight: '0'
              }}
            >
            Rework AI caters to a wide range of industries, including tech, finance, healthcare, and more. Our platform is customizable to fit the hiring needs of any industry.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: "solid 2px #fff",
              margin: "10px 0"
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                background: "#000",
                color: '#fff',
                padding: '0'
              }}
            >
              How does AI Video Interviewing work?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#000",
                color: '#fff',
                paddingLeft: '0',
                paddingRight: '0'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: "solid 2px #fff",
              margin: "10px 0"
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                background: "#000",
                color: '#fff',
                padding: '0'
              }}
            >
              Is Rework AI customizable to fit our specific hiring needs?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#000",
                color: '#fff',
                paddingLeft: '0',
                paddingRight: '0'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: "solid 2px #fff",
              margin: "10px 0"
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                background: "#000",
                color: '#fff',
                padding: '0'
              }}
            >
              How secure is Rework AI's platform?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#000",
                color: '#fff',
                paddingLeft: '0',
                paddingRight: '0'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: "solid 2px #fff",
              margin: "10px 0",
              padding: '0 !important'
            }}
          >
            <AccordionSummary
              expandIcon={<AddCircle />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{
                background: "#000",
                color: '#fff',
                padding: '0'
              }}
            >
              What kind of support does Rework AI provide to its customers?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#000",
                color: '#fff',
                paddingLeft: '0',
                paddingRight: '0'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestions;
