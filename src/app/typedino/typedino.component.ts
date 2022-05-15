import { Component, OnInit } from '@angular/core';
import { Typedino } from '../typedino';
import { TypedinoService } from '../typedino.service';

@Component({
  selector: 'app-typedino',
  templateUrl: './typedino.component.html',
  styleUrls: ['./typedino.component.css']
})
export class TypedinoComponent implements OnInit {

  constructor(public TypedinoService:TypedinoService) { }

  ngOnInit(): void {
    this.getDataTypedino();
  } 

  objectTy?:Typedino[];

  getDataTypedino():void{
    this.TypedinoService.getTypedino().subscribe(data=>
     {
        this.objectTy = data;
        console.log(data);
     })
  }
}