//States Class
//https://www.w3schools.com/js/js_classes.asp

class State {

  name;
  deltaX;
  deltaY;
  rotation;


    //Default Constructor
    constructor(stateName, deltaX, deltaY, rotation) {
      this.name = stateName;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.rotation = rotation;
    }

    //Retrieve Name
    getname(){
        return this.name;
    }

    //Retrieve Equation
    getdeltaX(){
        return this.deltaX;
    }

    getdeltaY(){
      return this.deltaY;
  }

  getrotation(){
    return this.rotation;
}

  toString(){
    return ("State: "+ this.name + " dX: "+this.deltaX+ " dY: "+ this.deltaY+ " Rotation: "+ this.rotation);
  }
  }
