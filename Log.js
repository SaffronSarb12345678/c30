class Log extends parent{

    constructor(x,y,width,height,angle){
       
        super(x,y,width,height,angle);
          
          
         
          Matter.Body.setAngle(this.body,angle)
    
          this.image=loadImage("sprites/wood2.png")
          
    
    }
    
   
    
    }