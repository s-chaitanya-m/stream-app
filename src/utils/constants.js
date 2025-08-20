const api_key = import.meta.env.VITE_GOOGLE_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  api_key;

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&regionCode=IN&key=" +
  api_key;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

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
