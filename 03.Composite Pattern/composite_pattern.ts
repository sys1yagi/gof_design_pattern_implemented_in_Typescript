interface Component{
	add(child:Component):bool;
}
class Item implements Component {
	add(child:Component):bool{
		return false;
	}
}
class Directory implements Component{
	add(child:Component):bool{
		return false;
	}
}