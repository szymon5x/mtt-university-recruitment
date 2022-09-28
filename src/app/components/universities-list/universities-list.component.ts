import { Component, OnInit } from '@angular/core';
import { UniversitiesDataService } from '../../services/universities-data.service';
import { Observable } from 'rxjs';
import { University } from '../../interfaces/university';

@Component({
  selector: 'app-universities-list',
  templateUrl: './universities-list.component.html',
  styleUrls: ['./universities-list.component.scss']
})
export class UniversitiesListComponent implements OnInit {
  universities$?: Observable<University[]>;

  constructor(private universitiesData: UniversitiesDataService) {}

  ngOnInit(): void {
    this.universities$ = this.universitiesData.filterByCountry('Poland');
    // this.universities$ = this.universitiesData.fetchData();

    const one = ['1', '2', '3', '4', '5'];
    const two = ['6', '7', '2', '8', '5'];
  }
}
