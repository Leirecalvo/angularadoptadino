import { Component, OnInit } from '@angular/core';
import { Dinosaur } from '../dinosaur';
import { DinosaurService } from '../dinosaur.service';
import { TypedinoService } from '../typedino.service';
import { Typedino } from '../typedino';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.css']
})
export class DinosaurComponent implements OnInit {

  constructor(public DinosaurService:DinosaurService, public TypedinoService:TypedinoService) { }

  ngOnInit(): void {
    this.getDataDinosaur();
    this.getDataTypedino();
  }

  objectDi?:Dinosaur[];

  getDataDinosaur():void{
    this.DinosaurService.getDinosaur().subscribe(data=>
    {
      this.objectDi = data;
      console.log(data);
    })
  }

  objectTy?:Typedino[];

  getDataTypedino():void{
    this.TypedinoService.getTypedino().subscribe(data=>
     {
        this.objectTy = data;
        console.log(data);
     })
  }

  getId(id:number){
    localStorage.setItem('dinosaurId', JSON.stringify(id));
  }
}