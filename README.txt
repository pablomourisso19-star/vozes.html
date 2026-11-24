# VOZES — site educativo

## Como abrir
1. Extraia a pasta `vozes_site`.
2. Abra `index.html` no navegador.
3. Para desenvolvimento, abra a pasta no VS Code e use a extensão Live Server.

## Arquivos
- `index.html`: estrutura e conteúdo.
- `css/style.css`: identidade visual e responsividade.
- `js/script.js`: menu mobile, animações e barra de leitura.
- `assets/fonts/`: coloque aqui o arquivo web licenciado da fonte The Seasons, se disponível.

## Tipografia
O CSS já prioriza `The Seasons` nos títulos e usa `DM Sans` / `Space Grotesk` como tipografias auxiliares modernas. Para carregar The Seasons de fato, obtenha uma licença que permita uso web e coloque o arquivo WOFF2 em `assets/fonts/`. Em seguida, descomente e ajuste este bloco no início de `css/style.css`:

```css
@font-face {
  font-family: "The Seasons";
  src: url("../assets/fonts/TheSeasons.woff2") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
```

O arquivo da fonte não foi incluído porque não foi fornecido e depende de licença apropriada para publicação na web.

## Observações sobre o conteúdo
- O conteúdo foi estruturado a partir do PDF fornecido pelo usuário.
- A tabela estatística da página 2 foi transcrita com os números apresentados no documento. O PDF não informa o ano de referência de cada indicador; confirme nas publicações originais antes de apresentar os números como atuais.
- As frases “UNODC (Escrit...” e “Letramento rac...” estavam truncadas no PDF. O site sinaliza essas lacunas e não inventa o conteúdo ausente.
- Os contatos de denúncia foram reproduzidos a partir do material-base. Confirme números, horários, disponibilidade e links nos canais oficiais antes de divulgar.
- As imagens de capa e a tipografia auxiliar dependem de conexão com a internet.
