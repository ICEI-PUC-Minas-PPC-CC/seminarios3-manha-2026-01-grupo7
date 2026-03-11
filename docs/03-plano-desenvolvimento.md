# 03 — Plano e Cronograma de Desenvolvimento

> **Grupo:** *Felipe Gonçalves*  
> **Aplicação:** *Web*

---

## 1. Divisão de Tarefas

| Integrante | Responsabilidades principais |
| ----------- | ------------------------------ |
| Felipe Gonçalves | CTO, CEO, Tech Lead, Designer |
| Qwen3-Coder-16B | Programador Senior|
| Grok | Arquiteto de Software |
| Alunos da Tarso | Clientes |

## 2. Cronograma de Desenvolvimento

| Semana | Período (dd/MM à dd/MM) | Atividade planejada | Responsável | Status |
| :------: | --------- | -------------------- | -----------: | :------: |
| 1 | 18/02 à 25/02 | Formação do grupo | Todos | em andamento |
| 2 | 06/03 á xx/xx | Contato com comunidade e Levantamento de demandas | Todos | em andamento |
| 3 | | Definição de requisitos | | em refinamento |
| 4 | | Prototipação / wireframes | | concluido |
| 5 | | Desenvolvimento — Sprint 1 | | não iniciado |
| 6 | | Desenvolvimento — Sprint 2 | | não iniciado |
| 7 | | Validação com a comunidade | | não iniciado |
| 8 | | Desenvolvimento — Sprint 3 | | não iniciado |
| 9 | | Desenvolvimento — Sprint 4 | | não iniciado |
| 10 | | Testes e ajustes | | em andamento |
| 11 | | Deploy / hospedagem | | concluido |
| 12 | | Validação final com a comunidade | | não iniciado |
| 13 | | **Entrega presencial** | Todos | não iniciado |
| 14 | | Preenchimento dos relatórios APC | Todos | não iniciado |

> Ajuste o cronograma conforme o calendário do semestre e os feriados.

## 3. Marcos (Milestones)

| Marco | Data prevista | Critério de conclusão |
| ------- | :------------: | ---------------------- |
| Demandas levantadas | 9/03 | Registro de contato com a comunidade |
| Requisitos definidos | 11/03 | Documento `02-documento-requisitos.md` preenchido |
| Protótipo aprovado | 12/03 | Wireframes validados com a comunidade |
| MVP funcional | | Funcionalidades mínimas operacionais |
| Deploy final realizado | | Aplicação acessível pela Internet |
| Entrega presencial | | Software apresentado à comunidade |
| Relatórios APC | | Relatório e autoavaliação preenchidos |

## 4. Estratégia de Desenvolvimento

### Ambiente de desenvolvimento

(Descreva o setup: editor de código, controle de versão, branches, etc.)
O editor de código principal é o VSCode com plugin continue.dev, esse plugin faz uma ponte com o programa Ollama e roda uma LLM local (Qwen3-Coder-16B).  
O controle da versão é feito pelo git integrado ao VSCode.
Foi utilizado os aplciativos auxiliares DBBrowser.

### Estratégia de testes

O cenário de testes é feito de forma manual, validando se as novas funcionalidades estão sem bugs nas plataformas web, windows e android.

### Estratégia de deploy

(Onde e como a aplicação será hospedada?)
A aplicação será hospedade no githubpages. O código baixa automaticamente o banco de dados do github para facilitar a atualização e mudança de conteúdo de forma rápida.

## 5. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
| ------- | :------------: | :-------: | ---------- |
| Atraso no cronograma | | | |
| Dificuldade técnica inesperada | Baixa | | |
| Comunidade indisponível para reuniões | | | |
| Problemas de infraestrutura no dia da entrega | Alta | Não conseguir entregar o software. | Backups offline. |

## 6. Comunicação do Grupo

| Canal | Finalidade |
| ------- | ----------- |
| Whatsapp | Comunicação diária. |
| *(GitHub Issues / Projects)* | Controle de tarefas |
| *Reuniões semanais* | Alinhamento do grupo |
