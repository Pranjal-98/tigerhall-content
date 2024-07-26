import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Card from "../Card/card";
import { ContentCard } from "../../pages/types";
import { debounce } from "lodash";

interface CardGridProps {
  searchQuery: string;
  isFetching: boolean;
  contentCards: ContentCard[];
  setContentCards: Function;
  fetchContentCards: Function;
}

const CardGrid = ({
  searchQuery,
  isFetching,
  contentCards,
  setContentCards,
  fetchContentCards,
}: CardGridProps): JSX.Element => {
  const debouncedFetchContentCards = useCallback(
    debounce(() => {
      fetchContentCards();
    }, 500),
    [fetchContentCards]
  );

  useEffect(() => {
    setContentCards([]);
    if (searchQuery === "") {
      fetchContentCards();
    } else {
      debouncedFetchContentCards();
    }
    return () => {
      debouncedFetchContentCards.cancel();
    };
  }, [searchQuery]);

  const resizeImageUrl = (
    url: string,
    width: number,
    height: number
  ): string => {
    const urlObj = new URL(url);
    return `${urlObj.origin}/resize/${width}x${height}${urlObj.pathname}`;
  };

  const renderSkeletonCards = () => {
    return Array.from({ length: 10 }).map((_, index) => (
      <GridItem key={index} minW="220px">
        <Skeleton height="200px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </GridItem>
    ));
  };

  return (
    <Box bg="gray.800" px={16} py={8}>
      <Text fontSize="montrealHeader2XL" color="gray.100" mb={6}>
        Tigerhall Library
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(auto-fill, minmax(220px, 1fr))",
          sm: "repeat(auto-fill, minmax(220px, 1fr))",
          md: "repeat(auto-fill, minmax(220px, 1fr))",
          lg: "repeat(auto-fill, minmax(220px, 1fr))",
        }}
        gap={10}
      >
        {isFetching
          ? renderSkeletonCards()
          : contentCards.map((card: ContentCard, index: number) => {
              const { categories, experts, name, image, length } = card;
              const category = categories[0]?.name.split("category ")[1];
              const expert = experts[0];
              const company =
                expert.company === "" ? "No Company" : expert.company;
              const resizedImage = resizeImageUrl(image.uri, 244, 120);
              if (index === contentCards.length - 1) {
                return (
                  <GridItem key={card.id} minW="220px">
                    <Card
                      contentCategory={category}
                      description={name}
                      cardImage={resizedImage}
                      time={`${length / 60}`}
                      expertName={expert.firstName + " " + expert.lastName}
                      expertCompany={company}
                    />
                  </GridItem>
                );
              } else {
                return (
                  <GridItem key={card.id} minW="220px">
                    <Card
                      contentCategory={category}
                      description={name}
                      cardImage={resizedImage}
                      time={`${length / 60}`}
                      expertName={expert.firstName + " " + expert.lastName}
                      expertCompany={company}
                    />
                  </GridItem>
                );
              }
            })}
      </Grid>
    </Box>
  );
};

export default CardGrid;
