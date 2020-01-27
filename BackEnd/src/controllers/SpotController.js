const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { tech } = req.query;

        //Filtrar visualização por tecnologia
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);

    },
    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        //Verificar usuario logado na aplicação
        const { user_id } = req.headers;

        //Verificar se o usuario é existente
        const user = await User.findById(user_id);

        //Se o usuario nao existir retorna uma menssagem de erro
        if(!user){
            return res.status(400).json({ error: "User does not exists" });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //separa os valores de array com metodo split
            //remove os espaços das strings com metodo trim
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });

        return res.json(spot);
    }
};