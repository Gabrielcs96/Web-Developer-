/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

function menorNota(saque) {
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    
    let notavalor = calcularValorNota(notavalor){
        while (saque >= notavalor) {
        switch (notavalor) {
            case 100:
                notavalor -= 100;
                nota100++;
                break;

            case 50:
                notavalor -= 50;
                nota50++;
                break;
        
            
        }
    }
}


menorNota(200)
