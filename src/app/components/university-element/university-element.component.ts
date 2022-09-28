import { Component, Input } from '@angular/core';
import { University } from '../../interfaces/university';

@Component({
  selector: 'app-university-element',
  templateUrl: './university-element.component.html',
  styleUrls: ['./university-element.component.scss']
})
export class UniversityElementComponent {
  @Input() university!: University;
}
