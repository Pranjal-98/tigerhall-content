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
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  // Function to fetch content cards based on search query
  const fetchContentCards = async () => {
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
              limit: 20,
              types: "PODCAST",
              keywords: searchQuery,
            },
          },
        }),
      });

      // Parse the JSON response
      const res = await response.json();

      // Extract content cards from the response
      const cards = res.data?.contentCards?.edges || [];

      // Update state with fetched content cards
      setContentCards(cards);
    } catch (error) {
      console.error("Error fetching content cards:", error);
    } finally {
      // Set fetching status to false after request completes
      setIsFetching(false);
    }
  };

  return (
    <div>
      {/* Render NavBar component with search query and updater */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Render CardGrid component with content cards and fetching status */}
      <CardGrid
        searchQuery={searchQuery}
        isFetching={isFetching}
        contentCards={contentCards}
        setContentCards={setContentCards}
        fetchContentCards={fetchContentCards}
      />
    </div>
  );
};

export default Dashboard;
