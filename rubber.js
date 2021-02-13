class rubber{
    constructor(x,y){
        var option = {restitution:0.5,friction:0.3,density:1}
        this.body = Bodies.circle(x,y,radius,options)
       // this.radius = radius
        
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
       
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipesMode(CENTER)
        fill("red")
        circle(0,0,this.radius)
        pop();

    }
    
    }
    