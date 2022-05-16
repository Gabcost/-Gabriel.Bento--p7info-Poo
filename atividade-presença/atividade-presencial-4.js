"use strict";
class Queue {
    constructor() {
        this.Personas = [];
        this.maxQueue = 5;
        this.fim = 0;
        this.nprimeiro = 0;
        this.nItems = 0;
    }
    isEmpty() {
        if (this.nItems == 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    isFull() {
        if (this.fim == this.maxQueue) {
            return 1;
        }
        else {
            return 0;
        }
    }
    addQueue(nome) {
        if (this.isFull() == 1) {
            console.log('Fila está cheia!');
        }
        else {
            this.Personas[this.fim] = nome;
            console.log(nome + ' entrou na fila');
            this.fim++;
            this.nItems++;
        }
    }
    removeQueue() {
        if (this.isEmpty() == 1) {
            console.log('A fila está vazia!');
        }
        else {
            let temp = this.Personas[this.nprimeiro];
            console.log(this.Personas[this.nprimeiro] + ' saiu da fila');
            this.nprimeiro++;
            this.nItems--;
            return temp;
        }
    }
    viewQueue() {
        if (this.isEmpty() == 1) {
            console.log('Fila não tem ninguém!');
        }
        else {
            let np = this.nprimeiro;
            for (let i = 0; i < this.nItems; i++) {
                console.log(this.Personas[np] + ' está na fila');
                np++;
            }
        }
    }
}
let fila = new Queue();
fila.addQueue('Narine');
fila.addQueue('Zamini');
fila.addQueue('Gbismo');
fila.addQueue('Jessie');
console.log('-------------------------');
fila.removeQueue();
fila.removeQueue();
fila.removeQueue();
console.log('-------------------------');
fila.addQueue('Narine');
console.log('-------------------------');
fila.viewQueue();
console.log('-------------------------');
fila.removeQueue();
fila.removeQueue();
console.log('-------------------------');
fila.viewQueue();
