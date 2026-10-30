import UnmountStudio from "./Unmount";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t border-zinc-200 py-6 dark:border-zinc-800">
        <div className="px-6 text-center font-source-sans text-sm text-zinc-500">
          © {new Date().getFullYear()} Charunthon Limseelo
        </div>
      </footer>
    </UnmountStudio>
  );
}
