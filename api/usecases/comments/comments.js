import { addCommentByRepo, getCommentsByVideoIdRepo } from "../../repositories/comments/comments.js"

export const getCommentsByUsecase = async (videoId) => {
    const comments = await getCommentsByVideoIdRepo(videoId);

    if(!comments || comments.length == 0) {
        return null;
    }

    var newComments = [];

    comments.forEach((element, i=0) => {
        newComments[i] = {
            username: element.username,
            comment: element.comment,
            timestamp: element.timestamp
        }
        i++;
    });

    // console.log(newComments)

    return {newComments}
}

export const addCommentByUsecase = async (id, username, comment) => {
    const commentToOutput = await addCommentByRepo(id, username, comment)
    return commentToOutput
}