import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() nombre!: string;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges');
    // console.log(changes);
  }

  ngOnInit(): void {}
}
