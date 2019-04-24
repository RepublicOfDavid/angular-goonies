import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-goonie',
  templateUrl: './add-goonie.component.html',
  styleUrls: ['./add-goonie.component.css']
})
export class AddGoonieComponent implements OnInit {

  @Output() addGoonie: EventEmitter<any> = new EventEmitter();

  name:string;
  imgURL:string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const goonie = {
      name: this.name,
      //Set a default post image so the image doesn't error
      imgURL: 'https://raw.githubusercontent.com/RepublicOfDavid/goonies-cast-list-db/master/img/012.png'
    }

    this.addGoonie.emit(goonie)
  }



}
