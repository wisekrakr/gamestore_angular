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

  getGames(): Observable<Game[]> {
    return this.httpClient
      .get<GetResponseGames>(this.baseUrl)
      .pipe(map((res) => res._embedded.games));
  }
}

interface GetResponseGames {
  _embedded: {
    games: Game[];
  };
}
