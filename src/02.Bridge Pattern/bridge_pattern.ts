//Bridge Pattern

/** Implementor */
interface Shape{
  draw(context:CanvasRenderingContext2D, x:number, y:number): void;
}
class Circle implements Shape{
  color:string;
  constructor(private r:number){
    this.color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
  draw(context:CanvasRenderingContext2D, x:number, y:number): void{
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(x, y, this.r, 0, Math.PI*2, false);
    context.fill();
  }
}
class Rect implements Shape{
  color:string;
  constructor(private width:number, private height:number){
    this.color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
  draw(context:CanvasRenderingContext2D, x:number, y:number): void{
    context.fillStyle = this.color;
    context.fillRect(x, y, this.width, this.height);
  }
}

/** Abstraction */
class Pattern{
  shapes:Shape[];
  constructor(){
    this.shapes = new Array();
  }
  add(shape:Shape){
    this.shapes.push(shape);
  }
  next(canvas:HTMLCanvasElement){
    var self = this;
    setTimeout(function(){
      var context = canvas.getContext("2d");
      context.fillStyle="#eeeeee";
      context.fillRect(0, 0, canvas.width, canvas.height);
      self.draw(canvas);
      self.next(canvas);
    }, 100);
  }
  draw(canvas:HTMLCanvasElement){
    throw new Error("not yet implemented.");
  }
}

class FlowPattern extends Pattern{
  movables: Bound[];
  constructor(){
    super();
    this.movables = new Array();
  }
  add(shape:Shape){
    super.add(shape);
    this.movables.push(new Bound(
      new Point(Math.random()*200,Math.random()*300),
      new Vector(1+Math.random()*10,0)
      ));
  }
  draw(canvas:HTMLCanvasElement){
    var context = canvas.getContext("2d");
    for(var i = 0; i < this.movables.length; i++){
      //move
      this.movables[i].move(canvas.width,canvas.height);
      this.shapes[i].draw(context, this.movables[i].point.x, this.movables[i].point.y);
    }
  }
}

class RandomPattern extends Pattern{
  movables: Bound[];
  constructor(){
    super();
    this.movables = new Array();
  }
  add(shape:Shape){
    super.add(shape);
    this.movables.push(new Bound(
      new Point(Math.random()*200,Math.random()*300),
      new Vector(1+Math.random()*10,1+Math.random()*10)
      ));
  }
  
  draw(canvas:HTMLCanvasElement){
    var context = canvas.getContext("2d");
    for(var i = 0; i < this.movables.length; i++){
      //move
      this.movables[i].move(canvas.width,canvas.height);
      this.shapes[i].draw(context, this.movables[i].point.x, this.movables[i].point.y);
    }
  }
}

/** utils */
class Vector{
  constructor(public x:number, public y:number){}
}
class Point{
  constructor(public x:number, public y:number){}
}
class Bound{
  constructor(public point:Point, public vector:Vector){}
  move(width:number, height:number){
    this.point.x += this.vector.x;
    if(this.vector.x > 0){
      if(this.point.x >= width){
        this.vector.x = -this.vector.x;
      }
    }
    else{
      if(this.point.x <= 0){
        this.vector.x = -this.vector.x;
      }
    }
    this.point.y += this.vector.y;
    if(this.vector.y > 0){
      if(this.point.y >= height){
        this.vector.y = -this.vector.y;
      }
    }
    else{
      if(this.point.y <= 0){
        this.vector.y = -this.vector.y;
      }
    }
  }
}



