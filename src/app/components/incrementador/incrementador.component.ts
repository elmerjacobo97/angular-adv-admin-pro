import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  // @Input('valor') progress: number = 20;
  @Input() progress: number = 20;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valorSalida.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value < 0) {
      this.valorSalida.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + value;
    return this.valorSalida.emit(this.progress);
  }

  onChange(newValor: number) {
    if (newValor >= 100) {
      this.progress = 100;
    } else if (newValor <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValor;
    }
    this.valorSalida.emit(this.progress);
  }
}
