import { getContributors } from './src/fetchContributions.js';
import { calculateScores } from './src/calculateScore.js';
import { owner, repo } from './config.js';

(async () => {
  try {
    const contributors = await getContributors(owner, repo);
    const scores = calculateScores(contributors);

    // ✅ 콘솔에서 데이터 확인 (정상 출력되는지 체크)
    console.log("📢 기여도 점수:", scores);

    // 🔥 페이지에 표시하기 전에 `document.getElementById('output')`가 있는지 확인
    const outputDiv = document.getElementById('output');
    console.log("📢 outputDiv 값:", outputDiv); // ✅ 콘솔에서 확인하기!

    if (!outputDiv) {
      console.error("🚨 오류: `#output` 요소를 찾을 수 없습니다!");
      return; // `output` 요소가 없으면 여기서 중단!
    }

    // 🔥 HTML 페이지에 결과 표시
    let resultHTML = "<h3>기여도 점수</h3><ul>";
    scores.forEach(user => {
      resultHTML += `<li>${user.login}: ${user.score}점</li>`;
    });
    resultHTML += "</ul>";
    outputDiv.innerHTML = resultHTML; // ✅ 최종적으로 페이지에 데이터 삽입

  } catch (err) {
    console.error('🚨 오류 발생:', err);

    // 오류 발생 시 HTML에도 표시
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
      outputDiv.innerHTML = `<p style='color:red;'>오류 발생: ${err.message}</p>`;
    }
  }
})();