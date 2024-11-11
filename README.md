# 🗂️ Second Challenge CompassPB - Product manager.

Este é o segundo desafio do programa de bolsas da Compass, no qual o objetivo é desenvolver uma aplicação chamada Product Manager. O projeto consiste na criação de um site para gerenciamento de produtos
## 🚀Tecnologias Utilizadas
Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

### 🌐Front-End
* **HTML:** Estruturação das páginas e conteúdo da aplicação.
* **CSS**: Estilização das páginas para definir layout e aparência.
* **React:** Biblioteca JavaScript para construção de interfaces de usuário, facilitando o desenvolvimento de componentes reutilizáveis.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática para maior segurança e robustez no código.
* **Tailwind CSS:** Framework CSS que permite estilização rápida e responsiva utilizando classes utilitárias.
### 🛠️ Bibliotecas e Ferramentas
- **@clerk/clerk-react:** Biblioteca para integração com o Clerk (autenticação e gerenciamento de usuários) no React.
- **axios:** Cliente HTTP para fazer requisições API.
- **bcryptjs:** Biblioteca para encriptação de senhas (utilizada para hashing).
- **react:** Biblioteca principal para criação de interfaces de usuário.
- **react-dom:** Biblioteca para integração do React com o DOM.
- **react-hot-toast:** Biblioteca para mostrar notificações de toast (mensagens pequenas no topo da tela).
- **react-icons:** Biblioteca para adicionar ícones em componentes React.
- **react-router-dom:** Biblioteca para gerenciamento de rotas no React (navegação entre páginas).funcionalidades como login e cadastro.
### 🗄️ Back-End Simulado
* **JSON Server:** Simulador de API REST que permite testar o backend da aplicação utilizando um arquivo JSON para armazenar dados temporariamente.



## ⚙️Funcionalidades
- **Botão Login**: Redireciona o usuário para a página de **login**.
- **Botão Get Started**: Redireciona o usuário para a página de **cadastro**.
- **Logo**: Ao clicar, redireciona o usuário para a **home**.
- **Facebook**: Botão que redireciona para a página oficial do **Facebook**.
- **Instagram**: Botão que redireciona para a página oficial do **Instagram**.
- **LinkedIn**: Botão que redireciona para a página oficial do **LinkedIn**.
- **Sign Up**: Link que redireciona o usuário para a página de **cadastro**.
- **Login com Facebook**: Permite que o usuário faça login utilizando a autenticação via **Facebook** com **Clerk**.
- **Login com Google**: Permite que o usuário faça login utilizando a autenticação via **Google** com **Clerk**.
- **Sign Up**: Link que redireciona o usuário para a página de **cadastro**.
- **Login com Facebook**: Permite que o usuário faça login utilizando a autenticação via **Facebook** com **Clerk**.
- **Login com Google**: Permite que o usuário faça login utilizando a autenticação via **Google** com **Clerk**.
- O projeto inclui **spinners de carregamento** para fornecer feedback visual enquanto o conteúdo está sendo carregado.
- Botões de Fixar e Desafixar**: Disponível em um card que contém um pequeno relatório do usuário.
- Zoom no Kanban**: Permite **aumento de zoom** para facilitar a visualização do quadro de tarefas.




## 📂 Estrutura do projeto

```plaintext
secondchallenge-compasspb/
├── dbUser/            # Arquivo db.json
├── node_modules/      # Dependências
├── public/           # logo
├── src/              # Código fonte da aplicação
│   ├── assets/       # Imagens e outros arquivos de mídia
│   ├── components/   # Componentes reutilizáveis (botões, cards, etc.)
│   ├── data/ 
│   ├── pages/        # Páginas da aplicação (Home, Login, Cadastro, etc.)
│   ├── App.tsx       # Componente principal que renderiza as páginas
│   ├── index.css     # Arquivo principal  de css
|   ├── main.tsx
|   |──vite-env.d.ts
├── tailwind.config.js 
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package-json
├── postcss.congig.js
├── README.md
├── tsconfig.app.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
```
## 🛠️ Instalação

1. **Clone o repositório:**

