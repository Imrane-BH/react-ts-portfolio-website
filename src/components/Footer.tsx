export default function Footer() {
  return (
    <footer className="px-6 md:px-8 py-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-body text-xs text-ink/50">
        © {new Date().getFullYear()} Imrane Bhihi. All rights reserved.
      </span>
      <span className="font-body text-xs text-ink/50">
        Built with React, TypeScript & Tailwind
      </span>
    </footer>
  );
}