export default function BotoesDeTema(tema, alterarTema) {
    return (
        <div>
            <button onClick={() => alterarTema('claro')}>Tema Claro</button>
            <button onClick={() => alterarTema('escuro')}>Tema Escuro</button>
        </div>
    );
}