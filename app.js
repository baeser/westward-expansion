/* ==========================================================
 * WESTWARD EXPANSION & THE BATTLE OF LITTLE BIGHORN
 * Interactive Classroom Simulation
 * ----------------------------------------------------------
 *
 * TEACHER CUSTOMIZATION GUIDE
 *
 * To modify content, edit the SECTIONS array below. Each
 * section object has these properties:
 *
 *   chapter  — Chapter number shown in the header
 *   title    — Section heading
 *   year     — Time period displayed
 *   narrative — HTML string of the historical narrative
 *   primarySources — Array of { text, attribution } objects
 *   choice   — Reflective prompt with options & feedback
 *   written  — Open-ended written response prompt
 *   check    — Comprehension question with correct answer
 *
 * To add images to any section, use the images array:
 *   images: [{ src: 'photo.jpg', alt: 'description', caption: 'caption text' }]
 *
 * To embed a YouTube video, add a video property:
 *   video: { embedUrl: 'https://www.youtube.com/embed/VIDEO_ID', title: 'title' }
 *
 * To link an external video (PBS, etc.), add a videoLink property:
 *   videoLink: { url: 'https://...', title: 'title', description: 'short desc' }
 *
 * To link one or more interactive resources (maps, timelines,
 * archives, etc.), add an exploreLinks array:
 *   exploreLinks: [
 *       { url: 'https://...', title: 'title', description: 'short desc' },
 *       { url: 'https://...', title: 'title', description: 'short desc' }
 *   ]
 * (a single `exploreLink` object also still works.)
 *
 * ========================================================== */

/* =====================
 *   APPLICATION STATE
 * ===================== */

// Tracks which screen is displayed: -1 = welcome, 0–6 = chapters, 7+ = summary
var currentIndex = -1;

// Student's name — entered on the welcome screen
var studentName = '';

// All student responses, keyed by section id
// Each entry: { choiceIndex, checkSelected, checkIndex, checkCorrect, checkDone, attempts, retryMessage }
var answers = {};

/* ============================
 *   SIMULATION CONTENT DATA
 * ============================ */

