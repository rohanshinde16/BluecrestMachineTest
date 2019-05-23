import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AddupdatepopupComponent } from './addupdatepopup/addupdatepopup.component';
import { TableviewComponent } from './tableview/tableview.component';
import { InfoService } from './shared/info.service';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './topmenu/topmenu.component';



@NgModule({
  declarations: [
    AppComponent,
    AddupdatepopupComponent,
    TableviewComponent,
    HomeComponent,
    TopmenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
