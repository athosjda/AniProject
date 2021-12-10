import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeResultComponent } from './anime-result.component';

describe('AnimeResultComponent', () => {
  let component: AnimeResultComponent;
  let fixture: ComponentFixture<AnimeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
