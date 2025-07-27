import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    role: 'ADMIN' | 'MEMBER';
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role: 'ADMIN' | 'MEMBER';
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: 'ADMIN' | 'MEMBER';
  }
}