var SECTIONS = [

    /* ---- CHAPTER 1 ---- */
    {
        id: 'manifest-destiny',
        chapter: 1,
        title: 'Manifest Destiny & Westward Expansion',
        year: '1845\u20131870',
        images: [
            { src: 'americanprogress.png', alt: 'John Gast, American Progress (1872) \u2014 allegorical painting of Manifest Destiny showing the figure Columbia leading settlers westward', caption: 'John Gast, \u201cAmerican Progress\u201d (1872) \u2014 a popular allegory of Manifest Destiny. Columbia carries a school book and telegraph wire as she leads settlers, stagecoaches, and railroads westward, while Native Americans and bison flee into the darkness.' },
            { src: 'expansion-map.png', alt: 'Map of US territorial expansion from 1803 to 1867', caption: 'Map of US territorial expansion, 1803\u20131867' }
        ],
        narrative:
            '<p>After the Civil War ended in 1865, Americans increasingly looked westward. ' +
            'The idea of <strong>\u201cManifest Destiny\u201d</strong> \u2014 the belief that the ' +
            'United States was destined by God to expand across the entire North American ' +
            'continent \u2014 drove thousands of settlers, miners, and railroad workers into ' +
            'the Great Plains and beyond.</p>' +
            '<p>This expansion promised opportunity for many Americans, but it came at a ' +
            'tremendous cost to the Native American nations who had called these lands ' +
            'home for centuries.</p>',
        primarySources: [
            {
                text: '\u2026the right of our manifest destiny to over spread and to possess ' +
                      'the whole of the continent which Providence has given us for the development ' +
                      'of the great experiment of liberty and federated self-government.',
                attribution: 'John L. O\u2019Sullivan, \u201cAnnexation,\u201d United States Magazine and Democratic Review, 1845'
            }
        ],
        choice: {
            prompt: 'As you read O\u2019Sullivan\u2019s words, what do you think he is assuming about the people already living on this land?',
            options: [
                {
                    label: 'He does not acknowledge that anyone else lives there',
                    feedback: 'Strong observation. O\u2019Sullivan\u2019s language treats the continent as empty and unclaimed, erasing the presence of Native nations who had lived there for thousands of years. This kind of erasure was common in Manifest Destiny rhetoric.'
                },
                {
                    label: 'He believes they will benefit from American expansion',
                    feedback: 'This is a reasonable interpretation. Some expansion supporters argued that Native peoples would benefit from American \u201ccivilization.\u201d However, notice that O\u2019Sullivan doesn\u2019t mention them at all \u2014 they are invisible in his vision of the continent.'
                },
                {
                    label: 'He thinks they have equal rights to the land',
                    feedback: 'Actually, O\u2019Sullivan\u2019s language suggests the opposite. By describing the continent as given by \u201cProvidence\u201d for American use, he implies no other group has a legitimate claim. This was a common justification for displacing Native peoples.'
                },
                {
                    label: 'He is directly addressing Native American nations',
                    feedback: 'O\u2019Sullivan does not mention Native American nations in this passage at all. That silence is itself significant \u2014 Manifest Destiny rhetoric often treated the continent as if it were uninhabited, ignoring the millions of people already living there.'
                }
            ]
        },
        written: {
            prompt: 'In your own words, explain how the idea of Manifest Destiny might have been used to justify taking land from Native American nations. Use evidence from the primary source above in your answer.'
        },
        check: {
            question: 'What was \u201cManifest Destiny\u201d?',
            options: [
                'A military strategy used during the Civil War',
                'The belief that the US was destined to expand across the continent',
                'A treaty signed between the US and Native American nations',
                'The name of a transcontinental railroad company'
            ],
            correct: 1,
            explanation: 'Manifest Destiny was the widely held belief that American settlers were destined \u2014 by God and by history \u2014 to expand across the North American continent. This idea was used to justify taking land from Native American nations and from Mexico.'
        }
    },

    /* ---- CHAPTER 2 ---- */
    {
        id: 'great-plains',
        chapter: 2,
        title: 'The Lakota & the Great Plains',
        year: 'Pre-1860s',
        images: [
            { src: '2308991_00100883.tif.jpg', alt: 'Photograph of Rain-in-the-Face, Dakota Chief, seated, three-quarter length, taken by D. F. Barry between 1880 and 1889', caption: 'Rain-in-the-Face, Dakota Chief, seated, 3/4 length. Photograph by D. F. Barry (David Francis Barry, 1854\u20131934), 1880\u20131889. Call Number B-883.' }
        ],
        exploreLinks: [
            {
                url: 'https://native-land.ca/maps/native-land',
                title: 'Start Here \u2014 Native Territories in Michigan & the Great Lakes',
                description: 'Before we travel west, find our home. The Great Lakes were \u2014 and are \u2014 home to the <strong>Anishinaabe</strong>: the Three Fires Confederacy of <strong>Ojibwe (Chippewa), Odawa (Ottawa),</strong> and <strong>Potawatomi</strong>, along with the <strong>Wyandot</strong> and <strong>Miami</strong>. Michigan has 12 federally recognized tribes today, with reservations from the Upper Peninsula down through the Lower Peninsula. Zoom to Michigan on the map and see whose land you live on.'
            },
            {
                url: 'https://native-land.ca/maps/native-land',
                title: 'Then Pan West \u2014 Native Territories of the Great Plains',
                description: 'Now follow the story of this simulation. Pan the map west to the northern Great Plains to see the territories of the <strong>Lakota, Cheyenne, Arapaho</strong>, and many others whose lands overlapped long before US expansion.'
            }
        ],
        narrative:
            '<p>For centuries before American settlers arrived, the <strong>Lakota (Western Sioux)</strong>, ' +
            '<strong>Northern Cheyenne</strong>, and <strong>Arapaho</strong> peoples lived on the Great Plains. ' +
            'They were skilled hunters, diplomats, and warriors with complex societies and governments.</p>' +
            '<p>The <strong>Black Hills</strong> of present-day South Dakota \u2014 known to the Lakota as ' +
            '<em>Paha Sapa</em> \u2014 held deep spiritual significance. The Lakota considered them the ' +
            '\u201cheart of everything that is,\u201d a sacred place for prayer, vision quests, and ceremony.</p>',
        primarySources: [
            {
                text: 'We did not think of the great open plains, the beautiful rolling hills, ' +
                      'and the winding streams with tangled growth, as \u201cwild.\u201d Only to the white ' +
                      'man was nature a \u201cwilderness\u201d and only to him was the land \u201cinfested\u201d ' +
                      'with \u201cwild\u201d animals and \u201csavage\u201d people. To us it was tame. Earth was ' +
                      'bountiful and we were surrounded with the blessings of the Great Mystery.',
                attribution: 'Luther Standing Bear, Land of the Spotted Eagle, 1933'
            }
        ],
        choice: {
            prompt: 'Luther Standing Bear puts words like \u201cwild,\u201d \u201cwilderness,\u201d and \u201csavage\u201d in quotation marks. Why do you think he does this?',
            options: [
                {
                    label: 'To show these were the settlers\u2019 words, not his people\u2019s view of the land',
                    feedback: 'Exactly. By placing these words in quotation marks, Standing Bear signals that \u201cwilderness\u201d and \u201csavage\u201d were labels imposed by outsiders. The Lakota had a completely different relationship with the land \u2014 one of familiarity and reverence, not fear.'
                },
                {
                    label: 'To agree with how settlers described the land',
                    feedback: 'Look more closely at the passage. Standing Bear says \u201cWe did NOT think of the great open plains\u2026 as wild.\u201d The quotation marks actually distance him from these descriptions. He\u2019s challenging the settler perspective, not agreeing with it.'
                },
                {
                    label: 'To show the land was dangerous for everyone',
                    feedback: 'Standing Bear is actually making the opposite point. He describes the earth as \u201cbountiful\u201d and says his people were \u201csurrounded with the blessings of the Great Mystery.\u201d The land was not dangerous to the Lakota \u2014 it was home.'
                },
                {
                    label: 'Because he is quoting a specific settler by name',
                    feedback: 'He is not quoting one specific person. Instead, he\u2019s referencing the general language that European Americans used to describe the Plains. The quotation marks highlight how these common words reflected a worldview the Lakota did not share.'
                }
            ]
        },
        written: {
            prompt: 'How does Luther Standing Bear\u2019s description challenge the way many American settlers viewed the Great Plains? Identify specific words or phrases from his writing that support your answer.'
        },
        check: {
            question: 'What were the Black Hills (Paha Sapa) to the Lakota people?',
            options: [
                'An unimportant area they rarely visited',
                'A military stronghold used for defense',
                'A place of deep spiritual and cultural significance',
                'A trading post for exchange with European settlers'
            ],
            correct: 2,
            explanation: 'The Black Hills (Paha Sapa) were sacred to the Lakota \u2014 \u201cthe heart of everything that is.\u201d They were central to Lakota spiritual life, used for prayer, ceremonies, and vision quests. This deep significance is why the Lakota have refused monetary compensation for their loss.'
        }
    },

    /* ---- CHAPTER 3 ---- */
    {
        id: 'fort-laramie',
        chapter: 3,
        title: 'The Fort Laramie Treaty of 1868',
        year: '1868',
        images: [
            { src: 'doc-042-big.jpg', alt: 'Original handwritten text of the Fort Laramie Treaty of 1868', caption: 'The original Fort Laramie Treaty of 1868 (National Archives)' },
            { src: 'NMAI-280_001_001_P38087.jpg', alt: 'Portrait of a Lakota chief wearing a bone breastplate', caption: 'A Lakota leader, late 19th century (National Museum of the American Indian)' }
        ],
        narrative:
            '<p>After years of conflict \u2014 including <strong>Red Cloud\u2019s War (1866\u20131868)</strong>, ' +
            'in which the Lakota successfully defended their territory \u2014 the US government sought peace. ' +
            'The result was the <strong>Fort Laramie Treaty of 1868</strong>.</p>' +
            '<p>The treaty established the <strong>Great Sioux Reservation</strong>, which included the sacred ' +
            'Black Hills, and guaranteed that this land would be set apart for the \u201cabsolute and undisturbed ' +
            'use and occupation\u201d of the Sioux. The US also agreed to close military forts along the Bozeman Trail.</p>' +
            '<p>This was a rare case of a Native nation winning a war against the United States and negotiating ' +
            'from a position of strength.</p>',
        primarySources: [
            {
                text: 'From this day forward all war between the parties to this agreement shall forever cease. ' +
                      'The Government of the United States desires peace, and its honor is hereby pledged to keep it. ' +
                      'The Indians desire peace, and they now pledge their honor to maintain it.',
                attribution: 'Fort Laramie Treaty, Article I, 1868'
            },
            {
                text: 'The United States agrees that the following district of country\u2026 shall be, and the same is, ' +
                      'set apart for the absolute and undisturbed use and occupation of the Indians herein named.',
                attribution: 'Fort Laramie Treaty, Article II, 1868'
            }
        ],
        choice: {
            prompt: 'The treaty promises \u201cabsolute and undisturbed\u201d use of the land, and the government pledges its \u201chonor.\u201d Based on what you know about American history, do you think this promise was kept?',
            options: [
                {
                    label: 'Yes \u2014 the US honored this treaty fully',
                    feedback: 'Unfortunately, history tells a different story. Within just six years, the US government sent a military expedition into the Black Hills \u2014 land guaranteed to the Lakota by this very treaty. The treaty\u2019s strong language makes its violation even more striking.'
                },
                {
                    label: 'No \u2014 the treaty was likely broken as more settlers moved west',
                    feedback: 'You\u2019re right. Despite the treaty\u2019s powerful language about \u201chonor\u201d and \u201cabsolute\u201d protection, the US violated it within six years when gold was discovered in the Black Hills. This pattern of making and breaking treaties was repeated across American history.'
                },
                {
                    label: 'The treaty was renegotiated peacefully by both sides',
                    feedback: 'Actually, there was no peaceful renegotiation. When the US wanted the Black Hills, it tried to pressure the Lakota into selling. When they refused, the government simply took the land by military force \u2014 a direct violation of the treaty\u2019s terms.'
                },
                {
                    label: 'The Lakota chose to leave the land voluntarily',
                    feedback: 'The Lakota did not voluntarily leave. They were forced from the Black Hills after the US government violated the treaty. In fact, the Lakota have maintained for over 150 years that the Black Hills are theirs, refusing over $1 billion in compensation.'
                }
            ]
        },
        written: {
            prompt: 'Why do you think the Fort Laramie Treaty used such strong language like \u201cabsolute and undisturbed\u201d and \u201chonor\u201d? What does this language tell us about what both sides expected from this agreement?'
        },
        check: {
            question: 'What did the Fort Laramie Treaty of 1868 guarantee to the Lakota?',
            options: [
                'Permission for settlers to mine gold in the Black Hills',
                'That the Lakota would relocate to Oklahoma',
                'That the Great Sioux Reservation, including the Black Hills, was for the \u201cabsolute and undisturbed\u201d use of the Sioux',
                'That Custer would lead a peacekeeping force in Lakota territory'
            ],
            correct: 2,
            explanation: 'The Fort Laramie Treaty guaranteed the Great Sioux Reservation \u2014 including the sacred Black Hills \u2014 for the \u201cabsolute and undisturbed use and occupation\u201d of the Sioux Nation. The US government pledged its honor to keep this peace.'
        }
    },

    /* ---- CHAPTER 4 ---- */
    {
        id: 'gold-black-hills',
        chapter: 4,
        title: 'Gold in the Black Hills',
        year: '1874\u20131876',
        images: [
            { src: 'blackhills.jpg', alt: 'Landscape photograph of the Black Hills of South Dakota', caption: 'The Black Hills (Paha Sapa) of South Dakota' },
            { src: 'npr.brightspotcdn.jpg', alt: 'Bismarck Tribune front page from August 1874 with headline GOLD!', caption: 'Bismarck Tribune, August 12, 1874 \u2014 \u201cGOLD!\u201d' },
            { src: 'orig_519427_583532-scaled.jpg', alt: 'Custer\u2019s 1874 Black Hills expedition wagon train crossing the prairie', caption: 'Custer\u2019s 1874 expedition entering the Black Hills (photo by William Illingworth)' }
        ],
        narrative:
            '<p>In 1874, Lieutenant Colonel <strong>George Armstrong Custer</strong> led a military ' +
            'expedition into the Black Hills \u2014 a <strong>direct violation of the Fort Laramie Treaty</strong>. ' +
            'When his geologists confirmed the presence of gold, newspapers spread the news across the country.</p>' +
            '<p>Thousands of miners flooded into the Black Hills illegally. Rather than removing the miners as the ' +
            'treaty required, the US government tried to <strong>buy the Black Hills</strong> from the Lakota. ' +
            'When the Lakota refused to sell their sacred land, the government issued an ultimatum: all Lakota bands ' +
            'must report to reservation agencies by <strong>January 31, 1876</strong>, or be considered \u201chostile.\u201d</p>' +
            '<p>Many bands, including those led by <strong>Sitting Bull</strong> and <strong>Crazy Horse</strong>, ' +
            'refused. They had not broken any treaty \u2014 the US had.</p>',
        primarySources: [
            {
                text: 'GOLD! The Land of Promise \u2014 Stirring News from the Black Hills.',
                attribution: 'Bismarck Tribune headline, August 1874'
            },
            {
                text: 'What treaty that the whites have kept, has the red man broken? Not one. ' +
                      'What treaty that the white man ever made with us have they kept? Not one.',
                attribution: 'Sitting Bull (T\u021fat\u021f\u00e1\u014bka \u00cdyotake), Hunkpapa Lakota leader'
            }
        ],
        choice: {
            prompt: 'Sitting Bull asks which treaties were kept and which were broken. How would you evaluate the US government\u2019s actions regarding the Fort Laramie Treaty?',
            options: [
                {
                    label: 'The government had a legal right to enter the Black Hills for national security',
                    feedback: 'The treaty language was clear: the Black Hills were set apart for the \u201cabsolute and undisturbed\u201d use of the Sioux. There was no national security exception. Custer\u2019s expedition was an exploration and gold survey, not a defensive action. The US Supreme Court later confirmed this was a treaty violation.'
                },
                {
                    label: 'The government broke its own treaty by allowing miners into the Black Hills',
                    feedback: 'This aligns with the historical and legal record. The Fort Laramie Treaty clearly protected the Black Hills. By sending Custer\u2019s expedition and then failing to remove illegal miners, the government violated the treaty it had signed. The Supreme Court agreed in 1980, calling it \u201ca ripe and rank case of dishonorable dealings.\u201d'
                },
                {
                    label: 'The treaty was unclear about whether gold mining was allowed',
                    feedback: 'The treaty was actually quite clear. Article II set the land apart for the \u201cabsolute and undisturbed use\u201d of the Sioux. No mining rights were granted to anyone else. The US Supreme Court later confirmed that the government\u2019s actions were an illegal taking of the land.'
                },
                {
                    label: 'Both sides equally violated the treaty terms',
                    feedback: 'Consider Sitting Bull\u2019s challenge carefully: \u201cWhat treaty that the white man ever made with us have they kept?\u201d The Lakota did not violate the Fort Laramie Treaty. It was the US that sent Custer into the Black Hills and then failed to remove illegal miners. The violation was one-sided.'
                }
            ]
        },
        written: {
            prompt: 'Compare the newspaper headline about gold with Sitting Bull\u2019s words about broken treaties. What do these two sources reveal about the different priorities and perspectives of the US government and the Lakota people?'
        },
        check: {
            question: 'Why did the US government send Custer to the Black Hills in 1874?',
            options: [
                'To enforce the Fort Laramie Treaty and protect Lakota land',
                'To negotiate a new peace agreement with Sitting Bull',
                'To explore the region; his expedition confirmed the presence of gold',
                'To establish schools for Lakota children'
            ],
            correct: 2,
            explanation: 'Custer\u2019s 1874 expedition was sent to explore the Black Hills. His geologists confirmed gold deposits, triggering a gold rush. This expedition itself was a violation of the Fort Laramie Treaty, which had guaranteed the Black Hills to the Lakota.'
        }
    },

    /* ---- CHAPTER 5 ---- */
    {
        id: 'voices-before-battle',
        chapter: 5,
        title: 'Voices Before the Battle',
        year: 'Spring 1876',
        images: [
            { src: '2309003_00100858.tif.jpg', alt: 'Portrait photograph of Sitting Bull, Hunkpapa Lakota leader', caption: 'Sitting Bull (T\u021fat\u021f\u00e1\u014bka \u00cdyotake), Hunkpapa Lakota leader' },
            { src: '61naC2JFuML._AC_UF894,1000_QL80_.jpg', alt: 'Portrait of Lt. Col. George Armstrong Custer in US Army uniform', caption: 'Lt. Col. George Armstrong Custer, 7th Cavalry' }
        ],
        videoLink: {
            url: 'https://www.pbslearningmedia.org/resource/the-battle-of-little-bighorn-video/ken-burns-the-west/?student=true&focus=true',
            title: 'The Battle of Little Bighorn \u2014 Ken Burns\u2019 The West (PBS)',
            description: 'Watch this clip about Sitting Bull\u2019s Sun Dance vision before the Battle of Little Bighorn.'
        },
        narrative:
            '<p>By the spring of 1876, thousands of Lakota, Northern Cheyenne, and Arapaho people had gathered ' +
            'in the valley of the <strong>Little Bighorn River</strong> (known to the Lakota as the <em>Greasy Grass</em>) ' +
            'in present-day Montana. They were led by respected leaders including <strong>Sitting Bull</strong> and ' +
            '<strong>Crazy Horse</strong>.</p>' +
            '<p>Sitting Bull performed a <strong>Sun Dance</strong> \u2014 a sacred ceremony involving fasting and ' +
            'sacrifice \u2014 and experienced a powerful vision. He saw soldiers falling upside down into the Lakota camp, ' +
            'which he interpreted as a prophecy of victory.</p>' +
            '<p>Meanwhile, the US Army launched a three-pronged military campaign to force the Lakota and Cheyenne onto ' +
            'reservations. Custer, commanding the <strong>7th Cavalry</strong>, was eager for glory. He had political ' +
            'ambitions and saw a decisive military victory as his path forward.</p>',
        primarySources: [
            {
                text: 'I saw soldiers falling into our camp, like grasshoppers from the sky\u2026 ' +
                      'These soldiers do not possess ears. They are to die.',
                attribution: 'Sitting Bull, describing his Sun Dance vision, June 1876'
            },
            {
                text: 'There are not Indians enough in the country to whip the Seventh Cavalry.',
                attribution: 'Attributed to George Armstrong Custer, 1876'
            }
        ],
        choice: {
            prompt: 'Compare Sitting Bull\u2019s vision and Custer\u2019s boast. What do these two sources reveal about how each leader approached the coming conflict?',
            options: [
                {
                    label: 'Sitting Bull drew strength from spiritual preparation; Custer relied on military overconfidence',
                    feedback: 'This is a perceptive reading. Sitting Bull\u2019s vision came from deep spiritual practice \u2014 the Sun Dance \u2014 and he interpreted it as guidance from the Great Mystery. Custer\u2019s confidence was based on his reputation and a belief in military superiority. These contrasting sources of confidence \u2014 spiritual humility vs. personal ambition \u2014 shaped what happened next.'
                },
                {
                    label: 'Both leaders were equally overconfident about the outcome',
                    feedback: 'There\u2019s an important distinction here. Sitting Bull\u2019s confidence came from a sacred vision after intense spiritual preparation \u2014 it was rooted in ceremony and community. Custer\u2019s confidence was more personal and dismissive \u2014 he underestimated his opponents. History would show that Sitting Bull\u2019s assessment was far more accurate.'
                },
                {
                    label: 'Neither leader expected an actual battle to occur',
                    feedback: 'Both leaders clearly expected and prepared for conflict. Sitting Bull\u2019s Sun Dance vision specifically depicted soldiers falling in battle, and Custer was actively leading a military campaign. The question was not whether there would be a fight, but what would happen when it came.'
                },
                {
                    label: 'Both leaders were trying to find a way to avoid conflict',
                    feedback: 'The evidence suggests otherwise. The Lakota and their allies had gathered to defend their way of life, and the US Army was on an offensive campaign to force them onto reservations. Sitting Bull\u2019s vision prepared his people for battle, and Custer was actively seeking one.'
                }
            ]
        },
        written: {
            prompt: 'Sitting Bull and Custer both expressed confidence before the battle, but from very different sources. Explain how their different sources of confidence reflect their different worldviews and values.'
        },
        check: {
            question: 'What did Sitting Bull\u2019s Sun Dance vision predict?',
            options: [
                'That the Lakota should surrender peacefully',
                'That soldiers would fall into the Lakota camp \u2014 a sign of victory',
                'That gold would be discovered in the Black Hills',
                'That a new peace treaty would be signed'
            ],
            correct: 1,
            explanation: 'During the Sun Dance ceremony, Sitting Bull had a vision of soldiers falling upside down into the Lakota camp \u201clike grasshoppers from the sky.\u201d He interpreted this as a prophecy of victory. The vision proved remarkably accurate when Custer attacked weeks later.'
        }
    },

    /* ---- CHAPTER 6 ---- */
    {
        id: 'battle',
        chapter: 6,
        title: 'The Battle of Little Bighorn',
        year: 'June 25\u201326, 1876',
        images: [
            { src: '494765462_10237234548269157_840265690151987454_n.jpg', alt: 'Large Native American encampment on the Great Plains', caption: 'A large tribal encampment on the Great Plains, late 19th century' }
        ],
        narrative:
            '<p>On <strong>June 25, 1876</strong>, Custer and the 7th Cavalry reached the massive encampment along ' +
            'the Little Bighorn River. Ignoring warnings from his scouts about the camp\u2019s size, Custer divided ' +
            'his roughly 600 soldiers into three groups and ordered an attack.</p>' +
            '<p>He drastically underestimated the number of warriors. The encampment held perhaps ' +
            '<strong>6,000\u20137,000 people</strong>, including an estimated <strong>1,500\u20132,000 warriors</strong> ' +
            'from the Lakota, Northern Cheyenne, and Arapaho nations.</p>' +
            '<p>Custer led about <strong>210 men</strong> directly toward the village. Warriors led by ' +
            '<strong>Crazy Horse</strong> and <strong>Chief Gall</strong> counterattacked with overwhelming force. ' +
            'Within roughly an hour, Custer and every soldier in his immediate command were killed. The other two ' +
            'groups under Major Reno and Captain Benteen survived but suffered heavy casualties.</p>' +
            '<p>It was the worst US Army defeat in the Plains Wars. The Lakota call it ' +
            '<strong>\u201cthe Battle of the Greasy Grass.\u201d</strong></p>',
        primarySources: [
            {
                text: 'The shooting was quick, quick. Pop \u2014 Loss \u2014 pop \u2014 pop \u2014 pop, very fast. ' +
                      'Some of the soldiers were down on their knees, some standing. The smoke was like a great cloud, ' +
                      'and everywhere the Sioux went the dust rose like smoke. We circled all round them \u2014 ' +
                      'swirling like water round a stone.',
                attribution: 'Two Moons, Northern Cheyenne chief, recounting the battle (recorded 1898)'
            },
            {
                text: 'It was a good fight. The soldiers were brave, but there were too few of them.',
                attribution: 'Red Horse, Miniconjou Lakota chief, account of the battle'
            }
        ],
        choice: {
            prompt: 'Both Two Moons and Red Horse acknowledge the soldiers\u2019 bravery while describing their defeat. What does this tell you about how these warriors viewed their opponents?',
            options: [
                {
                    label: 'They respected the soldiers\u2019 courage, even while fighting against them',
                    feedback: 'This reflects an important aspect of Plains warrior culture, which valued bravery \u2014 even in an enemy. By honoring the soldiers\u2019 courage, Two Moons and Red Horse demonstrate a code of respect that went beyond simple hostility. These accounts offer a more complex view of the battle than the \u201cmassacre\u201d narrative sometimes found in older textbooks.'
                },
                {
                    label: 'They felt guilty about defeating the soldiers',
                    feedback: 'The accounts don\u2019t suggest guilt. The Lakota and Cheyenne were defending their families, their land, and their way of life against an army that had violated a treaty. Acknowledging an opponent\u2019s bravery is not the same as feeling guilty \u2014 it reflects a warrior tradition that respected courage on all sides.'
                },
                {
                    label: 'They were trying to make the battle sound less significant',
                    feedback: 'Actually, these accounts do the opposite. Two Moons describes the intensity vividly \u2014 \u201cthe dust rose like smoke\u201d and \u201cwe circled all round them, swirling like water round a stone.\u201d By acknowledging the soldiers\u2019 bravery, the warriors make their own victory MORE significant, not less.'
                },
                {
                    label: 'They wanted to exaggerate the size of the battle',
                    feedback: 'These accounts are consistent with other evidence about the battle. The warriors aren\u2019t exaggerating \u2014 they\u2019re providing honest accounts from their perspective. Acknowledging the enemy\u2019s courage was a traditional practice in Plains warrior culture and actually lends credibility to their accounts.'
                }
            ]
        },
        written: {
            prompt: 'Using the accounts from Two Moons and Red Horse, describe what the battle might have looked like from the perspective of a warrior defending the encampment. Why are firsthand Native American accounts of this battle historically important?'
        },
        check: {
            question: 'What was a major reason for Custer\u2019s defeat at the Battle of Little Bighorn?',
            options: [
                'His soldiers refused to follow orders',
                'A severe thunderstorm prevented his cavalry from charging',
                'He divided his forces and greatly underestimated the number of warriors',
                'The Lakota had more advanced weapons than the US Army'
            ],
            correct: 2,
            explanation: 'Custer made critical tactical errors: he divided his 600 soldiers into three groups and attacked a camp of 6,000\u20137,000 people with an estimated 1,500\u20132,000 warriors. His overconfidence and refusal to heed his scouts\u2019 warnings about the camp\u2019s size led to the worst US Army defeat in the Plains Wars.'
        }
    },

    /* ---- CHAPTER 7 ---- */
    {
        id: 'aftermath',
        chapter: 7,
        title: 'Aftermath & Legacy',
        year: '1876\u2013Present',
        images: [
            { src: '2309001_00100935.tif.jpg', alt: 'US government officials seated outside a building, late 19th century', caption: 'US government officials, late 19th century' }
        ],
        narrative:
            '<p>The victory at Little Bighorn was the <strong>last great military triumph</strong> for the Plains ' +
            'nations. The US government, shocked and enraged by Custer\u2019s defeat, sent thousands more troops ' +
            'to the region.</p>' +
            '<p>Within a year, most Lakota and Cheyenne bands had been forced onto reservations. Crazy Horse ' +
            'surrendered in May 1877 and was killed in custody that September. Sitting Bull fled to Canada but ' +
            'eventually returned and surrendered in 1881. He was killed by reservation police in 1890.</p>' +
            '<p>The Black Hills were seized without the Lakota\u2019s consent. In <strong>1980</strong>, the US ' +
            'Supreme Court ruled in <em>United States v. Sioux Nation</em> that the taking of the Black Hills was ' +
            'illegal and awarded over <strong>$100 million</strong> in compensation. <strong>The Lakota have refused ' +
            'to accept the money</strong>, which has grown to over <strong>$1 billion</strong> in a trust fund. ' +
            'They maintain that the Black Hills are not for sale \u2014 they want the land returned.</p>',
        primarySources: [
            {
                text: 'A more ripe and rank case of dishonorable dealings will never, in all probability, ' +
                      'be found in our history.',
                attribution: 'US Supreme Court, United States v. Sioux Nation of Indians, 1980'
            },
            {
                text: 'The Black Hills are not for sale.',
                attribution: 'Position maintained by the Lakota Nation, 1876 to present'
            }
        ],
        choice: {
            prompt: 'The Lakota have refused over $1 billion in compensation for the Black Hills. What does this decision tell you about the significance of the land?',
            options: [
                {
                    label: 'The land holds spiritual and cultural meaning that cannot be measured in money',
                    feedback: 'This captures the core of the Lakota position. The Black Hills are not real estate \u2014 they are Paha Sapa, \u201cthe heart of everything that is.\u201d Sacred places, ancestors\u2019 burial grounds, and centuries of spiritual practice cannot be replaced by a bank account. The refusal of $1 billion is one of the most powerful statements of cultural values in American history.'
                },
                {
                    label: 'They are waiting for a larger financial offer',
                    feedback: 'The Lakota position has been consistent for over 150 years: they want the land, not money. When the trust fund grew past $1 billion, they still refused. This is not a negotiating tactic \u2014 it reflects a fundamentally different understanding of what land means. As the Lakota say, \u201cThe Black Hills are not for sale.\u201d'
                },
                {
                    label: 'They don\u2019t understand the value of the compensation',
                    feedback: 'This view underestimates the Lakota. Their decision has been deliberate and maintained across many generations, despite poverty on reservations. They understand the money perfectly \u2014 they simply believe that accepting it would mean giving up their claim to sacred land that was taken illegally. It\u2019s a profound statement of values over material wealth.'
                },
                {
                    label: 'They have already received other forms of compensation',
                    feedback: 'The Lakota have not received meaningful compensation. Many Lakota communities on the Pine Ridge and Rosebud reservations face severe poverty. Their refusal of $1 billion despite these hardships makes the decision even more striking \u2014 it demonstrates that their connection to the Black Hills transcends material considerations.'
                }
            ]
        },
        written: {
            prompt: 'The Lakota have refused over $1 billion for the Black Hills. Using evidence from this simulation, explain why you think they made this choice and what it reveals about the relationship between land, culture, and identity.'
        },
        check: {
            question: 'What did the US Supreme Court rule in United States v. Sioux Nation (1980)?',
            options: [
                'That the US had legally acquired the Black Hills through fair negotiation',
                'That the taking of the Black Hills was illegal, and awarded compensation that the Lakota refused',
                'That the Black Hills should be immediately returned to the Lakota',
                'That the Fort Laramie Treaty was never legally binding'
            ],
            correct: 1,
            explanation: 'The Supreme Court ruled that the US had illegally taken the Black Hills in violation of the Fort Laramie Treaty, calling it \u201ca more ripe and rank case of dishonorable dealings.\u201d The Court awarded over $100 million in compensation, but the Lakota have refused to accept it, maintaining that the Black Hills are not for sale.'
        }
    }
];

