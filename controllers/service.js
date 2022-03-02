const Joi = require("joi")

module.exports.signup = async(req,res) => {
    try{
        let input_data = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password
        }

        const schema = Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: [Joi.string(), Joi.number()],
            password: Joi.string().min(8)
        }).with('username', 'birthyear').without('password', 'access_token');

        return res.status(200).json(
            {
                error : false,
                message : "Record added successfully"
            }
        )

    }
    catch(err){
        return res.status(500).json(
            {
                error : true,
                message : err.message
            }
        )
    }
}