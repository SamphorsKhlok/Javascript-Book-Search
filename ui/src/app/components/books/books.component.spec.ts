import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import {FilterPipe} from '../../pipes/filter.pipe';
import {BookComponent} from '../book/book.component';
import {Book} from '../../model/book';
import {ApiService} from '../../services/api.service';
import {HttpClientModule} from '@angular/common/http';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
      ],
      declarations: [
        BooksComponent,
        FilterPipe,
        BookComponent
      ],
      providers:[ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Books Compo', () => {
    expect(component).toBeTruthy();
  });

  it('should create web api service', () => {
    const apiService = fixture.debugElement.injector.get(ApiService);
    expect(apiService).toBeTruthy();
  });

  it('should get response from web api service', () => {
    const apiService = fixture.debugElement.injector.get(ApiService);
    apiService.getAllBooks().subscribe((res: Book[]) => {
      expect(res.length).toBeGreaterThanOrEqual(6);
    });
  });

  it('should render book list', () => {
    const apiService = fixture.debugElement.injector.get(ApiService);
    let spy = spyOn(apiService, 'getAllBooks')
      .and.returnValue(Promise);
    fixture.detectChanges();
    fixture.whenStable().then((res: Book[]) => {
      const elements = fixture.debugElement.nativeElement;
      expect(elements.querySelector('app-book')[0].innerHTML.textContent).toContain('Release Date:');
    });
  });
});
