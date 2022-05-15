import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dinosaurs', component: DinosaurComponent},
  {path: 'register', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/:id', component: UserdetailsComponent},
  {path: 'dinosaur/:id', component: DinodetailsComponent},
  {path: 'adoption/:id', component: AdoptionComponent},
  {path: '', component: IndexComponent},
  {path: '**', component: NotfoundComponent}
]

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { DinosaurComponent } from './dinosaur/dinosaur.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { TypedinoComponent } from './typedino/typedino.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { IndexComponent } from './index/index.component';
import { DinodetailsComponent } from './dinodetails/dinodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    UserComponent,
    DinosaurComponent,
    AdoptionComponent,
    TypedinoComponent,
    LoginComponent,
    UserdetailsComponent,
    IndexComponent,
    DinodetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
