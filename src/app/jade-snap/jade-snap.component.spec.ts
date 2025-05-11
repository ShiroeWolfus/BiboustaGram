import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JadeNapComponent } from './jade-snap.component';

describe('JadeNapComponent', () => {
  let component: JadeNapComponent;
  let fixture: ComponentFixture<JadeNapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JadeNapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JadeNapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
