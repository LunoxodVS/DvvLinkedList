class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
    toString() {
        return this.value;           }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    //Добавляет узел в конец списка 
    add(value){
        const newNode = new Node(value);
        //Если список пуст, добавляем узел в начало списка
        if (!this.head || !this.tail)
        {
            //Голова-текущий узел
            this.head = newNode;
            //Хвост-текущий узел
            this.tail = newNode;
            return this;
        }
        //Указатель текущего хвоста-новый узел
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    //Преобразует в массив
    toArray() {
        const nodes = [];
        let current = this.head;
        while (current) {
            nodes.push(current);
            current = current.next;
        }
        return nodes;
    }
    //Преобразует в строку
    toString()
    {
        return this.toArray().map(node => node.toString()).toString();
    }
    //Ищет узел в списке
    find (value)
    {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        while (current)
        {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    //Удаляет узел из списка
    remove(position)
    {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while (current)
        {
            if (position === 0) {
                this.head = current.next;
                return;
            }
            if (index === position) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
            index++;
        }
    }
}
const linkedList = new LinkedList();

//Добавляет узел в список
function addNode() {
    const value = document.getElementById('nodeValue').value;
    linkedList.add(value);
    updateUI();
}
//Ищет узел в списке
function findNode() {
    const value = document.getElementById('nodeValue').value;
    const node = linkedList.find(value);
    if (node) {
        alert('Узел в списке найден');
    } else {
        alert('Узел в списке не найден');
    }
}
//Удаляет узел из списка
function removeNode() {
    const position = parseInt(document.getElementById('nodePosition').value);
    linkedList.remove(position);
    updateUI();
}
//Обновляет интерфейс
function updateUI() {
    document.getElementById('lblValuesJson').innerText = JSON.stringify(linkedList);
    document.getElementById('lblValuesToArray').innerText = JSON.stringify(linkedList.toArray());
    document.getElementById('lblValuesToString').innerText = linkedList.toString();
}