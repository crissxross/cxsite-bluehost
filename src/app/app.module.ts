import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdListModule } from '@angular2-material/list';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';

// import { ShowcaseModule } from './showcase/showcase.module';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { AboutComponent } from './about/about.component';
import { CollapseToggleDirective } from './shared/collapse-toggle.directive';
import { DataService } from './shared/data.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    AboutComponent,
    CollapseToggleDirective
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    // ShowcaseModule,
    routing
  ],
  providers: [DataService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
