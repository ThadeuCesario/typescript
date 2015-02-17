<!-- TO DO: ajustar escrita do readme  -->

Anotações 

Typescript -> superset do javascript (desenvolvida pela microsoft)

O que temos dentro do TypeScript
{
    Fortemente Tipada,
    Genéricos,
    Interfaces,
    Namespaces,
    Decorators,
    ...
}

Typescript é transpilado para Javascript

Javascript é uma linguagem fracamente tipada.

Supondo que eu não passe diretamente a tipagem para uma variável, o próprio typescript vai inferir um tipo para aquela variável, seguindo o primeiro valor atribuido para ela.

O Typescript não possui uma tipagem diferente para números inteiros e números flutuantes.

Uma das vantagens do TypeScript é que podemos adotar o TypeScript de forma gradual. 
Não precisamos realizar uma grande migração para conseguir aplicar o TS.

Tipo any -> Aceita qualquer tipo de valor aplicado à variável.
Podemos com esse tipo trabalhar de uma forma muito gradativa com o TS.



###########################
Comandos e opções:

-> Inicializar um projeto typescript
tsc --init

-> Escutar mudanças dos arquivos typescript para gerar os arquivos javascript automaticamente
tsc -w

-> Não permitir a geração do javascript quando existir algum erro no typescript
"noEmitOnError": true

-> Propriedade target, informa qual a versão do Javascript que o Typescript será transpilado

-> SourceMap: Com esse arquivo podemos ter um mapeamento entre o arquivo que está sendo executado no browser e código original.

-> noImplicitAny: Não é permitido o valor any