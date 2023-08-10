import { getVideosUsecase } from "../../usecases/videos/videos.js";

export const getVideoThumbnail = async (req, res) => {
  const videos = await getVideosUsecase();

  if (!videos) {
    return res.status(404).json({
      message: "Data not found!",
    });
  }

  res.json(videos);
};
