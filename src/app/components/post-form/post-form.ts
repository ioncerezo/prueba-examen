import { Component } from '@angular/core';
import { IPost } from '../../models/ipost';
import { form } from '@angular/forms/signals';
import { PostService } from '../../services/post-service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm {
  public formValido: boolean = false;
  public feedback: string = '';
  public formulario: IPost;
  constructor(
    private postService: PostService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.formulario = {
      userId: 0,
      title: '',
      body: '',
    };
  }

  crearPost() {
    this.postService.createPost(this.formulario).subscribe({
      next: (data) => {
        alert('Usuario Creado\n' + JSON.stringify(data));
        this.router.navigate(['/home']);
      },
      error: (error) => console.error(error),
    });
  }
  validarForm() {
    if (this.formulario.title.trim().length > 5 && this.formulario.body.trim().length > 0 && this.formulario.userId > 0) {
      this.formValido = true;
      this.feedback = '';
    } else {
      this.formValido = false;
      this.feedback = 'El Título es obligatorio y debe tener al menos 5 caracteres.\nEl Contenido es obligatorio.\nEl ID de Usuario debe estar seleccionado.';
    }
    this.cd.detectChanges();
  }
}
