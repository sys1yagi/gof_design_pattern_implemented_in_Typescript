//Decorator Pattern

/** Conponent */
interface Shape{
  draw(context:CanvasRenderingContext2D, x:number, y:number): void;
  getImage(): ImageData;
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
  getImage(): ImageData{
    return null;
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
  getImage(): ImageData{
    return null;
  }
}

/** Decorator */
