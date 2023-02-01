import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroduccionMarvelComponent } from './components/introduccion-marvel/introduccion-marvel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardMarvelComponent } from './components/card-marvel/card-marvel.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IntroduccionMarvelComponent,
    HeaderComponent,
    FooterComponent,
    CardMarvelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
