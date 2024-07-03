import { Component, OnInit } from '@angular/core';
import { gymService } from '../gymService';
import { GymServiceService } from '../gym-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
services: gymService[] = [];
  constructor(private service: GymServiceService) {}
  ngOnInit(): void {
    this.service.getServices().subscribe((res)=>this.services=res);
  }

}
