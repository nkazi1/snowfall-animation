class snow {
    constructor(x,y,r) {
        var options ={
            restitution:1
        }
        this.r=r
        this.body=Bodies.circle(x,y,this.r,options)
        World.add (world,this.body)
    }
    display () {
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        imageMode (CENTER)
        fill ("white")
        ellipse (CENTER)
        ellipse(0,0,this.r)
        pop ()
    }
}