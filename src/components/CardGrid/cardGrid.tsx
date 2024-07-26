import React, { Fragment, useState } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import Card from "../Card/card";
import { query } from "../../queries/contentCards";
import { ContentCard } from "../../pages/types";

const CardGrid: React.FC = () => {
  const [contentCards, setContentCards] = useState<null | ContentCard[]>(null);
  const fetchContentCards = async (filter: any) => {
    const response: any = await fetch("https://api.tigerhall.net/v2/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          filter,
        },
      }),
    });
    const res = await response.json();
    setContentCards(res.data?.contentCards?.edges);
  };

  React.useEffect(() => {
    void fetchContentCards({
      limit: 20,
      types: "PODCAST",
    });
  }, []);

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
        {contentCards &&
          contentCards?.map((card: ContentCard, index: number) => {
            const { categories, experts, name, image, length } = card;
            const category = categories[0]?.name.split("category ")[1];
            const expert = experts[0];
            const company =
              expert.company === "" ? "No Company" : expert.company;
            return (
              <Fragment key={card.id}>
                <Card
                  key={index}
                  contentCategory={category}
                  description={name}
                  cardImage={image.uri}
                  time={`${length / 60}`}
                  expertName={expert.firstName + " " + expert.lastName}
                  expertCompany={company}
                />
              </Fragment>
            );
          })}
      </Grid>
    </Box>
  );
};

export default CardGrid;
