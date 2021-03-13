class Stone
{
    constructor()
    {
        var stoneOptions = {
            density:1,
            restitution:0.2,
            isStatic:true
        }
        this.x = 230;
        this.y = 435;
        this.radius = 20;
        this.stone = Bodies.circle(230,435,20,stoneOptions);
        this.image = loadImage("images/stone.png");
        World.add(world,this.stone);
    }

    display()
    {
        var pos = this.stone.position;
        var angle = this.stone.angle;
        
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        image(this.image,0,0,20,20);
        pop();
    }
}