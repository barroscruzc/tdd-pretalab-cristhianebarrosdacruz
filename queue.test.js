const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();

    expect(queue.size()).toEqual(0);

    queue.add('Limão');
    queue.add('Uva');

    expect(queue.size()).toEqual(2);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();

    queue.add('Maçã');

    expect(queue).toEqual({ elements: ['Maçã']});

    queue.add('Abacaxi');
    queue.add('Laranja');

    expect(queue).toEqual({ elements: ['Maçã', 'Abacaxi', 'Laranja']});
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();

    queue.add('Maçã');
    queue.add('Abacaxi');
    queue.add('Melancia');

    expect(queue.peek()).toEqual('Maçã');

    queue.dequeue();

    expect(queue.peek()).toEqual('Abacaxi');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();

    queue.add('Maçã');
    queue.add('Abacaxi');
    queue.add('Melancia');

    queue.dequeue();

    expect(queue).toEqual({ elements: [ 'Abacaxi', 'Melancia' ]});
    
    queue.dequeue();
    
    expect(queue.peek()).toEqual('Melancia');
  })
})