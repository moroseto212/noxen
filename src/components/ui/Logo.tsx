import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
        fill="none"
      >
        <rect width="44" height="44" rx="12" fill="#0071e3" />
        <path
          d="M14 31V13M14 13L30 31M30 31V13"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {withText ? (
        <span className="text-[15px] font-semibold uppercase tracking-[0.22em]">
          Noxen
        </span>
      ) : (
        <span className="sr-only">Noxen</span>
      )}
    </span>
  );
}
