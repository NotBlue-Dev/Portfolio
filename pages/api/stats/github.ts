import { NextApiRequest, NextApiResponse } from "next";
import { fetchGithub, getGithubStarsAndForks, fetchDownloadCount } from "../../../lib/github";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    public_repos: repos,
    public_gists: gists,
    followers,
  } = await fetchGithub();
  const { githubStars, forks } = await getGithubStarsAndForks();
  const download_count = await fetchDownloadCount();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({
    repos,
    gists,
    followers,
    githubStars,
    forks,
    download_count,
  });
}