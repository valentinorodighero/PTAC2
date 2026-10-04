# Painel de Ideias

## O que é o projeto

O Painel de Ideias é uma aplicação web desenvolvida em React que permite ao usuário adicionar, visualizar, concluir e remover ideias.

O projeto possui um contador que mostra a quantidade total de ideias e quantas já foram concluídas. Também existe uma validação para impedir o cadastro de ideias vazias.

## Como rodar

Primeiro, instale as dependências do projeto:

npm install

Depois, inicie o servidor de desenvolvimento:

npm run dev

# Decisões do projeto
- Foi utilizado React com Vite e JavaScript.
- As ideias são armazenadas em um único estado.
- O campo de texto é controlado pelo React.
- A adição de ideias é feita por meio de um formulário.
- É utilizado .trim() para impedir o cadastro de ideias vazias.
- Cada ideia recebe um identificador utilizando Date.now().
- A conclusão das ideias é feita utilizando .map(), sem alterar diretamente o estado.
- A remoção das ideias é feita utilizando .filter().
- A quantidade de ideias concluídas é calculada diretamente a partir da lista, sem criar um segundo estado para o contador.
- Foi utilizado CSS puro para a estilização, sem bibliotecas externas.
- Não foi utilizada persistência de dados, como localStorage.
