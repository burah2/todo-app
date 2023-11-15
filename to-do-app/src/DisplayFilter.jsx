const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 18 },
    { name: "David", age: 45 },
    { name: "Eve", age: 28 },
  ];
  
  const adults = people.filter((person) => person.age >= 18);
  const minors = people.filter((person) => person.age < 18);
  
  console.log("Adults:");
  console.log(adults);
  
  console.log("\nMinors:");
  console.log(minors);
  