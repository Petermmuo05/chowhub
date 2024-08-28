// types/next-auth.d.ts

import { DefaultSession } from "next-auth";

// Extend the NextAuth session object to include the `role` property
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string | null;
      admin_id?: number | null;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string | null;
  }
}

// If you're working with NextRequest in your middleware and want to access the role from there, extend the NextRequest type
import { NextRequest } from "next/server";

declare module "next/server" {
  interface NextRequest {
    auth?: {
      user: {
        id: string;
        role?: string | null;
        admin_id?: string | null;
      };
    };
  }
}
