import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/common/game";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.css"],
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.listGames();
  }

  listGames() {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }
}
