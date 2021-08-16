import $ from '../core';


//назначить
$.prototype.setAttr = function(attrName, attrValue){
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }

    return this;
};

//посмотреть значение
$.prototype.getAttr = function(attrName){
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(attrName);
    }

    return this;
};

//проверить наличие
$.prototype.hasAttr = function(attName){
    for (let i = 0; i < this.length; i++) {
        this[i].hasAttribute(attName);
    }

    return this;
};