/* ============================
 *   RENDERING FUNCTIONS
 * ============================ */

// Main render dispatcher — called any time the view needs to update
function render() {
    var app = document.getElementById('app');
    var header = document.getElementById('header');

    if (currentIndex === -1) {
        // Welcome screen
        header.classList.add('hidden');
        renderWelcome(app);
    } else if (currentIndex >= SECTIONS.length) {
        // Summary page
        header.classList.remove('hidden');
        updateProgress();
        renderSummary(app);
    } else {
        // Chapter page
        header.classList.remove('hidden');
        updateProgress();
        renderSection(app, SECTIONS[currentIndex]);
    }
    // Note: we intentionally do NOT scroll-to-top here. render() is also
    // called on in-page interactions (selecting a choice, picking a check
    // answer), and jumping to the top on every interaction is jarring.
    // The navigation functions (startSimulation, nextSection, prevSection)
    // handle scroll-to-top themselves when a new chapter actually loads.
}

// Helper — scroll the page to the top smoothly (used by navigation)
function scrollPageToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Welcome screen with name entry — cinematic dark title screen
function renderWelcome(container) {
    container.innerHTML =
        '<div class="title-screen">' +
            '<div class="title-eyebrow">Classroom Simulation</div>' +
            '<h1 class="title-main">Westward<br>Expansion</h1>' +
            '<div class="title-subtitle">1845 \u2013 1890</div>' +
            '<p class="title-intro">' +
                'For half a century, the United States pushed westward across the ' +
                'Great Plains \u2014 driven by the belief that expansion was a ' +
                '<em>manifest destiny</em>. Railroads, miners, and settlers ' +
                'streamed into lands that had been home to Native nations for ' +
                'thousands of years.' +
                '<br><br>' +
                'In this simulation, you will trace the path from <em>Manifest Destiny</em> ' +
                'to the <em>Battle of Little Bighorn</em>. You will read the words of those ' +
                'who lived it, examine the photographs and documents they left behind, ' +
                'and make your own judgments about what happened and why.' +
                '<br><br>' +
                '<strong>The people in this story were real. The events happened. ' +
                'The questions are still being asked.</strong>' +
            '</p>' +
            '<div class="title-name-entry">' +
                '<label for="student-name">Enter your name to begin</label>' +
                '<input type="text" id="student-name" placeholder="First and Last Name" ' +
                       'maxlength="60" autocomplete="off">' +
                '<button class="btn-start" onclick="startSimulation()">Begin Simulation</button>' +
            '</div>' +
        '</div>';

    // Focus the input and allow Enter key to start
    var input = document.getElementById('student-name');
    input.focus();
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') startSimulation();
    });
}

