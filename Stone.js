class Stone{
	constructor(x,y,width,height)
	{
	var options={
		"restitution" : 0.5,
		"friction" : 3,
		"density" : 30
	}
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 30;
    this.height = 50;
    World.add(world, this.body);	
	}
	display()
	{
		var pos = this.body.position;
		
		var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
			fill('brown')
			rectMode(CENTER)
			rect(0, 0, this.width, this.height);
			pop();
			pop()
	}

}