## Informações do Projeto

| Campo | Informação |
|-------|-----------|
| Nome da aplicação | *Tuco* |
| Tecnologias utilizadas | *vLibras, nanoHTTPD, SQLight, JSON, Guice, APT, JAVA16 * |
| URL em produção | *https://icei-puc-minas-ppc-cc.github.io/seminarios3-manha-2026-01-grupo7/src/navegador/* |

## Código fonte
Disponivel em [releases](https://github.com/ICEI-PUC-Minas-PPC-CC/seminarios3-manha-2026-01-grupo7/releases)

## Como Executar Localmente

1.Abra o terminal na pasta extraida  
2.Execute:
```python
python -m http.server 8080
```
3.Acesse http://localhost:8080 no navegador.

Ou se tiver node.js instalado
```js
npx serve
```
## Como executar o .JAR
O .jar é um arquivo java, você precisa instalar o java18 ou versões superiores.

## Instalação de .APKs
[Tutorial para instalar apps desconhecidos no android](https://canaltech.com.br/android/como-instalar-um-apk-no-android/)

## Estrutura do Código

```
src/navegador
├── index.html
├── composeApp.js
├── 14fbbd1d91cd37b3976a.wasm
└── composeResources/synapse.composeapp.generated.resources - arquivos do projeto

src/binarios/
├── tuco.apk - Aplciativo para celular android.
└── tuco.jar - Programa java (testado no windows).
```

## Deploy
A aplicação está hospedada no github pages e utiliza o banco de dados na pasta resources
O deploy foi feito apenas ativando a opção, subi os arquivos pelo GitHub desktop e a plataforma detectou e atualizou o site sozinha.
