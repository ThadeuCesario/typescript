  /**
   * Se quiseremos podemos configurar nosso typescript para gerar o arquivo javascript mesmo que tenha algum erro apontado pelo typescript.
   * Porém, podemos configurar para que não seja gerado o javascript caso exista algum erro no typescript.
   * Para isso, basta no tsconfig.json configurarmos a propriedade:
   * "noEmitOnError": true,
   * Assim, quando algum erro de typescript for detectado, não será gerado o arquivo javascript.
   */

   let canal: string = 'Gaveta';
   let inscritos: number = 6210234;

   //canal = inscritos;
   console.log(`Canal = ${canal}`);
