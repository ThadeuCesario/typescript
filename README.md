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

Uma


###########################
Comandos:

-> Inicializar um projeto typescript
tsc --init

-> Escutar mudanças dos arquivos typescript para gerar os arquivos javascript automaticamente
tsc -w