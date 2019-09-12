'use strict'

const DomElement = function(options, text) {

this.selector = options.selector;
this.height = options.height;
this.width = options.width;
this.bg = options.bg;
this.fontSize = options.fontSize;
this.text = text;
};

DomElement.prototype.newFunk = function() {
    if (this.selector[0] === '.') {
        const div = document.createElement('div');
        div.style.cssText = 'px; height:' + this.height + 'width:' + this.width + ';background:' + this.bg + '; font-size:' + this.fontSize;
        div.textContent = this.text;
        document.body.appendChild(div);
    };
    if (this.selector[0] === '#') {
        const p = document.createElement('p');
        p.style.cssText = 'height:' + this.height + 'px; width:' + this.width + ';background:' + this.bg + '; font-size:' + this.fontSize;
        p.textContent = this.text;
        document.body.appendChild(p);
    };
};

const domElemOpt = {
    selector: '#carBig',
    height: 200,
    width: '300px',
    bg: 'yellow',
    fontSize: '30px'
};
const car = new DomElement (domElemOpt, 'Very fast car');

car.newFunk();