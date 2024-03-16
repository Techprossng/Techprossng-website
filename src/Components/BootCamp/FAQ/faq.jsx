import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";


const FaqBootcamp = () => {
  return (
    <div className="px-6 py-12 md:px-12 mt-24">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-7">
          <h1 className="text-4xl text-center font-semibold">
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

          <AccordionItem
            backgroundColor={"#5566A3"}
            borderRadius={"8px"}
            mb={3}
          >
            <h2>
              <AccordionButton padding={"20px 24px"}>
                <Box as="span" flex="1" textAlign="left" color={"#fff"}>
                  2. What topics or skills are covered during the tech bootcamp training?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
            The bootcamp covers a wide array of topics, including but not 
            limited to Content writing,  product design, data analysis, 
            product management, etc. The curriculum is carefully crafted 
            to equip participants with the skills most in demand in the tech industry.
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
                  3. Is financial aid, scholarships, or installment plans available?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
            The bootcamp is affordable and only allows one-time payment. 
            We may offer financial assistance options such as scholarships, 
            or partnerships with financing organizations.  Our goal is to 
            make the tech bootcamp accessible to individuals from diverse backgrounds.
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
                  4. Are there any prerequisites for joining the tech bootcamp training?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              While no specific prerequisites are mandatory, participants 
              are encouraged to be committed to the bootcamp and have a 
              good grasp of the introductory classes. This ensures that 
              everyone can fully engage with the material from the start.
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
                  5. What is the format of the classes? in-person, online, or a combination of both?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Our tech bootcamp offers a virtual format of training. 
              Classes are conducted online, allowing participants to 
              join in from their comfort and from different locations.
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
                  6. What kind of support or resources are provided during the tech bootcamp training?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Participants will receive extensive support throughout the bootcamp. 
              This includes access to dedicated mentors, online forums, 
              additional learning materials, and collaboration tools. 
              Our commitment is to provide a supportive learning environment.
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
                  7. Are there assessments or certifications upon completion of the tech bootcamp training?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              Yes, participants will undergo assessments to gauge their 
              understanding and application of the skills learned. 
              Upon successful completion, participants will receive a 
              certificate of participation that validates their achievement 
              and demonstrates their readiness for the tech industry. 
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
                  8. How do I sign up?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              ●Visit our website www.techprosnaija.com/boot-camp <br />
              ●Click on "Sign Up" or “register now” to fill up your details. <br />
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
                  9. How can I make payment for the bootcamp?
                </Box>
                <AccordionIcon color={"#fff"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} backgroundColor={"#F8F8FF"}>
              To make payment for the bootcamp, please follow these steps: <br />
                ●Visit our website techprosnaija.com <br />
                ●Navigate to the payment section and make a transfer to the account details displaye. <br />
                ●Kindly upload evidence if payment or receipt. <br />
                ●Await a confirmatory email within 24hours.. <br />     
              If you encounter any issues or have questions during the payment process, 
              our support team(at support@techprosnaija.com) is ready to assist you.
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
