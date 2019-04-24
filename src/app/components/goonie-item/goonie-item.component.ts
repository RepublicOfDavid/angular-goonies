import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goonie } from 'src/app/models/Goonie';

@Component({
  selector: 'app-goonie-item',
  templateUrl: './goonie-item.component.html',
  styleUrls: ['./goonie-item.component.css']
})
export class GoonieItemComponent implements OnInit {

  @Input() goonie: Goonie;
  @Output() deleteGoonie: EventEmitter<Goonie> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //The method that is called to delete the goonie
  onDelete(goonie) {
    this.deleteGoonie.emit(goonie);
  }

}
