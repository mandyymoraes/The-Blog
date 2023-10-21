import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftCardComponent } from './components/left-card/left-card.component';
import { RightCardComponent } from './components/right-card/right-card.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleComponent,
    HomeComponent,
    LeftCardComponent,
    RightCardComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
