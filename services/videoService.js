import { YOUTUBE_API_KEY } from "../env.js";

export const findVideo = query => {
  const queryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${query}`;

  return fetch(queryUrl)
    .then(response => response.json())
    .then(responseJson => responseJson.items);
};
