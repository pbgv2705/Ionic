import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarreiraUnicaPage } from './carreira-unica.page';

describe('CarreiraUnicaPage', () => {
  let component: CarreiraUnicaPage;
  let fixture: ComponentFixture<CarreiraUnicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreiraUnicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarreiraUnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
