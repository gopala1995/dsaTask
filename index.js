let A = "GopalaOfRaja";
let B = "GopalaOf";

const CommonSubString = (s, t) => {
  let m = s.length;
  let n = t.length;

  var dp = Array(2)
    .fill()
    .map(() => Array(m + 1).fill(0));
  var res = 0;

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      if (s.charAt(i - 1) == t.charAt(j - 1)) {
        dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
        if (dp[i % 2][j] > res) res = dp[i % 2][j];
      } else dp[i % 2][j] = 0;
    }
  }
  return res;
};

console.log(CommonSubString(A, B));
