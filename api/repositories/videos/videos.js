import Video from "./models/video.js";

export const getVideosRepo = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (err) {
    return err;
  }
};
