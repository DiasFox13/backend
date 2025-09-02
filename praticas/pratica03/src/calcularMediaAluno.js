function calcularMediaAluno (a1, a2, a3) {
// 1. Validação: a1 ou a2 indefinidos
    if (a1 === undefined || a2 === undefined) {
        throw new Error('Notas a1 ou a2 não informadas');
    }

    // 2. Validação: a1 ou a2 negativos
    if (a1 < 0 || a2 < 0) {
        throw new Error('Notas a1 ou a2 não podem ser negativas');
    }

    // 3. Validação: a3 negativa (se informada)
    if (a3 !== undefined && a3 < 0) {
        throw new Error('Nota a3 não pode ser negativa');
    }

    // 4. Cálculo sem a3
    if (a3 === undefined) {
        return a1 * 0.4 + a2 * 0.6;
    }

    // 5. Cálculo com a3 - melhor combinação
    const mediaA1A3 = a1 * 0.4 + a3 * 0.6;
    const mediaA2A3 = a2 * 0.4 + a3 * 0.6;
    
    return Math.max(mediaA1A3, mediaA2A3);
};

module.exports = {calcularMediaAluno};