export const query : string = `
    query ContentCards($filter: ContentCardsFilter) {
    contentCards(filter: $filter) {
        edges {
        ... on Podcast {
            id,
            name,
            length,
            image {
                 uri
            },
            categories {
                 name
            },
            experts {
                 firstName,
                 lastName,
                 title,
                 company
            }
        }
        }
    }
    }    
`