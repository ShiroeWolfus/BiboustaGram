import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaSnapComponent } from './alba-snap.component';

describe('AlbaSnapComponent', () => {
  let component: AlbaSnapComponent;
  let fixture: ComponentFixture<AlbaSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbaSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbaSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
