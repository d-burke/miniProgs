//text to pager code
function pagerCode(s){
  if(s) {
    s=s.toLowerCase();
  } else {
    return '';
  }
  const pc = {
    a : '8',
    b : '8',
    c : '6',
    d : '0',
    e : '3',
    f : '4',
    g : '6',
    h : '4',
    i : '1',
    j : '7',
    k : '15',
    l : '7',
    m : '177',
    n : '17',
    o : '0',
    p : '9',
    q : '0',
    r : '12',
    s : '5',
    t : '7',
    u : '11',
    v : '11',
    w : '111',
    x : '52',
    y : '4',
    z : '2'
  };
  var ps = '';
  for (var i = 0; i < s.length; i++) {
    ps += pc[s[i]] ? pc[s[i]] : s[i];
  }
  return ps;
};