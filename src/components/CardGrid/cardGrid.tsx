import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import Card from "../Card/card";

const CardGrid: React.FC = () => {
  // Dummy data for cards
  const cards = [
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 2",
      description: "Description 2",
      cardImage: "/path/to/image2.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
    {
      title: "Card 1",
      description: "Description 1",
      cardImage: "/path/to/image1.jpg",
      donePercentage: 30,
      time: "20mins",
    },
  ];

  return (
    <Box bg="gray.900" px={10} py={8}>
      <Text fontSize="montrealHeader2XL" color="gray.100" mb={6}>
        Tigerhall Library
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap={6} // Sets the gap between grid items
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            cardImage={card.cardImage}
            donePercentage={card.donePercentage}
            time={card.time}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CardGrid;
