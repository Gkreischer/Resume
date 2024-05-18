import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideClientHydration } from '@angular/platform-browser';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { BannerComponent } from './_components/banner/banner.component';
import { ToolsComponent } from './_components/tools/tools.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { ContactComponent } from './_components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperienceComponent } from './_components/experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChunkPipe } from './_pipes/chunk-pipe.pipe';
import { ParallaxDirective } from './_directives/parallax.directive';
import { ServicesComponent } from './_components/services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ToolsComponent,
    ProjectsComponent,
    ContactComponent,
    ExperienceComponent,
    ChunkPipe,
    ParallaxDirective,
    ServicesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, CollapseModule.forRoot(), CarouselModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    ChunkPipe
  ]
})
export class AppModule {}
