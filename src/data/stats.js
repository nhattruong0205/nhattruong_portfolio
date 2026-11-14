// Fill these in to show LeetCode on the site. The hero card appears once
// `solved` is set, and the footer link once `username` is set.
export const leetcode = {
  username: 'minhnhatbap',   // from https://leetcode.com/u/<username>/
  solved: 21,   // update by hand whenever you like
};

export function getLeetcodeUrl() {
  return leetcode.username ? `https://leetcode.com/u/${leetcode.username}/` : null;
}
