const assert              = require('assert');
const climbingLeaderboard = require('.');

it('should return alice\'s ranks on the leaderboard', () => {
    assert.deepEqual(climbingLeaderboard([1], [1]), [1]);
    assert.deepEqual(climbingLeaderboard([2], [1]), [2]);
    assert.deepEqual(climbingLeaderboard([1], [2]), [1]);
    assert.deepEqual(climbingLeaderboard([6, 4, 2], [1, 2, 3, 4, 5, 6, 7]), [4, 3, 3, 2, 2, 1, 1]);
    assert.deepEqual(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]), [6, 4, 2, 1]);
    assert.deepEqual(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]), [6, 5, 4, 2, 1]);
});
