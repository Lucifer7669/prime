import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ToastModule } from 'primeng/toast';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.state';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(appReducer),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    HttpClientModule,
    MenubarModule,
    MessagesModule,
    AccordionModule,
    TabViewModule,
    CardModule,
    TabMenuModule,
    MessageModule,
    TagModule,
    TableModule,
    ButtonModule,
    PasswordModule,
    ToastModule,
    ImageModule,
    DialogModule,
    InputMaskModule,
    ChipsModule,
    SidebarModule,
    CascadeSelectModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    FieldsetModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
