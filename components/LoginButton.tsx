"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import { signIn, signOut, useSession } from "next-auth/react";

const LogInButton = () => {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<>
					<Button onClick={() => signOut()}>Log out</Button>
				</>
			) : (
				<>
					<Button onClick={() => signIn("keycloak")}>Log in</Button>
				</>
			)}
		</>
	);
};

export default LogInButton;