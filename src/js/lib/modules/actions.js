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
    const childs = [...parent.childer];
    
    const findMyIndex = (item) => {
        return item == this[0];
    }
    
    return childs.findIndex(findMyIndex);
};