"use client"
import React from 'react'
import { useState } from 'react';
import { ConvexProvider, ConvexReactClient } from "convex/react";

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContext } from '@/context/AuthContext';
function Provider({
      children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [user,SetUser]=useState();
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>      {/* exclamatory symbol becuase it is typescript */}
 <ConvexProvider client={convex}>
  <AuthContext.Provider value={{user,SetUser}}>
    <NextThemesProvider
     attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
    >
    <div>
      {children}
    </div>
    </NextThemesProvider>  
    </AuthContext.Provider>
    </ConvexProvider> 
    </GoogleOAuthProvider>
  )
}

export default Provider
