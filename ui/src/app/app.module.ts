import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent} from './components/books/books.component';
import { ErrorComponent } from './components/error/error.component';
import { BookComponent} from './components/book/book.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApiService} from './services/api.service';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogComponent} from './components/dialog/dialog.component';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ErrorComponent,
    BookComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
