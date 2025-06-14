# Teste Técnico - Recomendador de Produtos RD Station

> Este projeto é parte do teste técnico para a vaga de desenvolvedor front-end na RD Station. O objetivo principal é implementar a lógica de recomendação de produtos RD Station em uma aplicação web existente.

## Modificações de Redesign

Durante o desenvolvimento, foram realizadas diversas melhorias visuais e de experiência do usuário na aplicação, incluindo:

- **Novo layout para o formulário:** O formulário de seleção de preferências, funcionalidades e tipo de recomendação foi redesenhado para maior clareza, responsividade e facilidade de uso.
- **Componentização visual:** Criação e padronização de componentes reutilizáveis como `Button`, `ProductCard`, `RecommendationList` e `Onboarding`, garantindo consistência visual em toda a aplicação.
- **Feedback visual:** Inclusão de transições suaves, estados de hover, disabled e feedback visual em botões e links para melhor experiência do usuário.
- **Onboarding animado:** Implementação de um fluxo de onboarding com animações para guiar o usuário no primeiro acesso.
- **Cards de produto aprimorados:** Os cards de recomendação exibem informações de forma mais clara, com destaque para preferências, funcionalidades e categoria do produto.
- **Responsividade:** Garantia de que todos os componentes funcionam bem em diferentes tamanhos de tela.
- **Navegação com React Router:** Implementação de rotas para exibir detalhes de cada produto recomendado, permitindo ao usuário acessar uma página dedicada com informações completas do produto.

## Onboarding (Tour Inicial)

- O onboarding é um fluxo de passos que apresenta a aplicação ao usuário na primeira visita.
- O controle de exibição do onboarding é feito via `localStorage`, garantindo que o tour só apareça uma vez por usuário/dispositivo.
- O usuário pode avançar e voltar entre os passos, e ao finalizar o onboarding, ele não será mais exibido nas próximas visitas.
- O onboarding utiliza animações para uma experiência mais fluida e amigável.

Essas melhorias visuais e de UX tornam a aplicação mais agradável, intuitiva e alinhada com padrões modernos de design.

## Implementação Realizada

### Sistema de Recomendação

- Implementação do algoritmo de pontuação para matching de produtos
- Suporte para recomendações do tipo SingleProduct e MultipleProducts
- Sistema de validação para entradas vazias e tipos de recomendação inválidas
- Ordenação por pontuação e index

### Componentes

- Implementação do fluxo de submissão do formulário
- Integração do sistema de atualização de recomendações
- Melhoria no gerenciamento de estado com hooks customizados

### Testes

- Cobertura de testes completas para todos os componentes
- Testes unitários para o serviço de recomendação
- Testes de integração para submit do formulário
- Cobertura de testes para casos de borda e cenários de erro

## Missão

Sua missão é desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js pré-existente. Você deverá implementar a lógica que permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.

## Contexto

Este projeto é parte de uma etapa técnica do processo seletivo para a vaga de desenvolvedor front-end na RD Station. A estrutura básica da aplicação já está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

Seu foco deve ser na implementação da lógica de recomendação e na integração desta funcionalidade com a interface do usuário existente. A aplicação já possui um layout básico utilizando Tailwind CSS.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Familiaridade com Tailwind CSS

O layout da aplicação foi desenvolvido utilizando Tailwind CSS. Familiaridade básica com este framework de CSS utilitário será útil para entender e potencialmente modificar o layout existente.

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.

## Foco do Desenvolvimento

Para completar este teste, você deve concentrar-se principalmente em três arquivos específicos:

1. `App.js`: Neste componente, você encontrará o comentário "Dadas atualizações no formulário, necessário atualizar a lista de recomendações". Implemente a lógica necessária para atualizar a lista de recomendações com base nas entradas do usuário.

2. `Form.js`: Este componente contém o comentário "Defina aqui a lógica para atualizar as recomendações e passar para a lista de recomendações". Desenvolva a lógica para processar as entradas do usuário e gerar as recomendações apropriadas.

3. `recommendation.service.js`: Neste arquivo de serviço, você verá o comentário "Crie aqui a lógica para retornar os produtos recomendados." Implemente a lógica de negócios para determinar quais produtos devem ser recomendados com base nos critérios fornecidos.

## Observações Adicionais

- Sinta-se à vontade para implementar melhorias na cobertura de testes e no layout da aplicação, caso tenha tempo adicional.
- O código existente serve como base para sua implementação. Concentre-se em desenvolver a funcionalidade de recomendação de produtos conforme especificado nos requisitos do projeto e nos arquivos mencionados acima.

## Requisitos

- Implementar a lógica de recomendação de produtos com base nas preferências do usuário.
- Utilizar React.js para o desenvolvimento do front-end.
- Consumir a API fornecida pelo json-server para obter os dados dos produtos.
- Seguir as boas práticas de desenvolvimento e organização de código.
- Implementar testes unitários para as funcionalidades desenvolvidas.

## Como Executar

1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh`
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Critérios de Aceite

1. O serviço de recomendação de produtos deve ser capaz de receber as preferências e funcionalidades desejadas do usuário através de um formulário.
2. O serviço deve retornar recomendações de produtos com base nas preferências e funcionalidades selecionadas pelo usuário.
3. Se o tipo de recomendação selecionado for "SingleProduct", o serviço deve retornar apenas um produto que corresponda melhor às preferências e funcionalidades do usuário.
4. Se o tipo de recomendação selecionado for "MultipleProducts", o serviço deve retornar uma lista de produtos que correspondam às preferências e funcionalidades do usuário.
5. Em caso de empate na seleção de produtos com base nas preferências e funcionalidades do usuário, o serviço deve retornar o último produto que atende aos critérios de seleção.
6. O serviço deve ser capaz de lidar com diferentes tipos de preferências e funcionalidades selecionadas pelo usuário.
7. O serviço deve ser modular e facilmente extensível para futuras atualizações e adições de funcionalidades.

Certifique-se de que todos os critérios de aceite são atendidos durante o desenvolvimento do projeto.

## Autor

Desenvolvido por [Seu Nome]

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
