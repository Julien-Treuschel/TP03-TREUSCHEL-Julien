import { Component, OnInit } from '@angular/core';
import {BackendServiceService} from '../backend-service.service';
import {Observable,of,from} from 'rxjs';
import {filter} from 'rxjs/operators';
import { Output } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor(private backendServiceService : BackendServiceService) { }

  @Output() observable5Modif$: Observable<any>;
  
  observable1$ : Observable<string>;
  observable5$ : Observable<any> = null;

  tabData : Array<String> = [];
  subscribe : any;
  
  ngOnInit(): void {
  }

  onClickBackeng () {
    this.observable5$ = this.backendServiceService.getCatalogue ();
  }

}
