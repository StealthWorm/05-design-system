# Components

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] Multistep

"build": "tsup src/index.ts --format esm,cjs --dts --external react"

- tsup é uma ferramenta que permite que seu codigo seja executado em diferentes ambientes, seja utilizando ECMAscript Modules ou Common JS para ambientes mais antigos (usando require).
- Usando o TSC do typescript estaremos limitando quem pode consumir nossos pacotes.
- O Tsup minifica os arquivos em arquivos menores, ao invés de criar um arquivo JS para cada arquivo do pacote.
- Com o TSUP podemos definir os arquivos de definição de tipagem.
- Além de ser mais performatico que o modelo padrão proporcionado pelo Typescript. (usa o esbuild)

- "esm" = ECMAscript modules
- "cjs" = Common JS
- "dts" = exporta os arquivos d edefinição de tipagem
- "--external react" = informa o tsup que, ao fazer o build, não precisa se preocupar com a intalação do react, pois ela vai importar externamente, da aplicação que vai usá-lo de fato.

- Storybooks permitem que até mesmo pessoas de fora da area tech compreendam o design system e como utiliza-lo

```
  // o comando abaixo não funciona mais para versões mais recentes (v7) do storybook
  npx sb init --builder @storybook/builder-vite --type react --use-npm

  ### Passo a passo da instalação v7

1. Apague a pasta `packages/docs` caso exista
2. Execute o comando `npm create vite@latest docs` dentro da pasta `packages` para iniciar um projeto Vite onde o nome da pasta será `docs`.
3. Escolha as opções `React` e `Typescript` na configuração do Vite e aguarde a finalização da instalação
4. Com a instalação finalizada, acessa a pasta `packages/docs` e execute o comando `npx storybook@latest init --package-manager npm`
5. Será perguntado se você deseja instalar o plugin do ESLint, essa instalação é opcional e fica a seu critério.
6. Com a configuração do Storybook finalizada, deve abrir uma janela para você de boas vindas
7. Acesse o arquivo packages/docs/package.json e edite os comandos de build para que o npm run build execute o build do Storybook, não do Vite. Exemplo:
```

o comando acima define um documento de storybook, informando que utilizaremos uma versão do vite, pois é mais rapido, ja que utiliza esbuild.

- definimos o type como react, informando que estamos criando para um projeto react
- o ultimo ponto indica que vai usar o npm
