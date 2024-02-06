import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Comp1Component,
    Pipe1Pipe
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [Comp1Component]
})
export class Module1Module { }
