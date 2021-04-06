class Birds extends parent{

    constructor(x,y,width,height){
        
          super(x,y,width,height);
          this.image=loadImage("sprites/bird.png")
          
    
    
    }
    
    display()
    {
        push()
       // this.body.position.x=mouseX
        //this.body.position.y=mouseY
        super.display();
        pop()
       
        
    }
    
    
    }