import React from "react";
import { Box, Image, Text, Flex, HStack } from "@chakra-ui/react";
import ContentStatus from "../../assets/ContentStatus";
import Time from "../../assets/Time";
import Share from "../../assets/Share";
import Bookmark from "../../assets/Bookmark";

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
  return (
    <Box
      width="244px"
      height="272px"
      position="relative"
      overflow="hidden"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      borderColor={"black"}
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
        <Box w={"100%"} h={"2px"} bg="gray.400">
          <Box w={"30%"} h={"2px"} bg="main.tigerOrange"></Box>
        </Box>
        <Flex
          position="absolute"
          top="0"
          left="0"
          p="2"
          fontSize={"montrealHeaderXS"}
          color="gray.900"
          alignItems="center"
          justifyContent="center"
          bgColor="orange.50"
          borderTopLeftRadius="lg"
          borderBottomRightRadius="lg"
        >
          <ContentStatus />
          <Text ml={1} fontSize="sm" fontWeight="bold">{`30% Completed`}</Text>
        </Flex>

        {/* Time Overlay */}
        <HStack
          position="absolute"
          bottom={2}
          right={1}
          px="2"
          py={1}
          color="white"
          alignItems="center"
          justifyContent="center"
          bgColor="rgba(0, 0, 0, 0.6)"
          borderRadius={"2xl"}
          spacing={2}
        >
          <Time />
          <Text fontWeight={"bold"} fontSize="montrealHeaderXS">
            {parseInt(time)}m
          </Text>
        </HStack>
      </Box>
      {/* Content Section */}
      <Box p="2" height="40%" display="flex" flexDirection="column" bg="white">
        <Text
          fontSize={"montrealHeaderXS"}
          textTransform={"uppercase"}
          color={"gray.700"}
          fontWeight={"fontWeights.medium"}
        >
          {contentCategory}
        </Text>
        <Text fontWeight="bold" textTransform={"capitalize"}>
          {description}
        </Text>
        <Box>
          <Text
            textTransform={"capitalize"}
            color={"gray.600"}
            fontSize={"montrealHeaderXS"}
          >
            {expertName}
          </Text>
          <Text
            textTransform={"capitalize"}
            color={"gray.700"}
            fontSize={"montrealHeaderXS"}
            fontWeight={"bold"}
          >
            {expertCompany}
          </Text>
        </Box>
      </Box>
      <HStack position="absolute" bottom={3} right={2}>
        <Share />
        <Bookmark />
      </HStack>
    </Box>
  );
};

export default Card;
