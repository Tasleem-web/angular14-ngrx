import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponseDto } from "../models/authResponseDto.model";
import { Observable } from "rxjs";
import { User } from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }

  register(email: string, password: string): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }


  formatUser(data: AuthResponseDto) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
    const user = new User(data.email, data.localId, data.idToken, expirationDate);
    return user;
  }

  getErrorMessage(code: string) {
    switch (code) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found';
      case 'INVALID_LOGIN_CREDENTIALS':
        return 'Invalid login credentials';
      case 'USER_DISABLED':
        return 'User disabled';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occured';
    }
  }
}
