const traducoes = {
    pendente: 'Aguardando pagamento',
    enviado: 'Pedido enviado',
    entregue: 'Pedido entregue'
}

export function rotuloDoStatus(status) {
    return traducoes[status] ?? 'Status desconhecido'
}