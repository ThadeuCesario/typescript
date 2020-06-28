"use strict";
/**
 * Configurações:
 * (As configurações são realizadas dentro do arquivo tsconfig.json)
 *
 * noEmitOnError
 * Se quiseremos podemos configurar nosso typescript para gerar o arquivo javascript mesmo que tenha algum erro apontado pelo typescript.
 * Porém, podemos configurar para que não seja gerado o javascript caso exista algum erro no typescript.
 * Para isso, basta no tsconfig.json configurarmos a propriedade:
 * "noEmitOnError": true,
 * Assim, quando algum erro de typescript for detectado, não será gerado o arquivo javascript.
 *
 * Target
 * Essa configuração define, qual será a versão do javascript que será utilizada no arquivo compilado. Por padrão o target vemm configurado no ES5.
 *
 * sourceMap
 * "sourceMap": true
 *
 * Quando habilitarmos o console de desenvolvedor, com essa configuração poderemos ter acesso, ao código original que gerou aquele javascript
 * que está sendo interpretado pela página.
 * Portanto o sourceMap te dará um mapeamento do arquivo que está sendo interpretado no browser, do arquivo que foi utilizado para realmente realizar aquele código.
 * Lembrando que quando um código passa para a web geralmente é muito tratado para que fique o menor possível.
 * Portanto o sourceMap realizará um mapeamento das linhas que estão sendo interpretada pelo browser, da linha que está no arquivo original.
 */
var canal = 'Gaveta';
var inscritos = 6210234;
//canal = inscritos;
console.log("Canal = " + canal);
//# sourceMappingURL=compiler.js.map