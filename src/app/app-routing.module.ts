import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes,Router}from '@angular/router';
import{HomeComponent}from './home/home.component';
import{BlogComponent}from './blog/blog.component';
import{AboutComponent}from './about/about.component';
const routes:Routes=[
  {path: '' ,redirectTo: 'home',pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'about',component:AboutComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
