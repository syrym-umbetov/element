import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../types';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  @Input() id!: number;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  comments!: Observable<Comment[]>;

  ngOnInit(): void {
    this.getComments(this.id);
  }

  getComments(postId: number) {
    let params = new HttpParams().set('postId', postId);
    this.comments = this.http.get<Comment[]>(this.ROOT_URL + '/comments', {
      params,
    });
  }
}
