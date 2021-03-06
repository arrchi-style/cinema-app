import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

import { TodayMovieComponent } from './components/home/today-movie/today-movie.component';
import { MovieService } from './components/movie.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'slider', component: SliderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    MoviesComponent,
    ContactsComponent,
    SliderComponent,
    TodayMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
