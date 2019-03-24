import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Setting} from '../config/setting.enum';
import { Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<Book[]>(Setting.BASE_URL);
  }
}
