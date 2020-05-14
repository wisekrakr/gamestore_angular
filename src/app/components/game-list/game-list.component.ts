import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/common/game";
import { GameService } from "src/app/services/game.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-game-list",
  // templateUrl: "./game-list.component.html",
  templateUrl: "./game-grid.component.html",
  styleUrls: ["./game-list.component.css"],
})
export class GameListComponent implements OnInit {
  games: Game[];
  currentCategoryId: number;
  searchMode: boolean;

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.listGames();
    });
  }

  listGames() {
    this.searchMode = this.activatedRoute.snapshot.paramMap.has("keyword");

    if (this.searchMode) {
      this.handleSearchGames();
    } else {
      this.handleListGames();
    }
  }

  handleListGames() {
    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has(
      "id"
    );

    if (hasCategoryId) {
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get("id");
    } else {
      this.currentCategoryId = 1;
    }

    this.gameService
      .getGames(this.currentCategoryId)
      .subscribe((data) => (this.games = data));
  }

  handleSearchGames() {
    const keyword: string = this.activatedRoute.snapshot.paramMap.get(
      "keyword"
    );

    this.gameService.seachGames(keyword).subscribe((data) => {
      this.games = data;
    });
  }
}
