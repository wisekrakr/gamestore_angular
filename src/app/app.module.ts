import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { GameService } from "./services/game.service";

@NgModule({
  declarations: [AppComponent, GameListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
