import Notificacao from './components/Notificacao';

export default function App() {
    const mensagens = ['Nova mensagem', 'Novo comentário'];
    
    return (
        <div>
            <h1>Minhas notificações</h1>
            <Notificacao mensagens={mensagens} />
        </div>
    );
}