// Render a single chapter / section
function renderSection(container, section) {
    var state = answers[section.id] || {};
    var html = '';

    // ---- Chapter header (editorial: location eyebrow, date, title) ----
    html += '<div class="section-card">';
    html += '<div class="chapter-header">';
    html += '<div class="scene-location">Chapter ' + section.chapter + '</div>';
    html += '<div class="scene-date">' + section.year + '</div>';
    html += '<h1 class="scene-title">' + section.title + '</h1>';
    html += '</div>';

    // ---- Narrative ----
    html += '<div class="narrative">' + section.narrative + '</div>';

    // ---- Images (photos, maps, documents) ----
    if (section.images && section.images.length > 0) {
        html += '<div class="images-row">';
        for (var img = 0; img < section.images.length; img++) {
            var image = section.images[img];
            html += '<div class="image-container">';
            html += '<img src="' + image.src + '" alt="' + image.alt + '" class="source-image" loading="lazy">';
            if (image.caption) {
                html += '<p class="image-caption">' + image.caption + '</p>';
            }
            html += '</div>';
        }
        html += '</div>';
    }

    // ---- Optional video ----
    if (section.video) {
        html += '<div class="video-container">';
        html += '<iframe src="' + section.video.embedUrl + '" title="' + section.video.title + '" ';
        html += 'frameborder="0" allowfullscreen ';
        html += 'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">';
        html += '</iframe>';
        html += '</div>';
    }

    // ---- External video link (PBS, etc.) ----
    if (section.videoLink) {
        html += '<div class="video-link">';
        html += '<a href="' + section.videoLink.url + '" target="_blank" rel="noopener">';
        html += '<span class="video-play-icon">&#9654;</span>';
        html += '<span class="video-link-text">';
        html += '<span class="video-link-title">' + section.videoLink.title + '</span>';
        html += '<span class="video-link-desc">' + section.videoLink.description + '</span>';
        html += '</span>';
        html += '</a>';
        html += '</div>';
    }

    // ---- External explore link(s) (Native Land Digital map, etc.) ----
    // Accepts either a single `exploreLink` object or an array `exploreLinks`.
    var exploreLinks = section.exploreLinks
        || (section.exploreLink ? [section.exploreLink] : []);
    for (var e = 0; e < exploreLinks.length; e++) {
        var link = exploreLinks[e];
        html += '<div class="explore-link">';
        html += '<a href="' + link.url + '" target="_blank" rel="noopener">';
        html += '<span class="explore-icon" aria-hidden="true">';
        // Inline SVG globe-with-meridians icon — avoids emoji inconsistency
        html += '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" ';
        html += 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
        html += '<circle cx="12" cy="12" r="10"/>';
        html += '<path d="M2 12h20"/>';
        html += '<path d="M12 2a15 15 0 0 1 0 20"/>';
        html += '<path d="M12 2a15 15 0 0 0 0 20"/>';
        html += '</svg>';
        html += '</span>';
        html += '<span class="video-link-text">';
        html += '<span class="video-link-title">' + link.title + '</span>';
        html += '<span class="video-link-desc">' + link.description + '</span>';
        html += '</span>';
        html += '</a>';
        html += '</div>';
    }

    // ---- Primary sources ----
    html += '<div class="sources-section">';
    html += '<h2 class="section-heading">Primary Source' + (section.primarySources.length > 1 ? 's' : '') + '</h2>';
    for (var s = 0; s < section.primarySources.length; s++) {
        var src = section.primarySources[s];
        html += '<blockquote class="primary-source">';
        html += '<p class="source-text">&ldquo;' + src.text + '&rdquo;</p>';
        html += '<cite class="source-cite">&mdash; ' + src.attribution + '</cite>';
        html += '</blockquote>';
    }
    html += '</div>';

    // ---- Reflective choice ----
    html += '<div class="choice-section">';
    html += '<h2 class="section-heading">Your Analysis</h2>';
    html += '<p class="choice-prompt">' + section.choice.prompt + '</p>';
    html += '<div class="choice-options">';
    for (var c = 0; c < section.choice.options.length; c++) {
        var opt = section.choice.options[c];
        var choiceCls = 'choice-btn';
        if (state.choiceIndex === c) choiceCls += ' selected';
        if (state.choiceIndex !== undefined) choiceCls += ' locked';
        html += '<button class="' + choiceCls + '" onclick="selectChoice(\'' + section.id + '\',' + c + ')" ';
        if (state.choiceIndex !== undefined) html += 'disabled';
        html += '>';
        html += '<span class="option-letter">' + String.fromCharCode(65 + c) + '</span>';
        html += '<span class="option-text">' + opt.label + '</span>';
        html += '</button>';
    }
    html += '</div>';

    // Show feedback after a choice is made
    if (state.choiceIndex !== undefined) {
        html += '<div class="choice-feedback">';
        html += '<p>' + section.choice.options[state.choiceIndex].feedback + '</p>';
        html += '</div>';
    }
    html += '</div>';

    // ---- Written response (shown after making a choice) ----
    if (state.choiceIndex !== undefined) {
        html += '<div class="written-section">';
        html += '<h2 class="section-heading">Written Response</h2>';
        html += '<p class="written-prompt">' + section.written.prompt + '</p>';
        html += '<textarea class="written-textarea" id="written-' + section.id + '" ';
        html += 'rows="5" placeholder="Write your response here\u2026" ';
        html += 'oninput="saveWritten(\'' + section.id + '\')">';
        html += escapeHTML(state.writtenResponse || '');
        html += '</textarea>';
        html += '</div>';
    }

    // ---- Check for understanding (only after a reflective choice is made) ----
    if (state.choiceIndex !== undefined) {
        html += '<div class="check-section">';
        html += '<h2 class="section-heading">Check for Understanding</h2>';
        html += '<p class="check-question">' + section.check.question + '</p>';
        html += '<div class="check-options">';

        for (var k = 0; k < section.check.options.length; k++) {
            var checkCls = 'check-btn';
            if (state.checkDone) {
                if (k === section.check.correct) checkCls += ' correct';
                else if (k === state.checkIndex) checkCls += ' incorrect';
                else checkCls += ' locked';
            } else if (state.checkSelected === k) {
                checkCls += ' selected';
            }
            html += '<button class="' + checkCls + '" onclick="selectCheck(\'' + section.id + '\',' + k + ')" ';
            if (state.checkDone) html += 'disabled';
            html += '>';
            html += '<span class="option-letter">' + String.fromCharCode(65 + k) + '</span>';
            html += '<span class="option-text">' + section.check.options[k] + '</span>';
            html += '</button>';
        }
        html += '</div>';

        // "Check Answer" button — shown when an option is selected but not yet submitted
        if (!state.checkDone && state.checkSelected !== undefined) {
            html += '<button class="btn btn-primary submit-btn" onclick="submitCheck(\'' + section.id + '\')">Check Answer</button>';
        }

        // Feedback after submitting the check answer
        if (state.checkDone) {
            var fbCls = state.checkCorrect ? 'correct' : 'incorrect';
            html += '<div class="check-feedback ' + fbCls + '">';
            html += '<p class="check-result">' + (state.checkCorrect ? 'Correct!' : 'Not quite.') + '</p>';
            html += '<p>' + section.check.explanation + '</p>';
            html += '</div>';
        }

        // Retry message (shown after first wrong attempt)
        if (state.retryMessage) {
            html += '<div class="retry-message"><p>' + state.retryMessage + '</p></div>';
        }

        html += '</div>';
    }

    // ---- Navigation buttons ----
    html += '<div class="nav-buttons">';
    if (currentIndex > 0) {
        html += '<button class="btn btn-secondary" onclick="prevSection()">&larr; Previous</button>';
    } else {
        html += '<div></div>';   // spacer for flex alignment
    }
    var hasWritten = state.writtenResponse && state.writtenResponse.trim().length >= 20;
    html += '<div id="continue-wrapper">';
    if (state.checkDone && hasWritten) {
        var nextLabel = currentIndex === SECTIONS.length - 1 ? 'View Summary &rarr;' : 'Continue &rarr;';
        html += '<button class="btn btn-primary" onclick="nextSection()">' + nextLabel + '</button>';
    } else if (state.checkDone && !hasWritten) {
        html += '<p class="written-reminder">Please complete your written response above to continue.</p>';
    }
    html += '</div>';
    html += '</div>';

    html += '</div>'; // close .section-card
    container.innerHTML = html;
}

