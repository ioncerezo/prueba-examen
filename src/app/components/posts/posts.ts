import { Component } from '@angular/core';
import { PostService } from '../../services/post-service';
import { IPost } from '../../models/ipost';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  public posts: IPost[] = [];
  public filteredPosts: IPost[] = [];
  public loading: boolean = true;
  public error: boolean = false;

  constructor(
    private postService: PostService,
    private cd: ChangeDetectorRef,
  ) {
    postService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = this.obtenerDatos(data);
        this.filteredPosts = [...this.posts].slice(0, 10);
        this.error = false;
        this.loading = false;
        cd.detectChanges();
      },
      error: (error) => {
        console.error(error);
        this.error = true;
        this.loading = false;
        cd.detectChanges();
      },
    });
  }

  obtenerDatos(data: any): IPost[] {
    return data.map((post: any): IPost => {
      return { userId: post.userId, id: post.id, title: post.title, body: post.body };
    });
  }

  eliminarPost(evento: Event){
    let id: number = Number((evento.target as HTMLInputElement).id);
    this.postService.deletePost(id).subscribe({
      next: (data) => {
        alert("eliminado correctament");
        this.filteredPosts = this.filteredPosts.filter((post) => post.id != id);
        this.cd.detectChanges()
      },
      error: (error) => console.error(error)
    })
  }
}
