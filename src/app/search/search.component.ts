import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { MovieSearch } from '../../interfaces/imdb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  SearchResults: MovieSearch[];
  query: string;

  constructor(private mainService: MainService) {}

  async search() {
    console.log(this.query);
    if (this.query.length < 1) return;

    this.mainService.fetchResults(this.query).subscribe((data) => {
      console.log(data);
      if (data.Response == 'False') {
        this.SearchResults = [];
      }
      this.SearchResults = data.Search;
    });

    // this.SearchResults = results;
  }
}
