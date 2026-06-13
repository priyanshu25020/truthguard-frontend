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
                { id: 'B', text: "University Releases Annual Research Report" },
                { id: 'C', text: "You Won't Believe What Happened After He Opened His Door!" },
                { id: 'D', text: "Weather Forecast Predicts Rain This Weekend" }
            ],
            correctAnswer: 'C',
            explanation: "Phrases like 'You Won't Believe' are classic clickbait indicators."
        },
        {
            question: "Which headline is designed to create curiosity without giving details?",
            options: [
                { id: 'A', text: "Government Announces New Education Policy" },
                { id: 'B', text: "Scientists Publish Findings on Renewable Energy" },
                { id: 'C', text: "Hospital Opens New Emergency Wing" },
                { id: 'D', text: "This One Simple Trick Changed Everything!" }
            ],
            correctAnswer: 'D',
            explanation: "It hides key information to force users to click."
        },
        {
            question: "Which headline uses emotional manipulation?",
            options: [
                { id: 'A', text: "Parents Are Furious After Seeing This Shocking Report!" },
                { id: 'B', text: "Local School Wins National Competition" },
                { id: 'C', text: "New Park Opens Downtown" },
                { id: 'D', text: "Research Shows Benefits of Meditation" }
            ],
            correctAnswer: 'A',
            explanation: "Words like 'furious' and 'shocking' are often used to trigger emotions."
        },
        {
            question: "Which headline is most likely clickbait?",
            options: [
                { id: 'A', text: "Researchers Develop Improved Cancer Screening Method" },
                { id: 'B', text: "Doctors Hate This New Health Secret!" },
                { id: 'C', text: "Study Examines Effects of Screen Time on Teenagers" },
                { id: 'D', text: "New Medical Center Opens in City" }
            ],
            correctAnswer: 'B',
            explanation: "'Doctors Hate This' is a common clickbait phrase."
        },
        {
            question: "Which headline exaggerates reality the most?",
            options: [
                { id: 'A', text: "Industry Report Highlights Mobile Trends" },
                { id: 'B', text: "New Smartphone Features Longer Battery Life" },
                { id: 'C', text: "This Smartphone Will Change Human History Forever!" },
                { id: 'D', text: "Tech Company Announces Product Launch" }
            ],
            correctAnswer: 'C',
            explanation: "It makes an unrealistic claim to attract clicks."
        },
        {
            question: "Which headline creates a false sense of urgency?",
            options: [
                { id: 'A', text: "Read This Before It's Deleted Forever!" },
                { id: 'B', text: "Scientists Release New Research Paper" },
                { id: 'C', text: "Library Announces New Opening Hours" },
                { id: 'D', text: "City Expands Public Transport Network" }
            ],
            correctAnswer: 'A',
            explanation: "Urgency is often used to pressure users into clicking."
        },
        {
            question: "Which headline relies on mystery rather than facts?",
            options: [
                { id: 'A', text: "Scientists Discover New Marine Species" },
                { id: 'B', text: "University Launches Scholarship Program" },
                { id: 'C', text: "Government Publishes Economic Growth Report" },
                { id: 'D', text: "What This Woman Found Under Her Bed Will Shock You!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline hides information and relies on curiosity."
        },
        {
            question: "Which headline contains a typical clickbait phrase?",
            options: [
                { id: 'A', text: "Museum Opens New Exhibition" },
                { id: 'B', text: "The Secret Big Companies Don't Want You to Know!" },
                { id: 'C', text: "Researchers Analyze Air Pollution Trends" },
                { id: 'D', text: "New Highway Construction Begins" }
            ],
            correctAnswer: 'B',
            explanation: "'Don't Want You to Know' is a classic clickbait tactic."
        },
        {
            question: "Which headline is most likely written to maximize clicks rather than inform?",
            options: [
                { id: 'A', text: "City Introduces New Recycling Program" },
                { id: 'B', text: "Researchers Publish Climate Data Analysis" },
                { id: 'C', text: "This Amazing Discovery Left Scientists Speechless!" },
                { id: 'D', text: "Study Finds Link Between Sleep and Productivity" }
            ],
            correctAnswer: 'C',
            explanation: "The headline focuses on hype instead of information."
        },
        {
            question: "Which headline should immediately make a reader skeptical?",
            options: [
                { id: 'A', text: "Health Department Issues Seasonal Flu Advisory" },
                { id: 'B', text: "New Research Examines Ocean Temperatures" },
                { id: 'C', text: "Scientists Confirm Humans Will Become Immortal by 2030!" },
                { id: 'D', text: "NASA Releases Data from Latest Mars Mission" }
            ],
            correctAnswer: 'C',
            explanation: "Extraordinary claims without evidence are often clickbait."
        }]
    },
    {
        id: 3, title: "Misleading Titles", category: "Level 1: Beginner", questions: [{
            question: "Which headline is most likely misleading?",
            options: [
                { id: 'A', text: "Scientists Discover New Treatment for Diabetes" },
                { id: 'B', text: "This Fruit Completely Cures Diabetes Overnight!" },
                { id: 'C', text: "Doctors Publish New Medical Research" },
                { id: 'D', text: "Hospital Expands Diabetes Care Unit" }
            ],
            correctAnswer: 'B',
            explanation: "Claims of an overnight cure are misleading and unsupported."
        },
        {
            question: "Which headline exaggerates the actual event?",
            options: [
                { id: 'A', text: "Mayor Announces New Community Program" },
                { id: 'B', text: "Local Park Gets New Equipment" },
                { id: 'C', text: "This Decision Will Change the Entire World Forever!" },
                { id: 'D', text: "City Council Approves Budget Plan" }
            ],
            correctAnswer: 'C',
            explanation: "The headline exaggerates the significance of the event."
        },
        {
            question: "Which title may mislead readers by leaving out important context?",
            options: [
                { id: 'A', text: "Man Arrested After Incident Downtown" },
                { id: 'B', text: "University Opens New Research Center" },
                { id: 'C', text: "Government Releases Annual Report" },
                { id: 'D', text: "Weather Forecast Predicts Snowfall" }
            ],
            correctAnswer: 'A',
            explanation: "The headline lacks details and context about the incident."
        },
        {
            question: "Which headline uses misleading wording?",
            options: [
                { id: 'A', text: "Study Finds Coffee May Improve Focus" },
                { id: 'B', text: "Researchers Publish Nutrition Report" },
                { id: 'C', text: "Coffee Proven to Make Everyone Smarter!" },
                { id: 'D', text: "New Cafe Opens Downtown" }
            ],
            correctAnswer: 'C',
            explanation: "The headline overstates what research can actually prove."
        },
        {
            question: "Which headline could create a false impression?",
            options: [
                { id: 'A', text: "Vaccines Cause Dangerous Side Effects in Everyone!" },
                { id: 'B', text: "Health Officials Release New Vaccine Guidelines" },
                { id: 'C', text: "Doctors Recommend Routine Vaccinations" },
                { id: 'D', text: "Medical Study Reviews Vaccine Safety" }
            ],
            correctAnswer: 'A',
            explanation: "The claim is broad, misleading, and unsupported."
        },
        {
            question: "Which headline is most likely intended to mislead readers?",
            options: [
                { id: 'A', text: "City Launches Recycling Campaign" },
                { id: 'B', text: "Government Publishes Economic Data" },
                { id: 'C', text: "Scientists Discuss Climate Trends" },
                { id: 'D', text: "Experts Shocked by Secret Government Plot!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline uses sensational language without evidence."
        },
        {
            question: "Which title oversimplifies a complex issue?",
            options: [
                { id: 'A', text: "One Law Will Solve All Crime Problems Instantly!" },
                { id: 'B', text: "Researchers Study Crime Prevention Methods" },
                { id: 'C', text: "Police Department Releases Annual Statistics" },
                { id: 'D', text: "Community Leaders Discuss Safety Programs" }
            ],
            correctAnswer: 'A',
            explanation: "Complex social issues cannot be solved instantly by one law."
        },
        {
            question: "Which headline could mislead readers about scientific findings?",
            options: [
                { id: 'A', text: "Scientists Begin New Cancer Research Project" },
                { id: 'B', text: "Research Team Publishes Preliminary Results" },
                { id: 'C', text: "Scientists Say Cancer Will Be Eliminated Next Year!" },
                { id: 'D', text: "Medical Conference Highlights New Discoveries" }
            ],
            correctAnswer: 'C',
            explanation: "The claim makes unrealistic promises based on research."
        },
        {
            question: "Which headline lacks necessary context?",
            options: [
                { id: 'A', text: "Global Temperatures Continue Long-Term Rise" },
                { id: 'B', text: "Crime Increased by 200%!" },
                { id: 'C', text: "New Education Policy Introduced" },
                { id: 'D', text: "Local Charity Raises Funds for Schools" }
            ],
            correctAnswer: 'B',
            explanation: "Without time frame or location, the statistic is misleading."
        },
        {
            question: "Which headline should readers treat with caution?",
            options: [
                { id: 'A', text: "Government Releases Population Census Data" },
                { id: 'B', text: "University Announces Scholarship Program" },
                { id: 'C', text: "Scientists Publish Peer-Reviewed Study" },
                { id: 'D', text: "Miracle Device Guarantees Perfect Health for Life!" }
            ],
            correctAnswer: 'D',
            explanation: "Guarantees of perfect health are unrealistic and misleading."
        }]
    },
    {
        id: 4, title: "Emotional Manipulation", category: "Level 1: Beginner", questions: [{
            question: "Which headline is most likely designed to make readers feel angry?",
            options: [
                { id: 'A', text: "Parents Furious After School Makes Controversial Decision!" },
                { id: 'B', text: "School Board Announces New Policy Changes" },
                { id: 'C', text: "Teachers Attend Education Conference" },
                { id: 'D', text: "Students Participate in Science Fair" }
            ],
            correctAnswer: 'A',
            explanation: "The words 'Furious' and 'Controversial' are used to provoke anger."
        },
        {
            question: "Which headline uses fear to attract attention?",
            options: [
                { id: 'A', text: "Researchers Publish Health Study" },
                { id: 'B', text: "This Common Habit Could Be Secretly Destroying Your Life!" },
                { id: 'C', text: "Hospital Expands Emergency Services" },
                { id: 'D', text: "Doctors Discuss Public Health Trends" }
            ],
            correctAnswer: 'B',
            explanation: "The headline creates fear without providing evidence."
        },
        {
            question: "Which headline attempts to create sympathy?",
            options: [
                { id: 'A', text: "City Council Approves New Budget" },
                { id: 'B', text: "University Opens Research Center" },
                { id: 'C', text: "Heartbroken Family Left With Nothing After Tragic Event" },
                { id: 'D', text: "Weather Forecast Predicts Rain" }
            ],
            correctAnswer: 'C',
            explanation: "The wording is intended to trigger sympathy and sadness."
        },
        {
            question: "Which headline is most emotionally charged?",
            options: [
                { id: 'A', text: "Government Releases Annual Report" },
                { id: 'B', text: "Scientists Study Climate Patterns" },
                { id: 'C', text: "New Community Center Opens Downtown" },
                { id: 'D', text: "Shocking Betrayal Leaves Entire Nation Outraged!" }
            ],
            correctAnswer: 'D',
            explanation: "Words like 'Shocking' and 'Outraged' strongly appeal to emotions."
        },
        {
            question: "Which headline is designed to make readers feel guilty?",
            options: [
                { id: 'A', text: "Charity Organization Launches New Campaign" },
                { id: 'B', text: "If You Ignore This Story, You're Part of the Problem!" },
                { id: 'C', text: "Researchers Publish Environmental Findings" },
                { id: 'D', text: "New Public Park Opens This Weekend" }
            ],
            correctAnswer: 'B',
            explanation: "The headline pressures readers emotionally by inducing guilt."
        },
        {
            question: "Which headline uses emotional language instead of facts?",
            options: [
                { id: 'A', text: "Experts Release Economic Forecast" },
                { id: 'B', text: "Local Business Expands Operations" },
                { id: 'C', text: "Innocent Citizens Suffer as Heartless Officials Fail Again!" },
                { id: 'D', text: "Researchers Study Consumer Behavior" }
            ],
            correctAnswer: 'C',
            explanation: "The headline relies on emotional accusations rather than facts."
        },
        {
            question: "Which headline tries to provoke fear and panic?",
            options: [
                { id: 'A', text: "Scientists Warn of Possible Disease Outbreak Tomorrow!" },
                { id: 'B', text: "Hospital Releases Health Advisory" },
                { id: 'C', text: "Doctors Discuss Seasonal Illnesses" },
                { id: 'D', text: "Health Officials Monitor Public Safety" }
            ],
            correctAnswer: 'A',
            explanation: "The wording creates unnecessary alarm and urgency."
        },
        {
            question: "Which headline is most likely to manipulate emotions?",
            options: [
                { id: 'A', text: "New Research Examines Air Quality" },
                { id: 'B', text: "City Approves New Infrastructure Plan" },
                { id: 'C', text: "Community Volunteers Clean Local Park" },
                { id: 'D', text: "You Should Be Furious After Reading This Story!" }
            ],
            correctAnswer: 'D',
            explanation: "It directly tells readers how they should feel."
        },
        {
            question: "Which headline uses sadness to influence readers?",
            options: [
                { id: 'A', text: "Tragic Story of Forgotten Children Breaks Everyone's Heart" },
                { id: 'B', text: "Government Announces New Welfare Program" },
                { id: 'C', text: "School Introduces New Curriculum" },
                { id: 'D', text: "Researchers Study Childhood Development" }
            ],
            correctAnswer: 'A',
            explanation: "The headline uses emotional wording to evoke sadness."
        },
        {
            question: "Which headline appeals more to emotions than evidence?",
            options: [
                { id: 'A', text: "Scientists Publish Peer-Reviewed Research" },
                { id: 'B', text: "Data Shows Improvement in Public Health" },
                { id: 'C', text: "Experts Present Findings at Conference" },
                { id: 'D', text: "This Outrageous Scandal Will Leave You Speechless!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline focuses on emotional reaction instead of facts."
        }]
    },
    {
        id: 5, title: "Sensational News", category: "Level 1: Beginner", questions: [{
            question: "Which headline is the most sensationalized?",
            options: [
                { id: 'A', text: "Scientists Publish Climate Report" },
                { id: 'B', text: "City Council Approves New Budget" },
                { id: 'C', text: "SHOCKING Discovery Will Change Humanity Forever!" },
                { id: 'D', text: "University Announces Scholarship Program" }
            ],
            correctAnswer: 'C',
            explanation: "The headline exaggerates the importance of the discovery to attract attention."
        },
        {
            question: "Which headline uses dramatic language to grab attention?",
            options: [
                { id: 'A', text: "Experts Release New Economic Forecast" },
                { id: 'B', text: "Terrifying Secret Revealed That Nobody Saw Coming!" },
                { id: 'C', text: "Hospital Opens New Medical Wing" },
                { id: 'D', text: "Researchers Study Ocean Currents" }
            ],
            correctAnswer: 'B',
            explanation: "Words like 'Terrifying' and 'Nobody Saw Coming' are sensational."
        },
        {
            question: "Which headline is most likely trying to create excitement rather than inform?",
            options: [
                { id: 'A', text: "Government Releases Annual Statistics" },
                { id: 'B', text: "School Launches STEM Initiative" },
                { id: 'C', text: "Local Team Wins Regional Tournament" },
                { id: 'D', text: "Unbelievable Event Leaves Entire Country Speechless!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline focuses on drama rather than factual information."
        },
        {
            question: "Which headline exaggerates the significance of an event?",
            options: [
                { id: 'A', text: "New Smartphone Released Worldwide" },
                { id: 'B', text: "This Smartphone Will Revolutionize Human Civilization!" },
                { id: 'C', text: "Tech Company Announces Product Update" },
                { id: 'D', text: "Industry Report Reviews Market Trends" }
            ],
            correctAnswer: 'B',
            explanation: "The claim is unrealistic and overly dramatic."
        },
        {
            question: "Which headline contains sensational wording?",
            options: [
                { id: 'A', text: "City Expands Public Transportation System" },
                { id: 'B', text: "Researchers Publish Health Findings" },
                { id: 'C', text: "Government Announces Policy Changes" },
                { id: 'D', text: "Disastrous Mistake Sends Shockwaves Across the Nation!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline uses dramatic language to increase emotional impact."
        },
        {
            question: "Which headline is most likely written for clicks?",
            options: [
                { id: 'A', text: "You Won't Believe This Incredible Discovery!" },
                { id: 'B', text: "Scientists Release New Research Paper" },
                { id: 'C', text: "University Opens New Laboratory" },
                { id: 'D', text: "Weather Forecast Predicts Rain" }
            ],
            correctAnswer: 'A',
            explanation: "It relies on curiosity and hype instead of facts."
        },
        {
            question: "Which headline sounds exaggerated?",
            options: [
                { id: 'A', text: "Doctors Study New Treatment Methods" },
                { id: 'B', text: "Health Department Issues Guidelines" },
                { id: 'C', text: "Miracle Cure Eliminates Every Disease Instantly!" },
                { id: 'D', text: "Researchers Conduct Medical Trials" }
            ],
            correctAnswer: 'C',
            explanation: "Claims of miracle cures are often exaggerated and misleading."
        },
        {
            question: "Which headline uses sensationalism instead of evidence?",
            options: [
                { id: 'A', text: "New Law Approved by Parliament" },
                { id: 'B', text: "Scientists Examine Air Pollution Data" },
                { id: 'C', text: "School Introduces New Curriculum" },
                { id: 'D', text: "Massive Scandal Rocks the Nation Overnight!" }
            ],
            correctAnswer: 'D',
            explanation: "The headline is dramatic but provides no actual facts."
        },
        {
            question: "Which headline is designed to provoke a strong reaction?",
            options: [
                { id: 'A', text: "Experts Present Research Findings" },
                { id: 'B', text: "Local Business Expands Services" },
                { id: 'C', text: "Shocking Truth Exposed After Years of Secrecy!" },
                { id: 'D', text: "City Announces New Housing Project" }
            ],
            correctAnswer: 'C',
            explanation: "The wording is meant to spark curiosity and emotion."
        },
        {
            question: "Which headline should readers view skeptically?",
            options: [
                { id: 'A', text: "NASA Releases Mars Mission Update" },
                { id: 'B', text: "Researchers Publish Scientific Study" },
                { id: 'C', text: "Government Issues Public Advisory" },
                { id: 'D', text: "This Event Will Completely Change Life on Earth Forever!" }
            ],
            correctAnswer: 'D',
            explanation: "Extraordinary claims without evidence are a sign of sensationalism."
        }]
    },
    {
        id: 6, title: "Fact vs Opinion", category: "Level 1: Beginner", questions: [{
            question: "Which statement is a FACT?",
            options: [
                { id: 'A', text: "Pizza is the best food in the world." },
                { id: 'B', text: "The Earth revolves around the Sun." },
                { id: 'C', text: "Summer is the most enjoyable season." },
                { id: 'D', text: "Blue is the most beautiful color." }
            ],
            correctAnswer: 'B',
            explanation: "A fact can be verified with evidence, while opinions are personal beliefs."
        },
        {
            question: "Which statement is an OPINION?",
            options: [
                { id: 'A', text: "Water freezes at 0°C." },
                { id: 'B', text: "India is located in Asia." },
                { id: 'C', text: "Chocolate ice cream tastes better than vanilla." },
                { id: 'D', text: "The Moon orbits the Earth." }
            ],
            correctAnswer: 'C',
            explanation: "Taste preferences are personal opinions and cannot be proven true or false."
        },
        {
            question: "Which statement is a FACT?",
            options: [
                { id: 'A', text: "Dogs are better pets than cats." },
                { id: 'B', text: "Reading books is boring." },
                { id: 'C', text: "Basketball is the most exciting sport." },
                { id: 'D', text: "The Pacific Ocean is the largest ocean on Earth." }
            ],
            correctAnswer: 'D',
            explanation: "The size of oceans can be measured and verified."
        },
        {
            question: "Which statement is an OPINION?",
            options: [
                { id: 'A', text: "The Taj Mahal is the most beautiful building in the world." },
                { id: 'B', text: "The Taj Mahal is located in Agra." },
                { id: 'C', text: "The Taj Mahal was built in the 17th century." },
                { id: 'D', text: "Millions of tourists visit the Taj Mahal." }
            ],
            correctAnswer: 'A',
            explanation: "Beauty is subjective and depends on personal preference."
        },
        {
            question: "Which statement can be verified as a FACT?",
            options: [
                { id: 'A', text: "Summer is the best season." },
                { id: 'B', text: "Mount Everest is the tallest mountain above sea level." },
                { id: 'C', text: "Cricket is more entertaining than football." },
                { id: 'D', text: "Action movies are more exciting than comedies." }
            ],
            correctAnswer: 'B',
            explanation: "Mountain heights can be measured and verified."
        },
        {
            question: "Which statement is an OPINION?",
            options: [
                { id: 'A', text: "Earth has one natural satellite called the Moon." },
                { id: 'B', text: "Light travels faster than sound." },
                { id: 'C', text: "Mathematics is the hardest school subject." },
                { id: 'D', text: "Plants require sunlight to grow." }
            ],
            correctAnswer: 'C',
            explanation: "Difficulty is subjective and varies from person to person."
        },
        {
            question: "Which statement is a FACT?",
            options: [
                { id: 'A', text: "Coffee tastes better than tea." },
                { id: 'B', text: "The human body has 206 bones." },
                { id: 'C', text: "Cats are cuter than dogs." },
                { id: 'D', text: "Winter is the most enjoyable season." }
            ],
            correctAnswer: 'B',
            explanation: "The number of bones in the human body is scientifically verified."
        },
        {
            question: "Which statement is an OPINION?",
            options: [
                { id: 'A', text: "The Great Wall of China is visible from space." },
                { id: 'B', text: "The Great Wall of China is located in China." },
                { id: 'C', text: "The Great Wall of China is one of the most impressive structures ever built." },
                { id: 'D', text: "The Great Wall was built over many centuries." }
            ],
            correctAnswer: 'C',
            explanation: "Whether something is 'impressive' is a personal judgment."
        },
        {
            question: "Which statement is a FACT?",
            options: [
                { id: 'A', text: "Music is the best form of entertainment." },
                { id: 'B', text: "Video games are more fun than reading books." },
                { id: 'C', text: "The human heart pumps blood throughout the body." },
                { id: 'D', text: "Dogs are friendlier than cats." }
            ],
            correctAnswer: 'C',
            explanation: "This is a scientifically proven biological fact."
        },
        {
            question: "Which statement is an OPINION?",
            options: [
                { id: 'A', text: "The Eiffel Tower is located in Paris." },
                { id: 'B', text: "The Eiffel Tower was completed in 1889." },
                { id: 'C', text: "The Eiffel Tower attracts millions of visitors each year." },
                { id: 'D', text: "The Eiffel Tower is the most beautiful landmark in the world." }
            ],
            correctAnswer: 'D',
            explanation: "Beauty is subjective and depends on personal opinion."
        }]
    },
    {
        id: 7, title: "Source Identification", category: "Level 1: Beginner", questions: [{
            question: "Which source is generally the MOST reliable for scientific information?",
            options: [
                { id: 'A', text: "A random social media post" },
                { id: 'B', text: "A peer-reviewed scientific journal" },
                { id: 'C', text: "An anonymous blog" },
                { id: 'D', text: "A meme shared online" }
            ],
            correctAnswer: 'B',
            explanation: "Peer-reviewed journals are reviewed by experts before publication."
        },
        {
            question: "Which source should be treated with the MOST caution?",
            options: [
                { id: 'A', text: "Government health website" },
                { id: 'B', text: "University research paper" },
                { id: 'C', text: "Anonymous message forwarded on social media" },
                { id: 'D', text: "Official organization report" }
            ],
            correctAnswer: 'C',
            explanation: "Anonymous messages often lack evidence and accountability."
        },
        {
            question: "Which source is usually considered trustworthy?",
            options: [
                { id: 'A', text: "Official government statistics website" },
                { id: 'B', text: "Rumors in a messaging group" },
                { id: 'C', text: "Unknown personal blog" },
                { id: 'D', text: "Satirical news website" }
            ],
            correctAnswer: 'A',
            explanation: "Government statistics are generally based on verified data."
        },
        {
            question: "What is a warning sign that a source may not be reliable?",
            options: [
                { id: 'A', text: "The article cites official sources" },
                { id: 'B', text: "The author is clearly identified" },
                { id: 'C', text: "The information is supported by evidence" },
                { id: 'D', text: "The article provides no sources or references" }
            ],
            correctAnswer: 'D',
            explanation: "Reliable articles usually provide evidence and references."
        },
        {
            question: "Which source would be BEST for checking a health claim?",
            options: [
                { id: 'A', text: "A celebrity's social media page" },
                { id: 'B', text: "A random online forum" },
                { id: 'C', text: "World Health Organization (WHO) website" },
                { id: 'D', text: "A viral WhatsApp message" }
            ],
            correctAnswer: 'C',
            explanation: "WHO is a globally recognized health authority."
        },
        {
            question: "Which source is MOST likely to contain misinformation?",
            options: [
                { id: 'A', text: "Peer-reviewed research article" },
                { id: 'B', text: "Official government report" },
                { id: 'C', text: "University publication" },
                { id: 'D', text: "Anonymous website with no author listed" }
            ],
            correctAnswer: 'D',
            explanation: "Lack of transparency is a major red flag."
        },
        {
            question: "When evaluating a source, what should you check first?",
            options: [
                { id: 'A', text: "Whether the information supports your opinion" },
                { id: 'B', text: "The author's credibility and expertise" },
                { id: 'C', text: "How many likes it has" },
                { id: 'D', text: "Whether it went viral" }
            ],
            correctAnswer: 'B',
            explanation: "The credibility of the author is an important reliability indicator."
        },
        {
            question: "Which source is BEST for verifying election results?",
            options: [
                { id: 'A', text: "A meme shared on social media" },
                { id: 'B', text: "A random blog post" },
                { id: 'C', text: "An anonymous online account" },
                { id: 'D', text: "The official election commission website" }
            ],
            correctAnswer: 'D',
            explanation: "Official election authorities provide verified results."
        },
        {
            question: "Why is it important to identify the original source of information?",
            options: [
                { id: 'A', text: "Because information can change as it is shared" },
                { id: 'B', text: "Because original sources are always correct" },
                { id: 'C', text: "Because social media posts are never reliable" },
                { id: 'D', text: "Because original sources cannot be questioned" }
            ],
            correctAnswer: 'A',
            explanation: "Information often becomes distorted when repeatedly shared."
        },
        {
            question: "Which source is generally the LEAST reliable?",
            options: [
                { id: 'A', text: "Official university publication" },
                { id: 'B', text: "Government agency website" },
                { id: 'C', text: "Anonymous forwarded message with no evidence" },
                { id: 'D', text: "Recognized news organization" }
            ],
            correctAnswer: 'C',
            explanation: "Anonymous messages with no evidence are highly unreliable."
        }]
    },
    {
        id: 8, title: "Viral Social Media Posts", category: "Level 1: Beginner", questions: [{
            question: "What should you do FIRST when you see a viral social media post?",
            options: [
                { id: 'A', text: "Share it immediately" },
                { id: 'B', text: "Verify the information from reliable sources" },
                { id: 'C', text: "Assume it is true because it is popular" },
                { id: 'D', text: "Like the post without reading it" }
            ],
            correctAnswer: 'B',
            explanation: "Popularity does not guarantee accuracy. Always verify first."
        },
        {
            question: "Which viral post should make you MOST skeptical?",
            options: [
                { id: 'A', text: "Official government announcement" },
                { id: 'B', text: "University research summary" },
                { id: 'C', text: "Breaking News: Share Before They Delete It!" },
                { id: 'D', text: "Weather department update" }
            ],
            correctAnswer: 'C',
            explanation: "Urgent language like 'Share Before They Delete It' is a red flag."
        },
        {
            question: "Why can viral posts spread misinformation quickly?",
            options: [
                { id: 'A', text: "People often share without verifying facts" },
                { id: 'B', text: "All viral posts are reviewed by experts" },
                { id: 'C', text: "Social media only shows verified information" },
                { id: 'D', text: "Virality guarantees accuracy" }
            ],
            correctAnswer: 'A',
            explanation: "Many users share content emotionally without checking facts."
        },
        {
            question: "Which source is BEST for verifying a viral claim?",
            options: [
                { id: 'A', text: "A random comment section" },
                { id: 'B', text: "An anonymous social media account" },
                { id: 'C', text: "A meme page" },
                { id: 'D', text: "A trusted fact-checking website" }
            ],
            correctAnswer: 'D',
            explanation: "Fact-checking organizations investigate and verify claims."
        },
        {
            question: "A post has 2 million shares. What does this prove?",
            options: [
                { id: 'A', text: "The information is definitely true" },
                { id: 'B', text: "The post is popular, not necessarily accurate" },
                { id: 'C', text: "The information has been verified" },
                { id: 'D', text: "Experts approved the content" }
            ],
            correctAnswer: 'B',
            explanation: "Popularity is not evidence of truth."
        },
        {
            question: "Which viral headline is most likely misleading?",
            options: [
                { id: 'A', text: "Government Releases Official Census Data" },
                { id: 'B', text: "Researchers Publish Climate Study" },
                { id: 'C', text: "Scientists Confirm New Planet Discovery" },
                { id: 'D', text: "Doctors Hate This One Secret Trick!" }
            ],
            correctAnswer: 'D',
            explanation: "This is a classic clickbait phrase often used in misleading posts."
        },
        {
            question: "What is a common sign of misinformation in viral posts?",
            options: [
                { id: 'A', text: "Links to official sources" },
                { id: 'B', text: "Clear author information" },
                { id: 'C', text: "Emotional language and lack of evidence" },
                { id: 'D', text: "References to research studies" }
            ],
            correctAnswer: 'C',
            explanation: "Misinformation often relies on emotion instead of facts."
        },
        {
            question: "Why should you be cautious of viral screenshots?",
            options: [
                { id: 'A', text: "Screenshots can be edited or taken out of context" },
                { id: 'B', text: "Screenshots are always official documents" },
                { id: 'C', text: "Screenshots cannot be faked" },
                { id: 'D', text: "Screenshots are verified by social media platforms" }
            ],
            correctAnswer: 'A',
            explanation: "Images and screenshots can be manipulated easily."
        },
        {
            question: "What is the safest action before sharing a viral post?",
            options: [
                { id: 'A', text: "Check multiple trusted sources" },
                { id: 'B', text: "Forward it to all your contacts" },
                { id: 'C', text: "Trust the number of likes" },
                { id: 'D', text: "Share it if your friends believe it" }
            ],
            correctAnswer: 'A',
            explanation: "Cross-checking with multiple sources reduces misinformation."
        },
        {
            question: "Which statement about viral posts is TRUE?",
            options: [
                { id: 'A', text: "Viral posts are always fact-checked" },
                { id: 'B', text: "High engagement means the content is accurate" },
                { id: 'C', text: "Virality and accuracy are not the same thing" },
                { id: 'D', text: "Popular posts cannot contain misinformation" }
            ],
            correctAnswer: 'C',
            explanation: "A post can go viral even if it is completely false."
        }]
    },
    {
        id: 9, title: "Image Context Check", category: "Level 1: Beginner", questions: [{
            question: "Why is it important to check the context of an image before sharing it?",
            options: [
                { id: 'A', text: "Images can be used in a misleading way" },
                { id: 'B', text: "Images are always accurate" },
                { id: 'C', text: "Photos never need verification" },
                { id: 'D', text: "Old images cannot be reused" }
            ],
            correctAnswer: 'A',
            explanation: "Images can be taken out of context and used to spread misinformation."
        },
        {
            question: "What is a common sign that an image may be misleading?",
            options: [
                { id: 'A', text: "It includes a date and location" },
                { id: 'B', text: "It comes from an official source" },
                { id: 'C', text: "It is being used to describe a different event" },
                { id: 'D', text: "It has a photographer credit" }
            ],
            correctAnswer: 'C',
            explanation: "Old images are often reused and falsely linked to new events."
        },
        {
            question: "What should you do if a shocking image appears online?",
            options: [
                { id: 'A', text: "Share it immediately" },
                { id: 'B', text: "Check where and when the image was originally taken" },
                { id: 'C', text: "Assume it is real because it looks authentic" },
                { id: 'D', text: "Trust the caption without question" }
            ],
            correctAnswer: 'B',
            explanation: "Verifying the original source helps determine authenticity."
        },
        {
            question: "Which tool can help verify where an image first appeared?",
            options: [
                { id: 'A', text: "Calculator" },
                { id: 'B', text: "Music player" },
                { id: 'C', text: "Video editor" },
                { id: 'D', text: "Reverse image search" }
            ],
            correctAnswer: 'D',
            explanation: "Reverse image search helps find the original source of an image."
        },
        {
            question: "A photo from 2018 is being shared as a current event. What is the issue?",
            options: [
                { id: 'A', text: "The image quality is poor" },
                { id: 'B', text: "The image is too old to exist online" },
                { id: 'C', text: "The image is being used out of context" },
                { id: 'D', text: "The image cannot be downloaded" }
            ],
            correctAnswer: 'C',
            explanation: "Using old photos to represent new events is misleading."
        },
        {
            question: "Which image should be treated with the MOST caution?",
            options: [
                { id: 'A', text: "An image from an official news agency" },
                { id: 'B', text: "An image with verified source information" },
                { id: 'C', text: "An image published in a research report" },
                { id: 'D', text: "An image shared with no source or context" }
            ],
            correctAnswer: 'D',
            explanation: "Images without source information are harder to verify."
        },
        {
            question: "Why can image captions sometimes be misleading?",
            options: [
                { id: 'A', text: "Captions can falsely describe what is happening" },
                { id: 'B', text: "Captions are always verified by experts" },
                { id: 'C', text: "Captions cannot influence people" },
                { id: 'D', text: "Captions automatically prove authenticity" }
            ],
            correctAnswer: 'A',
            explanation: "A misleading caption can completely change how an image is interpreted."
        },
        {
            question: "What is the BEST way to verify a viral image?",
            options: [
                { id: 'A', text: "Check comments for opinions" },
                { id: 'B', text: "Trust the number of shares" },
                { id: 'C', text: "Use reverse image search and trusted sources" },
                { id: 'D', text: "Assume viral images are accurate" }
            ],
            correctAnswer: 'C',
            explanation: "Verification should involve source checking and image search tools."
        },
        {
            question: "Which statement about images online is TRUE?",
            options: [
                { id: 'A', text: "Images cannot be edited" },
                { id: 'B', text: "Images always show the full story" },
                { id: 'C', text: "Every viral image is authentic" },
                { id: 'D', text: "Images can be real but presented in a misleading context" }
            ],
            correctAnswer: 'D',
            explanation: "Even genuine images can be used deceptively."
        },
        {
            question: "What should make you skeptical of an image?",
            options: [
                { id: 'A', text: "The image comes from an official source" },
                { id: 'B', text: "The image lacks a clear source, date, or location" },
                { id: 'C', text: "The image appears in a news report" },
                { id: 'D', text: "The image includes photographer information" }
            ],
            correctAnswer: 'B',
            explanation: "Missing context is a major warning sign when evaluating images."
        }]
    },
    {
        id: 10, title: "Basic News Verification", category: "Level 1: Beginner", questions: [{
            question: "What should you do FIRST when you read a news story online?",
            options: [
                { id: 'A', text: "Share it with friends immediately" },
                { id: 'B', text: "Check the source of the news" },
                { id: 'C', text: "Assume it is true" },
                { id: 'D', text: "Ignore the headline" }
            ],
            correctAnswer: 'B',
            explanation: "Checking the source is the first step in verifying news."
        },
        {
            question: "Which source is generally the MOST trustworthy?",
            options: [
                { id: 'A', text: "Anonymous social media account" },
                { id: 'B', text: "Random blog post" },
                { id: 'C', text: "Established news organization with editorial standards" },
                { id: 'D', text: "Forwarded message in a chat group" }
            ],
            correctAnswer: 'C',
            explanation: "Established news organizations follow verification and editorial processes."
        },
        {
            question: "Why is it important to read beyond the headline?",
            options: [
                { id: 'A', text: "Headlines can sometimes be misleading" },
                { id: 'B', text: "Headlines always contain all details" },
                { id: 'C', text: "Headlines are more important than articles" },
                { id: 'D', text: "Headlines cannot be fact-checked" }
            ],
            correctAnswer: 'A',
            explanation: "A headline may not accurately reflect the full story."
        },
        {
            question: "What is a good way to verify a news claim?",
            options: [
                { id: 'A', text: "Trust the first website you find" },
                { id: 'B', text: "Check multiple reliable sources" },
                { id: 'C', text: "Believe it if it has many shares" },
                { id: 'D', text: "Only read comments" }
            ],
            correctAnswer: 'B',
            explanation: "Comparing multiple trusted sources helps confirm accuracy."
        },
        {
            question: "Which of these is a warning sign of possible misinformation?",
            options: [
                { id: 'A', text: "The article cites evidence and sources" },
                { id: 'B', text: "The author is identified" },
                { id: 'C', text: "The article uses extreme emotional language" },
                { id: 'D', text: "The publication has an editorial team" }
            ],
            correctAnswer: 'C',
            explanation: "Extreme emotional language is often used to manipulate readers."
        },
        {
            question: "What should you check when evaluating a news article?",
            options: [
                { id: 'A', text: "Publication date" },
                { id: 'B', text: "Author credibility" },
                { id: 'C', text: "Supporting evidence" },
                { id: 'D', text: "All of the above" }
            ],
            correctAnswer: 'D',
            explanation: "All these factors help determine whether information is reliable."
        },
        {
            question: "Why can old news articles be misleading when reshared?",
            options: [
                { id: 'A', text: "Events may no longer be current" },
                { id: 'B', text: "Old articles are automatically false" },
                { id: 'C', text: "Old articles disappear from the internet" },
                { id: 'D', text: "Old articles cannot be verified" }
            ],
            correctAnswer: 'A',
            explanation: "Old information can be mistaken for current events."
        },
        {
            question: "Which headline should make you MOST skeptical?",
            options: [
                { id: 'A', text: "Government Releases Official Economic Report" },
                { id: 'B', text: "Researchers Publish New Study" },
                { id: 'C', text: "Doctors Confirm New Treatment Results" },
                { id: 'D', text: "SHOCKING SECRET They Don't Want You To Know!" }
            ],
            correctAnswer: 'D',
            explanation: "Sensational language is a common sign of clickbait and misinformation."
        },
        {
            question: "What is fact-checking?",
            options: [
                { id: 'A', text: "Sharing news quickly" },
                { id: 'B', text: "Comparing claims with evidence and reliable sources" },
                { id: 'C', text: "Reading only headlines" },
                { id: 'D', text: "Following popular opinions" }
            ],
            correctAnswer: 'B',
            explanation: "Fact-checking involves verifying claims using evidence."
        },
        {
            question: "Before sharing a news story, what is the BEST practice?",
            options: [
                { id: 'A', text: "Check if it supports your opinion" },
                { id: 'B', text: "Share it if your friends shared it" },
                { id: 'C', text: "Verify the information from trusted sources" },
                { id: 'D', text: "Trust the number of likes" }
            ],
            correctAnswer: 'C',
            explanation: "Verification helps prevent the spread of misinformation."
        }]
    },

    // ================= 🔵 LEVEL 2: INTERMEDIATE (11-20) =================
    { id: 11, title: "Deepfake Image Detection", category: "Level 2: Intermediate", questions: [] },
    {
  id: 12,
  title: "Deepfake Image Detection",
  category: "Level 2: Intermediate",
  questions: [
    {
      question: "Which sign may indicate an image is a deepfake?",
      options: [
        { id: 'A', text: "Natural lighting" },
        { id: 'B', text: "Consistent shadows" },
        { id: 'C', text: "Distorted facial features" },
        { id: 'D', text: "Clear background" }
      ],
      correctAnswer: 'C',
      explanation: "Deepfakes often contain facial distortions or inconsistencies."
    },
    {
      question: "What should you check first when verifying an image?",
      options: [
        { id: 'A', text: "Source of the image" },
        { id: 'B', text: "Number of likes" },
        { id: 'C', text: "Comments" },
        { id: 'D', text: "Font size" }
      ],
      correctAnswer: 'A',
      explanation: "The original source is important for verification."
    },
    {
      question: "Which feature is commonly flawed in deepfake images?",
      options: [
        { id: 'A', text: "Sky color" },
        { id: 'B', text: "Building shapes" },
        { id: 'C', text: "Road markings" },
        { id: 'D', text: "Hands and fingers" }
      ],
      correctAnswer: 'D',
      explanation: "AI often struggles to generate realistic hands."
    },
    {
      question: "What tool can help verify an image?",
      options: [
        { id: 'A', text: "Reverse image search" },
        { id: 'B', text: "Music player" },
        { id: 'C', text: "Calculator" },
        { id: 'D', text: "Video editor" }
      ],
      correctAnswer: 'A',
      explanation: "Reverse image search helps trace image origins."
    },
    {
      question: "Which clue suggests AI image generation?",
      options: [
        { id: 'A', text: "Correct spelling everywhere" },
        { id: 'B', text: "Garbled or unreadable text" },
        { id: 'C', text: "High resolution" },
        { id: 'D', text: "Landscape orientation" }
      ],
      correctAnswer: 'B',
      explanation: "AI-generated images often contain distorted text."
    },
    {
      question: "Why are deepfakes dangerous?",
      options: [
        { id: 'A', text: "They reduce internet speed" },
        { id: 'B', text: "They spread misinformation" },
        { id: 'C', text: "They damage cameras" },
        { id: 'D', text: "They increase storage usage" }
      ],
      correctAnswer: 'B',
      explanation: "Deepfakes can mislead people with false content."
    },
    {
      question: "Which area should be inspected closely in suspected deepfakes?",
      options: [
        { id: 'A', text: "Eyes and facial edges" },
        { id: 'B', text: "Weather conditions" },
        { id: 'C', text: "Road signs" },
        { id: 'D', text: "Trees" }
      ],
      correctAnswer: 'A',
      explanation: "Facial inconsistencies are common deepfake indicators."
    },
    {
      question: "What is a common deepfake verification technique?",
      options: [
        { id: 'A', text: "Checking battery percentage" },
        { id: 'B', text: "Analyzing metadata" },
        { id: 'C', text: "Changing brightness" },
        { id: 'D', text: "Rotating image" }
      ],
      correctAnswer: 'B',
      explanation: "Metadata can reveal image origins and edits."
    },
    {
      question: "Which image is more trustworthy?",
      options: [
        { id: 'A', text: "Anonymous image with no source" },
        { id: 'B', text: "Image from verified news agency" },
        { id: 'C', text: "Random social media upload" },
        { id: 'D', text: "Edited screenshot" }
      ],
      correctAnswer: 'B',
      explanation: "Verified sources are generally more reliable."
    },
    {
      question: "What should you do before sharing a suspicious image?",
      options: [
        { id: 'A', text: "Verify authenticity" },
        { id: 'B', text: "Add emojis" },
        { id: 'C', text: "Crop the image" },
        { id: 'D', text: "Increase contrast" }
      ],
      correctAnswer: 'A',
      explanation: "Verification helps prevent misinformation."
    }
  ]
},
{ id: 13, title: "Political Misinformation", category: "Level 2: Intermediate", questions: [

    {
      question: "Which statistic should raise suspicion?",
      options: [
        { id: 'A', text: "99.9% of people became millionaires overnight" },
        { id: 'B', text: "Population increased by 2%" },
        { id: 'C', text: "Survey included 1000 participants" },
        { id: 'D', text: "Rainfall increased slightly" }
      ],
      correctAnswer: 'A',
      explanation: "Extraordinary claims require strong evidence."
    },
    {
      question: "What should accompany trustworthy statistics?",
      options: [
        { id: 'A', text: "Memes" },
        { id: 'B', text: "Reliable source" },
        { id: 'C', text: "Advertisements" },
        { id: 'D', text: "Emojis" }
      ],
      correctAnswer: 'B',
      explanation: "Reliable sources improve credibility."
    },
    {
      question: "Which claim is most likely misleading?",
      options: [
        { id: 'A', text: "Study of 10,000 participants" },
        { id: 'B', text: "Government census report" },
        { id: 'C', text: "100% success guaranteed for everyone" },
        { id: 'D', text: "University survey results" }
      ],
      correctAnswer: 'C',
      explanation: "Absolute guarantees are often misleading."
    },
    {
      question: "Why is sample size important?",
      options: [
        { id: 'A', text: "It affects reliability" },
        { id: 'B', text: "It changes font size" },
        { id: 'C', text: "It increases internet speed" },
        { id: 'D', text: "It affects image quality" }
      ],
      correctAnswer: 'A',
      explanation: "Larger samples are usually more reliable."
    },
    {
      question: "What is a red flag in statistics?",
      options: [
        { id: 'A', text: "Cited source" },
        { id: 'B', text: "Methodology provided" },
        { id: 'C', text: "No source mentioned" },
        { id: 'D', text: "Research institution listed" }
      ],
      correctAnswer: 'C',
      explanation: "Statistics without sources are questionable."
    },
    {
      question: "What should you verify about a statistic?",
      options: [
        { id: 'A', text: "Source and context" },
        { id: 'B', text: "Background color" },
        { id: 'C', text: "Logo design" },
        { id: 'D', text: "Page length" }
      ],
      correctAnswer: 'A',
      explanation: "Context is essential for understanding data."
    },
    {
      question: "Which statistic seems unrealistic?",
      options: [
        { id: 'A', text: "15% growth this year" },
        { id: 'B', text: "Everyone on Earth agrees completely" },
        { id: 'C', text: "Survey conducted nationally" },
        { id: 'D', text: "Research published online" }
      ],
      correctAnswer: 'B',
      explanation: "Universal agreement is extremely unlikely."
    },
    {
      question: "What can misleading graphs do?",
      options: [
        { id: 'A', text: "Clarify information" },
        { id: 'B', text: "Provide citations" },
        { id: 'C', text: "Distort interpretation" },
        { id: 'D', text: "Improve accuracy" }
      ],
      correctAnswer: 'C',
      explanation: "Graphs can exaggerate differences."
    },
    {
      question: "Which source is most reliable?",
      options: [
        { id: 'A', text: "Anonymous post" },
        { id: 'B', text: "Verified research institution" },
        { id: 'C', text: "Random comment" },
        { id: 'D', text: "Unverified screenshot" }
      ],
      correctAnswer: 'B',
      explanation: "Research institutions follow established methods."
    },
    {
      question: "Why should percentages be checked carefully?",
      options: [
        { id: 'A', text: "They can lack context" },
        { id: 'B', text: "They change file formats" },
        { id: 'C', text: "They reduce storage" },
        { id: 'D', text: "They affect battery life" }
      ],
      correctAnswer: 'A',
      explanation: "Percentages can be misleading without context."
    }
  ]
 },
    {
  id: 14,
  title: "Political Misinformation",
  category: "Level 2: Intermediate",
  questions: [
    {
      question: "What is the best way to verify a political claim?",
      options: [
        { id: 'A', text: "Check multiple reliable sources" },
        { id: 'B', text: "Trust a viral post" },
        { id: 'C', text: "Believe anonymous accounts" },
        { id: 'D', text: "Share immediately" }
      ],
      correctAnswer: 'A',
      explanation: "Cross-checking multiple trusted sources helps verify political claims."
    },
    {
      question: "Which source is most reliable for political information?",
      options: [
        { id: 'A', text: "Random social media account" },
        { id: 'B', text: "Official government statement" },
        { id: 'C', text: "Anonymous forwarded message" },
        { id: 'D', text: "Unverified screenshot" }
      ],
      correctAnswer: 'B',
      explanation: "Official statements are generally more reliable than anonymous sources."
    },
    {
      question: "Which headline is most likely misinformation?",
      options: [
        { id: 'A', text: "Election Results Released by Commission" },
        { id: 'B', text: "Parliament Passes New Bill" },
        { id: 'C', text: "SECRET PLOT EXPOSED! Democracy Ends Tomorrow!" },
        { id: 'D', text: "Government Announces Budget Plan" }
      ],
      correctAnswer: 'C',
      explanation: "Sensational and unsupported claims are common signs of misinformation."
    },
    {
      question: "What is a common goal of political misinformation?",
      options: [
        { id: 'A', text: "Improve education" },
        { id: 'B', text: "Influence public opinion" },
        { id: 'C', text: "Increase internet speed" },
        { id: 'D', text: "Improve weather forecasts" }
      ],
      correctAnswer: 'B',
      explanation: "Political misinformation often aims to manipulate public opinion."
    },
    {
      question: "What should you do before sharing political news?",
      options: [
        { id: 'A', text: "Verify the source" },
        { id: 'B', text: "Forward instantly" },
        { id: 'C', text: "Ignore the publication date" },
        { id: 'D', text: "Trust only comments" }
      ],
      correctAnswer: 'A',
      explanation: "Verification helps prevent the spread of misinformation."
    },
    {
      question: "Which is a warning sign of misleading political content?",
      options: [
        { id: 'A', text: "Cited evidence" },
        { id: 'B', text: "Official documents" },
        { id: 'C', text: "Extreme emotional language" },
        { id: 'D', text: "Fact-check references" }
      ],
      correctAnswer: 'C',
      explanation: "Strong emotional language is often used to manipulate readers."
    },
    {
      question: "Why should publication dates be checked?",
      options: [
        { id: 'A', text: "Old stories may be reused misleadingly" },
        { id: 'B', text: "Dates affect image quality" },
        { id: 'C', text: "Dates increase popularity" },
        { id: 'D', text: "Dates change article fonts" }
      ],
      correctAnswer: 'A',
      explanation: "Old news can be reshared to create false impressions."
    },
    {
      question: "Which post should be treated cautiously?",
      options: [
        { id: 'A', text: "Article with verified sources" },
        { id: 'B', text: "Report from a trusted news outlet" },
        { id: 'C', text: "Official election commission update" },
        { id: 'D', text: "Anonymous claim with no evidence" }
      ],
      correctAnswer: 'D',
      explanation: "Anonymous claims without evidence are unreliable."
    },
    {
      question: "What is fact-checking?",
      options: [
        { id: 'A', text: "Verifying claims using evidence" },
        { id: 'B', text: "Sharing rumors" },
        { id: 'C', text: "Editing videos" },
        { id: 'D', text: "Creating polls" }
      ],
      correctAnswer: 'A',
      explanation: "Fact-checking compares claims with credible evidence."
    },
    {
      question: "Which action helps reduce political misinformation?",
      options: [
        { id: 'A', text: "Verify before sharing" },
        { id: 'B', text: "Forward all messages" },
        { id: 'C', text: "Trust every viral post" },
        { id: 'D', text: "Ignore evidence" }
      ],
      correctAnswer: 'A',
      explanation: "Verification is the best defense against misinformation."
    }
  ]
},
    {
  id: 15,
  title: "Health & Medical Myths",
  category: "Level 2: Intermediate",
  questions: [
    {
      question: "What should you do before following medical advice online?",
      options: [
        { id: 'A', text: "Verify with trusted health sources" },
        { id: 'B', text: "Follow it immediately" },
        { id: 'C', text: "Share it with everyone" },
        { id: 'D', text: "Ignore expert opinions" }
      ],
      correctAnswer: 'A',
      explanation: "Medical advice should come from trusted professionals and sources."
    },
    {
      question: "Which claim is most likely a health myth?",
      options: [
        { id: 'A', text: "Vaccines are tested before approval" },
        { id: 'B', text: "Doctors recommend healthy diets" },
        { id: 'C', text: "A miracle drink cures every disease instantly" },
        { id: 'D', text: "Exercise improves fitness" }
      ],
      correctAnswer: 'C',
      explanation: "Claims of miracle cures are usually unsupported."
    },
    {
      question: "Why are health myths dangerous?",
      options: [
        { id: 'A', text: "They can lead to harmful decisions" },
        { id: 'B', text: "They improve healthcare" },
        { id: 'C', text: "They increase scientific evidence" },
        { id: 'D', text: "They improve treatment outcomes" }
      ],
      correctAnswer: 'A',
      explanation: "False medical information can harm people's health."
    },
    {
      question: "Which source is most trustworthy for health information?",
      options: [
        { id: 'A', text: "Anonymous social media account" },
        { id: 'B', text: "Recognized health organization" },
        { id: 'C', text: "Random blog comment" },
        { id: 'D', text: "Forwarded message" }
      ],
      correctAnswer: 'B',
      explanation: "Health organizations use scientific evidence."
    },
    {
      question: "Which statement should be viewed skeptically?",
      options: [
        { id: 'A', text: "Doctors publish research studies" },
        { id: 'B', text: "Hospitals provide treatments" },
        { id: 'C', text: "This secret remedy works better than all medicine!" },
        { id: 'D', text: "Vaccines help prevent diseases" }
      ],
      correctAnswer: 'C',
      explanation: "Extraordinary health claims require strong evidence."
    },
    {
      question: "What is peer review?",
      options: [
        { id: 'A', text: "Experts evaluating research" },
        { id: 'B', text: "Social media voting" },
        { id: 'C', text: "Advertising a product" },
        { id: 'D', text: "Sharing rumors" }
      ],
      correctAnswer: 'A',
      explanation: "Peer review helps ensure scientific quality."
    },
    {
      question: "Which health claim is most reliable?",
      options: [
        { id: 'A', text: "Claim supported by scientific studies" },
        { id: 'B', text: "Claim from an anonymous message" },
        { id: 'C', text: "Claim with no evidence" },
        { id: 'D', text: "Claim from a viral meme" }
      ],
      correctAnswer: 'A',
      explanation: "Scientific evidence is the strongest support."
    },
    {
      question: "What is a red flag in health information?",
      options: [
        { id: 'A', text: "References to research" },
        { id: 'B', text: "Expert medical review" },
        { id: 'C', text: "Guaranteed cure for every condition" },
        { id: 'D', text: "Published clinical study" }
      ],
      correctAnswer: 'C',
      explanation: "No treatment can guarantee a cure for every condition."
    },
    {
      question: "Why is scientific evidence important?",
      options: [
        { id: 'A', text: "It supports accurate conclusions" },
        { id: 'B', text: "It makes headlines viral" },
        { id: 'C', text: "It increases advertising" },
        { id: 'D', text: "It changes website colors" }
      ],
      correctAnswer: 'A',
      explanation: "Evidence helps determine whether a claim is true."
    },
    {
      question: "What is the safest response to a suspicious health claim?",
      options: [
        { id: 'A', text: "Check trusted medical sources first" },
        { id: 'B', text: "Share it immediately" },
        { id: 'C', text: "Assume it is true" },
        { id: 'D', text: "Ignore expert advice" }
      ],
      correctAnswer: 'A',
      explanation: "Verification helps prevent the spread of health misinformation."
    }
  ]
},
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