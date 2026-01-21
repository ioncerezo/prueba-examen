import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Posts } from './components/posts/posts';
import { PostForm } from './components/post-form/post-form';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'posts', component: Posts },
  { path: 'crear-post', component: PostForm },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
