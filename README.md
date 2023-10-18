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
