import { User } from "./user";

export interface AuthenticationResponse {
  accessToken: string,
  user: User
}
