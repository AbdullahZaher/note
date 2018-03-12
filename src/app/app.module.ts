import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// إستدعاء الملف
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PicsComponent } from './pages/pics/pics.component';

// إعداد الروت
const appRoutes : Routes=[
  {path:'', component:HomeComponent},
  {path:'notes', component:NotesComponent},
  {path:'pics', component:PicsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotesComponent,
    PicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // إضافة الروت في الاستدعاء
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
