import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public currentId: number | undefined;
  constructor(private route : ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.currentId = parseInt(params.get('id') as string);
    })
  }
}
