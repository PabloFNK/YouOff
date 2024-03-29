import config from "../config.json";

export const findVideo = query => {
  const queryUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${config.YOUTUBE_API_KEY}&q=${query}`;

  return fetch(queryUrl)
    .then(response => response.json())
    .then(responseJson => responseJson.items);
};

export const downloadYoutubeVideo = url => {
  console.log("Download youtube video " + url);
};

export const getYoutubeUrlFromId = videoId =>
  `https://www.youtube.com/watch?v=${videoId}`;
