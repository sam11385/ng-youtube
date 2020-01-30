import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';






const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchForm: FormGroup;
  results: Observable<{}>;
  title = 'NG Youtube';
  //isDataLoaded = false;

  constructor(private formBuilder: FormBuilder, private http: Http) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });

    this.results = this.searchForm.controls.search.valueChanges
      .filter(value => value.length > 2)
      .debounceTime(500)
      //use distictUntilChanged: Only emit when the current value is different than the last.
      .distinctUntilChanged()
      //use Switchmap: it works perfect for scenarios like typeaheads
      //where you are no longer concerned with the response of the previous request when a new input arrives.
      .switchMap(searchTerm =>
        this.http.get(
          `${API_URL}?q=${searchTerm}&key=${API_KEY}&maxResults=20&part=snippet&type=video`
        )
      )
      .map(res => res.json().items);
  }
}
