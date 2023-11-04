# Components

- [X] Text
- [X] Heading
- [X] Box
- [X] Button
- [X] TextInput
- [X] TextArea
- [X] Checkbox
- [X] Avatar
- [X] Multistep

# TSUP  

- "build": "tsup src/index.ts --format esm,cjs --dts --external react"

- tsup é uma ferramenta que permite que seu codigo seja executado em diferentes ambientes, seja utilizando ECMAscript Modules ou Common JS para ambientes mais antigos (usando require).
- Usando o TSC do typescript estaremos limitando quem pode consumir nossos pacotes.
- O Tsup minifica os arquivos em arquivos menores, ao invés de criar um arquivo JS para cada arquivo do pacote.
- Com o TSUP podemos definir os arquivos de definição de tipagem.
- Além de ser mais performatico que o modelo padrão proporcionado pelo Typescript. (usa o esbuild)

- "esm" = ECMAscript modules
- "cjs" = Common JS
- "dts" = exporta os arquivos d edefinição de tipagem
- "--external react" = informa o tsup que, ao fazer o build, não precisa se preocupar com a intalação do react, pois ela vai importar externamente, da aplicação que vai usá-lo de fato.

# StoryBook

- Storybooks permitem que até mesmo pessoas de fora da area tech compreendam o design system e como utiliza-lo
- Para documentação de componentes front-end

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

- o comando acima define um documento de storybook, informando que utilizaremos uma versão do vite, pois é mais rapido, ja que utiliza esbuild.

- definimos o type como react, informando que estamos criando para um projeto react
- o ultimo ponto indica que vai usar o npm

## storybook-deployer

- biblioteca para publicação do storybook. Baixamos na documentação e não na raiz do monorepo
- permite publicar no github pages ou no bucket S3 da AWS
- "deploy-storybook": "storybook-to-ghpages". Ao executar, ele cria um branch no repositorio criado no github
  - É preciso definir esse branch na aba de "pages" do repositorio, para direcionar o acesso  
- no github, caso o workflow execute com sucesso mas tenha erro nas páginas do site como "Failed to fetch dynamically imported module", provavelmente você terá que usar essa solução de desabilitar o jekyll:
  - no arquivo "deploy-docs.yml", foi adpatado um comando para criar o arquivo ".nojekyll" ao rodar o "run:" do Deploy storybook, que basicamente ignora a tratativa padrão que ignora arquivos que começam com underline "_". Assim, o workflow executa corretamente e podemos acessar as paginas do storybook.

# Monorepo

- aplicamos o conceito de **"monorepo"** (repositórios em um mesmo mesmo local de trabalho ou pasta) para uma abordagem onde varios projetos são dependentes entre si. Por exemplo, criamos um projeto com as configurações do ts-config, com o qual podemos reaproveitar suas caracteristicas em diferentes projetos sem precisar reconfigurar manualmente. Colocando ambos os projetos dentro do mesmo diretorio, evitamos a necessidade de termos de publicar um pacote especifico no NPM e posteriormente ter que baixa-lo novamente em cada modificação que fizermos.
- criamos um pakage global que define os workspaces dos projetos que utilizaremos
- dessa forma as dependencias comuns para todos os pacotes podem ser gerenciadas em um arquivo apenas, sem precisar intalar novamente em cada pacote.

{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}

"main": "./dist/index.js", --> define qual o arquivo principal do pacote
"module": "./dist/index.mjs", --> define qual o arquivo principal quando usamos ECMAScript Modules
"types": "./dist/index.d.ts", --> usado apenas pelo TP para definir as tipagens do projeto

# Turbo lib

- npm i turbo@latest -D
- serve para quando utilizamos monorepo
  - com ele conseguimos executar scripts em todos os pacotes ao mesmo tempo
  - acelera o processo de build. Ao rodar o build da aplicação, guarda um cache da build no node_modules, detectando apenas arquivos modificados, de maneira incremental.

{
  "$schema": "<http://turborepo.org/schema.json>", // qualquer json pode ter um schema, que define como ele deverá se comportar, alem de puxar as propriedades esperadas
  "pipeline": {   // cada pipeline é um procedimento para o turbo ficar observando
    "dev": {
      "cache": false   // para ambientes dev, não quermos manter dados em cache, afinal estamos em ambiente local
    },
    "build": {  
      "outputs": [  // definimos os diretoris criados com a build de cada pacote
        "dist/**",
        "storybook-static/**"
      ],
      "dependsOn": [  // serve para indicar que, alguns projetos em build, dependem da build de outros projetos, e que deverá executar a build dos mesmos, somente quando a build da dependencia externa for finalizada
        "^build"
      ]
    }
  }

- feito o build com o turbo, é possivel disponibilizar remotamente esse build (ver documentação)

# Changeset (ver readme da pasta changeset)

- mudamos o nome dos pacotes do modelo "ignite-ui/*" para o novo pois, se quisermos publicar no npm, cada organização deve ser única. Logo o nome precisa ser mudado.
- "npm run changeset": "changeset": roda o change-set dos pacotes escolhidos para automaticamente mudar a versão dos mesmos no package.json
"version-packages": "changeset version": nos permite ver as versões, além de atualizar a versão dos arquivos marcados como modificados no comando anterior.
- (--filter=packages/docs) (--filter=!docs): filtra esse pacote, pois não queremos mandar ele para o npm

1 - npm run changeset > verificar pacotes que mudaram e criar um "bump" com o que esta pronto para ser atualizado
2 - npm run version-packages > criar o log e atualiza a versão dos pacotes alterados
