ImageMenuButton = function(src, dim, menu, manager){
    this.src = src;
    this.dim = dim;
    this.menu = menu;
    this.manager = manager;
    
    this.div = document.createElement('div');
    this.div.className = 'menu_button';
    this.img = document.createElement('img');
    this.img.src = this.src;
    this.img.className = 'menu_button';
    this.div.appendChild(this.img);
    
    this.helper = document.createElement('div');
    this.helper.className = 'helper';
    this.div.appendChild(this.helper);
    
    this.img.addEventListener('load', this.menu.addButtonDiv(this.div));
    this.hammertime = Hammer(this.div, hammer_config);
    this.hammertime.on('tap', this.onTap());
    
    this.img.addEventListener('load', this.menu.updateContainerWidth());
};

//TODO Sexier buttons

ImageMenuButton.prototype.onTap = function(){
    var that = this;
    return function(event){
        //TODO x, y, scale not hard coded
        that.tapRespond();
        that.manager.newImage(that.img, 50, 50, 1.0);
    };
};

ImageMenuButton.prototype.loaded = function(){
    var that = this;
    return function(e){
        that.div.appendChild(that.img);  
    };
};

ImageMenuButton.prototype.tapRespond = function(){
    this.img.style.bottom = 8;
    setTimeout(this.tapFinish(), 250);
};

ImageMenuButton.prototype.tapFinish = function(){
    var that = this;
    return function(e){
        that.img.style.bottom = 0;
    };
};

DrawingMenuButton = function(src, func){
    this.src = src;
    this.func = func;
};