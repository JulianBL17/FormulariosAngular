import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas//
import { APP_ROUTING } from './app.routes';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
