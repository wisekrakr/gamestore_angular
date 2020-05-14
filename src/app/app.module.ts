import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { GameService } from "./services/game.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { GameCategoryComponent } from "./components/game-category/game-category.component";
import { SearchComponent } from "./components/search/search.component";

const routes: Routes = [
  { path: "games", component: GameListComponent },
  { path: "category/:id", component: GameListComponent },
  { path: "search/:keyword", component: GameListComponent },
  { path: "", redirectTo: "/games", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    PageNotFoundComponent,
    GameCategoryComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
