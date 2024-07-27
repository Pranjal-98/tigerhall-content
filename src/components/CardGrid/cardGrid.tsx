import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
  Center,
} from "@chakra-ui/react";
import Card from "../Card/card";
import { ContentCard } from "../../pages/types";
import { debounce } from "lodash";

interface CardGridProps {
  searchQuery: string;
  isFetching: boolean;
  contentCards: ContentCard[];
  setContentCards: (cards: ContentCard[]) => void;
  fetchContentCards: () => void;
}

const CardGrid: React.FC<CardGridProps> = ({
  searchQuery,
  isFetching,
  contentCards,
  setContentCards,
  fetchContentCards,
}) => {
  // Debounced version of fetchContentCards
  const debouncedFetchContentCards = useCallback(
    debounce(() => {
      fetchContentCards();
    }, 500),
    [fetchContentCards]
  );

  // Effect to fetch content cards based on search query
  useEffect(() => {
    setContentCards([]);
    if (searchQuery === "") {
      fetchContentCards();
    } else {
      debouncedFetchContentCards();
    }

    // Cleanup debounce function on component unmount
    return () => {
      debouncedFetchContentCards.cancel();
    };
  }, [searchQuery]);

  // Resize image URL for consistent display
  const resizeImageUrl = (
    url: string,
    width: number,
    height: number
  ): string => {
    const urlObj = new URL(url);
    return `${urlObj.origin}/resize/${width}x${height}${urlObj.pathname}`;
  };

  // Render skeleton cards while data is being fetched
  const renderSkeletonCards = () =>
    Array.from({ length: 10 }).map((_, index) => (
      <GridItem key={index} minW="220px">
        <Skeleton height="200px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </GridItem>
    ));

  // Render content cards or skeletons based on fetching status
  return (
    <Box bg="gray.800" px={16} py={8}>
      <Text
        textAlign={{ base: "center", md: "left" }}
        fontSize="montrealHeader2XL"
        color="gray.100"
        mb={6}
      >
        Tigerhall Library
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(220px, 1fr))" gap={10}>
        {isFetching
          ? renderSkeletonCards()
          : contentCards.map((card: ContentCard) => {
              const { categories, experts, name, image, length } = card;
              const category =
                categories[0]?.name.split("category ")[1] || "Unknown Category";
              const expert = experts[0];
              const company = expert.company || "No Company";
              const resizedImage = resizeImageUrl(image.uri, 244, 120);

              return (
                <Center key={card.id}>
                  <GridItem minW="220px">
                    <Card
                      contentCategory={category}
                      description={name}
                      cardImage={resizedImage}
                      time={`${length / 60} min`}
                      expertName={`${expert.firstName} ${expert.lastName}`}
                      expertCompany={company}
                    />
                  </GridItem>
                </Center>
              );
            })}
      </Grid>
    </Box>
  );
};

export default CardGrid;
