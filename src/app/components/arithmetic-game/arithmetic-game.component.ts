import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-arithmetic-game',
  templateUrl: './arithmetic-game.component.html',
  styleUrls: ['./arithmetic-game.component.css']
})
export class ArithmeticGameComponent implements OnInit {

  equation = ''
  firstNumber
  secondNumber
  counter = 0

  constructor() {
  }

  ngOnInit() {
    this.buildRandomEquation()
  }

  buildRandomEquation() {
    this.firstNumber = Math.floor((Math.random() * 10) + 10)
    this.secondNumber = Math.floor((Math.random() * 10) + 10)
    this.equation = this.firstNumber + ' * ' + this.secondNumber + ' = '
  }

  onKey(event: any) { // without type info
    const result = parseInt(event.target.value)
    const multiply = this.firstNumber * this.secondNumber
    if (result === multiply) {
      this.counter++
      this.buildRandomEquation()
      event.target.value = null
    }
  }

}
