export default function Notificacao({ mensagens}) {
    if (!mensagens || mensagens.length === 0) {
        return <p>Nenhuma notificação nova</p>
    }
    return (
        <p>{mensagens.length === 1 
            ? '1 notificação nova' 
            : `${mensagens.length} notificações novas`}
        </p>
    )
}