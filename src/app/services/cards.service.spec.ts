import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule 
      ],
      providers: [CardsService],
    });
    service = TestBed.get(CardsService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  
  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('#getCards return info', () => {

    service.getCards().subscribe(
      cards => expect(cards).not.toBeNull()
    );
    const req = httpTestingController.expectOne(service.getUrlApi());

    expect(req.request.method).toEqual('GET');
  });
});

