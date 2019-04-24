import { Component, OnInit } from '@angular/core';
import { Goonie } from '../../models/Goonie';
import { GoonieService } from '../../services/goonie.service';

@Component({
  selector: 'app-goonies',
  templateUrl: './goonies.component.html',
  styleUrls: ['./goonies.component.css']
})
export class GooniesComponent implements OnInit {

  goonies:Goonie[]

  constructor(private goonieService:GoonieService) { }

  ngOnInit() {
    // Starting the call to get the list of goonies from the web api - calling in 'getGoonies' method from the service 
    this.goonieService.getGoonies().subscribe(goonies => {
      this.goonies = goonies;
    });
  }

  deleteGoonie(goonie:Goonie) {
    // Remove from user interface
    this.goonies = this.goonies.filter(t => t.id !== goonie.id);
    // Remove from server
    this.goonieService.deleteGoonie(goonie).subscribe();
  }

  addGoonie(goonie:Goonie) {
    this.goonieService.addGoonie(goonie).subscribe(goonie => {
      this.goonies.push(goonie);
    });
  }

}