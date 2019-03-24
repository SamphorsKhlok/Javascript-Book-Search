import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = new Book();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(book: Book) {
    this.dialog.open(DialogComponent, {
      data: book
    });
  }

}
