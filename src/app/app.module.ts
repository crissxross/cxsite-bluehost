import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { MaterialModule } from './material.module';
import { ShowcaseModule } from './showcase/showcase.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ShowcaseModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

