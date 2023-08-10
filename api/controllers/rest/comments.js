import { addCommentByUsecase, getCommentsByUsecase } from "../../usecases/comments/comments.js";

export const getComments = async (req,res) => {
    const {id} = req.params;
    const comments = await getCommentsByUsecase(id);

    if(!comments){
        return res.status(404).json({
            message: "Comments not exists!",
        });
    }

    let newComments = [];

    comments.newComments.forEach((p, i=0) => {
        newComments[i] = p;
        i++;
    })

    res.json(newComments)
}

export const addComment = async (req,res) => {
    const {id} = req.params
    const {username, comment} = req.body;

    try{
        const commentToOutput = await addCommentByUsecase(id, username, comment);
        res.status(200).json({
            message: `Comment from ${commentToOutput.username} successfully added`
        });
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
    
}