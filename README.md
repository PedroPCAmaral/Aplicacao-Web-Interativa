# Aplicação-Web-Interativa
Painel de Cadastro e Consulta de Usuários (Versão Cards)


PROJETO  – Aplicação Web Interativa: “Painel de Cadastro e Consulta de Usuários” (Versão Cards)

Objetivo Geral
Desenvolver uma aplicação web completa que permita cadastrar, visualizar, filtrar
e remover usuários por meio de cards dinâmicos, aplicando todos os conceitos de
HTML, CSS e JavaScript puro vistos durante o curso.

Objetivos de Aprendizagem
Ao final do projeto, o aluno deverá ser capaz de:
1. Estruturar páginas HTML semânticas e organizadas.
2. Criar interfaces modernas e responsivas com CSS.
3. Manipular o DOM com JavaScript para criar, remover e filtrar elementos.
4. Utilizar eventos e formulários de forma funcional.
5. Aplicar validações, loops, arrays e objetos para gerenciar dados.
6. Adotar boas práticas de código, modularização e reutilização de funções.

Contexto do Projeto

Vocês foram contratados por uma startup para criar um protótipo de Painel de Usuá-
rios.

Esse painel será usado pelo time de Recursos Humanos para cadastrar e visualizar
informações básicas de colaboradores da empresa.
A aplicação deverá permitir:
• Cadastrar novos usuários (Nome, E-mail, Idade, Cargo).
• Validar campos obrigatórios (nenhum campo pode estar vazio).
• Exibir os usuários em formato de cards dinâmicos.
• Filtrar usuários pelo nome digitado.
• Remover um card com duplo clique.

Requisitos Técnicos
Estrutura de Pastas
projeto-final/ 📁
|
├── index.html
├── css/ 📁
| └── estilo.css
└─── js/ 📁
├── main.js
├── form.js
└── cards.js

index.html
Elementos obrigatórios:
• Cabeçalho com o título do projeto.
• Formulário com os campos:
o Nome completo
o E-mail
o Idade
o Cargo
o Botão “Cadastrar Usuário”
• Campo de busca (input de texto).

• Área principal (<section id="lista-usuarios">) onde os cards serão exibidos di-
namicamente.

• Rodapé com os créditos do grupo.
estilo.css
Diretrizes visuais:
• Layout moderno e limpo.
• Cards com bordas arredondadas, sombras suaves e cores neutras.
• Destaque no botão “Cadastrar”.
• Ao passar o mouse sobre um card, ele deve ganhar um leve destaque (ex.:
transform: scale(1.03);).
• Espaço agradável entre os cards (grid ou flex).
• Boa legibilidade e harmonia nas cores.

JavaScript
main.js
• Arquivo principal que organiza a execução do projeto e chama os módulos
form.js e cards.js.
form.js
Responsável por:
1. Capturar os dados do formulário.
2. Validar se os campos não estão vazios.
3. Criar um objeto usuário com as informações digitadas.
4. Enviar esse objeto para uma função responsável por exibir o card.

5. Limpar os campos após o envio.
cards.js
Responsável por:
1. Manter um array de usuários cadastrados.
2. Criar dinamicamente os elementos HTML (div, h3, p, button) para cada usuário.
3. Exibir os cards na área principal.
4. Implementar remoção de cards com duplo clique (dblclick).
5. Implementar o filtro de busca: conforme o texto digitado, os cards que não
correspondem são ocultados.

Cronograma de Desenvolvimento
Parte 1
1. Estruturação de pastas e criação dos arquivos.
2. Desenvolvimento do HTML e CSS base.
3. Implementação do formulário de cadastro.
4. Captura e validação de dados com JS.
5. Exibição dos primeiros cards na tela.
Parte 2
1. Implementação da filtragem dinâmica.
2. Função de remoção de cards (duplo clique).
3. Testes, refinamento visual e finalização.
4. Entrega.


