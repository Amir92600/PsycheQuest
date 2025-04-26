import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Briefcase as BriefcaseBusiness, PersonStanding, Stars } from 'lucide-react';

export const Home = () => {
  return (
    <div>
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
          Discover Your True Personality
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Take our comprehensive personality test and gain insights into your psychological profile,
          career matches, and more.
        </p>
        <Link
          to="/quiz"
          className="inline-block bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
        >
          Start The Test
        </Link>
      </section>

      <section className="py-16 bg-white rounded-xl shadow-md">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Brain className="h-12 w-12 text-indigo-500" />}
              title="Psychological Profile"
              description="Understand your traits including extraversion, neuroticism, openness, and more."
            />
            <FeatureCard
              icon={<BriefcaseBusiness className="h-12 w-12 text-purple-500" />}
              title="Career Insights"
              description="Discover which professional sectors and specific jobs match your personality."
            />
            <FeatureCard
              icon={<PersonStanding className="h-12 w-12 text-pink-500" />}
              title="Self-Awareness"
              description="Gain a deeper understanding of your behaviors, motivations, and decision-making processes."
            />
            <FeatureCard
              icon={<Stars className="h-12 w-12 text-blue-500" />}
              title="Astrological Influence"
              description="Explore how your astrological sign might influence your personality traits."
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Ready to discover yourself?</h2>
              <p className="text-gray-700 mb-6">
                Our comprehensive test takes just 15-20 minutes and provides detailed insights into your
                personality, strengths, and potential career paths.
              </p>
              <Link
                to="/quiz"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition-colors"
              >
                Take the Test Now
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="People discussing results"
                className="rounded-xl max-w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Take the Test"
              description="Answer our carefully crafted questions across multiple categories of personality traits."
            />
            <StepCard
              number="2"
              title="Get Your Results"
              description="Receive an instant comprehensive analysis of your personality profile."
            />
            <StepCard
              number="3"
              title="Download Report"
              description="Save your detailed results as a PDF to reference and reflect on anytime."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StepCard = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow relative">
      <div className="absolute -top-5 -left-5 bg-gradient-to-r from-indigo-600 to-violet-500 text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};