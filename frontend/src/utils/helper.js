const firstNames = [
  "Aarav",
  "Aditi",
  "Akshay",
  "Amit",
  "Ananya",
  "Arjun",
  "Avani",
  "Bhavya",
  "Chetan",
  "Devi",
  "Divya",
  "Gaurav",
  "Isha",
  "Kiran",
  "Manoj",
  "Neha",
  "Preeti",
  "Rajesh",
  "Riya",
  "Shreya",
  "Varun",
  "Saurabh",
  "Ajay",
  "Sandip",
  "Sadan",
  "Jyoti",
  "Sapna",
  "Prem",
];
const lastNames = [
  "Agarwal",
  "Bansal",
  "Chopra",
  "Gupta",
  "Jain",
  "Kapoor",
  "Mehta",
  "Patel",
  "Rao",
  "Sharma",
  "Singh",
  "Trivedi",
  "Verma",
  "Yadav",
];

export const generateName = () => {
  return (
    firstNames[Math.floor(Math.random() * firstNames.length)] +
    " " +
    lastNames[Math.floor(Math.random() * lastNames.length)]
  );
};
