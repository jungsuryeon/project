import { getContributors } from './src/fetchContributions.js';
import { calculateScores } from './src/calculateScore.js';
import { owner, repo} from './config.js';

(async () => {
  try {
    const contributors = await getContributors(owner, repo);
    const scores = calculateScores(contributors);

    console.log('기여도 점수:');
    scores.forEach(user => {
      console.log(`${user.login}: ${user.score}점`);
    });
  } catch (err) {
    console.error('오류 발생:', err);
  }
})();
