import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_helpers/in-memory-data.service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service';
import { HeroService } from './_services/hero.service';
import { QuestService } from './_services/quest.service';
import { UserService } from './_services/user.service';

import { MyAlertComponent } from './_directives/my-alert.component'
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { QuestsComponent } from './quests/quests.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginStatusComponent } from './_directives/login-status.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAlertComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    QuestsComponent,
    LoginComponent,
    RegisterComponent,
    LoginStatusComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    // loading & configuring the in-memory web api
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    AppRoutingModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    HeroService, 
    QuestService,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
