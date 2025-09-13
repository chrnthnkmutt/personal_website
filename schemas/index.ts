import job from "./job";
import profile from "./profile";
import project from "./project";
import author from "./author";
import heroe from "./heroe";
import publication from "./publication";
import talk from "./talk";
import { youtube } from "./youtube";
import { table } from "./table";
import { code } from "./code";
import blockContent from "./blockContent";
import quiz from "./quiz";

export const schemaTypes = [
  profile,
  job,
  project,
  author,
  heroe,
  publication,
  talk,

  // Reference types
  blockContent,
  youtube,
  table,
  code,
  quiz,
];
