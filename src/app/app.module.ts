import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ShowcaseModule } from './showcase/showcase.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
// import { CollapseToggleDirective } from './shared/collapse-toggle.directive';
import { DataService } from './shared/data.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // CollapseToggleDirective
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ShowcaseModule,
    routing
  ],
  providers: [DataService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}

// might be better to import a shared module if I need to use
// CollapseToggleDirective elsewhere besides ShowcaseModule
