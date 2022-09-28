import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesListComponent } from './universities-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UniversitiesListComponent', () => {
  let component: UniversitiesListComponent;
  let fixture: ComponentFixture<UniversitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversitiesListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
