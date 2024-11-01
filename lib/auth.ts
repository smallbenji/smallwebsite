import { AuthOptions } from "next-auth";
import KeycloakProvider, {
	KeycloakProfile,
} from "next-auth/providers/keycloak";
import jwt from "jsonwebtoken";

interface IJwt extends KeycloakProfile {
	realm_access: {
		roles: string[];
	};
}

export const authOptions: AuthOptions = {
	providers: [
		KeycloakProvider({
			clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
			clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
			issuer: `${process.env.KEYCLOAK_ISSUER}`,
		}),
	],
	secret: `${process.env.NEXTAUTH_SECRET}`,
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, account, profile, user }) {
			if (account) {
				token.accessToken = account.access_token;
				const decoded = jwt.decode(`${account?.access_token}`) as IJwt;

				if (decoded) {
					const roles = decoded.realm_access?.roles || [];
					const uid = decoded?.sub?.toString() || "";

					token.user = token.user || {};

					token.user.roles = roles;
					token.user.id = uid;
				}

				console.log(decoded);
			}

			return token;
		},

		async session({ session, token, user }) {
			session.accessToken = token.accessToken;
			session.user.roles = token?.user?.roles || [];
			session.user.id = token?.user?.id || "";
			return session;
		},
	},
};