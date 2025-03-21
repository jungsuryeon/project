export function calculateScores(contributors) {
    // 예시: 커밋 수 기준 점수 계산
    const scores = contributors.map(user => {
      return {
        login: user.login,
        score: user.commits
      };
    });
    return scores;
  }
  