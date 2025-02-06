function add(a: number, b: number): number {
  // Type guard to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b;
}

const result1 = add(5, 10); // Correct result

// Alternative Solution using type assertion (less safe):

function add2(a: any, b: any): number {
    return (<number>a) + (<number>b);
}

const result2 = add2(5, '10'); //Runtime error when '10' is parsed as number