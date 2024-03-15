import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FaRegCalendarCheck } from "react-icons/fa6";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
         <Accordion allowToggle mt={"5rem"} width={"90%"}>
                  <AccordionItem
                    backgroundColor={"#5566A3"}
                    borderRadius={"8px"}
                    mb={3}
                  >
                    <h2>
                      <AccordionButton padding={"20px 24px"}>
                        <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                          1. What is the duration of the tech bootcamp training?
                        </Box>
                        <AccordionIcon color={"#fff"} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
                    The bootcamp training is designed to be a 2 weeks program, 
                    providing an intensive and immersive learning experience. 
                    This time frame ensures a comprehensive coverage of the curriculum 
                    while accommodating participants' commitments.
                    </AccordionPanel>
                  </AccordionItem>
                  </Accordion>
        {/* Add more information or customize the content here */}
      </div>
    </div>
  );
};

export default SuccessModal;
