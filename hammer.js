class hammer{
    constructor(x,y){
        var option = {restitution:0.5,friction:1,density:2}
        this.body = Bodies.rectangle(x,y,50,150,option)
        this.w = 50
        this.h = 150
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        pos.x = mouseX
        pos.y = mouseY
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop();

    }
    
    }
    