import { getContributors } from './src/fetchContributions.js';
import { calculateScores } from './src/calculateScore.js';
import { owner, repo } from './config.js';

(async () => {
  try {
    const contributors = await getContributors(owner, repo);
    const scores = calculateScores(contributors);

    // 콘솔에 출력
    console.log('기여도 점수:');
    scores.forEach(user => {
      console.log(`${user.login}: ${user.score}점`);
    });

    // HTML 페이지에 결과 표시 (index.html 연결 필요)
    if (typeof document !== 'undefined') {
      const outputDiv = document.getElementById('output');
      let resultHTML = "<h3>기여도 점수</h3><ul>";
      scores.forEach(user => {
        resultHTML += `<li>${user.login}: ${user.score}점</li>`;
      });
      resultHTML += "</ul>";
      outputDiv.innerHTML = resultHTML;
      <h1>GitHub 기여도 분석</h1>
    }

  } catch (err) {
    console.error('오류 발생:', err);

    if (typeof document !== 'undefined') {
      document.getElementById('output').innerHTML = 
        `<p style='color:red;'>오류 발생: ${err.message}</p>`;
    }
  }
})();