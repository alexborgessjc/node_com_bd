//Importando a biblioteca
import express, {Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

//Configuração da Aplicação
//Instancia da aplicação
const app = express();

//Adicionando a função de converter o json para o nosso body!
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configuração de Rotas
//importando a rota para execução
app.use(statusRoute);
app.use(usersRoute);

//Criando uma rota simples - Requisição do tipo GET
//Callback simples
//app.get('/status', (req: Request, res: Response, next: NextFunction) =>{
    //Retorna um json
    //res.status(200).send({foo:'Sucesso'})
//});

//Acessando a porta do PC - 3000
app.listen(3000, () => {console.log('Aplicação executando na porta 3000!')});
