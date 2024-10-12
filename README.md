# 🧠 Jogo da Memória com Emojis 🐼🐻🐨



## 📚 Introdução
Este repositório contém o código do Jogo da Memória com Emojis, uma aplicação interativa que desafia a memória dos jogadores. O jogo foi desenvolvido utilizando HTML, CSS e JavaScript.

## 🏗️ Estrutura do Projeto
O projeto é composto por três partes principais:

1. HTML: Estrutura básica da página.

2. CSS: Estilos para a apresentação do jogo.

3. JavaScript: Lógica do jogo, que controla a interação e a verificação de pares.

## 📄 Estrutura HTML

A estrutura HTML básica é composta por um contêiner para o jogo e um script JavaScript que contém toda a lógica.

## 🎭 Estilo CSS

O CSS é utilizado para estilizar os elementos do jogo, como os emojis e as cartas. Algumas classes importantes incluem:

- `.item:` Estilo para cada carta do jogo.
- `.boxOpen:` Estilo para cartas que estão abertas.
- `.boxMatch:` Estilo para cartas que formam um par.

## 🧠 Lógica do Jogo em JavaScript

### 1. Variáveis e Embaralhamento 🔀

O jogo começa com a definição de um array de emojis e a criação de um array para armazenar cartas abertas. 🃏

### 2. Criação das Cartas 🎴

Um loop é utilizado para criar elementos `div` para cada emoji e adicioná-los ao contêiner do jogo. 🎴

### 3. Manipulação de Eventos 👆

A função `handleClick` é responsável por gerenciar a interação do usuário ao clicar nas cartas. Ela verifica se menos de duas cartas estão abertas e, se forem abertas, chama a função `checkMatch` após um atraso. ⏳

### 4. Verificação de Pares 👯‍♂️

A função `checkMatch` é chamada para verificar se as duas cartas abertas são iguais. Se forem, elas recebem uma classe que as destaca; se não forem, a classe que indica que estão abertas é removida. ✅❌

## 🎉 Conclusão
O Jogo da Memória com Emojis é uma aplicação simples e divertida, que utiliza conceitos básicos de programação em JavaScript. A interatividade é proporcionada por eventos de clique, e a lógica do jogo garante que os jogadores possam desfrutar de uma experiência desafiadora.
Este projeto pode ser expandido com novas funcionalidades, como níveis de dificuldade ou temas diferentes de emojis. 🎉✨

## 🕹️ Como Jogar

1. Clone este repositório
2. Abra o arquivo `index.html` no seu navegador
3. Clique nas cartas para revelá-las e encontre os pares correspondentes

## 📜 Licença

Este projeto está licenciado sob a MIT License. 📄✅
