import { MykosLogo } from "./MykosLogo";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-stone/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <MykosLogo size={20} />
          <span className="text-sm font-medium text-charcoal/60">mykos</span>
        </div>

        <p className="text-xs text-charcoal/30">
          The quiet force behind your day.
        </p>

        <p className="text-xs text-charcoal/30">
          &copy; {new Date().getFullYear()} Mykos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
