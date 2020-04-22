function solution(str) {
  // construct algorithms function
  const algos = [
    new arithmetic(),
    new geometric(),
    new fibonacci(),
    new multiplyAndAdd(),
    new squareNumber(),
    new triangular()
  ];
  // parse user input to number array
  let seq = str.split(" ").map(e => parseInt(e));
  let dict = {};
  // analyze sequence pattern
  algos.forEach(a => {
    let possibleMatch = a.match(seq);
    if (possibleMatch) {
      dict[a.pattern] = a.nextTen(seq);
    }
  });
  return dict;
}

module.exports = solution;

// Algorithms function
function arithmetic(seq) {
  const diff = seq => seq[1] - seq[0];
  this.pattern = "Arithmetic";
  // this.seq = seq;
  this.match = seq => {
    return seq.every((v, i) => (i > 0 ? v === seq[i - 1] + diff(seq) : true));
  };
  this.nextTen = seq => {
    let arr = [seq[seq.length - 1] + diff(seq)];
    for (let i = 0; i < 9; i++) {
      arr.push(arr[i] + diff(seq));
    }
    return arr;
  };
}

function geometric(seq) {
  const ratio = seq => seq[1] / seq[0];
  this.pattern = "Geometric";
  // this.seq = seq;
  this.match = seq => {
    if (!Number.isInteger(ratio(seq))) {
      return false;
    }
    return seq.every((v, i) => (i > 0 ? v === seq[i - 1] * ratio(seq) : true));
  };
  this.nextTen = seq => {
    let arr = [seq[seq.length - 1] * ratio(seq)];
    for (let i = 0; i < 9; i++) {
      arr.push(arr[i] * ratio(seq));
    }
    return arr;
  };
}

function fibonacci(seq) {
  this.pattern = "Fibonacci";
  // this.seq = seq;
  this.match = seq => {
    return seq.every((v, i) => (i > 1 ? v === seq[i - 1] + seq[i - 2] : true));
  };
  this.nextTen = seq => {
    let arr = [
      seq[seq.length - 1] + seq[seq.length - 2],
      2 * seq[seq.length - 1] + seq[seq.length - 2]
    ];
    for (let i = 0; i < 8; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    return arr;
  };
}

function multiplyAndAdd(seq) {
  this.pattern = "MultiplyAndAdd";
  // this.seq = seq;
  const multiplier = seq =>
    seq.length > 2 ? (seq[2] - seq[1]) / (seq[1] - seq[0]) : 0;
  this.match = seq => {
    if (
      seq.length < 3 || // too short to identify
      multiplier(seq) < 2 || // avoid arithmetic sequence
      !Number.isInteger(multiplier(seq)) || // avoid float multiplier
      seq.every((v, i) => (i > 0 ? v === (seq[i - 1] * seq[1]) / seq[0] : true)) // avoid geometric sequence
    ) {
      return false;
    }
    return seq.every((v, i) =>
      i > 1
        ? (v - seq[i - 1]) / (seq[i - 1] - seq[i - 2]) === multiplier(seq)
        : true
    );
  };
  this.nextTen = seq => {
    let arr = [
      seq[seq.length - 1] +
        (seq[seq.length - 1] - seq[seq.length - 2]) * multiplier(seq)
    ];
    arr.push(
      arr[0] +
        (seq[seq.length - 1] - seq[seq.length - 2]) *
          Math.pow(multiplier(seq), 2)
    );
    for (let i = 2; i < 10; i++) {
      arr.push(arr[i - 1] + (arr[i - 1] - arr[i - 2]) * multiplier(seq));
    }
    return arr;
  };
}

function squareNumber(seq) {
  this.pattern = "Square";
  // this.seq = seq;
  this.match = seq => {
    return (
      seq.every((v, i) => Number.isInteger(Math.pow(v, 0.5))) &&
      seq.every((v, i) =>
        i > 1 ? v - 2 * seq[i - 1] + seq[i - 2] === 2 : true
      )
    );
  };
  this.nextTen = seq => {
    let firstRoot = Math.pow(seq[seq.length - 1], 0.5) + 1;
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.pow(firstRoot + i, 2));
    }
    return arr;
  };
}

function triangular(seq) {
  this.pattern = "Triangular";
  // this.seq = seq;
  this.match = seq => {
    if (seq.length < 3) {
      return false;
    }
    return seq.every((v, i) =>
      i > 1 ? v - 2 * seq[i - 1] + seq[i - 2] === 1 : true
    );
  };
  this.nextTen = seq => {
    let firstAddNum = seq[seq.length - 1] - seq[seq.length - 2] + 1;
    let arr = [seq[seq.length - 1] + firstAddNum];
    for (let i = 0; i < 10; i++) {
      arr.push(arr[i] + firstAddNum + i + 1);
    }
    return arr;
  };
}
