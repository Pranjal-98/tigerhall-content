import React, { useState } from "react";
import NavBar from "../components/NavBar/navBar";
import CardGrid from "../components/CardGrid/cardGrid";
import { ContentCard } from "./types";
import { query } from "../queries/contentCards";

const Dashboard: React.FC = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  const fetchContentCards = async () => {
    setIsFetching(true);
    const response = await fetch("https://api.tigerhall.net/v2/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
        variables: {
          filter: {
            limit: 20,
            types: "PODCAST",
            keywords: searchQuery,
          },
        },
      }),
    });
    const res = await response.json();
    const cards = res.data?.contentCards?.edges || [];
    setContentCards(cards);
    setIsFetching(false);
  };

  return (
    <div>
      <NavBar {...{ searchQuery, setSearchQuery }} />
      <CardGrid
        {...{
          searchQuery,
          isFetching,
          contentCards,
          setContentCards,
          fetchContentCards,
        }}
      />
    </div>
  );
};

export default Dashboard;
