import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface CardProps {
  donePercentage: number;
  cardImage: string;
  time: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  donePercentage,
  cardImage,
  time,
  title,
  description,
}) => {
  return (
    <Box
      width="244px" // Fixed width
      height="272px" // Fixed height
      position="relative"
      overflow="hidden"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
    >
      {/* Image Section */}
      <Box position="relative" height="50%">
        <Image src={cardImage} alt={title} boxSize="100%" objectFit="cover" />
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
          <Text
            fontSize="sm"
            fontWeight="bold"
          >{`${donePercentage}% completed`}</Text>
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
          <Text fontSize="sm">{time}</Text>
        </Flex>
      </Box>
      {/* Content Section */}
      <Box
        p="4"
        height="50%" // Takes the bottom half of the card
        display="flex"
        flexDirection="column"
        justifyContent="center"
        bg="gray.800" // Optional background color for better readability
      >
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
      </Box>
    </Box>
  );
};

export default Card;
