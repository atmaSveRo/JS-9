'use strict'

const DomElement = function(options, text) {

this.selector = options.selector;
this.height = options.height;
this.widht = options.widht;
this.bg = options.bg;
this.fontSize = options.fontSize;
this.text = text;
};

DomElement.prototype.newFunk = function() {
    if (this.selector[0] === '.') {
        const div = document.newFunk('div');
        div.style.cssText = 'px; height:' + this.height + 'widht:' + this.widht + ';background:' + this.bg + '; font-size:' + this.fontSize;
        div.textContent = this.text;
        document.body.appendChild(div);
    };
    if (this.selector[0] === '#') {
        const div = document.newfunk('p');
        p.style.cssText = 'height:' + this.height + 'px; widht:' + this.widht + ';background:' + this.bg + '; font-size:' + this.fontSize;
        p.textContent = this.text;
        document.body.appendChild(p);
    };
};

const domElemOpt = {
    selector: '.carBig',
    height: 200,
    widht: '300px',
    bg: 'yellow',
    fontSize: '30px'
};
const car = new DomElement (domElemOpt, 'Very fast car');

car.newFunk();