import { Component, OnInit } from '@angular/core';
import {BackendServiceService} from '../backend-service.service';
import {Observable,of,from} from 'rxjs';
import {filter} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() ob5$: Observable<any>;
  filter = new FormControl('');

}
