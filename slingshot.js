class slingshot{

constructor(obj1,point){

    var options={
        bodyA:obj1,
        pointB:point,
        length:50,
        stiffness:0.04
      }
      
      
      this.sling=Constraint.create(options)
      World.add(myworld,this.sling)
      this.img1=loadImage("sprites/sling1.png")
      this.img2=loadImage("sprites/sling2.png")
      this.img3=loadImage("sprites/sling3.png")
  
      

      
      
      

}


display(){
image(this.img1,200,160,0,0)
image(this.img2,170,160,0,0)
push()
strokeWeight(10)
if(this.sling.bodyA!=null){

if(this.sling.bodyA.position.x<=200){

stroke(48,22,8)
line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.sling.pointB.x-20,this.sling.pointB.y+45)
line(this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.sling.pointB.x+20,this.sling.pointB.y+45)
image(this.img3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,20)
}
if(this.sling.bodyA.position.x>200){

  stroke(48,22,8)
  line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.sling.pointB.x-20,this.sling.pointB.y+45)
  line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.sling.pointB.x+20,this.sling.pointB.y+45)
  image(this.img3,this.sling.bodyA.position.x+30,this.sling.bodyA.position.y-10,15,20)
  }
  


}   

pop()


}

fly() {
  this.sling.bodyA = null 
}
attach(body){
  this.sling.bodyA=body
}


}














