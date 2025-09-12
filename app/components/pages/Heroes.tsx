import { heroesQuery } from "@/lib/sanity.query";
import { HeroeType } from "@/types";
import EasterEgg from "../shared/EasterEgg";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import RefLink from "../shared/RefLink";
import Image from "next/image";

export default async function Heroes() {
  const heroes: HeroeType[] = await sanityFetch({
    query: heroesQuery,
    tags: ["heroe"],
  });

  // Debug: Log the heroes data
  console.log("Heroes data:", heroes);

  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Friends & Collaborators</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          My curated list of inspiring people in tech and beyond.
        </p>
      </Slide>

      {heroes.length === 0 ? (
        <div className="mt-12 p-8 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center">
          <p className="dark:text-zinc-400 text-zinc-600">
            No friends & collaborators found. Add some entries in Sanity Studio.
          </p>
          <p className="text-sm dark:text-zinc-500 text-zinc-500 mt-2">
            Go to <a href="/studio" className="underline">Sanity Studio</a> and create some friend entries.
          </p>
        </div>
      ) : (
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
          {heroes.map((heroe) => (
            <li
              key={heroe._id}
              className="flex items-center gap-x-3 dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-3 py-2"
            >
              <EasterEgg isMet={heroe.met} />
              {heroe.imageUrl && (
                <Image
                  src={heroe.imageUrl}
                  alt={heroe.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              {heroe.url ? (
                <RefLink
                  href={heroe.url}
                  className={`font-incognito tracking-wide hover:underline ${
                    heroe.met && "dark:text-green-300 text-green-800"
                  }`}
                >
                  {heroe.name}
                </RefLink>
              ) : (
                <span
                  className={`font-incognito tracking-wide ${
                    heroe.met && "dark:text-green-300 text-green-800"
                  }`}
                >
                  {heroe.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
