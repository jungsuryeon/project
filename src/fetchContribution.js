import fetch from 'node-fetch';

export async function getContributors(owner, repo, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
  const headers = {
    Authorization: `token ${token}`,
    'User-Agent': 'reposcore-js'
  };

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API 요청 실패: ${res.status}`);
  }
  const data = await res.json();

  return data.map(user => ({
    login: user.login,
    commits: user.contributions
  }));
}
