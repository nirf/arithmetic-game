import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ArithmeticGameComponent } from './components/arithmetic-game/arithmetic-game.component'


@NgModule({
  declarations: [
    AppComponent,
    ArithmeticGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
