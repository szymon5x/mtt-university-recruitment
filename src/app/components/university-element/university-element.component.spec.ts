import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityElementComponent } from './university-element.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UniversityElementComponent', () => {
  let component: UniversityElementComponent;
  let fixture: ComponentFixture<UniversityElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityElementComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityElementComponent);
    component = fixture.componentInstance;
    component.university = {
      domains: ['wsb-nlu.edu.pl'],
      alpha_two_code: 'PL',
      country: 'Poland',
      web_pages: ['http://www.wsb-nlu.edu.pl/'],
      name: 'Higher School o Business/National Louis University(WSB/NLU) in Nowy Sacz'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
