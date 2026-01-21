import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.url + '/' + id);
  }

  createPost(post: IPost) : Observable<any> {
    return this.http.post<IPost>(this.url, post);
  }

  updatePost(id: number, post: IPost): Observable<any> {
    return this.http.put<IPost>(this.url + '/' + id, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
