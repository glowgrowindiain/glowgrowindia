import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { CookieConsent } from "@/components/site/cookie-consent";
import logoAsset from "@/assets/glow-grow-logo-light.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-ink px-5 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-brand-glow/30" />
      <div className="relative max-w-2xl text-center">
        <img src={logoAsset.url} alt="Glow Grow India" width={800} height={415} className="mx-auto h-12 w-auto" />
        <p className="mt-12 text-xs font-semibold tracking-[0.32em] text-brand-glow uppercase">Error 404</p>
        <h1 className="mt-5 font-display text-5xl leading-[0.92] font-bold tracking-tight text-foreground uppercase sm:text-7xl">
          This page lost its glow.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Let's get you back to the work that matters.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-glow px-6 py-3 text-xs font-semibold tracking-[0.18em] text-brand-ink uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glow Grow India — Digital Marketing Agency in India" },
      { name: "description", content: "Glow Grow India is a growth-focused digital marketing and creative agency for social media, performance marketing, branding, SEO and events." },
      { name: "author", content: "Lovable" },
      { property: "og:site_name", content: "Glow Grow India" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "google-site-verification", content: "gjhTbIal2EpK0RgHOBeMqJe6minnZgETjVUFGJtyGzw" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-brand-ink font-sans text-foreground">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </QueryClientProvider>
  );
}
