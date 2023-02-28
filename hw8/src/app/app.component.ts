import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts!: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }
}
