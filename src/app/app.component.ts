import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCRJqo_zdv1gDIsSkczJOFTnKcm2coSWEA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchForm: FormGroup;
  results: Observable<{}>;

  constructor(private formBuilder: FormBuilder, private http: Http) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });

    this.results = this.searchForm.controls.search.valueChanges
      .filter(value => value.length > 2)
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(query =>
        this.http.get(
          `${API_URL}?q=${query}&key=${API_KEY}&maxResults=20&part=snippet&type=video`
        )
      )
      .map(res => res.json().items);
  }
}
