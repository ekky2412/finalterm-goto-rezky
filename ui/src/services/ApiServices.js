export async function getAllVideos() {
  const response = await fetch("http://localhost:5000/api/v1/videos/thumbnail");
  return await response.json();
}

export async function getVideo(videoId) {
  const response = await fetch(
    `http://localhost:5000/api/v1/videos/${videoId}`
  );
  return await response.json();
}

export async function postComment(data) {
  const response = await fetch("http://localhost:5000/api/v1/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comments: data }),
  });
  return await response.json();
}

export async function getComments(videoId) {
  const response = await fetch(
    `http://localhost:5000/api/v1/comments/${videoId}`
  );
  return await response.json();
}

export async function getProducts(videoId) {
  const response = await fetch(
    `http://localhost:5000/api/v1/products/${videoId}`
  );
  return await response.json();
}
