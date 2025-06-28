import Users from "../../../db/model/user.model.js"






const signup =(req,res, next) => {
    return res.json({ message: "signup" , Users})
}

const confirmEmail =(req,res, next) => {
return res.json({message: "confirmEmail"})
}



export {signup, confirmEmail}