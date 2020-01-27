const User = require('../models/User');

module.exports = {
    //cria Email de usuario
    async store(req, res){

        const { email } = req.body;
        let user = await User.findOne({ email });

        //Verifica se o email de usuario ja existe senao existir ele cria um email de usuario
        if(!user){
            user = await User.create(req.body);
        }

        return res.json(user);
    },
};
