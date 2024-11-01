import "next-auth";
import { DefaultSession, DefaultUser, Profile } from "next-auth";
import "next-auth/jwt";
import { DefaultJWT } from "next-auth/jwt";
import { KeycloakProfile } from "next-auth/providers/keycloak";

interface IUser extends DefaultUser {
	roles: string[] | undefined;
}

declare module "next-auth" {
	interface Session extends DefaultSession {
		accessToken?: string;
		user: IUser;
	}

	interface Profile extends KeycloakProfile {
		realm_access: {
			roles: string[];
		};
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		accessToken?: string;
		user: IUser | {};
	}
}