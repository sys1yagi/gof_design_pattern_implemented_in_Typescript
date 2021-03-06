module Log{
  export interface Logger{
    log(msg: string): void;
  }
  export enum TYPE{
    CONSOLE,
    ALERT,
    DISPLAY,
  }
  export class Factory{
    static createLogger(type:TYPE): Logger{
      switch(type){
      case TYPE.CONSOLE:
        return new ConsoleLogger();
      case TYPE.ALERT:
        return new AlertLogger();
      case TYPE.DISPLAY:
        return new DisplayLogger();
      }
      return null;
    }
  }
  class ConsoleLogger implements Logger{
    log(msg:string){
      console.log(msg);
    }
  }
  class AlertLogger implements Logger{
    log(msg:string){
      alert(msg);    
    }
  }
  class DisplayLogger implements Logger{
    display:HTMLDivElement;
    count:number;
    constructor(){
      this.count = 0;
      this.display = <HTMLDivElement>document.createElement("div");
      this.display.style.position="absolute";
      this.display.style.top="0px";
      this.display.style.right="0px";
      this.display.style.width="200px";
      this.display.style.background="#ddffdd";
      this.display.style.padding="10px";
      this.display.style.fontSize="10px";
      document.body.appendChild(this.display);
    }
    log(msg:string){
      if(this.count > 10){
        this.display.removeChild(this.display.childNodes[0]);
      }
      else{
        this.count++;
      }
      this.display.innerHTML += "<div>"+msg+"</div>";
    }
  }
}
