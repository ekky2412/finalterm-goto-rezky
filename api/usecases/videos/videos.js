import {
  getVideosRepo,
  getVideosByIdRepo,
} from "../../repositories/videos/videos.js";

export const getVideosUsecase = async () => {
  const videos = await getVideosRepo();

  if (!videos || videos.length == 0) {
    return null;
  }

  let newVideos = [];

  videos.forEach((p, i = 0) => {
    newVideos[i] = {
      videoID: p.videoID,
      title: p.title,
      urlThumbnail: p.urlThumbnail,
      urlVideo: p.urlVideo,
    };
    i++;
  });

  return newVideos;
};

export const getVideosByIdUsecase = async (videoID) => {
  const videos = await getVideosByIdRepo(videoID);

  if (!videos || videos.length == 0) {
    return null;
  }

  const newVideos = {
    videoID: videos[0].videoID,
    title: videos[0].title,
    urlThumbnail: videos[0].urlThumbnail,
    urlVideo: videos[0].urlVideo,
  };

  return newVideos;
};

// ADD GET SPECIFIC VIDEO
