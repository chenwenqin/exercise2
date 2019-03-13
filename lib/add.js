function add(a, b) {
  // 实现该函数
  const aLength = a.length;
  const bLength = b.length;
  const maxLength = aLength > bLength ? aLength + 1 : bLength + 1;
  const aa = a.padStart(maxLength, 0);
  const bb = b.padStart(maxLength, 0);
  const cc = [];
  let isOver = false;
  for (let i = maxLength - 1; i >= 0; i--) {
    const ai = parseInt(aa[i]);
    const bi = parseInt(bb[i]);
    let ci = ai + bi;
    console.log('ai',ai);
    console.log('bi',bi);
    console.log('ci',ci);
    if (isOver) {
      ci++;
    }
    isOver = false;
    if (ci >= 10) {
      isOver = true;
      ci = ci - 10;
    }
    cc.unshift(ci);
  }
  if (cc[0] == 0) {
    cc.shift();
  }
  return cc.join('');
}

module.exports = add