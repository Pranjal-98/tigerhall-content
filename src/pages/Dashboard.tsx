import React, { useState } from "react";
import NavBar from "../components/NavBar/navBar";
import CardGrid from "../components/CardGrid/cardGrid";
import { ContentCard } from "./types";
import { query } from "../queries/contentCards";

const Dashboard: React.FC = (): JSX.Element => {
  // State for search query input
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State for fetching status
  const [isFetching, setIsFetching] = useState<boolean>(false);

  // State for storing content cards
  const [contentCards, setContentCards] = useState<any>(new Set<any>());

  // State for offset
  const [offset, setOffset] = useState<number>(0);

  // State to track if more content is available
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Function to fetch content cards based on search query
  const fetchContentCards = async (reset: boolean = false) => {
    try {
      // Set fetching status to true
      setIsFetching(true);

      // Perform the fetch request
      const response = await fetch("https://api.tigerhall.net/v2/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            filter: {
              limit: 10,
              types: "PODCAST",
              keywords: searchQuery,
              offset: reset ? 0 : offset,
            },
          },
        }),
      });

      // Parse the JSON response
      const res = await response.json();

      // Extract content cards from the response
      const cards = res.data?.contentCards?.edges || [];

      // Update state with fetched content cards
      setContentCards((prevCards: any) => {
        // Combine previous cards and new cards
        const combinedCards = reset ? cards : [...prevCards, ...cards];

        const uniqueCards = Array.from(
          new Set(combinedCards.map((card: any) => JSON.stringify(card)))
        ).map((card: any) => JSON.parse(card));

        return uniqueCards;
      });
      setOffset((prevOffset) => (reset ? 10 : prevOffset + 10));

      setHasMore(cards.length > 0);
    } catch (error) {
      console.error("Error fetching content cards:", error);
    } finally {
      // Set fetching status to false after request completes
      setIsFetching(false);
    }
  };

  return (
    <div>
      {/* NavBar component with search query and updater */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* CardGrid component with content cards and fetching status */}
      <CardGrid
        searchQuery={searchQuery}
        isFetching={isFetching}
        contentCards={contentCards}
        fetchContentCards={fetchContentCards}
        hasMore={hasMore}
      />
    </div>
  );
};

export default Dashboard;
