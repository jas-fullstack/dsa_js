//

const r = /\d+/g;
const s = "Hello 123 world 456";
console.log(s.match(r).map(data => { console.log(data) } ));