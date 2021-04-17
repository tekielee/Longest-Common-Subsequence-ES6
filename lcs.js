function LCS(X, Y) {
	let M = X.length;
	let N = Y.length;
	let L = [];
	for(let i = 0; i <= M; i++) {
		L.push([]);
	}
	for(let i = 0; i <= M; i++) {
		L[i][0] = 0;
		for(let j = 0; j <= N; j++) {
			L[0][j] = 0;
		}
	}
	for(let i = 0; i <= M; i++) {
		for(let j = 0; j <= N; j++) {
			if(i === 0 || j === 0) {
				L[i][j] = 0;
			} else if(X[i - 1] === Y[j - 1]) {
				L[i][j] = L[i - 1][j - 1] + 1;
			} else {
				L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
			}
		}
	}
	return L[M][N];
}

let X = 'AGGTAB';
let Y = 'GGTXAYB';
console.log('LCS Length: ' + LCS(X, Y));