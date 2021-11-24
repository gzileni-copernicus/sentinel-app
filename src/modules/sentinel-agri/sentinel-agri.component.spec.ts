import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentinelAgriComponent } from './sentinel-agri.component';

describe('SentinelAgriComponent', () => {
  let component: SentinelAgriComponent;
  let fixture: ComponentFixture<SentinelAgriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentinelAgriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentinelAgriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
