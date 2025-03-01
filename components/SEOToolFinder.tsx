import React, { useState } from 'react';

const SEOToolFinder = () => {
  // Tool data combining ratings, market segments and ideal applications
  const toolsData = [
    {
      name: "Semrush",
      category: "All-in-One SEO Platforms",
      wf: 30.1,
      price: "$139.94 - $499.95/month",
      segments: "Small, medium and large businesses",
      trial: "7 day trial"
    },
    {
      name: "SE Ranking",
      category: "All-in-One SEO Platforms",
      wf: 29.1,
      price: "$65 - $259/month",
      segments: "Small, medium and large businesses",
      trial: "14-day free trial"
    },
    {
      name: "Ahrefs",
      category: "All-in-One SEO Platforms",
      wf: 24.0,
      price: "$129 - $1499/month",
      segments: "Small, medium and large businesses",
      trial: "No free trial"
    },
    {
      name: "Serpstat",
      category: "All-in-One SEO Platforms",
      wf: 23.6,
      price: "$59 - $500+/month",
      segments: "Small, medium and large businesses",
      trial: "7-day trial"
    },
    {
      name: "Raven Tools",
      category: "All-in-One SEO Platforms",
      wf: 18.0,
      price: "$49 - $479/month",
      segments: "Small, medium and large businesses",
      trial: "7-day trial"
    },
    {
      name: "Woorank",
      category: "All-in-One SEO Platforms",
      wf: 15.0,
      price: "$89.99 - $500+/month",
      segments: "Small, medium and large businesses",
      trial: "3-day trial"
    },
    {
      name: "Ubersuggest",
      category: "All-in-One SEO Platforms",
      wf: 18.2,
      price: "$12 - $40/month",
      segments: "Small, medium and large businesses",
      trial: "7-day free trial"
    },
    {
      name: "Moz Pro",
      category: "All-in-One SEO Platforms",
      wf: 23.6,
      price: "$99 - $179/month",
      segments: "Small, medium and large businesses",
      trial: "30-day trial"
    },
    {
      name: "Mangools",
      category: "All-in-One SEO Platforms",
      wf: 18.9,
      price: "$54 - $142/month",
      segments: "Small, medium and large businesses",
      trial: "10-day trial"
    },
    {
      name: "SEO PowerSuite",
      category: "All-in-One SEO Platforms",
      wf: 24.9,
      price: "$29.10 - $49.95/month",
      segments: "Small, medium and large businesses",
      trial: "14-day trial"
    },
    {
      name: "RankIQ",
      category: "Blogging and Content Creation",
      wf: 26.4,
      price: "$49/month",
      segments: "Small to medium bloggers or content creators",
      trial: "No free trial"
    },
    {
      name: "Surfer",
      category: "Content Optimization Tools",
      wf: 25.3,
      price: "$99 - $500+/month",
      segments: "Small, medium and large businesses",
      trial: "7-day money-back guarantee"
    },
    {
      name: "MarketMuse",
      category: "Content Optimization Tools",
      wf: 20.9,
      price: "$99 - $499/month",
      segments: "Small, medium and large businesses",
      trial: "Contact for trial"
    },
    {
      name: "BrightEdge",
      category: "Enterprise SEO Platforms",
      wf: 24.8,
      price: "Custom pricing",
      segments: "Medium and large businesses",
      trial: "Contact required"
    },
    {
      name: "Conductor",
      category: "Enterprise SEO Platforms",
      wf: 24.1,
      price: "Custom pricing",
      segments: "Medium and large businesses",
      trial: "30-day trial"
    },
    {
      name: "seoClarity",
      category: "Enterprise SEO Platforms",
      wf: 19.8,
      price: "$2,500 - $4,500+/month",
      segments: "Medium and large businesses",
      trial: "Contact for trial"
    },
    {
      name: "Lumar",
      category: "Enterprise SEO Platforms",
      wf: 16.3,
      price: "Custom pricing",
      segments: "Medium and large businesses",
      trial: "Contact for trial"
    },
    {
      name: "Screaming Frog SEO Spider",
      category: "Technical SEO and Audit Tools",
      wf: 17.3,
      price: "$259/month",
      segments: "Small, medium and large businesses",
      trial: "14-day money-back guarantee"
    },
    {
      name: "Sitechecker",
      category: "Technical SEO and Audit Tools",
      wf: 18.8,
      price: "$59 - $349/month",
      segments: "Small, medium and large businesses",
      trial: "14-day free trial"
    },
    {
      name: "SEOptimer",
      category: "Technical SEO and Audit Tools",
      wf: 21.5,
      price: "$29 - $59/month",
      segments: "Small, medium and large businesses",
      trial: "14-day free trial"
    },
    {
      name: "Seobility",
      category: "Technical SEO and Audit Tools",
      wf: 22.5,
      price: "$55 - $198/month",
      segments: "Small, medium and large businesses",
      trial: "14-day trial"
    },
    {
      name: "Yoast SEO",
      category: "Blogging and Content Creation",
      wf: 19.7,
      price: "$99/year",
      segments: "Small, medium and large businesses",
      trial: "14-day trial"
    },
    {
      name: "Rank Math",
      category: "Blogging and Content Creation",
      wf: 18.9,
      price: "$6.99 - $49.99/month",
      segments: "Small, medium and large businesses",
      trial: "30-day money-back guarantee"
    },
    {
      name: "AIOSEO",
      category: "Blogging and Content Creation",
      wf: 19.6,
      price: "$49.60 - $299.60/month",
      segments: "Small, medium and large businesses",
      trial: "14-day money-back guarantee"
    },
    {
      name: "Majestic SEO",
      category: "Backlink Analysis Tools",
      wf: 15.3,
      price: "$49.99 - $399.99/month",
      segments: "Small, medium and large businesses",
      trial: "7-day money-back guarantee"
    },
    {
      name: "SimilarWeb",
      category: "Traffic and Competition Analysis Tools",
      wf: 26.2,
      price: "$125 - $500+/month",
      segments: "Small, medium and large businesses",
      trial: "7-day free trial"
    },
    {
      name: "SpyFu",
      category: "Traffic and Competition Analysis Tools",
      wf: 23.8,
      price: "$39 - $79/month",
      segments: "Small, medium and large businesses",
      trial: "30-day money-back guarantee"
    },
    {
      name: "Plerdy",
      category: "Traffic and Competition Analysis Tools",
      wf: 22.6,
      price: "$32 - $108/month",
      segments: "Small, medium and large businesses",
      trial: "14-day free trial"
    },
    {
      name: "AccuRanker",
      category: "Rank Tracking Tools",
      wf: 21.4,
      price: "$142/month",
      segments: "Small, medium and large businesses",
      trial: "14-day trial"
    },
    {
      name: "Seobase",
      category: "Rank Tracking Tools",
      wf: 21.0,
      price: "$14 - $88/month",
      segments: "Small, medium and large businesses",
      trial: "7-day trial"
    },
    {
      name: "ContentKing",
      category: "Rank Tracking Tools",
      wf: 19.2,
      price: "$49 - $500+/month",
      segments: "Small, medium and large businesses",
      trial: "14-day trial"
    },
    {
      name: "Google Search Console",
      category: "Website Performance and Analytics Tools",
      wf: 22.9,
      price: "Free",
      segments: "Small, medium and large businesses",
      trial: "Free tool"
    },
    {
      name: "Google Trends",
      category: "Website Performance and Analytics Tools",
      wf: 21.5,
      price: "Free",
      segments: "Small, medium and large businesses",
      trial: "Free tool"
    },
    {
      name: "Siteimprove",
      category: "Website Performance and Analytics Tools",
      wf: 23.2,
      price: "$500+/month",
      segments: "Medium and large businesses",
      trial: "Contact for trial"
    }
  ];

  // Questions for the survey
  const questions = [
    {
      id: 'seo_focus',
      text: 'What is your main SEO goal?',
      options: [
        { value: 'comprehensive', label: 'Comprehensive SEO - I want a tool covering all aspects of SEO' },
        { value: 'content', label: 'Content Optimization - I want help with creating SEO-friendly content' },
        { value: 'blogging', label: 'Blogging and Content Creation - I need specialized tools for blogging' },
        { value: 'technical', label: 'Technical SEO - I need to analyze technical issues on my site' },
        { value: 'backlinks', label: 'Link Building - I want to analyze and improve my backlink profile' },
        { value: 'rank_tracking', label: 'Rank Tracking - I want to monitor my search engine rankings' },
        { value: 'competitor', label: 'Competitor Analysis - I need to research my competitors\' strategies' },
        { value: 'performance', label: 'Website Performance - I want to monitor and improve site performance' }
      ]
    },
    {
      id: 'organization_size',
      text: 'What is the size of your organization?',
      options: [
        { value: 'small', label: 'Small business (1-50 employees)' },
        { value: 'mid', label: 'Medium business (51-500 employees)' },
        { value: 'enterprise', label: 'Large enterprise (over 500 employees)' }
      ]
    },
    {
      id: 'budget',
      text: 'What is your monthly budget for SEO tools?',
      options: [
        { value: 'low', label: 'Below $50/month' },
        { value: 'medium', label: '$50-$200/month' },
        { value: 'high', label: '$200-$500/month' },
        { value: 'enterprise', label: 'Above $500/month' }
      ]
    },
    {
      id: 'experience',
      text: 'What is your level of SEO experience?',
      options: [
        { value: 'beginner', label: 'Beginner' },
        { value: 'intermediate', label: 'Intermediate' },
        { value: 'advanced', label: 'Advanced' }
      ]
    },
    {
      id: 'clients',
      text: 'Do you manage SEO for clients?',
      options: [
        { value: 'yes', label: 'Yes, I manage for multiple clients' },
        { value: 'single', label: 'Yes, but only for one or two clients' },
        { value: 'no', label: 'No, only for my own organization' }
      ]
    }
  ];

  // State to track current question and answers
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  // Handle option selection
  const handleOptionSelect = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  // Move to next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateRecommendations();
      setShowResults(true);
    }
  };

  // Move to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Reset the survey
  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
  };

  // Generate recommendations based on answers
  const generateRecommendations = () => {
    // Calculate scores for each tool based on answers
    const scores = toolsData.map(tool => {
      let score = 0;
      let excluded = false;
      
      // Special handling for blogging tools - they should only appear for blogging category
      if (['RankIQ', 'Yoast SEO', 'Rank Math', 'AIOSEO'].includes(tool.name)) {
        if (answers.seo_focus !== 'blogging') {
          excluded = true;
        } else {
          // Give blogging tools a massive boost when blogging is selected
          score += 200; 
        }
      }
      
      // Organization size scoring
      if (answers.organization_size === 'small') {
        if (!tool.segments.includes('Small')) {
          excluded = true;
        } else {
          score += 15;
        }
      } else if (answers.organization_size === 'mid') {
        if (!tool.segments.includes('medium')) {
          excluded = true;
        } else {
          score += 15;
        }
      } else if (answers.organization_size === 'enterprise') {
        if (!tool.segments.includes('large')) {
          excluded = true;
        } else {
          score += 15;
          // Enterprise tools get bonus points for enterprise users
          if (tool.category === 'Enterprise SEO Platforms') {
            score += 30;
          }
        }
      }
      
      // SEO focus scoring - tools matching the chosen category get a significant boost
      const categoryMapping = {
        'comprehensive': 'All-in-One SEO Platforms',
        'content': 'Content Optimization Tools',
        'blogging': 'Blogging and Content Creation',
        'technical': 'Technical SEO and Audit Tools',
        'backlinks': 'Backlink Analysis Tools',
        'rank_tracking': 'Rank Tracking Tools',
        'competitor': 'Traffic and Competition Analysis Tools',
        'performance': 'Website Performance and Analytics Tools'
      };
      
      const targetCategory = categoryMapping[answers.seo_focus];
      
      if (tool.category === targetCategory) {
        score += 150; // Significantly higher priority for matching category
      } else if (tool.category === 'All-in-One SEO Platforms') {
        // All-in-One tools should be treated better as they contain functionality for all categories
        // But not as good as dedicated tools for the specific category
        score += 15; // Small bonus for all-in-one tools since they cover all aspects
      } else {
        // Tools from categories that don't match the goal and aren't all-in-one get penalized
        score -= 50; // Higher penalty for specialized tools that don't match the goal
      }
      
      // Special handling for comprehensive SEO with highest budget and enterprise size
      if (answers.seo_focus === 'comprehensive' && 
          answers.budget === 'enterprise' && 
          answers.organization_size === 'enterprise') {
        // Ensure enterprise tools get top priority
        if (['BrightEdge', 'Conductor', 'seoClarity', 'Lumar'].includes(tool.name)) {
          score += 200;
        }
      }
      
      // Budget scoring
      if (answers.budget === 'low') {
        // Best for low budget: free tools and affordable options
        if (tool.price.includes('Free')) {
          score += 40;
        } else if (
          tool.price.includes('$29') || 
          tool.price.includes('$39') || 
          tool.price.includes('$49') ||
          tool.price.includes('€12')
        ) {
          score += 30;
        } else if (tool.price.includes('Custom') || tool.price.includes('$500') || tool.price.includes('$1499')) {
          score -= 30; // Very expensive tools are not suitable for low budgets
        }
      } else if (answers.budget === 'medium') {
        // Medium budget prefers mid-range tools
        if (
          tool.price.includes('$99') || 
          tool.price.includes('$129') || 
          tool.price.includes('$139') ||
          tool.price.includes('€59') ||
          tool.price.includes('$59')
        ) {
          score += 30;
        } else if (tool.price.includes('Custom') || tool.price.includes('$500') || tool.price.includes('$1499')) {
          score -= 20; // Very expensive tools are less suitable
        }
      } else if (answers.budget === 'high') {
        // High budget prefers more advanced tools
        if (
          tool.price.includes('$199') || 
          tool.price.includes('$249') || 
          tool.price.includes('$299') ||
          tool.price.includes('€179') ||
          tool.price.includes('$349')
        ) {
          score += 30;
        }
      } else if (answers.budget === 'enterprise') {
        // Enterprise budget looks for the most powerful tools
        if (tool.price.includes('Custom') || 
            tool.price.includes('$499') || 
            tool.price.includes('$1499') ||
            tool.price.includes('$2,500')) {
          score += 40;
        } else if (tool.price.includes('Free') || tool.price.includes('$29') || tool.price.includes('€12')) {
          score -= 10; // Very inexpensive tools might not meet enterprise needs
        }
      }
      
      // Experience level scoring
      if (answers.experience === 'beginner') {
        // Beginners need user-friendly tools - based on thorough document analysis
        if ([
          'Yoast SEO', 'Rank Math', 'AIOSEO', 'Ubersuggest', 'SE Ranking',
          'Google Search Console', 'Google Trends', 'Seobase', 'RankIQ',
          'SEOptimer', 'Woorank'
        ].includes(tool.name)) {
          score += 40; // Significant boost for beginner-friendly tools
        } else if ([
          'Ahrefs', 'BrightEdge', 'Conductor', 'seoClarity', 'Lumar',
          'Screaming Frog SEO Spider', 'AccuRanker', 'Majestic SEO', 'SimilarWeb'
        ].includes(tool.name)) {
          score -= 30; // Significant penalty for tools too complex for beginners
        }
      } else if (answers.experience === 'intermediate') {
        // Intermediate users need balanced tools
        if ([
          'Semrush', 'Serpstat', 'SEO PowerSuite', 'Raven Tools', 'Moz Pro',
          'Mangools', 'Sitechecker', 'Seobility', 'ContentKing', 'SpyFu',
          'Plerdy', 'Siteimprove', 'Surfer', 'MarketMuse'
        ].includes(tool.name)) {
          score += 30; // Boost for intermediate-level tools
        }
      } else if (answers.experience === 'advanced') {
        // Advanced users need powerful, complex tools
        if ([
          'Ahrefs', 'BrightEdge', 'Conductor', 'seoClarity', 'Lumar',
          'Screaming Frog SEO Spider', 'AccuRanker', 'Majestic SEO', 'SimilarWeb'
        ].includes(tool.name)) {
          score += 40; // Significant boost for advanced tools
        } else if ([
          'Yoast SEO', 'Ubersuggest', 'Google Trends', 'SEOptimer', 'Woorank', 'RankIQ'
        ].includes(tool.name)) {
          score -= 15; // Small penalty for tools that might be too basic for advanced users
        }
      }
      
      // Client management scoring
      if (answers.clients === 'yes') {
        // Tools best for managing multiple clients - based on thorough document analysis
        if ([
          'Semrush', 'SE Ranking', 'Ahrefs', 'Serpstat', 'SEO PowerSuite',
          'Raven Tools', 'Woorank', 'Moz Pro', 'BrightEdge', 'Conductor',
          'seoClarity', 'Screaming Frog SEO Spider', 'SEOptimer', 'AccuRanker',
          'Seobase', 'ContentKing', 'Majestic SEO', 'SpyFu', 'Sitechecker',
          'Mangools', 'Surfer'
        ].includes(tool.name)) {
          score += 40; // Significant boost for agency-focused tools
        }
      } else if (answers.clients === 'single') {
        // Tools good for managing a single client
        if ([
          'Semrush', 'SE Ranking', 'Serpstat', 'Raven Tools', 'Sitechecker',
          'Seobility', 'Seobase', 'SpyFu'
        ].includes(tool.name)) {
          score += 25; // Moderate boost for tools good for single client management
        }
      } else if (answers.clients === 'no') {
        // Tools best for individual websites or own organization
        if ([
          'Yoast SEO', 'Rank Math', 'AIOSEO', 'Ubersuggest', 'Google Search Console',
          'Google Trends', 'RankIQ', 'MarketMuse', 'Plerdy', 'Seobility', 'Siteimprove'
        ].includes(tool.name)) {
          score += 35; // Boost for tools focused on individual websites
        } else if ([
          'BrightEdge', 'Conductor', 'seoClarity', 'Raven Tools'
        ].includes(tool.name)) {
          score -= 20; // Penalty for enterprise/agency tools when managing own site
        }
      }
      
      // Add WF factor to score (normalized to be worth up to 20 points)
      score += (tool.wf / 30) * 20;
      
      return { ...tool, score, excluded };
    });
    
    // Filter out excluded tools and sort by score
    // For comprehensive SEO, show 10 tools, otherwise show 5
    const resultsLimit = answers.seo_focus === 'comprehensive' ? 10 : 5;
    const filteredTools = scores.filter(tool => !tool.excluded)
                                .sort((a, b) => b.score - a.score)
                                .slice(0, resultsLimit);
    setRecommendations(filteredTools);
  };

  return (
    <div className="mx-auto max-w-4xl p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">SEO Tool Finder</h1>
      
      {!showResults ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round((currentQuestion / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].text}</h2>
          
          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option) => (
              <div 
                key={option.value}
                className={`p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors ${
                  answers[questions[currentQuestion].id] === option.value 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300'
                }`}
                onClick={() => handleOptionSelect(questions[currentQuestion].id, option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded ${
                currentQuestion === 0 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className={`px-4 py-2 rounded ${
                !answers[questions[currentQuestion].id] 
                  ? 'bg-blue-300 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Show recommendations' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Recommended SEO Tools</h2>
          
          <div className="space-y-6">
            {recommendations.map((tool, index) => (
              <div key={tool.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{index + 1}. {tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round(tool.score)} pts
                  </div>
                </div>
                
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium">Price:</span> {tool.price}
                  </div>
                  <div>
                    <span className="font-medium">Trial:</span> {tool.trial}
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium">Market segments:</span> {tool.segments}
                  </div>
                </div>
              </div>
            ))}
            
            {recommendations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No matching tools found. Please try different criteria.</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Start over
            </button>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setShowResults(false);
              }}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Back to questions
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOToolFinder;
