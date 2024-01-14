import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResAddComponent } from './res-add.component';

describe('ResAddComponent', () => {
  let component: ResAddComponent;
  let fixture: ComponentFixture<ResAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
