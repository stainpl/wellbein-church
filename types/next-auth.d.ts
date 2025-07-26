import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: 'ADMIN' | 'MEMBER';
    };
  }

  interface User {
    id: string;
    role: 'ADMIN' | 'MEMBER';
  }
}
