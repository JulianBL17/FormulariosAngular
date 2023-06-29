import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TemplateComponent } from "./components/template/template.component";


const App_Routes:Routes=[
{path:'home',component:HomeComponent,children:[
 {path:'navbar',component:NavbarComponent}   
]},
{path:'template',component:TemplateComponent} 
]

export const APP_ROUTING=RouterModule.forRoot(App_Routes)

