import $ from '../core';


$.prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
      this[i].classList.add(...classNames);
  }  

  return this;
};