




function cliente(){
    cpfCliente = true
    contaSaldoCliente = 1000.00
    valorSaque
   }
   

function empresa() { parseFloat(gets())
 cnpjEmpresa = true
 saldoBancarioEmpresa = parseFloat(gets())
 taxaDeposito = parseFloat(gets())
 taxaSaque = parseFloat(gets())
}

if(cnpjEmpresa && cpfCliente =  true){
    console.log(`Verificação concluida`)  
}else{
    console.log(`Falha na verificação`)
}

const verificaSaldo = parseFloat(gets())

switch (verificaSaldo) {

case 1:
    const valorDeposito = parseFloat(gets())

    contaSaldoCliente += valorDeposito; 
            console.log( `Deposito efetuado com sucesso ! Saldo atual de ${contaSaldoCliente.toFixed(2)}`)
            console.log(`38f0c927-bf80-4093-a1d2-906f7556727d@email.webhook.site`)
                break
   
       case 2:

        if( saldoBancarioEmpresa <=  valorSaque ){
          console.log(`Saque realizado com sucesso ! Saldo atual de ${contaSaldoCliente.toFixed(2)}`)
        }else{
            console.log(`Saldo insuficiente ! Saldo de ${contaSaldoCliente.toFixed(2)}`)
        }

        default: 
        console.log(`Opção invalida`)
    }


          
            










}






