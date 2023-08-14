import Video from "./models/video.js";

export const getVideosRepo = async () => {
  try {
    const videos = await Video.find();
    return videos;
  } catch (err) {
    return err;
  }
};

export const getVideosByIdRepo = async (videoID) => {
  try {
    const videos = await Video.find({ videoID: videoID });
    return videos;
  } catch (err) {
    return err;
  }
};

export const getVideosByTitleRepo = async (title) => {
  try {
    const videos = await Video.find({ title: new RegExp(title, "i") });
    return videos;
  } catch (err) {
    return err;
  }
};
