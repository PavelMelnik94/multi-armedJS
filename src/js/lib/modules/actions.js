import $ from '../core';

//вставка html
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};


//выбор элемента по индексу
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

//вычисление индекса элемента. возвращает число.
$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    
    const findMyIndex = (item) => {
        return item == this[0];
    }
    
    return childs.findIndex(findMyIndex);
};


//найти элементы с подходящим селектором среди коллекции
$.prototype.find = function (selector) {
    let numberOfItems = 0;
    const copyObject = Object.assign({}, this);
    let counter = 0;

    for (let i = 0; i < copyObject.length; i++) {
        const arr = copyObject[i].querySelectorAll(selector);
        if(arr.length == 0) {
            continue;
        }

        for (let j =0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

//находит ближайший блок по заданному селектору
$.prototype.closest = function (selector) {
    let counter = 0;

    for ( let i =0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;

};


//находит все соседние элементы, не включая элемент на котором было произведено действие
$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}; 