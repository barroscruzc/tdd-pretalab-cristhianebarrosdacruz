const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    expect(queue.size()).toEqual(0);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add('Maçã');
    expect(queue).toEqual({ elements: ['Maçã']});
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.elements = ['Maçã', 'Abacaxi', 'Melancia'];
    expect(queue.peek()).toEqual('Maçã');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.elements = ['Maçã', 'Abacaxi', 'Melancia'];
    queue.dequeue();
    expect(queue).toEqual({ elements: [ 'Abacaxi', 'Melancia' ]});
  })
})