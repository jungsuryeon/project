import { getContributors } from './src/fetchContributions.js';
import { calculateScores } from './src/calculateScore.js';
import { owner, repo} from './config.js';

(async () => {
  try {
    const contributors = await getContributors(owner, repo);
    const scores = calculateScores(contributors);

    alert.log('기여도 점수:');
    scores.forEach(user => {
      alert.log(`${user.login}: ${user.score}점`);
    });
  } catch (err) {
    alert.error('오류 발생:', err);
  }
})();
