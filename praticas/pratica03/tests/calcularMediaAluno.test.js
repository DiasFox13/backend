const {calcularMediaAluno} = require('../src/calcularMediaAluno');

describe('Testes da função calcularMediaAluno', () => {
    test('Vamos saber se a função existe', () => {
        expect(calcularMediaAluno).toBeDefined();
    });

    // 1. Teste para notas indefinidas
    test('Deve lançar erro se a1 ou a2 forem indefinidos', () => {
        expect(() => calcularMediaAluno(undefined, 7, 8)).toThrow('Notas a1 ou a2 não informadas');
        expect(() => calcularMediaAluno(6, undefined, 8)).toThrow('Notas a1 ou a2 não informadas');
    });

    // 2. Teste para notas negativas
    test('Deve lançar erro se a1 ou a2 forem negativos', () => {
        expect(() => calcularMediaAluno(-1, 7, 8)).toThrow('Notas a1 ou a2 não podem ser negativas');
        expect(() => calcularMediaAluno(6, -5, 8)).toThrow('Notas a1 ou a2 não podem ser negativas');
    });

    // 3. Teste para cálculo sem a3
    test('Deve calcular média sem a3', () => {
        expect(calcularMediaAluno(6, 7)).toBeCloseTo(6.6);
    });

    // 4. Teste para a3 negativa
    test('Deve lançar erro se a3 for negativa', () => {
        expect(() => calcularMediaAluno(6, 7, -5)).toThrow('Nota a3 não pode ser negativa');
    });

    // 5. Teste para melhor combinação a1 + a3
    test('Deve usar a1 com a3 quando for melhor combinação', () => {
        expect(calcularMediaAluno(6, 4, 8)).toBeCloseTo(7.2);
    });

    // 6. Teste para melhor combinação a2 + a3
    test('Deve usar a2 com a3 quando for melhor combinação', () => {
        expect(calcularMediaAluno(4, 9, 7)).toBeCloseTo(7.8);
    });
});