export async function getContributors(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
  
  console.log(`📢 Fetching data from: ${url}`);

  const res = await fetch(url, { 
    headers: { 'User-Agent': 'reposcore-js' }
  });

  if (!res.ok) {
    throw new Error(`GitHub API 요청 실패: ${res.status} (${res.statusText})`);
  }

  const data = await res.json();
  console.log(" API 응답 데이터:", data);

  return data.map(user => ({
    login: user.login,
    commits: user.contributions
  }));
}