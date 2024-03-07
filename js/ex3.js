//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

// Filter students whose last name begins with "C"
const cLastNameResults = studentList.filter(student => student.lastName.charAt(0).toUpperCase() === 'C')
    .map(student => {
        const minScore = Math.min(...student.scores);
        const maxScore = Math.max(...student.scores);
        const avgScore = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
        return {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore: minScore,
            maxScore: maxScore,
            avgScore: avgScore
        };
    });

//Output
console.log(cLastNameResults);