// Render the summary / export page
function renderSummary(container) {
    var date = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Count correct answers
    var totalCorrect = 0;
    for (var i = 0; i < SECTIONS.length; i++) {
        if (answers[SECTIONS[i].id] && answers[SECTIONS[i].id].checkCorrect) totalCorrect++;
    }

    var html = '';
    html += '<div class="summary-card" id="summary-content">';

    // Header
    html += '<div class="summary-header">';
    html += '<h1>Simulation Complete</h1>';
    html += '<div class="summary-meta">';
    html += '<p><strong>Student:</strong> ' + escapeHTML(studentName) + '</p>';
    html += '<p><strong>Date:</strong> ' + date + '</p>';
    html += '<p><strong>Comprehension Score:</strong> ' + totalCorrect + ' / ' + SECTIONS.length + '</p>';
    html += '</div></div>';

    html += '<h2 class="summary-section-title">Your Responses</h2>';

    // Loop through each section's responses
    for (var j = 0; j < SECTIONS.length; j++) {
        var section = SECTIONS[j];
        var state = answers[section.id] || {};

        html += '<div class="summary-section">';
        html += '<h3>Chapter ' + section.chapter + ': ' + section.title + '</h3>';

        // Reflective choice response
        html += '<div class="summary-response">';
        html += '<p class="summary-label">Your Analysis:</p>';
        html += '<p class="summary-answer">';
        if (state.choiceIndex !== undefined) {
            html += '<span class="option-letter">' + String.fromCharCode(65 + state.choiceIndex) + '</span>';
            html += section.choice.options[state.choiceIndex].label;
        } else {
            html += '<span class="option-letter">&mdash;</span>No response';
        }
        html += '</p></div>';

        // Written response
        html += '<div class="summary-response">';
        html += '<p class="summary-label">Written Response:</p>';
        if (state.writtenResponse && state.writtenResponse.trim().length > 0) {
            html += '<p class="summary-written">' + escapeHTML(state.writtenResponse) + '</p>';
        } else {
            html += '<p class="summary-written empty">No response provided</p>';
        }
        html += '</div>';

        // Check for understanding response
        html += '<div class="summary-response">';
        html += '<p class="summary-label">Check for Understanding: ' + section.check.question + '</p>';
        var ansCls = state.checkCorrect ? 'correct' : 'incorrect';
        html += '<p class="summary-answer ' + ansCls + '">';
        if (state.checkIndex !== undefined) {
            html += '<span class="option-letter">' + String.fromCharCode(65 + state.checkIndex) + '</span>';
            html += section.check.options[state.checkIndex];
            html += '<span class="check-mark">' + (state.checkCorrect ? '\u2713' : '\u2717') + '</span>';
        } else {
            html += '<span class="option-letter">&mdash;</span>No response';
        }
        html += '</p>';

        // Show the correct answer if they got it wrong
        if (state.checkDone && !state.checkCorrect) {
            html += '<p class="summary-correct-answer">Correct answer: ';
            html += '<span class="option-letter">' + String.fromCharCode(65 + section.check.correct) + '</span> ';
            html += section.check.options[section.check.correct];
            html += '</p>';
        }
        html += '</div></div>';
    }

    // Final reflection
    html += '<div class="final-reflection">';
    html += '<h2 class="summary-section-title">Final Reflection</h2>';
    html += '<p>In 2\u20133 sentences, what is the most important thing you learned from this simulation?</p>';
    html += '<textarea id="final-reflection" rows="4" placeholder="Type your reflection here\u2026" ';
    html += 'oninput="saveFinalReflection()">' + escapeHTML(answers.finalReflection || '') + '</textarea>';
    html += '</div>';

    // Export button
    html += '<div class="export-section">';
    html += '<button class="btn btn-primary export-btn" onclick="exportPDF()">Export as PDF</button>';
    html += '<p class="export-hint">This will open your device\u2019s print dialog. Choose \u201cSave as PDF\u201d to download.</p>';
    html += '</div>';

    html += '</div>'; // close .summary-card

    // Navigation back
    html += '<div class="nav-buttons">';
    html += '<button class="btn btn-secondary" onclick="prevSection()">&larr; Back to Chapter ' + SECTIONS.length + '</button>';
    html += '<div></div>';
    html += '</div>';

    container.innerHTML = html;
}

