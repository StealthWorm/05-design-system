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

"build": "tsup src/index.ts --format esm,cjs --dts"

- tsup é uma ferramenta que permite que seu codigo seja executado em diferentes ambientes, seja utilizando ECMAscript Modules ou Common JS para ambientes mais antigos (usando require).
- Usando o TSC do typescript estaremos limitando quem pode consumir nossos pacotes.
- O Tsup minifica os arquivos em arquivos menores, ao invpes de criar um arquivo JS para cada arquivo do pacote.
- Com o TSUP podemos definir os arquivos de definição de tipagem.
- Além de ser mais performatico que o modelo padrão proporcionado pelo Typescript. (usa o esbuild)

- "esm" = ECMAscript modules
- "cjs" = Common JS
- "dts" = exporta os arquivos d edefinição de tipagem
