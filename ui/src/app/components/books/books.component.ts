import {Component, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  sortBy: string;
  filterValue: number;
  readonly filterValueKey = 'filterValue';
  readonly sortByKey = 'sortBy';
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getAllBooks().subscribe(
      res => this.books = res,
      error => console.error(error),
      () => {
        if (this.books) {
          this.filterAndSort();
        }
      }
    );
  }
  onKeyup($event) { // debounce should be implemented if it do the web api call
    localStorage.setItem(this.filterValueKey, $event.target.value);
    this.filterAndSort();
  }
  onSelect($event) {
    localStorage.setItem(this.sortByKey, $event.target.value);
    this.filterAndSort();
  }
  reset() {
    localStorage.setItem(this.sortByKey, 'pages');
    localStorage.setItem(this.filterValueKey, '0');
    this.filterAndSort();
  }
  filterAndSort() {
    this.filterValue = parseInt(localStorage.getItem(this.filterValueKey) || '0');
    this.sortBy = localStorage.getItem(this.sortByKey) || 'pages';
  }
  @HostListener('window:keydown', ['$event'])
  onKeyPress($event) {
    if ($event.altKey && $event.keyCode == 82) {
      // console.log('alt + r');
      this.reset();
    }
  }
}

