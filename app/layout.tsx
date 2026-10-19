import type { Metadata } from "next";
import "./globals.css";
import AuthRedirect from "./auth-redirect";
export const metadata: Metadata = { title: "Pilates Studio | Grafik i rezerwacje", description: "Zajęcia pilates, grafik i rezerwacje online." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body><AuthRedirect/>{children}</body></html>}
