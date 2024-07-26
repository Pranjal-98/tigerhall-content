import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface CardProps {
  cardImage: string;
  time: string;
  contentCategory: string;
  description: string;
  expertName: string;
  expertCompany: string;
}

const Card: React.FC<CardProps> = ({
  cardImage,
  time,
  contentCategory,
  description,
  expertName,
  expertCompany,
}) => {
  console.log(expertName);

  return (
    <Box
      width="244px" // Fixed width
      height="272px" // Fixed height
      position="relative"
      overflow="hidden"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
      bg="white"
    >
      {/* Image Section */}
      <Box position="relative" height="50%">
        <Image
          src={cardImage}
          alt={contentCategory}
          boxSize="100%"
          objectFit="cover"
        />
        {/* Percentage Overlay */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          p="2"
          color="white"
          alignItems="center"
          justifyContent="center"
          bgColor="rgba(0, 0, 0, 0.6)"
        >
          <Text fontSize="sm" fontWeight="bold">{`30% completed`}</Text>
        </Flex>
        {/* Time Overlay */}
        <Flex
          position="absolute"
          bottom="0"
          right="0"
          p="2"
          color="white"
          alignItems="center"
          justifyContent="center"
          bgColor="rgba(0, 0, 0, 0.6)"
        >
          <Text fontSize="sm">{parseInt(time)}m</Text>
        </Flex>
      </Box>
      {/* Content Section */}
      <Box
        p="4"
        height="50%" // Takes the bottom half of the card
        display="flex"
        flexDirection="column"
        justifyContent="center"
        bg="white"
      >
        <Text textTransform={"uppercase"} mb="2">
          {contentCategory}
        </Text>
        <Text fontWeight="bold" textTransform={"capitalize"}>
          {description}
        </Text>
        <Box>
          <Text textTransform={"capitalize"}>{expertName}</Text>
          <Text textTransform={"capitalize"}>{expertCompany}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
