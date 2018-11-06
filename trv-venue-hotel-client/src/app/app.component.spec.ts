import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookHotelComponent } from './app.component';

describe('BookHotelComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BookHotelComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookHotelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'trv-venue-hotel-client'`, () => {
    const fixture = TestBed.createComponent(BookHotelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('trv-venue-hotel-client');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BookHotelComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to trv-venue-hotel-client!');
  });
});
