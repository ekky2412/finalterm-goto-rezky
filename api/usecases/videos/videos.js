import { getVideosRepo } from "../../repositories/videos/videos.js";

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
