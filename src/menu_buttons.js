ImageMenuButton = function(src, dim, menu, manager){
    this.src = src;
    this.dim = dim;
    this.menu = menu;
    this.manager = manager;
    
    this.div = document.createElement('div');
    this.div.className = 'menu button';
    this.img = document.createElemnt('img');
    this.img.src = this.src;
    this.img.className = 'menu button';
    this.div.appendChild(this.img);
    
    this.img.onload = this.menu.addButtonDiv(this);
};

ImageMenuButton.prototype.onTap = function(){
    var that = this;
    return function(event){
        //TODO x, y, scale not hard coded
        that.manager.newImage(that.src, 50, 50, 1.0);
    };
};

ImageMenuButton.prototype.loaded = function(){
    var that = this;
    return function(e){
        that.div.appendChild(that.img);  
    };
};