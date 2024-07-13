const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(5, 10)).toEqual(15);
  })

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtracao(20, 3)).toEqual(17);
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplicacao(20, 2)).toEqual(40);
  })

  it('Deverá retornar a divisao entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao(20, 2)).toEqual(10);
  })
})