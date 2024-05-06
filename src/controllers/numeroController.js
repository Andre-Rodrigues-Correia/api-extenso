import {convertNumeroParaExtenso} from "../services/numeroService.js";


async function numeroPorExtenso (req, res){

    try {
        const numero = req.body.numero;

        if(!numero){
            return res.status(400).json({
                message: 'número não fornecido no body da requisição'
            });
        }

        const numeroPorExstenso = convertNumeroParaExtenso(numero);

        return res.status(200).json({
            message: numeroPorExstenso
        });

    } catch (error) {
        return res.status(400).json({
            message: 'Erro interno do servidor'
        });
    }
}

export {numeroPorExtenso}