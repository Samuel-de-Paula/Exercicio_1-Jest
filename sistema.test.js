
const { verificarMaioridade, calcularIMC, formatarNome, ehPar, celsiusParaFahrenheit, adicionarHobby, dividir,
    criarAluno, aplicarDesconto, validarTamanhoSenha } = require('./sistema');

    //1
    describe('Deve verificar se é maior de 18 anos ou não', () => {
        expect(verificarMaioridade(15)).toBe(false);
        expect(verificarMaioridade(18)).toBe(true);
        expect(verificarMaioridade(21)).toBe(true);
    });

//2
describe('Deve calcular o IMC corretamente', () => {
    expect(calcularIMC(70, 1.75)).toBe(22.86);
    expect(calcularIMC(80, 1.8)).toBe(24.69);
});

//3
describe('Deve formatar o nome corretamente', () => {
    expect(formatarNome('João', 'Silva')).toBe('Silva, João');
    expect(formatarNome('Maria', 'Souza')).toBe('Souza, Maria');
});

//4
describe('Deve verificar se um número é par', () => {
    expect(ehPar(2)).toBe(true);
    expect(ehPar(3)).toBe(false);
});

//5
describe('Deve converter Celsius para Fahrenheit corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
});

//6
describe('Deve adicionar um hobby à lista de hobbies do aluno', () => {
    const aluno = criarAluno('João', 20);
    adicionarHobby(aluno, 'Leitura');
    expect(aluno.hobbies).toContain('Leitura');
});

//7
describe('Divisão por zero não é permitida', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
});


//8
describe('Deve criar um aluno, curso e ver  se esta ativo', () => {
    const aluno = criarAluno('João', 'Engenharia');
    expect(aluno).toEqual({ nome: 'João', curso: 'Engenharia', ativo: true });
});

//9
describe('Deve aplicar o desconto corretamente', () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(200, 25)).toBe(150);
});

//10
describe('Deve ver e validar o tamanho da senha corretamente', () => {
    expect(validarTamanhoSenha('12345678')).toBe(true);
    expect(validarTamanhoSenha('1234')).toBe(false);
});
