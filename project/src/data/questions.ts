export interface Question {
  id: number;
  text: string;
  category: 'personality' | 'career' | 'aptitude' | 'astrology';
  options: {
    text: string;
    value: number;
  }[];
}

export const questions: Question[] = [
  // Personality Questions - Extraversion vs. Introversion
  {
    id: 1,
    text: "You find it easy to introduce yourself to other people.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 2,
    text: "You prefer one-on-one conversations to group activities.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  {
    id: 3,
    text: "After a long and exhausting week, a lively social event is just what you need.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  
  // Personality Questions - Sensing vs. Intuition
  {
    id: 4,
    text: "You often rely on your experience rather than theoretical alternatives.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 5,
    text: "You prefer focusing on the big picture rather than the details.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  
  // Personality Questions - Thinking vs. Feeling
  {
    id: 6,
    text: "You find it easy to stay relaxed and focused even when there is some pressure.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 7,
    text: "Your mood can change very quickly.",
    category: "personality",
    options: [
      { text: "Strongly Disagree", value: 5 },
      { text: "Disagree", value: 4 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 2 },
      { text: "Strongly Agree", value: 1 }
    ]
  },
  
  // Career Questions
  {
    id: 8,
    text: "You enjoy creating and designing things.",
    category: "career",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 9,
    text: "You find working with data and numbers engaging.",
    category: "career",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 10,
    text: "You enjoy helping others solve their problems.",
    category: "career",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  
  // Aptitude Questions
  {
    id: 11,
    text: "You quickly notice logical inconsistencies in what others say.",
    category: "aptitude",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 12,
    text: "You have a clear vision of the future plans for yourself.",
    category: "aptitude",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  
  // Astrology Questions
  {
    id: 13,
    text: "You tend to make decisions carefully and deliberately.",
    category: "astrology",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 14,
    text: "You are adaptable and comfortable with change.",
    category: "astrology",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  },
  {
    id: 15,
    text: "You often find yourself lost in thought about abstract ideas.",
    category: "astrology",
    options: [
      { text: "Strongly Disagree", value: 1 },
      { text: "Disagree", value: 2 },
      { text: "Neutral", value: 3 },
      { text: "Agree", value: 4 },
      { text: "Strongly Agree", value: 5 }
    ]
  }
];

// In a full implementation, there would be 100+ questions distributed across categories