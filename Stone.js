class Stone
{
    constructor(x,y,width,height)
    {
        var options=
        {
            isStatic : false,
            restitution : 0.5,
            friction : 1.2,
            density : 1.5
        }
        this.image=loadImage("images/stone.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display()
    {
        var spos=this.body.position;
        translate(spos.x,spos.y);
        imageMode(CENTER);
        image(this.image,spos.x,spos.y,width,height);
    }
}