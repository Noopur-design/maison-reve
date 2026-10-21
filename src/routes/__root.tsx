import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maison Rêve — Hair, Beauty & Studio" },
      {
        name: "description",
        content:
          "Maison Rêve is a luxury hair, beauty and self-care studio in Gurugram. Explore hair, skin, nails, makeup and packages, and request an appointment.",
      },
      { name: "theme-color", content: "#F8F5EF" },
      { name: "apple-mobile-web-app-title", content: "Maison Rêve" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Maison Rêve" },
      { property: "og:title", content: "Maison Rêve — Hair, Beauty & Studio" },
      {
        property: "og:description",
        content:
          "A luxury hair, beauty and self-care studio in Gurugram. Hair, skin, nails, makeup and packages, with calm, personalised care.",
      },
      { property: "og:image", content: "/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maison Rêve — Hair, Beauty & Studio" },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-180.png" },
    ],
  }),
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
          <Footer />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

// Re-keys on every path change so the entrance animation replays on navigation.
function PageTransition({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div key={path} className="page-enter">
      {children}
    </div>
  );
}

function NotFound() {
  return (
    <section className="wrap grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="max-w-md">
        <p className="script text-5xl text-olive">Oh</p>
        <h1 className="display-sm mt-3">This page drifted off</h1>
        <p className="mt-4 text-muted">
          The page you were looking for is not here. It may have moved, or the link may be
          incomplete. Let us walk you back somewhere lovely.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-solid">
            Back to home
          </Link>
          <Link to="/booking" className="btn btn-ghost">
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
