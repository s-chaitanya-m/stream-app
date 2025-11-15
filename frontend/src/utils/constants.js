export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API = `/api/mostPopular`;

export const YOUTUBE_SEARCH_RESULTS_API = `/api/search?q=`;

export const YOUTUBE_SEARCH_API = `/api/searchSuggestions?q=`;

export const commentData = [
  {
    id: Math.random(),
    name: "Chaitanya Shinde",
    text: "Hi, How are you!",
    replies: [
      {
        id: Math.random(),
        name: "Aryan Shinde",
        text: "I am fine",
        replies: [
          {
            id: Math.random(),
            name: "Chaitu",
            text: "Bleh Bleh Bleh",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: Math.random(),
    name: "Chaitanya Shinde",
    text: "Hi, How are you!",
    replies: [],
  },
];
