import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InfoProductComponent } from './info-product.component';
import { InfoProductModule } from './info-product.module';
import { CardsService } from 'src/app/services/cards.service';

describe('InfoProductComponent', () => {
  let component: InfoProductComponent;
  let fixture: ComponentFixture<InfoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        InfoProductModule
      ],
      providers: [CardsService],
      declarations: [  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Get info', () => {
    const h1 = fixture.nativeElement.querySelector('.text-title-adicional .color');
    expect(h1.innerHTML).toBe('$6,000,000');
    expect(h1.innerHTML).not.toBe('');
  });
  
});
