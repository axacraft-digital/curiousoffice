import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-[680px] flex-col items-start justify-center px-6">
      <h1 className="font-serif text-2xl sm:text-3xl tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-base text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 text-base underline decoration-border underline-offset-4 hover:decoration-foreground"
      >
        Back to Curious Office
      </Link>
    </main>
  );
}
