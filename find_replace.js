function findAndReplacePattern(words, pattern) {
    const p = pattern.split('').map((c, i) => pattern.indexOf(c));
    return words.filter(w => w.split('').map((c, i) => w.indexOf(c)).join(',') === p.join(','));
}