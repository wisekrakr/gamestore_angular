import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Game } from "../common/game";
import { GameCategory } from "../common/game-category";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private baseUrl = "http://localhost:8080/api/v1/games";
  private categoryUrl = "http://localhost:8080/api/v1/game-category";

  constructor(private httpClient: HttpClient) {}

  getGames(categoryId: number): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/category-id?id=${categoryId}`;
    return this.getGamesList(searchUrl);
  }

  private getGamesList(searchUrl: string): Observable<Game[]> {
    return this.httpClient
      .get<GetResponseGames>(searchUrl)
      .pipe(map((res) => res._embedded.games));
  }

  getGameCategories(): Observable<GameCategory[]> {
    return this.httpClient
      .get<GetResponseGameCategory>(this.categoryUrl)
      .pipe(map((res) => res._embedded.gameCategory));
  }

  seachGames(keyword: string): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}`;
    return this.getGamesList(searchUrl);
  }
}

interface GetResponseGames {
  _embedded: {
    games: Game[];
  };
}

interface GetResponseGameCategory {
  _embedded: {
    gameCategory: GameCategory[];
  };
}
