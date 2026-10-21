# 🎬 Luz & Cena

> 🚧 **Projeto em construção!**
>
> O Luz & Cena está sendo desenvolvido durante meus estudos em React e TypeScript, acompanhando o conteúdo de um curso. A aplicação ainda está em desenvolvimento e será aprimorada gradualmente conforme avanço nos estudos e implemento novos conhecimentos.

Uma experiência visual inspirada no universo do cinema, desenvolvida para ilustrar um site com uma interface moderna, intuitiva e responsiva.

## ✨ Funcionalidades

- 🎥 Interface temática inspirada no universo cinematográfico.
- 🎨 Design moderno e visualmente envolvente.
- 📱 Layout responsivo para diferentes tamanhos de tela.
- 🧩 Componentes reutilizáveis com React.
- 🔷 Tipagem estática com TypeScript.
- 🔌 API local com JSON Server para disponibilização dos dados dos filmes.

## 🚀 Tecnologias utilizadas

- **React** — construção de interfaces.
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento.
- **Vite** — ambiente de desenvolvimento e build.
- **JSON Server** — criação de uma API REST local para os dados dos filmes.
- **HTML5** — estruturação da aplicação.
- **CSS3** — estilização e responsividade.
- **ESLint** — análise estática e padronização do código.

## 📂 Estrutura do projeto

```text
luz-e-cena/
├── public/
│   └── arquivos estáticos
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── db.json
├── package.json
└── README.md
```

_A estrutura pode variar conforme a evolução do projeto._

_A estrutura pode variar conforme a evolução do projeto._

## 💻 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm, instalado junto com o Node.js.

### 1. Clone o repositório

```bash
git clone https://github.com/gabriel-pereira0/Projeto_Luz_e_Cena.git
```

### 2. Acesse a pasta do projeto

```bash
cd Projeto_Luz_e_Cena/luz-e-cena
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a API local

Abra um terminal na pasta do projeto e execute:

```bash
npm run server
```

Esse comando inicia o servidor da API local, responsável por disponibilizar os dados dos filmes utilizados pela aplicação.

**Mantenha esse terminal aberto** enquanto estiver utilizando o projeto.

### 5. Inicie a aplicação React

Abra um **segundo terminal**, acesse a pasta do projeto e execute:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação pelo navegador.

**Importante:** para que os dados dos filmes sejam carregados corretamente, tanto a API quanto a aplicação React precisam estar em execução simultaneamente.

## 🎯 Objetivo

Este projeto tem como objetivo praticar e aprimorar conhecimentos em desenvolvimento front-end, explorando React, TypeScript, componentização, estilização, construção de interfaces responsivas e consumo de uma API local.
