import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    {'id' : 1, 'name': 'Action'},
    {'id' : 2, 'name': 'Adventure'},
    {'id' : 3, 'name': 'Fantasy'},
    {'id' : 4, 'name': 'Horror'},
    {'id' : 5, 'name': 'Racing'},
    {'id' : 6, 'name': 'Simulation'},
    {'id' : 7, 'name': 'Time management'},
    {'id' : 8, 'name': 'Fun'},
    {'id' : 9, 'name': 'Board'},
    {'id' : 10, 'name': 'Puzzles'},
    {'id' : 11, 'name': 'Brain teasers'},
    {'id' : 12, 'name': 'Hidden object'},

  ]
  public selectedId:any;
  constructor(private router : Router, private route: ActivatedRoute) { }

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params:ParamMap) => {
  //     let id = parseInt(params.get('id') as string);
  //     this.selectedId = id;
  //   })
  // }
  onselect(i:number) {
    switch(i) {
      case 1: this.router.navigate(['action'], {relativeTo:this.route});
      break;
      case 2: this.router.navigate(['adventure'], {relativeTo:this.route});
      break;
      case 3: this.router.navigate(['fantasy'], {relativeTo:this.route});
      break;
      case 4: this.router.navigate(['horror'], {relativeTo:this.route});
      break;
      case 5: this.router.navigate(['racing'], {relativeTo:this.route});
      break;
      case 6: this.router.navigate(['simulation'], {relativeTo:this.route});
      break;
      case 7: this.router.navigate(['time-management'], {relativeTo:this.route});
      break;
      case 8: this.router.navigate(['fun'], {relativeTo:this.route});
      break;
      case 9: this.router.navigate(['board'], {relativeTo:this.route});
      break;
      case 10: this.router.navigate(['puzzle'], {relativeTo:this.route});
      break;
      case 11: this.router.navigate(['brain-teaser'], {relativeTo:this.route});
      break;
      case 12: this.router.navigate(['hidden-object'], {relativeTo:this.route});
      break;
    }
  }
}
