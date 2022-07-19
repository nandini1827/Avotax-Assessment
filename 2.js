function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
  
    let nextWaitingTime = 0;
    let totalWaitingTime = 0;
  
    for (const duration of queries) {
      totalWaitingTime += nextWaitingTime;
      nextWaitingTime += duration;
    }
  
    return totalWaitingTime;
  }

  exports.minimumWaitingTime = minimumWaitingTime;