//Decorator Pattern

/** Conponent */
interface Animation{
  move(world:World, rect:Rect):void;
}
class LinearAnimation implements Animation{
  constructor(public speed:number, public isHorizontal:bool=true){}
  moveHorizontal(world:World, rect:Rect):void{

    var offset = 0;
    if(this.speed > 0){
      offset = rect.w;
    }

    if(world.width <= rect.x+this.speed+offset){
      rect.x = world.width-offset;
      this.speed=-this.speed;
    }
    else if(0 >= rect.x+this.speed+offset){
      rect.x = 0;
      this.speed=-this.speed; 
    }
    else{
      rect.x += this.speed;
    }
  }
  moveVertical(world:World, rect:Rect):void{

  }
  move(world:World, rect:Rect):void {
    if(this.isHorizontal){
      this.moveHorizontal(world, rect);
    }
    else{
      this.moveVertical(world, rect);
    }
  }
}
class CircleAnimation implements Animation{
  constructor(public speed:number){}
  move(world:World, rect:Rect):void {

  }
}
/** Decorator */
class Decorator implements Animation{
  constructor(public animation:Animation){}
  move(world:World, rect:Rect):void {
    throw new Error("not yet implemented.");
  } 
}
class Wave extends Decorator{
  private counter:number;
  public a:number;
  constructor(public animation:Animation){
    super(animation);
  }

  wave(world:World, rect:Rect, diff:Rect){
    //ここで移動方向を検出する
    if(diff.x > 0){

    }


  }

  move(world:World, rect:Rect):void {
    var diff:Rect = new Rect();
    diff.x = rect.x;
    diff.y = rect.y;
    diff.w = rect.w;
    diff.h = rect.h;
    this.animation.move(world, rect);
    diff.x -= rect.x;
    diff.y -= rect.y;
    diff.w -= rect.w;
    diff.h -= rect.h;
    this.wave(world, rect, diff);
  }
}

//data
class World{
  public width:number;
  public height:number;
  constructor(width:number=0, height:number=0){
    this.width = width;
    this.height = height;
  }  
}
class Rect{
  public x:number;
  public y:number;
  public w:number;
  public h:number;
  constructor(x:number=0, y:number=0, w:number=10, h:number=10){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
  }
}