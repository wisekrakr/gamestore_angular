import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Game } from "../common/game";

@Injectable({
  providedIn: "root",
})
export class GameService {
  private baseUrl = "http://localhost:8080/api/v1/games";

  constructor(private httpClient: HttpClient) {}

  getGames(categoryId: number): Observable<Game[]> {
    const searchUrl = `${this.baseUrl}/search/category-id?id=${categoryId}`;
    return this.httpClient
      .get<GetResponseGames>(searchUrl)
      .pipe(map((res) => res._embedded.games));
  }
}

interface GetResponseGames {
  _embedded: {
    games: Game[];
  };
}
