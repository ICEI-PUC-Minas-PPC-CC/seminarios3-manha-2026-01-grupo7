# 02 — Documento de Requisitos do Software

> **Grupo:** *Felipe Gonçalves*  
> **Aplicação:** *Tuco*  
> **Comunidade:** *Esc. Mun. Dr. Tarso de Coimbra*

---

## 1. Visão Geral

A aplicação é uma plataforma educacional, inicialmente destinada para aprendizado de computação e está sendo expandida para outros conteúdos. Tornando uma ferramenta amigavél de aprendizado, no caso da Tarso expandindo para a acessibilidade e fácil assimilação.
O problema é a dificuldade de leitura em dispositivos digitais (WOLF)[^1] e também a falta de prática de exercícios para fixação e desenvolvimento cognitivo. (DESMURGET)[^2]

## 2. Público-Alvo

| Campo | Informação |
| ------- | ----------- |
| Perfil dos usuários | Pessoas com deficiencia auditiva |
| Faixa etária | Maiores de 12 anos |
| Necessidades de acessibilidade | Libras e baixa quantidade de texto com termos técnicos |
| Nível de familiaridade com tecnologia | Baixa |

> **Lembrete (Tarso de Coimbra):** Os usuários podem ter deficiência auditiva/surdez. A interface deve ser **visual, intuitiva e de baixa complexidade**. Priorize elementos visuais (imagens, ícones, cores) sobre texto extenso.

## 3. Requisitos Funcionais

| ID | Requisito | Prioridade | Origem da demanda |
| ---- | ---------- | :----------: | ------------------ |
| RF01 | | *(Alta/Média/Baixa)* | *(Reunião com a comunidade em DD/MM)* |
| RF02 | | | |
| RF03 | | | |
| RF04 | | | |
| RF05 | | | |

## 4. Requisitos Não Funcionais

- [x] Acessibilidade: A aplicação deve ser acessível via navegador web.  
- [x] Usabilidade:  A interface deve ser simples e intuitiva.  
- [x] Compatibilidade: A aplicação deve funcionar em dispositivos móveis.
- [ ] Visual: Design focado na experiência do usuário.

## 5. Requisitos de Acessibilidade

- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [ ] Botões grandes e identificáveis
- [ ] Contraste adequado de cores
- [x] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais
- [ ] Outro: *(especificar)*

## 6. Tecnologias Escolhidas

| Componente | Tecnologia |
| ----------- | ----------- |
| Front-end | HTML para caregar o backend JSP (aplicação java) |
| Back-end (se houver) | Java Multiplataforma |
| Banco de dados (se houver) | SQLite e JSON |
| Hospedagem | Github Pages |
| Outras ferramentas | Guice, APT, NanoHTTPD, VsCode + (IA) Ollama Qwen3-Coder 16B |

## 7. Protótipo / Wireframes

(Inclua esboços das telas principais ou links para protótipos — mesmo rascunhos simples em papel são válidos. Salvem imagens dos wireframes em `evidencias/prints/`.)

<p align="center">*Todo o design/layout pode mudar para adquar-se melhor a experiência e demanda da Tarso.*</p>
<table align="center" style="width:100%; border:none;">
  <tr>
    <td align="center" style="width:35%; vertical-align:top; border:none;">
      <strong>Aplicativo para celular + puzzles</strong><br><br>
      <img src="https://github.com/ICEI-PUC-Minas-PPC-CC/seminarios3-manha-2026-01-grupo7/raw/main/evidencias/prints/puzzle_print_celular.jpg" 
           alt="Mobile App" 
           width="120" 
           style="max-width:100%; height:auto; display:block; margin:0 auto;">
    </td>
    <td align="center" style="width:65%; vertical-align:top; border:none;">
      <strong>V Libras + site funcional</strong><br><br>
      <img src="https://github.com/ICEI-PUC-Minas-PPC-CC/seminarios3-manha-2026-01-grupo7/raw/main/evidencias/prints/inicio_print_tela_inicial_vlibras.png" 
           alt="Site VLibras" 
           width="480" 
           style="max-width:100%; height:auto; display:block; margin:0 auto;">
    </td>
  </tr>
</table>

## 8. Escopo Mínimo Viável (MVP)

(Quais funcionalidades compõem a versão mínima que pode ser entregue à comunidade?)

- [x] *Integração com v-Libras*
- [ ] *Layout mais intuitivo*

## 9. Funcionalidades Desejáveis (se houver tempo)

- *Edição fácil dos blocos de conteúdo*
- *Um modo editor para criar puzzles*
- *Expansão para ios/mac.*

## Blibiografia

[^1]:WOLF, Maryanne. O cérebro no mundo digital: os desafios da leitura na nossa era. Tradução de Rodolfo Ilari; Mayumi Ilari. São Paulo: Contexto, 2019.
[^2]:DESMURGET, Michel. Faça-os ler! Por que as telas estão prejudicando nossos filhos e como salvá-los. São Paulo: Vestígio, 2023.
