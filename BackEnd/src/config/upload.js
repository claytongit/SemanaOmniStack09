const multer = require('multer');
const path = require('path');

module.exports = {
    //Como o multer vai armazenar os arquivos que ele receber da aplicação
    storage: multer.diskStorage({
        //Qual pasta o arquivo vai ser salvo
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //caminho da pasta uploads
        
        //Salvar nome e formato original do arquivo com a data do envio
        filename: (req, file, cb)=>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
    
};