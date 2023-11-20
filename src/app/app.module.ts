import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormComponent } from './form/form.component';
import { TwdatabindingComponent } from './twdatabinding/twdatabinding.component';
import { FormsModule } from '@angular/forms';
import { Directives1Component } from './directives1/directives1.component';
import { ProjectdirectivesComponent } from './projectdirectives/projectdirectives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { additem } from './Todo/additem/additem.component';
import { showlist } from './Todo/showlist/showlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter/filter.component';
import { ContainerComponent } from './container/container.component';0
import { myCustompipe } from './pipes/cust.pipes';
import { SearchComponent } from './search/search.component';
import { UserServices} from './services/users.services';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { userapiservice } from './services/userapi.service';
import { HttpClientModule }from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModulCustom } from './router/app.router.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    DatabindingComponent,
    EventbindingComponent,
    FormComponent,
    TwdatabindingComponent,
    Directives1Component,
    ProjectdirectivesComponent,
    ParentComponent,
    ChildComponent,
    additem,
    showlist,
    FilterComponent,
    ContainerComponent,
    myCustompipe,
    SearchComponent,
    UserComponent,
    UpdateUserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModulCustom

  ],
  providers: [
    UserServices,
    userapiservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
