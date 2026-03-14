# 03 - Plano e Cronograma de Desenvolvimento

> **Grupo:** *Felipe Gonçalves*  
> **Aplicação:** *Tuco para web, windows/linux e android*

## 1. Divisão de Tarefas
| Integrante              | Responsabilidades principais                                                                 |
|-------------------------|----------------------------------------------------------------------------------------------|
| Felipe Gonçalves        | **CTO, CEO, PO, QA, Tech Lead:** Organização do projeto. |
| Qwen3-Coder-16B         | **Programador Senior:** Geração e refatoração de código. |
| Grok                    | **Arquiteto de Software, Designer:** Sugestões de arquitetura, UI/UX e acessibilidade. |
| Alunos da Tarso         | **Clientes:** Validação de conteúdo e feedback sobre usabilidade. |

## 2. Cronograma de Desenvolvimento
| Semana | Período (dd/MM à dd/MM) | Atividade planejada                                      | Responsável          | Status       |
|--------|--------------------------|---------------------------------------------------------|----------------------|--------------|
| 1      | 25/02 à 06/03           | Formação do grupo (ninguem quis fazer comigo)            | Felipe               | Concluído   |
| 2      | 06/03 à 09/03           | Contato com comunidade e Levantamento de demandas        | Todos                | Concluído   |
| 3      | 09/03 à 11/03           | Definição de requisitos                                  | Fabiana              | Concluído   |
| 4      | 11/03 à 19/03           | Prototipação / wireframes                                | Felipe               | Concluído   |
| 5      | 18/03 à 25/03           | Desenvolvimento — Sprint 1 (melhoramento do layout)      | Felipe + IAs         | Em andamento |
| 6      | 25/03 à 01/04           | Desenvolvimento — Sprint 2 (criação de conteudo)         | Felipe               | Não iniciado |
| 7      | 01/04 à 08/04           | Validação com a comunidade                               | Todos                | Não iniciado |
| 8      | 08/04 à 15/04           | Desenvolvimento — Sprint 3 (mais puzzles)                | Felipe + IAs         | Não iniciado |
| 9      | 15/04 à 22/04           | Desenvolvimento — Sprint 4                               | Felipe + Qwen3-Coder | Não iniciado |
| 10     | 22/04 à 29/04           | Testes e ajustes (manual em web, desktop e Android)      | Felipe               | Em andamento |
| 11     | 29/04 à 06/05           | Deploy / hospedagem (GitHub Pages + banco auto-update)   | Felipe               | Concluído   |
| 12     | 06/05 à 13/05           | Validação final com a comunidade                         | Todos                | Não iniciado |
| 13     | 13/05 à 20/05           | **Entrega presencial** (apresentação na escola Tarso)    | Todos                | Não iniciado |
| 14     | 20/05 à 27/05           | Preenchimento dos relatórios APC                         | Todos                | Não iniciado |

<!--Ajuste o cronograma conforme o calendário do semestre e os feriados.-->

## 3. Marcos (Milestones)

| Marco                        | Data prevista | Critério de conclusão                                                                |
|------------------------------|--------------|---------------------------------------------------------------------------------------|
| Demandas levantadas          | 09/03        | Registro de contato com a comunidade (docs/06-registro-contatos.md)                   |
| Requisitos definidos         | 11/03        | Documento `02-documento-requisitos.md` preenchido                                     |
| Protótipo aprovado           | 19/03        | Wireframes validados com a comunidade (evidencias/prints/)                            |
| MVP funcional                | 25/04        | Funcionalidades mínimas operacionais                                                  |
| Deploy final realizado       | 06/05        | Aplicação acessível pela Internet (GitHub Pages)                                      |
| Entrega presencial           | 20/05        | Software apresentado à comunidade (fotos em evidencias/fotos/)                        |
| Relatórios APC               | 27/05        | Relatório e autoavaliação preenchidos (relatorios/07-relatorio-atividades.md)         |

## 4. Estratégia de Desenvolvimento

### Ambiente de desenvolvimento

O editor de código principal é o **Visual Studio Code (VS Code)**, configurado com o plugin **Continue.dev** para integração com modelos de linguagem locais.  
Esse plugin estabelece uma ponte com o **Ollama**, permitindo a execução da LLM **Qwen3-Coder-16B** rodando localmente no computador.  
O controle de versão é realizado integralmente pelo **Git**, utilizando as ferramentas nativas integradas ao VS Code.  
Para gerenciamento e ajustes no banco de dados local (SQLite), foi utilizado o aplicativo **DB Browser for SQLite**, que permite visualização, edição e exportação de tabelas de forma gráfica e eficiente.

### Estratégia de testes
Os testes são realizados de forma **manual e exploratória**, com foco em validação funcional e de usabilidade nas três plataformas alvo:  
- **Web** (navegador Chromium e Firefox);  
- **Windows/Linux** (via build desktop, atraves de um .jar);  
- **Android v10+** (via build e APK arm64).

Cada nova funcionalidade ou correção é testada nos seguintes cenários principais:  
- Funcionamento offline completo (carregamento inicial com internet + uso posterior sem conexão);  
- Compatibilidade com VLibras (leitura correta de textos e botões);  
- Experiência em dispositivos móveis (responsividade e toque);  

*O correto era ter muitos códigos de teste, mas não quis fazer porque a geração ia demorar mais.*

### Estratégia de deploy

A aplicação será hospedada no **GitHub Pages**, permitindo acesso imediato via navegador sem necessidade de servidor externo.  
O banco de dados (SQLite) e os conteúdos (flashcards, puzzles e configurações) são baixados automaticamente do repositório GitHub via IndexedDB + Service Worker para cache inteligente, garantindo atualizações rápidas de conteúdo sem necessidade de novo deploy completo.  
Essa abordagem facilita a manutenção contínua pós-entrega final. (conseguindo adicionar novos exercícios ou corrigir conteúdos diretamente no repositório).  
Para as versões desktop (Windows/Linux) e mobile (Android), serão gerados builds portáteis ou instaláveis manualmente, disponíveis como releases no GitHub.

## 5. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
| ------- | :------------: | :-------: | ---------- |
| Atraso no cronograma | Baixo | Atraso na entrega final. | A vida é cheia de imprevistos. |
| Dificuldade técnica inesperada | Baixa | Bugs no código | Consulta a IAs, reverter commits e procurar alternativas. |
| Comunidade indisponível para reuniões | Média | Feedback atrasado | Agendamento prévio via Whastapp ou incomodar o professor para agendar a reunião. |
| Problemas de infraestrutura no dia da entrega | Alta | Não conseguir entregar o software. | Backups offline, arquivo java. |

## 6. Comunicação do Grupo :(
| Canal                        | Finalidade                                      |
|------------------------------|-------------------------------------------------|
| Whatsapp                     | Comunicação com a Fabiana. |
| Reuniões semanais            | validação com clientes (alunos/professores da Tarso). |
