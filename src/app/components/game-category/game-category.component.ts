import { Component, OnInit } from "@angular/core";
import { GameCategory } from "src/app/common/game-category";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-game-category",
  templateUrl: "./game-category.component.html",
  styleUrls: ["./game-category.component.css"],
})
export class GameCategoryComponent implements OnInit {
  gameCategories: GameCategory[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.listGameCategories();
  }

  listGameCategories() {
    this.gameService
      .getGameCategories()
      .subscribe((data) => (this.gameCategories = data));
  }
}