/* ============================
 *   INTERACTION HANDLERS
 * ============================ */

// Start the simulation after entering a name
function startSimulation() {
    var input = document.getElementById('student-name');
    var name = input.value.trim();
    if (!name) {
        input.classList.add('error');
        input.placeholder = 'Please enter your name';
        input.focus();
        return;
    }
    studentName = name;
    currentIndex = 0;
    render();
    scrollPageToTop();
}

// Handle reflective choice selection (any answer is valid)
function selectChoice(sectionId, index) {
    if (!answers[sectionId]) answers[sectionId] = {};
    if (answers[sectionId].choiceIndex !== undefined) return; // Already chosen
    answers[sectionId].choiceIndex = index;
    render();

    // Scroll down to reveal the written response section
    setTimeout(function () {
        var el = document.querySelector('.written-section') || document.querySelector('.check-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Handle check-for-understanding option selection (before submitting)
function selectCheck(sectionId, index) {
    if (!answers[sectionId]) answers[sectionId] = {};
    if (answers[sectionId].checkDone) return;
    answers[sectionId].checkSelected = index;
    answers[sectionId].retryMessage = '';
    render();
}

// Submit check-for-understanding answer
function submitCheck(sectionId) {
    var state = answers[sectionId];
    if (!state || state.checkSelected === undefined) return;

    var section = null;
    for (var i = 0; i < SECTIONS.length; i++) {
        if (SECTIONS[i].id === sectionId) { section = SECTIONS[i]; break; }
    }
    if (!section) return;

    var isCorrect = state.checkSelected === section.check.correct;
    state.attempts = (state.attempts || 0) + 1;

    if (isCorrect || state.attempts >= 2) {
        // Done — either correct or out of attempts
        state.checkIndex = state.checkSelected;
        state.checkCorrect = isCorrect;
        state.checkDone = true;
        state.retryMessage = '';
    } else {
        // First wrong attempt — let them try again
        state.retryMessage = 'That\u2019s not quite right. Re-read the primary source and try once more.';
        state.checkSelected = undefined;
    }

    render();

    // If done, scroll to the navigation buttons
    if (state.checkDone) {
        setTimeout(function () {
            var nav = document.querySelector('.nav-buttons');
            if (nav) nav.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// Save written response as the student types (no full re-render to keep focus)
function saveWritten(sectionId) {
    if (!answers[sectionId]) answers[sectionId] = {};
    var textarea = document.getElementById('written-' + sectionId);
    if (textarea) {
        answers[sectionId].writtenResponse = textarea.value;
    }
    // Update continue button without re-rendering the whole page
    var state = answers[sectionId];
    var hasWritten = state.writtenResponse && state.writtenResponse.trim().length >= 20;
    var wrapper = document.getElementById('continue-wrapper');
    if (wrapper && state.checkDone) {
        if (hasWritten) {
            var label = currentIndex === SECTIONS.length - 1 ? 'View Summary &rarr;' : 'Continue &rarr;';
            wrapper.innerHTML = '<button class="btn btn-primary" onclick="nextSection()">' + label + '</button>';
        } else {
            wrapper.innerHTML = '<p class="written-reminder">Please complete your written response above to continue.</p>';
        }
    }
}

// Navigate to the next section
function nextSection() {
    currentIndex++;
    render();
    scrollPageToTop();
}

// Navigate to the previous section
function prevSection() {
    if (currentIndex >= SECTIONS.length) {
        // From summary, go back to last chapter
        currentIndex = SECTIONS.length - 1;
    } else if (currentIndex > 0) {
        currentIndex--;
    }
    render();
    scrollPageToTop();
}

// Save the final reflection text as the student types
function saveFinalReflection() {
    var textarea = document.getElementById('final-reflection');
    if (textarea) answers.finalReflection = textarea.value;
}

/* ======================
 *   PROGRESS BAR
 * ====================== */

function updateProgress() {
    var bar = document.getElementById('progress-bar');
    var text = document.getElementById('progress-text');
    var total = SECTIONS.length;
    var current = Math.min(currentIndex + 1, total);

    // Calculate percentage
    var percent = currentIndex >= total ? 100 : (current / total) * 100;
    bar.style.width = percent + '%';

    // Update label
    if (currentIndex >= total) {
        text.textContent = 'Simulation Complete';
    } else {
        text.textContent = 'Chapter ' + current + ' of ' + total;
    }
}

/* ======================
 *   PDF EXPORT
 * ====================== */

function exportPDF() {
    // Save any in-progress reflection text before printing
    saveFinalReflection();

    // Use the browser's built-in print dialog
    // Students choose "Save as PDF" in Chrome or Safari
    window.print();
}

/* ======================
 *   UTILITY FUNCTIONS
 * ====================== */

// Escape HTML to prevent XSS when inserting user-entered text
function escapeHTML(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

/* ======================
 *   START THE APP
 * ====================== */

render();
