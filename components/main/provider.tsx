"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <ConvexProvider client={convex} >
            {children}
        </ConvexProvider>
    );
  }