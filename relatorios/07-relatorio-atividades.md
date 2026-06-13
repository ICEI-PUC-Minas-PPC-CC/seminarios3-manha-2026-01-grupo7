# 07 — Base para o Relatório de Atividades (APC)

> **Objetivo:** Este documento serve como rascunho e base para o preenchimento do relatório de atividades no sistema APC. **Um integrante do grupo** preenche o relatório no APC incluindo **todos** os colegas que participaram.

---

## Dados do Grupo

| Campo                           | Informação                                                                                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nome do Grupo                   | Tuco                                                                                                                                                        |
| Integrantes participantes       | Felipe Gonçalves Chagas Leite                                                                                                                               |
| Disciplina                      | Seminários III                                                                                                                                              |
| Comunidade atendida             | Tarso de Coimbra                                                                                                                                            |
| Software desenvolvido           | Plataforma Tuco                                                                                                                                             |
| URL da aplicação (se hospedada) | https://icei-puc-minas-ppc-cc.github.io/seminarios3-manha-2026-01-grupo7/src/navegador/ <br> https://play.google.com/store/apps/details?id=com.felipe.tuco&hl=pt |

## Cronograma de Desenvolvimento

| Data  | Etapa                                    | Descrição do que foi feito                                                                                                  |
| ----- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 05/03 | Formação do grupo                        | Definição dos objetivos do projeto e escolha da comunidade parceira.                                                        |
| 06/03 | Contato inicial com a comunidade         | Reunião online com a diretoria da escola Tarso de Coimbra (Fabiana e Harison).                                              |
| 06/03 | Levantamento de demandas                 | Identificação da necessidade de simplificação de textos e inclusão de recursos de acessibilidade.                           |
| 09/03 | Definição de requisitos                  | Elaboração do documento de requisitos focando em suporte a VLibras e puzzles educativos variados.                           |
| 10/03 | Prototipação / wireframes                | Criação de layouts iniciais para a versão web e mobile, além de protótipos de puzzles no modo editor.                       |
| 16/03 | Desenvolvimento — Sprint 1               | Implementação do suporte a VLibras, sistema de flashcards, banco de dados automático e modo editor assistido por IA.        |
| 19/03 | Validação intermediária com a comunidade | Oficina de design presencial com os alunos da Tarso para testes de usabilidade e coleta de ideias para o layout.            |
| 11/05 | Desenvolvimento — Sprint 2               | Refatoração da tela inicial para o formato de árvore de aprendizado e adição de novos componentes de UI (barra de rolagem). |
| 12/05 | Testes e ajustes                         | Resolução de bugs de carregamento offline e polimento da interface baseada no feedback dos alunos.                          |
| 13/05 | Deploy em nuvem                          | Publicação do aplicativo na Google Play Store e atualização da versão web no GitHub Pages.                                  |
| 05/06 | **Entrega presencial do software**       | Demonstração final e entrega do software para uso dos alunos e professores na instituição.                                  |
| 13/06 | Preenchimento dos relatórios             | Finalização da documentação administrativa e registro das atividades no sistema APC.                                        |

## Descrição das Atividades Realizadas

### Levantamento de demandas

O contato inicial foi estabelecido com a diretoria da escola Tarso de Coimbra, representada por Fabiana, e o professor Harison. Através de reuniões online, identificamos que a maior carência era de uma ferramenta que permitisse o aprendizado de forma lúdica e acessível, especialmente para alunos com diferentes níveis de compreensão e necessidades especiais. No dia 19 de março, realizamos uma oficina presencial onde os próprios alunos desenharam sugestões de layout e funcionalidades, como o "botão de favorito" e puzzles inspirados em jogos clássicos (Dominó, Jogo da Velha).

### Desenvolvimento

A plataforma foi desenvolvida permitindo que a mesma base de código funcione em Android, Web (via WebAssembly) e Desktop. Utilizei **SQLite** para persistência de dados local, garantindo o funcionamento offline. Um dos maiores desafios técnicos foi a integração do **VLibras** para garantir a acessibilidade em toda a jornada do usuário. Além disso, implementamos um modo editor que utiliza a API do **Gemini (IA)** para auxiliar na criação de conteúdos educativos e puzzles de forma dinâmica. O trabalho foi organizado visando uma arquitetura escalável e de fácil manutenção.

### Entrega

A entrega presencial ocorreu no dia xx de maio na PUC. O software foi apresentado para a turma de alunos e para a professora Maria. Durante a demonstração, os alunos puderam interagir com os puzzles no celular e no navegador, testando as novas funcionalidades de navegação em "árvore" e o sistema de flashcards. A recepção foi extremamente positiva, com os alunos demonstrando facilidade em navegar pela interface simplificada e engajamento imediato com os puzzles interativos.

### Resultados

O software atendeu plenamente às demandas identificadas, oferecendo uma experiência de aprendizado robusta e acessível. Atualmente, o Tuco conta com mais de 8 tipos de puzzles ativos, suporte completo a VLibras e está disponível gratuitamente tanto na Web quanto na Play Store. O feedback da comunidade destacou a importância da ferramenta para a autonomia dos alunos no processo de revisão de conteúdos.

## Evidências para Anexar no APC

### Fotos da entrega presencial

- [x] Fotos salvas em `evidencias/fotos/`

### Prints de tela da aplicação

- [x] Prints salvos em `evidencias/prints/`

## Observações

A maior dificuldade é a preguiça. A coisa mais chata é fazer relatório.

O maior aprendizado deste projeto foi a importância da validação com os alunos. Desenvolver um projeto deste porte individualmente foi um desafio, que permitiu aplicar conceitos de arquitetura de software e design de interação em um cenário de impacto social real. 


