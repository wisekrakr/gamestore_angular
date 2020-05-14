import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/common/game";
import { ActivatedRoute } from "@angular/router";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-game-details",
  templateUrl: "./game-details.component.html",
  styleUrls: ["./game-details.component.css"],
})
export class GameDetailsComponent implements OnInit {
  game: Game = new Game();

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.getGameDetails();
    });
  }

  getGameDetails() {
    const id: number = +this.activatedRoute.snapshot.paramMap.get("id");

    this.gameService.getGame(id).subscribe((data) => (this.game = data));
  }
}
