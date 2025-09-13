import Image from "next/image";
import duckImage from "@/public/searching-duck.gif";

type props = {
  title: string;
  description: string;
};

export default function NotFoundComponent({ title, description }: props) {
  return (
    <main className="min-h-[60vh] max-w-7xl mx-auto md:px-16 px-6">
      <header className="max-w-4xl">
        <Image
          width={80}
          height={80}
          src={duckImage}
          alt="Yellow duck searching"
        />
        <h1 className="font-incognito font-black tracking-tight sm:text-6xl text-3xl lg:leading-[3.7rem] leading-tight mt-6 mb-3">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
          {description}
        </p>
      </header>

      <div className="max-w-4xl grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">Check out my projects</h3>
          <p className="dark:text-zinc-400 text-zinc-600 mb-4">
            Explore my latest projects and experiments.
          </p>
        </div>
        
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center">
          <div className="text-4xl mb-4">🎤</div>
          <h3 className="text-xl font-semibold mb-2">Latest Talks & Publications</h3>
          <p className="dark:text-zinc-400 text-zinc-600 mb-4">
            See my recent speaking engagements and research publications.
          </p>
        </div>
      </div>
    </main>
  );
}
