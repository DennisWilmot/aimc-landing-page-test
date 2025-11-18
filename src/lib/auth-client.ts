// Better Auth Client Configuration

import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";
import { polarClient } from "@polar-sh/better-auth";

// Get API URL from environment or use localhost for development
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

export const authClient = createAuthClient({
  baseURL: API_URL,
  plugins: [magicLinkClient(), polarClient()],
});

// Export convenient hooks for components
export const { useSession, signIn, signOut } = authClient;

// Helper function to send magic link
export const sendMagicLink = async (email: string) => {
  try {
    const result = await authClient.signIn.magicLink({
      email,
      callbackURL: `${window.location.origin}/course`,
    });

    if (result.error) {
      throw new Error(result.error.message || "Failed to send magic link");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending magic link:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
