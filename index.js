// programa que calcula media das notas dos alunos

const aluno01='maria'
const notaaluno01 = 6

const aluno2= "carlos"
const notaaluno02 = "7.35"

const aluno03 = "patricio"
const notaaluno03 = 9

const aluno04 = "deversob"
const notaaluno04 = 4.8 

const aluno05 =  "Bresilda"
const notaaluno05 = 6.2


//const nome3 = ` half e ${nome}` //template string é delimitada com acento grave ou crase, ela pode receber uma outra variável 

//console.log(nome3)
console.log(typeof notaaluno01) //tipeof mostra o tipo de variavel declarada

const media = (notaaluno01+notaaluno02+notaaluno03+notaaluno04+notaaluno05) / 5

//console.log(media)
if (media >= 6)
    {console.log (` A nota média da turma foi ${media}, Parabens foram aprovados!`) }

else
    {console.log ("as notas foram insuficientes para aproação na vida")}