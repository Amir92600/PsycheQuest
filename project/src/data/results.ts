export interface PersonalityTrait {
  name: string;
  description: string;
  score: number;
}

export interface CareerField {
  field: string;
  description: string;
  match: number;
  jobs: {
    title: string;
    description: string;
  }[];
}

export interface AstrologicalProfile {
  sign: string;
  element: string;
  description: string;
  traits: string[];
}

export interface ResultProfile {
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  personalityTraits: PersonalityTrait[];
  careerFields: CareerField[];
  astrologicalProfile: AstrologicalProfile;
}

export const calculateResults = (answers: { [id: number]: number }): ResultProfile => {
  // This is a simplified version of the calculation logic
  // In a full implementation, this would analyze all 100+ question responses
  
  // Calculate personality traits
  const extraversionScore = calculateTraitScore(answers, [1, 2, 3]);
  const sensingScore = calculateTraitScore(answers, [4, 5]);
  const thinkingScore = calculateTraitScore(answers, [6, 7]);
  
  // Calculate career matches
  const creativeScore = calculateTraitScore(answers, [8]);
  const analyticalScore = calculateTraitScore(answers, [9]);
  const helpingScore = calculateTraitScore(answers, [10]);
  
  // Calculate aptitude scores
  const logicalScore = calculateTraitScore(answers, [11]);
  const planningScore = calculateTraitScore(answers, [12]);
  
  // Calculate astrological tendencies
  const earthScore = calculateTraitScore(answers, [13]);
  const airScore = calculateTraitScore(answers, [14, 15]);
  
  // Determine personality type (simplified)
  const personalityType = determinePersonalityType(extraversionScore, sensingScore, thinkingScore);
  
  // Determine career fields
  const topCareerFields = determineCareerFields(creativeScore, analyticalScore, helpingScore);
  
  // Determine astrological profile
  const astrologicalProfile = determineAstrologicalProfile(earthScore, airScore);
  
  return {
    type: personalityType.type,
    description: personalityType.description,
    strengths: personalityType.strengths,
    weaknesses: personalityType.weaknesses,
    personalityTraits: [
      {
        name: "Extraversion",
        description: "How energized you are by social interaction and external stimulation.",
        score: extraversionScore
      },
      {
        name: "Sensing",
        description: "How you process information through your senses vs. intuition.",
        score: sensingScore
      },
      {
        name: "Thinking",
        description: "How you make decisions based on logic vs. emotions.",
        score: thinkingScore
      },
      {
        name: "Logical Reasoning",
        description: "Your ability to identify inconsistencies and think critically.",
        score: logicalScore
      },
      {
        name: "Planning",
        description: "Your ability to organize and plan for the future.",
        score: planningScore
      }
    ],
    careerFields: topCareerFields,
    astrologicalProfile: astrologicalProfile
  };
};

// Helper functions
function calculateTraitScore(answers: { [id: number]: number }, questionIds: number[]): number {
  let total = 0;
  let count = 0;
  
  questionIds.forEach(id => {
    if (answers[id] !== undefined) {
      total += answers[id];
      count++;
    }
  });
  
  return count > 0 ? (total / count / 5) * 100 : 50; // Normalize to percentage
}

function determinePersonalityType(extraversion: number, sensing: number, thinking: number) {
  // Simplified personality type determination
  if (extraversion > 70 && thinking > 70) {
    return {
      type: "Commander",
      description: "Natural-born leaders who are charismatic, confident, and analytical.",
      strengths: ["Strategic thinking", "Confidence", "Decisiveness"],
      weaknesses: ["Impatience", "Stubborness", "Insensitivity"]
    };
  } else if (extraversion > 70 && thinking <= 70) {
    return {
      type: "Entertainer",
      description: "Spontaneous, energetic and enthusiastic people who enjoy social situations.",
      strengths: ["Creativity", "Enthusiasm", "People skills"],
      weaknesses: ["Sensitivity to criticism", "Poor long-term planning", "Easily bored"]
    };
  } else if (extraversion <= 70 && thinking > 70) {
    return {
      type: "Logician",
      description: "Innovative inventors with an unquenchable thirst for knowledge.",
      strengths: ["Analytical thinking", "Originality", "Open-mindedness"],
      weaknesses: ["Detachment", "Overthinking", "Difficulty with practical matters"]
    };
  } else {
    return {
      type: "Mediator",
      description: "Poetic, kind and altruistic people, always eager to help a good cause.",
      strengths: ["Empathy", "Creativity", "Idealism"],
      weaknesses: ["Impracticality", "Taking things personally", "Burnout"]
    };
  }
}

function determineCareerFields(creative: number, analytical: number, helping: number): CareerField[] {
  const fields: CareerField[] = [];
  
  if (creative > 60) {
    fields.push({
      field: "Creative Arts",
      description: "Careers focused on design, expression, and innovation.",
      match: creative,
      jobs: [
        {
          title: "Graphic Designer",
          description: "Create visual concepts to communicate ideas that inspire, inform, or captivate consumers."
        },
        {
          title: "Content Creator",
          description: "Develop engaging content for various platforms that resonates with audiences."
        }
      ]
    });
  }
  
  if (analytical > 60) {
    fields.push({
      field: "Technology",
      description: "Careers focused on data, systems, and problem-solving.",
      match: analytical,
      jobs: [
        {
          title: "Data Analyst",
          description: "Interpret complex data sets to inform business decisions and strategies."
        },
        {
          title: "Software Developer",
          description: "Design and build applications that solve problems and improve efficiency."
        }
      ]
    });
  }
  
  if (helping > 60) {
    fields.push({
      field: "Healthcare",
      description: "Careers focused on helping others and improving well-being.",
      match: helping,
      jobs: [
        {
          title: "Counselor",
          description: "Help individuals navigate challenges and improve their mental health."
        },
        {
          title: "Healthcare Administrator",
          description: "Manage healthcare facilities and ensure quality patient care."
        }
      ]
    });
  }
  
  // Add a default if no strong matches
  if (fields.length === 0) {
    fields.push({
      field: "Business",
      description: "General business roles that combine various skills.",
      match: 50,
      jobs: [
        {
          title: "Project Manager",
          description: "Coordinate teams and resources to complete projects efficiently."
        },
        {
          title: "Marketing Specialist",
          description: "Develop strategies to promote products and engage customers."
        }
      ]
    });
  }
  
  return fields;
}

function determineAstrologicalProfile(earth: number, air: number): AstrologicalProfile {
  if (earth > air) {
    return {
      sign: "Taurus",
      element: "Earth",
      description: "Practical, reliable, patient, and devoted. You value stability and are grounded in reality.",
      traits: ["Reliable", "Patient", "Practical", "Devoted", "Responsible"]
    };
  } else {
    return {
      sign: "Gemini",
      element: "Air",
      description: "Adaptable, outgoing, and intelligent. You value communication and are curious about the world.",
      traits: ["Curious", "Adaptable", "Expressive", "Quick-witted", "Sociable"]
    };
  }
}