import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ScoringAdminComponent } from './scoring-admin/scoring-admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShabComponent } from './shab/shab.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth"
import{ initializeApp} from 'firebase/app';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ScoringAdminComponent,
    SidenavComponent,
    ShabComponent,
    LoginComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.
    initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
