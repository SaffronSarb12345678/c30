class Pig extends parent{

    constructor(x,y,width,height){
      
        super(x,y,width,height);
        this.image=loadImage("sprites/enemy.png")
        this.vis = 255
    
    
    }
    display(){
      //  console.log(this.body.speed)




        push()
if(this.body.speed<3){
    super.display()

}
else{
World.remove(myworld,this.body)
this.vis = this.vis-7.5
tint(255,this.vis)
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

}

pop()
  
 }
    
    
    }