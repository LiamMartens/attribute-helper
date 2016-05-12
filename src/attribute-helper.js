HTMLElement.prototype.attr = function(name) {
    var attr = function(_element, _name) {
        this.element = _element;
        this.name = _name;
        this.has = function() {
            return this.element.hasAttribute(this.name);
        }
        this.remove = function() {
            return this.element.removeAttribute(this.name);
        }
        this.set = function(value) {
            return this.element.setAttribute(this.name, value);
        }
        this.get = function() {
            return this.element.getAttribute(this.name, false);
        }
        this.toggle = function() {
            if(this.has())
                this.remove();
            else this.set(true);
        }
    }
    return new attr(this, name);
};
