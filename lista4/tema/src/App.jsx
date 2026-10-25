import { useState } from 'react';
import BotoesDeTema from './components/botoesDeTema';
import Previa from './components/Previa';

export default function App() {
    const [tema, setTema] = useState('claro');

    return (
        <div>
          <h1>Seletor de tema</h1>
            <BotoesDeTema tema={tema} alterarTema={setTema} />
            <Previa tema={tema} />
        </div>
    );
}