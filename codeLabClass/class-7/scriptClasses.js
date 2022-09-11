// this
// object
// constructor...initial arguments
class Car {
    // methods
    constructor(name, color, topSpeed){
        // properties
        this.name = name
        this.color = color
        this.speed = topSpeed
        this.currentSpeed = 0;
    }
  zeroToSixty() {
    // ????? format??
    setTimeout(() => {
      console.log('pHEW! That was fast!')
      this.currentSpeed = 60;
      console.log(this.currentSpeed)
    })
  }
  drive() {
    // console.log('just drove 2 miles!')
    this.currentSpeed += 10
    console.log(`driving speed at ${this.currentSpeed} mph`)
  }
  break()  {
    console.log('Slowing down...')
    this.currentSpeed -= 10;
  }
  stop() {
    console.log('Stop the car!')
    this.currentSpeed == 0;
  }
}

// variables
const ferrari = new Car('ferrari', 'red', 250 );
const porsche = new Car('porsche', 'purple', 240)

// console.log(ferrari.currentSpeed)
// console.log(ferrari.color)
// console.log(ferrari)

// ferrari.drive()
// ferrari.break()
// ferrari.drive()

// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()
// ferrari.break()
// ferrari.stop()
// console.log(ferrari.currentSpeed)

porsche.drive()