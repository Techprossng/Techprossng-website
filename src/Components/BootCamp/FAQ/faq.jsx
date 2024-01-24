import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";

const FaqBootcamp = () => {
  return (
    <div className="px-6 py-12 md:px-12 mt-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="text-4xl font-semibold">
            <span className="font-thin uppercase">Bootcamp</span> Frequently
            Asked Question(FAQ).
          </h1>
          <p className="text-lg font-normal text-center w-2/3">
            Explore the ins and outs of the upcoming TechProsNaija Bootcamp with
            our comprehensive Frequently Asked Questions section, providing
            clarity on logistics, curriculum, and all the details you need for a
            seamless and rewarding learning experience.
          </p>
        </div>
        <Accordion allowToggle mt={"5rem"} width={"90%"}>
          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  Section 1 title
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  Section 2 title
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  Section 3 title
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  Section 4 title
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  Section 5 title
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 flex flex-col justify-center items-center gap-5">
          <p className="text-2xl font-medium" style={{ color: "#141414" }}>
            Still Have Questions?
          </p>
          <p className="text-lg font-medium" style={{ color: "#484848" }}>
            Can't find the answer you're looking for? Kindly contact{" "}
            <a href="" style={{ color: "#546FFF" }}>
              {" "}
              customer support
            </a>{" "}
            for swift response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqBootcamp;
