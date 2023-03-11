 function OpeningCeremony(callback) {
    console.log("Let the games begin");
  
    const score = {
      red: 0,
      yellow: 0,
      blue: 0,
      green: 0
    };
  
    setTimeout(() => {
      console.log(`\nCurrent Score: ${JSON.stringify(score)}`);
      console.log("Starting Race100M...");
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    const minTime = 10;
    const maxTime = 15;
  
    const times = {
      red: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      yellow: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      blue: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime,
      green: Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime
    };
  
    const sortedTimes = Object.keys(times).sort((a, b) => times[a] - times[b]);
    const winners = {
      first: sortedTimes[0],
      second: sortedTimes[1]
    };
  
    score[winners.first] += 50;
    score[winners.second] += 25;
  
    console.log(`\nRace100M Winners: ${winners.first} and ${winners.second}`);
    console.log(`Current Score: ${JSON.stringify(score)}`);
  
    setTimeout(() => {
      console.log("\nStarting Long Jump...");
      LongJump(score, callback);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    const colors = ["red", "yellow", "green", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const winner = colors[randomIndex];
  
    score[winner] += 150;
  
    console.log(`\nLong Jump Winner: ${winner}`);
    console.log(`Current Score: ${JSON.stringify(score)}`);
  
    setTimeout(() => {
      console.log("\nStarting High Jump...");
      HighJump(score, callback);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    const colors = ["red", "yellow", "green", "blue"];
    const input = prompt(`Which colour secured the highest jump? (${colors.join(", ")})`);
  
    if (input && colors.includes(input)) {
      score[input] += 100;
      console.log(`\n${input} secured the highest jump!`);
    } else {
      console.log("\nEvent was cancelled");
    }
  
    console.log(`Current Score: ${JSON.stringify(score)}`);
  
    console.log("\nStarting Award Ceremony...");
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const firstPlace = sortedScores[0];
    const secondPlace = sortedScores[1];
    const thirdPlace = sortedScores[2];
  
    console.log(`\n${firstPlace[0]} came first with ${firstPlace[1]} points.`);
    console.log(`${secondPlace[0]} came second with ${secondPlace[1]} points.`);
    console.log(`${thirdPlace[0]} came third with ${thirdPlace[1]} points.`);
  }
  
  OpeningCeremony(() => {});
  