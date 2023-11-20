import { NgModule } from "@angular/core";
import { RouterModule ,Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

const router : Routes = [
    {path : "", component : HomeComponent},
    {path :"/about", component : AboutComponent},
    {path :"/contact", component : ContactComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
})

export class RouterModulCustom{}