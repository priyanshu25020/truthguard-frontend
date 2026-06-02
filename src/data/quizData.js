// src/data/quizData.js

export const quizSections = [
    // ================= 🟣 LEVEL 1: BEGINNER (1-10) =================
    {
        id: 1,
        title: "Real vs Fake Headlines",
        category: "Level 1: Beginner",
        questions: [
            {
                question: "Which of the following headlines is most likely to be REAL?",
                options: [
                    { id: 'A', text: "Scientists Discover Secret Energy Source That Will End All Bills!" },
                    { id: 'B', text: "Breaking: Bollywood Star Gets Arrested in Shocking Case!" },
                    { id: 'C', text: "New Study Shows Daily Exercise Improves Mental Health" },
                    { id: 'D', text: "You Won't Believe What This Politician Said About Citizens!" }
                ],
                correctAnswer: 'C',
                explanation: "Factual and specific. It avoids sensational words."
            },
            {
                question: "Which headline appears the MOST trustworthy?",
                options: [
                    { id: 'A', text: "Researchers Publish Findings on Climate Change Trends" },
                    { id: 'B', text: "Government HIDES Truth About Weather Disasters!" },
                    { id: 'C', text: "This One Trick Will Save the Planet Overnight!" },
                    { id: 'D', text: "Experts Are SHOCKED By This Discovery!" }
                ],
                correctAnswer: 'A',
                explanation: "It sounds neutral, factual, and evidence-based."
            },
            {
                question: "Which headline is likely clickbait or fake?",
                options: [
                    { id: 'A', text: "City Launches New Public Transportation Initiative" },
                    { id: 'B', text: "Doctors Recommend Balanced Diet for Better Health" },
                    { id: 'C', text: "Man Finds Hidden Treasure Worth Billions in Backyard!" },
                    { id: 'D', text: "University Announces Scholarship Program" }
                ],
                correctAnswer: 'C',
                explanation: "Extraordinary claims with exaggerated numbers are often fake."
            },
            {
                question: "Which headline sounds most credible?",
                options: [
                    { id: 'A', text: "Study Finds Link Between Sleep and Academic Performance" },
                    { id: 'B', text: "Sleeping 2 Hours a Day Makes You Smarter!" },
                    { id: 'C', text: "Scientists Finally Prove Time Travel Exists!" },
                    { id: 'D', text: "Secret Formula Guarantees Success in Exams!" }
                ],
                correctAnswer: 'A',
                explanation: "It reports research findings without exaggeration."
            },
            {
                question: "Which headline should raise suspicion?",
                options: [
                    { id: 'A', text: "Local School Wins National Science Competition" },
                    { id: 'B', text: "Experts Hate Him! Student Gets Perfect Grades With One Trick!" },
                    { id: 'C', text: "New Library Opens Downtown" },
                    { id: 'D', text: "Hospital Expands Emergency Services" }
                ],
                correctAnswer: 'B',
                explanation: "The phrase 'Experts Hate Him' is a common clickbait tactic."
            },
            {
                question: "Which headline is written in a professional news style?",
                options: [
                    { id: 'A', text: "Government Releases Annual Economic Report" },
                    { id: 'B', text: "The Economy Is About to Collapse Tomorrow!!!" },
                    { id: 'C', text: "You'll Never Guess What Happened to the Market!" },
                    { id: 'D', text: "Secret Economic Plan Leaked!" }
                ],
                correctAnswer: 'A',
                explanation: "Professional journalism usually uses neutral language."
            },
            {
                question: "Which headline is most likely based on evidence?",
                options: [
                    { id: 'A', text: "Researchers Test New Vaccine in Clinical Trial" },
                    { id: 'B', text: "Miracle Vaccine Cures Every Disease Instantly!" },
                    { id: 'C', text: "Doctors Don't Want You to Know This Secret!" },
                    { id: 'D', text: "One Pill Makes You Live Forever!" }
                ],
                correctAnswer: 'A',
                explanation: "Clinical trials are real scientific processes."
            },
            {
                question: "Which headline looks exaggerated?",
                options: [
                    { id: 'A', text: "New Smartphone Released with Improved Battery Life" },
                    { id: 'B', text: "This Smartphone Will Change Humanity Forever!" },
                    { id: 'C', text: "Company Announces New Product Line" },
                    { id: 'D', text: "Tech Conference Scheduled for June" }
                ],
                correctAnswer: 'B',
                explanation: "Extreme promises are a common sign of misleading content."
            },
            {
                question: "Which headline is the most objective?",
                options: [
                    { id: 'A', text: "Survey Reports Increase in Online Learning Participation" },
                    { id: 'B', text: "Online Learning Is Destroying Education!" },
                    { id: 'C', text: "Parents Furious About Online Classes!" },
                    { id: 'D', text: "This New Learning Method Will Shock You!" }
                ],
                correctAnswer: 'A',
                explanation: "It presents survey data without emotional wording."
            },
            {
                question: "Which headline would a fact-checker trust the most?",
                options: [
                    { id: 'A', text: "NASA Releases Images from Latest Space Mission" },
                    { id: 'B', text: "Aliens Secretly Living on Earth Confirmed!" },
                    { id: 'C', text: "Government Hiding Alien Technology!" },
                    { id: 'D', text: "Proof That Humans Came from Another Planet!" }
                ],
                correctAnswer: 'A',
                explanation: "The headline references a known organization and a verifiable event."
            }
            // Aap yahan aur questions add kar sakte hain...
        ]
    },
    {
        id: 2, title: "Clickbait Detection", category: "Level 1: Beginner", questions: [{
            question: "Which headline is the MOST obvious clickbait?",
            options: [
                { id: 'A', text: "City Council Approves New Transportation Budget" },
                { id: 'B', text: "You Won't Believe What Happened After He Opened His Door!" },
                { id: 'C', text: "University Releases Annual Research Report" },
                { id: 'D', text: "Weather Forecast Predicts Rain This Weekend" }
            ],
            correctAnswer: 'B',
            explanation: "Phrases like 'You Won't Believe' are classic clickbait indicators."
        },
        {
            question: "Which headline is designed to create curiosity without giving details?",
            options: [
                { id: 'A', text: "Scientists Publish Findings on Renewable Energy" },
                { id: 'B', text: "This One Simple Trick Changed Everything!" },
                { id: 'C', text: "Government Announces New Education Policy" },
                { id: 'D', text: "Hospital Opens New Emergency Wing" }
            ],
            correctAnswer: 'B',
            explanation: "It hides key information to force users to click."
        },
        {
            question: "Which headline uses emotional manipulation?",
            options: [
                { id: 'A', text: "Local School Wins National Competition" },
                { id: 'B', text: "Parents Are Furious After Seeing This Shocking Report!" },
                { id: 'C', text: "New Park Opens Downtown" },
                { id: 'D', text: "Research Shows Benefits of Meditation" }
            ],
            correctAnswer: 'B',
            explanation: "Words like 'furious' and 'shocking' are often used to trigger emotions."
        },
        {
            question: "Which headline is most likely clickbait?",
            options: [
                { id: 'A', text: "Study Examines Effects of Screen Time on Teenagers" },
                { id: 'B', text: "Doctors Hate This New Health Secret!" },
                { id: 'C', text: "New Medical Center Opens in City" },
                { id: 'D', text: "Researchers Develop Improved Cancer Screening Method" }
            ],
            correctAnswer: 'B',
            explanation: "'Doctors Hate This' is a common clickbait phrase."
        },
        {
            question: "Which headline exaggerates reality the most?",
            options: [
                { id: 'A', text: "New Smartphone Features Longer Battery Life" },
                { id: 'B', text: "This Smartphone Will Change Human History Forever!" },
                { id: 'C', text: "Tech Company Announces Product Launch" },
                { id: 'D', text: "Industry Report Highlights Mobile Trends" }
            ],
            correctAnswer: 'B',
            explanation: "It makes an unrealistic claim to attract clicks."
        },
        {
            question: "Which headline creates a false sense of urgency?",
            options: [
                { id: 'A', text: "Scientists Release New Research Paper" },
                { id: 'B', text: "Read This Before It's Deleted Forever!" },
                { id: 'C', text: "Library Announces New Opening Hours" },
                { id: 'D', text: "City Expands Public Transport Network" }
            ],
            correctAnswer: 'B',
            explanation: "Urgency is often used to pressure users into clicking."
        },
        {
            question: "Which headline relies on mystery rather than facts?",
            options: [
                { id: 'A', text: "Government Publishes Economic Growth Report" },
                { id: 'B', text: "What This Woman Found Under Her Bed Will Shock You!" },
                { id: 'C', text: "Scientists Discover New Marine Species" },
                { id: 'D', text: "University Launches Scholarship Program" }
            ],
            correctAnswer: 'B',
            explanation: "The headline hides information and relies on curiosity."
        },
        {
            question: "Which headline contains a typical clickbait phrase?",
            options: [
                { id: 'A', text: "Researchers Analyze Air Pollution Trends" },
                { id: 'B', text: "The Secret Big Companies Don't Want You to Know!" },
                { id: 'C', text: "New Highway Construction Begins" },
                { id: 'D', text: "Museum Opens New Exhibition" }
            ],
            correctAnswer: 'B',
            explanation: "'Don't Want You to Know' is a classic clickbait tactic."
        },
        {
            question: "Which headline is most likely written to maximize clicks rather than inform?",
            options: [
                { id: 'A', text: "Study Finds Link Between Sleep and Productivity" },
                { id: 'B', text: "This Amazing Discovery Left Scientists Speechless!" },
                { id: 'C', text: "Researchers Publish Climate Data Analysis" },
                { id: 'D', text: "City Introduces New Recycling Program" }
            ],
            correctAnswer: 'B',
            explanation: "The headline focuses on hype instead of information."
        },
        {
            question: "Which headline should immediately make a reader skeptical?",
            options: [
                { id: 'A', text: "NASA Releases Data from Latest Mars Mission" },
                { id: 'B', text: "Scientists Confirm Humans Will Become Immortal by 2030!" },
                { id: 'C', text: "Health Department Issues Seasonal Flu Advisory" },
                { id: 'D', text: "New Research Examines Ocean Temperatures" }
            ],
            correctAnswer: 'B',
            explanation: "Extraordinary claims without evidence are often clickbait."
        }]
    },
    { id: 3, title: "Misleading Titles", category: "Level 1: Beginner", questions: [] },
    { id: 4, title: "Emotional Manipulation", category: "Level 1: Beginner", questions: [] },
    { id: 5, title: "Sensational News", category: "Level 1: Beginner", questions: [] },
    { id: 6, title: "Fact vs Opinion", category: "Level 1: Beginner", questions: [] },
    { id: 7, title: "Source Identification", category: "Level 1: Beginner", questions: [] },
    { id: 8, title: "Viral Social Media Posts", category: "Level 1: Beginner", questions: [] },
    { id: 9, title: "Image Context Check", category: "Level 1: Beginner", questions: [] },
    { id: 10, title: "Basic News Verification", category: "Level 1: Beginner", questions: [] },

    // ================= 🔵 LEVEL 2: INTERMEDIATE (11-20) =================
    { id: 11, title: "Deepfake Image Detection", category: "Level 2: Intermediate", questions: [] },
    { id: 12, title: "Fake Statistics & Numbers", category: "Level 2: Intermediate", questions: [] },
    { id: 13, title: "Political Misinformation", category: "Level 2: Intermediate", questions: [] },
    { id: 14, title: "Health & Medical Myths", category: "Level 2: Intermediate", questions: [] },
    { id: 15, title: "Science News Verification", category: "Level 2: Intermediate", questions: [] },
    { id: 16, title: "AI Generated Content", category: "Level 2: Intermediate", questions: [] },
    { id: 17, title: "Fake Expert Claims", category: "Level 2: Intermediate", questions: [] },
    { id: 18, title: "Conspiracy Theories", category: "Level 2: Intermediate", questions: [] },
    { id: 19, title: "Biased Reporting", category: "Level 2: Intermediate", questions: [] },
    { id: 20, title: "Manipulated Quotes", category: "Level 2: Intermediate", questions: [] },

    // ================= 🟢 LEVEL 3: ADVANCED (21-30) =================
    { id: 21, title: "Reverse Image Search Challenges", category: "Level 3: Advanced", questions: [] },
    { id: 22, title: "Propaganda Techniques", category: "Level 3: Advanced", questions: [] },
    { id: 23, title: "Election Disinformation", category: "Level 3: Advanced", questions: [] },
    { id: 24, title: "Corporate Fake News", category: "Level 3: Advanced", questions: [] },
    { id: 25, title: "Financial Scams & Rumors", category: "Level 3: Advanced", questions: [] },
    { id: 26, title: "Cybersecurity Hoaxes", category: "Level 3: Advanced", questions: [] },
    { id: 27, title: "International Fake News Cases", category: "Level 3: Advanced", questions: [] },
    { id: 28, title: "Satire vs Real News", category: "Level 3: Advanced", questions: [] },
    { id: 29, title: "Breaking News Verification", category: "Level 3: Advanced", questions: [] },
    { id: 30, title: "Advanced Fact Checking Lab", category: "Level 3: Advanced", questions: [] },

    // ================= 🏆 FINAL BOSS =================
    { id: 31, title: "Master Fact Checker Challenge", category: "Final Boss", questions: [] }
];