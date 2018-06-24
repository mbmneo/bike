import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {BikeService} from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component'
import { HomeComponent } from './components/home/home.component';
import { ViewResgistrationComponent } from './components/view-resgistration/view-resgistration.component';
import { CallbackComponent } from './components/callback/callback.component'
import { AuthService } from './services/auth.service'
import { AuthGuard } from './services/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewResgistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BikeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
