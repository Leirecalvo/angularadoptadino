import { Component, OnInit } from '@angular/core';
import { TypedinoService } from '../typedino.service';
import { Typedino } from '../typedino';
import { Adoption } from '../adoption';
import { AdoptionService } from '../adoption.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Dinosaur } from '../dinosaur';
import { DinosaurService } from '../dinosaur.service';

@Component({
  selector: 'app-dinodetails',
  templateUrl: './dinodetails.component.html',
  styleUrls: ['./dinodetails.component.css']
})
export class DinodetailsComponent implements OnInit {

  constructor(public DinosaurService:DinosaurService, public TypedinoService:TypedinoService, public AdoptionService:AdoptionService, public UserService:UserService) { }

  ngOnInit(): void {
    this.getDataTypedino();
    this.getDataDinosaurId(this.dinosaurId);
  }

  objectU:User={id: 0, mail:"", password:"", name:"", surname:"",hasDino:""}
  id = JSON.parse(JSON.stringify(localStorage.getItem('userId')));
  getDataUserId(id:number):void{
    this.UserService.getUserId(id).subscribe(data=>
      {
        this.objectU = data;
        this.us = data;
      })
  }
 
  objectD:Dinosaur={id:0, name: "", adopted:"", photo:"", weight:"", typeDinoId:0}
  dinosaurId = JSON.parse(JSON.stringify(localStorage.getItem('dinosaurId')));
  getDataDinosaurId(id:number):void{ 
    this.DinosaurService.getDinosaurId(id).subscribe(data=>
      {
        this.objectD = data;
        this.di = data;
      })
  }

  objectTy?:Typedino[];

  getDataTypedino():void{
    this.TypedinoService.getTypedino().subscribe(data=>
     {
        this.objectTy = data;
     })
  }

  hasDino = JSON.parse(JSON.stringify(localStorage.getItem('hasDino')));
  ad:Adoption={id: 0, dinosaurId: this.dinosaurId, userId:this.id}
  postDataAdoption():void{
    if(this.id === null){
      alert("No puedes adoptar sin iniciar sesión.");
    }
    else if(this.hasDino === "'Yes'"){
      alert("No puedes adoptar si ya tienes un dino.");
    }
    else{
      this.AdoptionService.postAdoption(this.ad).subscribe();
    }
  }
  di:Dinosaur={id:-1, name:'', adopted:'', photo:'', weight:'', typeDinoId:-1}
  putDataDinosaur(id:number):void{
    if(this.id !== null || this.hasDino === "No"){
      localStorage.setItem('hasDino', JSON.stringify('Yes'));
      this.di.adopted = "Yes"
      this.DinosaurService.putDinosaur(id, this.di).subscribe();
    }else{}
  }
  us:User={id: -1, mail:"", password:"", name:"", surname:"", hasDino:""}
  putDataUser(id:number):void{
    if(this.id !== null || this.hasDino === "No"){
      this.us.hasDino = "Yes"
      this.UserService.putUser(id, this.us).subscribe();
    }else{}
  }
}