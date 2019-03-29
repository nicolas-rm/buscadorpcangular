import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';

//Routing 
import { RouterModule, Routes } from '@angular/router';
import { BuscadorpcComponent } from './pages/buscadorpc/buscadorpc.component';


// Routes
const routes: Routes = [
  { path: '', component: BuscadorpcComponent , pathMatch: 'full' },
  { path: 'computadoras', component: ComputadorasComponent },
  { path: '**', component: BuscadorpcComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComputadorasComponent,
    BuscadorpcComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    // AngularFontAwesomeModule
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
