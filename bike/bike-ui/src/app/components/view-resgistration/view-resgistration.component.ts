import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view-resgistration',
  templateUrl: './view-resgistration.component.html',
  styleUrls: ['./view-resgistration.component.css']
})
export class ViewResgistrationComponent implements OnInit {

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }
  public bikeReg;

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data => {this.bikeReg = data},
      err=> console.log(err),
      ()=> console.log('bikes loaded')
    );
  }
}
