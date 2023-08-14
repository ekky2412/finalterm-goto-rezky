import {
  getVideosUsecase,
  getVideosByIdUsecase,
  getVideoByTitleUsecase,
} from "../../usecases/videos/videos.js";

export const getVideoThumbnail = async (req, res) => {
  const videos = await getVideosUsecase();

  if (!videos) {
    return res.status(404).json({
      message: "Data not found!",
    });
  }

  res.json(videos);
};

export const getVideoById = async (req, res) => {
  const { id } = req.params;
  const videos = await getVideosByIdUsecase(id);

  if (!videos) {
    return res.status(404).json({
      message: "Video not found!",
    });
  }

  res.json(videos);
};

export const getSearchVideo = async (req, res) => {
  const { title } = req.params;
  console.log(title);
  const videos = await getVideoByTitleUsecase(title);

  if (!videos) {
    return res.status(404).json({
      message: "Video not found!",
    });
  }

  res.json(videos);
};
