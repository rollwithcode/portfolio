import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const chillax = localFont({
    src: [
        {
            path: '../fonts/Chillax-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Chillax-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Chillax-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Chillax-Semibold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../fonts/Chillax-Bold.woff',
            weight: '800',
            style: 'italic',
        },
    ],
})


export const metadata: Metadata = {
    title: "RollWithCode",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="https://res.cloudinary.com/dhyshxpc1/image/upload/fl_preserve_transparency/v1726420219/favicon.ico_1_hnwfwq.jpg?_s=public-apps" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
            >
                <Toaster />
                {children}
            </body>
        </html>
    );
}
