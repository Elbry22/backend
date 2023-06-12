import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AboutSectionComponent } from './components/home/about-section/about-section.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { BrandsComponent } from './components/home/brands/brands.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { GallreyComponent } from './components/home/gallrey/gallrey.component';
import { BookComponent } from './components/home/book/book.component';
import { NewslatterComponent } from './components/home/newslatter/newslatter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './components/messages/messages.component';
import { ReplyComponent } from './components/reply/reply.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutSectionComponent,
    BannerComponent,
    BrandsComponent,
    MenuComponent,
    GallreyComponent,
    BookComponent,
    NewslatterComponent,
    ContactUsComponent,
    MessagesComponent,
    ReplyComponent
    

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
