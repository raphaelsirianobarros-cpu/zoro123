
let idade = 
if ( idade >=70 && idade < 99 || idade >= 16 && idade < 18 ) {
    console.log(` Voto opcional.`)
} else if ( idade >= 18 && idade < 70 ) {
    console.log(` Voto obrigatório.`)
}
 else if( idade >= 100) {
    console.log(` Morto `)
 }
else { console.log (` Voto proibido `)}