No terminal, execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/Enne-Amore/secondChallenge-compassPB.git
```
2. **Entre no diretório do projeto:**

Navegue até o diretório do projeto clonado:

```bash
cd secondChallenge-compassPB
```


3. **Instale as dependências:**

Para instalar as dependências do projeto, execute:

```bash
npm install
```
4. **Inicie o servidor de desenvolvimento:**

Para iniciar o servidor de desenvolvimento, execute:
```bash
npm run start
```
O projeto estará disponível em http://localhost:4000.

Como Usar
Abra o seu navegador e acesse http://localhost:4000 para visualizar o projeto em execução.

Na aplicação, você pode:

Realizar login e cadastro utilizando as opções integradas (Facebook, Google ou manualmente).
Gerenciar produtos na página de administração.
Explorar a navegação através do menu, que inclui links para páginas como Perfil e Configurações.

## 🎨 Cores Utilizadas

Aqui estão as cores utilizadas no projeto, com os valores correspondentes e a visualização delas:

| Nome da Cor     | Código Hexadecimal | Visualização               |
|-----------------|--------------------|----------------------------|
| Black-55        | #000000 | ![#000000](https://via.placeholder.com/15/000000/000000?text=+) |
| Blue-55         | #92BBFF            | ![#92BBFF](https://via.placeholder.com/15/92BBFF/92BBFF?text=+) |
| Brown-70        | #23081C | ![#23081C](https://via.placeholder.com/15/23081C/23081C?text=+) |
| Blue-750        | #1E293B            | ![#1E293B](https://via.placeholder.com/15/1E293B/1E293B?text=+) |
| Yellow-150      | #FCF4B6            | ![#FCF4B6](https://via.placeholder.com/15/FCF4B6/FCF4B6?text=+) |
| Blue-850        | #160A60            | ![#160A60](https://via.placeholder.com/15/160A60/160A60?text=+) |
| Purple-450      | #5C5A79            | ![#5C5A79](https://via.placeholder.com/15/5C5A79/5C5A79?text=+) |
| Black-51        | #332034    | ![#332034](https://via.placeholder.com/15/332034/332034?text=+) |
| Blue-46         | #4F46E5            | ![#4F46E5](https://via.placeholder.com/15/4F46E5/4F46E5?text=+) |
| Green-22        | #22C55E            | ![#22C55E](https://via.placeholder.com/15/22C55E/22C55E?text=+) |
| Blue-74         | #3B5174            | ![#3B5174](https://via.placeholder.com/15/3B5174/3B5174?text=+) |
| Blue-26         | #268FE4            | ![#268FE4](https://via.placeholder.com/15/268FE4/268FE4?text=+) |
| Purple-750      | #23081C            | ![#23081C](https://via.placeholder.com/15/23081C/23081C?text=+) |
| Blue-Check      | #5570F1            | ![#5570F1](https://via.placeholder.com/15/5570F1/5570F1?text=+) |
| Social-Color    | #5E6366            | ![#5E6366](https://via.placeholder.com/15/5E6366/5E6366?text=+) |
| Btn-Blue        | #1E293B            | ![#1E293B](https://via.placeholder.com/15/1E293B/1E293B?text=+) |
| White2          | #F6F6F6E5          | ![#F6F6F6E5](https://via.placeholder.com/15/F6F6F6/F6F6F6?text=+) |
| White3          | #FFFCFC            | ![#FFFCFC](https://via.placeholder.com/15/FFFCFC/FFFCFC?text=+) |

## 🅵🅾️ntes Utilizadas

Aqui estão as fontes utilizadas no projeto:

- **Roboto**  
  Exemplo de uso:  
  `font-family: 'Roboto', sans-serif;`

- **Plus Jakarta Sans**  
  Exemplo de uso:   
  `font-family: 'Plus Jakarta Sans', sans-serif;`

- **Inter**  
  Exemplo de uso:   
  `font-family: 'Inter', sans-serif;`

## 👥 Colaboradores do projeto

| Nome                | GitHub                                      |
|---------------------|---------------------------------------------|
| Orlean Sousa  | https://github.com/OrleanSousa    |
| Enne   | https://github.com/Enne-Amore    |
| Erica Farias | https://github.com/ericafarias    |
| Antonio Santiago  | https://github.com/lSantiagojr   |
| Gabriel Costa  | https://github.com/gabrielcostadejesus54  |
| Bianca  | https://github.com/BiaPio |

