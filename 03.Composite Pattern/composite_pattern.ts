//Composite Pattern

//component
interface Component{
  add(child:Component):bool;
  remove(child:Component):bool;
  getChildren():Component[];
  getName():string;
  isItem():bool;
}
//leaf
class Item implements Component {
  constructor(private name: string){

  }
  add(child:Component):bool{
    throw new Error("this object is Item.");
  }
  remove(child:Component):bool{
    throw new Error("this object is Item.");
  }
  getChildren():Component[]{
    throw new Error("this object is Item.");
  }
  getName():string{
    return this.name;
  }
  isItem():bool{
    return true;
  }
}
//composite
class Directory implements Component{
  items:Component[];
  constructor(private name: string){
    this.items = new Array();
  }
  add(child:Component):bool{
    this.items.push(child);
    return true;
  }
  remove(child:Component):bool{
    for (var i : number = this.items.length - 1; i >= 0; i--) {
      if(this.items[i].getName() === child.getName()){
        this.items.splice(i, 1);
        i++;
      }
    }
    return true;
  }
  getChildren():Component[]{
    return this.items;
  }
  getName():string{
    return this.name;
  }
  isItem():bool{
    return false;
  }
}


