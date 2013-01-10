//Composite Pattern

//component
interface Component{
	add(child:Component):bool;
	remove(child:Component):bool;
	getChild():Component[];
	getName():string;
	isItem():bool;
}
//leaf
class Item implements Component {
	constructor(private name: string){

	}
	add(child:Component):bool{
		return false;
	}
	remove(child:Component):bool{
		return false;
	}
	getChild():Component[]{
		return null;
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
	items:Item[];
	constructor(private name: string){

	}
	add(child:Component):bool{
		return false;
	}
	remove(child:Component):bool{
		return false;
	}
	getChild():Component[]{
		return null;
	}
	getName():string{
		return this.name;
	}
	isItem():bool{
		return false;
	}
}


