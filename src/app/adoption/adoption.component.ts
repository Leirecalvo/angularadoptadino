import { Component, OnInit } from '@angular/core';
import { Adoption } from '../adoption';
import { AdoptionService } from '../adoption.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Dinosaur } from '../dinosaur';
import { DinosaurService } from '../dinosaur.service';
import { TypedinoService } from '../typedino.service';
import { Typedino } from '../typedino';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  constructor(public AdoptionService:AdoptionService, public DinosaurService:DinosaurService, public UserService:UserService, public TypedinoService:TypedinoService) { }

  ngOnInit(): void {
    this.getDataUserId(this.id);
    this.getDataAdoptionId(this.adoptionId);
    this.getDataTypedino();
  }

  objectA:Adoption={id: 0, userId:0, dinosaurId:0}

  adoptionId = JSON.parse(JSON.stringify(localStorage.getItem('adoptionId')));
  getDataAdoptionId(id:number):void{
    this.AdoptionService.getAdoptionId(id).subscribe(data=>
      {
        this.objectA = data;
        this.getDataDinosaurId(this.objectA.dinosaurId);
      })
  }

  // TRAERME EL USUARIO
  objectU:User={id: 0, mail:"", password:"", name:"", surname:"",hasDino:""}
  id = JSON.parse(JSON.stringify(localStorage.getItem('userId')));
  getDataUserId(id:number):void{
    this.UserService.getUserId(id).subscribe(data=>
      {
        this.objectU = data;
      })
  }
  // TRAERME EL DINOSAURIO
  objectD:Dinosaur={id:0, name: "", adopted:"", photo:"", weight:"", typeDinoId:0}
  getDataDinosaurId(id:number):void{ 
    this.DinosaurService.getDinosaurId(id).subscribe(data=>
      {
        this.objectD = data;
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

}
