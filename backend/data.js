import bcrypt from 'bcryptjs';

const data = {
    users: [
      {
        name: 'Iulia',
        email: 'iulia@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
      },
      {
        name: 'Maria',
        email: 'maria@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
      },
    ],

    products: [
        {
            //_id: '1',
            name: 'A Wrinkle in Time',
            slug: 'a-wrinkle-in-time',
            category: 'Action & Adventure',
            image: '/images/p1.jpg',
            price: 44,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            author: 'Madeleine L Engle',
            publicationDate: 2008,
            edition: 'Square Fish',
            pageNumber: 288,
            description: '"A Wrinkle in Time" is a classic science fantasy novel written by Madeleine L Engle. The story follows Meg Murry, her brother Charles Wallace, and their friend Calvin O Keefe as they embark on a cosmic journey to rescue Megs father. Guided by mysterious beings called Mrs. Whatsit, Mrs. Which, and Mrs. Who, the children traverse space and time, encountering strange worlds and confronting the forces of darkness. L Engle weaves themes of love, courage, and the battle between good and evil into a captivating narrative that transcends dimensions, making "A Wrinkle in Time" a timeless exploration of the human spirit and the mysteries of the universe.',
        },

        {
            //_id: '2',
            name: 'Gullivers Travels',
            slug: 'gullivers-travels',
            category: 'Classics',
            image: '/images/p2.jpg',
            price: 37,
            countInStock: 10,
            rating: 4.2,
            numReviews: 10,
            author: 'Jonathan Swift',
            publicationDate: 2016,
            edition: 'Evergreens',
            pageNumber: 256,
            description: '"Gullivers Travels" is a satirical masterpiece penned by Jonathan Swift. The novel recounts the fantastic voyages of Lemuel Gulliver, a ships surgeon, to four extraordinary lands. From the miniature inhabitants of Lilliput to the towering Brobdingnagians, the flying island of Laputa, and the rational horses of Houyhnhnms, Gulliver encounters societies that mirror and critique various aspects of human nature and society. Swift employs humor, wit, and allegory to explore themes such as politics, power, and human folly. "Gullivers Travels" remains a timeless classic, celebrated for its sharp social commentary and imaginative storytelling.',
        },

        {
            //_id: '3',
            name: 'Eleanor Oliphant is completely fine',
            slug: 'eleanor-oliphant-is-completely-fine',
            category: 'Contemporary Fiction',
            image: '/images/p3.jpg',
            price: 97.92,
            countInStock: 10,
            rating: 5,
            numReviews: 10,
            author: 'Gail Honeyman',
            publicationDate: 2018,
            edition: 'Penguin Books',
            pageNumber: 352,
            description: '"Eleanor Oliphant Is Completely Fine" by Gail Honeyman is a poignant and heartwarming novel that delves into the life of Eleanor Oliphant, a socially awkward and routine-driven woman. Eleanors carefully structured world takes an unexpected turn when she develops a crush on a musician and begins to navigate the complexities of social interactions. As the layers of Eleanors past are gradually revealed, the novel addresses themes of loneliness, trauma, and the transformative power of human connection. Gail Honeyman skillfully combines humor and empathy, crafting a compelling narrative that explores the resilience of the human spirit and the possibility of healing through friendship and self-discovery.',
        },

        {
            //_id: '4',
            name: 'Hazards of Time Travel',
            slug: 'hazards-of0time-travel',
            category: 'Distopian Fiction',
            image: '/images/p4.jpg',
            price: 160.64,
            countInStock: 10,
            rating: 5,
            numReviews: 10,
            author: 'Joyce Carol Oates',
            publicationDate: 2018,
            edition: 'Harper Large Print',
            pageNumber: 432,
            description: '"Hazards of Time Travel" by Joyce Carol Oates is a thought-provoking science fiction novel that follows the story of Adriane Strohl, a rebellious teenager in a dystopian society. After expressing dissenting views in a school assignment, Adriane is sentenced to a mysterious form of punishment: time travel to the past. Transported to the 1950s, she must navigate a world of political unrest and conform to the norms of a different era. As Adriane grapples with the hazards of both her oppressive present and the complexities of the past, the novel explores themes of free will, authoritarianism, and the consequences of questioning societal norms. Oates weaves a compelling narrative that challenges perceptions of time, identity, and the impact of individual choices on the course of history.',
        },

        {
          //_id: '5',
          name: 'Harry Potter and the Sorcerers Stone',
          slug: 'harry-potter-and-the-sorcerers-stone',
          category: 'Fantasy',
          image: '/images/p5.jpg',
          price: 72.49,
          countInStock: 10,
          rating: 5,
          numReviews: 10,
          author: 'J. K. Rowling',
          publicationDate: 2023,
          edition: 'SCHOLASTIC INC.',
          pageNumber: 320,
          description: 'Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley - a great big swollen spoiled bully. Harrys room is a tiny closet at the foot of the stairs, and he hasnt had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry - and anyone who reads about him - will find unforgettable.',
      },

      {
        //_id: '6',
        name: 'Narwhals Otter Friend',
        slug: 'narwhals-otter-friend',
        category: 'Graphics Novel',
        image: '/images/p6.jpg',
        price: 44.58,
        countInStock: 10,
        rating: 5,
        numReviews: 10,
        author: 'Ben Clanton',
        publicationDate: 2020,
        edition: 'Tundra Books (ny)',
        pageNumber: 50,
        description: 'Hilarious and charming. The most lovable duo since Frog and Toad." --NYT-bestselling creator of the Dog Man and Captain Underpants series, Dav Pilkey Narwhal and Jelly . . . and Otty? Exuberant Narwhal and skeptical Jelly test the waters of adding a new friend to their pod when they meet Otty the super-adventurous otter in the fourth book of this blockbuster early graphic novel series Dive into three new stories about the joy of adventure and the power of friendship In the first story, Otty the otter makes her debut splash; while Narwhal greets her with immediate enthusiasm, Jellys not so sure about her...mostly because he worries shell take his place as Narwhals best friend. Readers will easily see why Narwhals so excited to meet Otty, a boisterous explorer who even has an aunt whos a real live sea captain But readers will also relate to Jellys uneasiness seeing his best friend making a new pal Jelly tries to work out his jealousy in story two, and in story three, the new trio say "Ahoy, adventure " and discover they all have more in common than they thought . . . including a love of waffles Jelly also takes over the "Super Waffle and Strawberry Sidekick" comic providing a sidekicks-eye-view of defeating the dreaded dEVILed egg',
    },

    {
      //_id: '7',
      name: 'Number the Stars',
      slug: 'number-the-stars',
      category: 'Historical Fiction',
      image: '/images/p7.jpg',
      price: 66.17,
      countInStock: 10,
      rating: 5,
      numReviews: 10,
      author: 'Lois Lowry',
      publicationDate: 2011,
      edition: 'Clarion Books',
      pageNumber: 160,
      description: 'In 1943 Copenhagen, the Germans begin their campaign to "relocate" the Jews of Denmark. So Annemarie Johansens parents take in her best friend Ellen Rosen and pretend that she is a part of their family. This edition includes a new Introduction by the author. The unforgettable Newbery Medal-winning novel from Lois Lowry. As the German troops begin their campaign to "relocate" all the Jews of Denmark, Annemarie Johansens family takes in Annemaries best friend, Ellen Rosen, and conceals her as part of the family. Through the eyes of ten-year-old Annemarie, we watch as the Danish Resistance smuggles almost the entire Jewish population of Denmark, nearly seven thousand people, across the sea to Sweden. The heroism of an entire nation reminds us that there was pride and human decency in the world even during a time of terror and war. A modern classic of historical fiction, Number the Stars has won generations of fans and continues to speak to todays readers. Jessica Grose wrote in a November 2022 New York Times essay entitled "This Perfect Mother-Daughter Read Holds a Powerful Lesson for Fighting Antisemitism" "Number the Stars is particularly relevant to our family, and to this moment." As School Library Journal put it: "Readers are taken to the very heart of Annemaries experience, and, through her eyes, come to understand the true meaning of bravery."',
  },

  {
    //_id: '8',
    name: 'It',
    slug: 'it',
    category: 'Horror',
    image: '/images/p8.jpg',
    price: 79.43,
    countInStock: 10,
    rating: 5,
    numReviews: 10,
    author: 'Stephen King',
    publicationDate: 2017,
    edition: 'HODDER STOUGHTON',
    pageNumber: 1184,
    description: '"They float...and when youre down here with me, youll float, too." Derry, Maine is just an ordinary town: familiar, well-ordered for the most part, a good place to live. It is a group of children who see - and feel - what makes Derry so horribly different. In the storm drains, in the sewers, IT lurks, taking on the shape of every nightmare, each ones deepest dread. Sometimes is appears as an evil clown named Pennywise and sometimes IT reaches up, seizing, tearing, killing . . . Time passes and the children grow up, move away and forget. Until they are called back, once more to confront IT as IT stirs and coils in the sullen depths of their memories, emerging again to make their past nightmares a terrible present reality.',
},

{
  //_id: '9',
  name: 'Where the Crawdads Sing',
  slug: 'where-the-crawdads-sing',
  category: 'Literary Fiction',
  image: '/images/p9.jpg',
  price: 61.07,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Delia Owens',
  publicationDate: 2019,
  edition: 'LITTLE BROWN BOOKS GROUP',
  pageNumber: 384,
  description: 'For years, rumors of the "Marsh Girl" have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life - until the unthinkable happens. Perfect for fans of Barbara Kingsolver and Celeste Ng, Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder. Owens reminds us that we are forever shaped by the children we once were, and that we are all subject to the beautiful and violent secrets that nature keeps.',
},

{
  //_id: '10',
  name: 'Outlander',
  slug: 'outlander',
  category: 'Romance',
  image: '/images/p10.jpg',
  price: 61.07,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Diana Gabaldon',
  publicationDate: 1992,
  edition: 'Dell',
  pageNumber: 896,
  description: 'Unrivaled storytelling. Unforgettable characters. Rich historical detail. These are the hallmarks of Diana Gabaldons work. Her New York Times bestselling Outlander novels have earned the praise of critics and captured the hearts of millions of fans. Here is the story that started it all, introducing two remarkable characters, Claire Beauchamp Randall and Jamie Fraser, in a spellbinding novel of passion and history that combines exhilarating adventure with a love story for the ages. Scottish Highlands, 1945. Claire Randall, a former British combat nurse, is just back from the war and reunited with her husband on a second honeymoon when she walks through a standing stone in one of the ancient circles that dot the British Isles. Suddenly she is a Sassenach--an "outlander"--in a Scotland torn by war and raiding clans in the year of Our Lord . . . 1743. Claire is catapulted into the intrigues of a world that threatens her life, and may shatter her heart. Marooned amid danger, passion, and violence, Claire learns her only chance of safety lies in Jamie Fraser, a gallant young Scots warrior. What begins in compulsion becomes urgent need, and Claire finds herself torn between two very different men, in two irreconcilable lives.',
},

{
  //_id: '11',
  name: 'Animal Farm',
  slug: 'animal-farm',
  category: 'Satire',
  image: '/images/p11.jpg',
  price: 19.00,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'GEORGE ORWELL',
  publicationDate: 2004,
  edition: 'Signet',
  pageNumber: 144,
  description: 'Since its publication fifty years ago, "Animal Farm" has become one of the most controversial books ever written. It has been translated into seventy languages and sold millions of copies throughout the world. This edition is being published to commemorate the fiftieth anniversary of its original U.S. publication. It features 100 full-color and halftone illustrations by world-renowned artist Ralph Steadman. As vital and relevant as it was fifty years ago, "Animal Farm" is a devastating satire of the Soviet Union by the man V. S. Pritchett called "the conscience of his generation." A fable about an uprising of farm animals against their human masters, it illustrates how new tyranny replaces old in the wake of revolutions and power corrupts even the noblest of causes. This anniversary edition includes Orwells proposed but unpublished preface to the original edition and his preface to the 1947 Ukranian edition. These appendices evoke the historical context in which Orwell conceived and wrote his classic novel.',
},

{
  //_id: '12',
  name: 'Dune',
  slug: 'sune',
  category: 'Science Fiction',
  image: '/images/p12.jpg',
  price: 67.19,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Frank Herbert',
  publicationDate: 2010,
  edition: 'PENGUIN PUTNAM',
  pageNumber: 896,
  description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the "spice" melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.... When House Atreides is betrayed, the destruction of Pauls family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad Dib, he will bring to fruition humankinds most ancient and unattainable dream. A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.',
},

{
  //_id: '13',
  name: 'The Martian',
  slug: 'the-martian',
  category: 'Thriller',
  image: '/images/p13.jpg',
  price: 61.07,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Andy Weir',
  publicationDate: 2021,
  edition: 'Ballantine Books',
  pageNumber: 480,
  description: 'Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, hes sure he ll be the first person to die there. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that hes alive--and even if he could get word out, his supplies would be gone long before a rescue could arrive. Chances are, though, he wont have time to starve to death. The damaged machinery, unforgiving environment, or plain-old "human error" are much more likely to kill him first. But Mark isnt ready to give up yet. Drawing on his ingenuity, his engineering skills--and a relentless, dogged refusal to quit--he steadfastly confronts one seemingly insurmountable obstacle after the next. Will his resourcefulness be enough to overcome the impossible odds against him?',
},

{
  //_id: '14',
  name: 'The Giver',
  slug: 'the-giver',
  category: 'Utopian Fiction',
  image: '/images/p14.jpg',
  price: 48.83,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Lois Lowry',
  publicationDate: 2014,
  edition: 'Harper Collins Childrens Books',
  pageNumber: 240,
  description: 'It is the future. There is no war, no hunger, no pain. No one in the community wants for anything. Everything needed is provided. And at twelve years old, each member of the community has their profession carefully chosen for them by the Committee of Elders. Twelve-year old Jonas has never thought there was anything wrong with his world. But from the moment he is selected as the Receiver of Memory, Jonas discovers that their community is not as perfect as it seems. It is only with the help of the Giver, that Jonas can find what has been lost. And it is only through his personal courage that Jonas finds the strength to do what is right... The Giver is the award-winning classic of bravery and adventure that has inspired countless dystopian writers as the forerunner of this genre.',
},

{
  //_id: '15',
  name: 'Little House in the Big Woods',
  slug: 'little-house-in-the-big-woods',
  category: 'Western Fiction',
  image: '/images/p15.jpg',
  price: 66.17,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Laura Ingalls Wilder',
  publicationDate: 2008,
  edition: 'Harpercollins',
  pageNumber: 256,
  description: 'Little House in the Big Woods takes place in 1871 and introduces us to four-year-old Laura, who lives in a log cabin on the edge of the Big Woods of Wisconsin. She shares the cabin with her Pa, her Ma, her sisters Mary and Carrie, and their lovable dog, Jack. Pioneer life isnt easy for the Ingalls family, since they must grow or catch all their own food as they get ready for the cold winter. But they make the best of every tough situation. They celebrate Christmas with homemade toys and treats, do their spring planting, bring in the harvest in the fall, and make their first trip into town. And every night, safe and warm in their little house, the sound of Pas fiddle lulls Laura and her sisters into sleep. The nine books in the timeless Little House series tell the story of Lauras real childhood as an American pioneer, and are cherished by readers of all generations. They offer a unique glimpse into life on the American frontier, and tell the heartwarming, unforgettable story of a loving family.',
},

{
  //_id: '16',
  name: 'The Things We Cannot Say',
  slug: 'the-things-we-cannot-say',
  category: 'Womens Fiction',
  image: '/images/p16.jpg',
  price: 94.80,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Kelly Rimmer',
  publicationDate: 2019,
  edition: 'Graydon House',
  pageNumber: 432,
  description: 'Now a New York Times bestseller From the author of Truths I Never Told You and Before I Let You Go, Kelly Rimmers powerful WWII novel follows a womans urgent search for answers to a family mystery that uncovers truths about herself that she never expected. "Kelly Rimmer has outdone herself. I thought that Before I Let You Go was one of the best novels I had ever read...If you only have time to read one book this year The Things We Cannot Say should be that book. Keep tissues handy."--Fresh Fiction "Fans of The Nightingale and Lilac Girls will adore The Things We Cannot Say." --Pam Jenoff, New York Times bestselling author In 1942, Europe remains in the relentless grip of war. Just beyond the tents of the Russian refugee camp she calls home, a young woman speaks her wedding vows. Its a decision that will alter her destiny...and its a lie that will remain buried until the next century. Since she was nine years old, Alina Dziak knew she would marry her best friend, Tomasz. Now fifteen and engaged, Alina is unconcerned by reports of Nazi soldiers at the Polish border, believing her neighbors that they pose no real threat, and dreams instead of the day Tomasz returns from college in Warsaw so they can be married. But little by little, injustice by brutal injustice, the Nazi occupation takes hold, and Alinas tiny rural village, its families, are divided by fear and hate. Then, as the fabric of their lives is slowly picked apart, Tomasz disappears. Where Alina used to measure time between visits from her beloved, now she measures the spaces between hope and despair, waiting for word from Tomasz and avoiding the attentions of the soldiers who patrol her parents farm. But for now, even deafening silence is preferable to grief. Slipping between Nazi-occupied Poland and the frenetic pace of modern life, Kelly Rimmer creates an emotional and finely wrought narrative. The Things We Cannot Say is an unshakable reminder of the devastation when truth is silenced...and how it can take a lifetime to find our voice before we learn to trust it.',
},


{
  //_id: '17',
  name: 'Fault in Our Stars',
  slug: 'fault-in-our-stars',
  category: 'Young Adult',
  image: '/images/p17.jpg',
  price: 54.95,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'John Green',
  publicationDate: 2013,
  edition: 'PUFFIN',
  pageNumber: 336,
  description: 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazels story is about to be completely rewritten. Insightful, bold, irreverent, and raw, `The Fault in Our Stars` is award-winning author John Greens most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love. This book comes from the `New York Times` bestselling author of `Looking for Alaska`, `An Abundance of Katherines`, `Paper Towns` and - with David Levithan - Will Grayson, Will Grayson. John Green has over 1.2 million Twitter followers, and almost 700,000 subscribers to Vlogbrothers, the YouTube channel he created with his brother, Hank. `The Fault in Our Stars` will capture a crossover audience in the same vein as Zadie Smith, David Nicholls One Day and Before I Die by Jenny Downham. Electric ...Filled with staccato bursts of humor and tragedy.` (`Jodi Picoult`). A novel of life and death and the people caught in between, The Fault in Our Stars is John Green at his best. You laugh, you cry, and then you come back for more (Markus Zusak, author of The Book Thief). John Green is an award-winning, New York Times bestselling author whose many accolades include the Printz Medal, a Printz Honor, and the Edgar Award. With his brother, Hank, John is one half of the Vlogbrothers (youtube.com/vlogbrothers), one of the most popular online video projects in the world. You can join Johns 1.2 million followers on Twitter (@realjohngreen) or visit him online at johngreenbooks.com and fishingboatproceeds.tumblr.com. John lives with his wife and son in Indianapolis, Indiana.',
},

{
  //_id: '18',
  name: 'The Immortal Life of Henrietta Lacks',
  slug: 'the-immortal-life-of-henrietta-lacks',
  category: 'Biography',
  image: '/images/p18.jpg',
  price: 116.15,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Rebecca Skloot',
  publicationDate: 2011,
  edition: 'Crown Publishing Group (ny)',
  pageNumber: 400,
  description: 'Acclaimed author Skloot brilliantly weaves together the story of Henrietta Lacks--a woman whose cells have been unwittingly used for scientific research since the 1950s--with the birth of bioethics, and the dark history of experimentation on African Americans.',
},

{
  //_id: '19',
  name: 'Mastering the Art of French Cooking',
  slug: 'mastering-the-art-of-french-cooking',
  category: 'Cookbooks',
  image: '/images/p19.jpg',
  price: 275.40,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Julia Child',
  publicationDate: 2001,
  edition: 'Knopf Publishing Group',
  pageNumber: 752,
  description: 'For this special edition, Julia Child has written a new Introduction that recalls the nascent food scene in America at the time of the books original publication. Forty years ago, "Mastering the Art of French Cooking" ignited Americas passion for good food, and brought that food into our homes. This new edition promises to continue the excitement. 100 illustrations. For over fifty years, New York Times bestseller Mastering the Art of French Cooking has been the definitive book on the subject for American readers. Featuring 524 delicious recipes, in its pages home cooks will find something for everyone, from seasoned experts to beginners who love good food and long to reproduce the savory delights of French cuisine, from historic Gallic masterpieces to the seemingly artless perfection of a dish of spring-green peas. Here Julia Child, Simone Beck, and Louisette Bertholle break down the classic foods of France into a logical sequence of themes and variations rather than presenting an endless and diffuse catalogue of dishes. Throughout, the focus is on key recipes that form the backbone of French cookery and lend themselves to an infinite number of elaborations--bound to increase anyones culinary repertoire. With over 100 instructive illustrations to guide readers every step of the way, Mastering the Art of French Cooking deserves a place of honor in every kitchen in America.',
},

{
  //_id: '20',
  name: 'The Diary of a Young Girl',
  slug: 'the-diary-of-a-young-girl',
  category: 'Memoir and Autobiography',
  image: '/images/p20.jpg',
  price: 44.58,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Anne Frank',
  publicationDate: 1997,
  edition: 'Bantam',
  pageNumber: 400,
  description: 'Anne Franks extraordinary diary, written in the Amsterdam attic where she and her family hid from the Nazis for two years, has become a world classic and a timeless testament to the human spirit. Now, in a new edition enriched by many passages originally withheld by her father, readers meet an Anne more real, more human, and more vital than ever. Discovered in the attic in which she spent the last years of her life, Anne Franks remarkable diary has since become a world classic--a powerful reminder of the horrors of war and an eloquent testament to the human spirit. In 1942, with Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, they and another family lived cloistered in the "Secret Annex" of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and amusing, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.',
},

{
  //_id: '21',
  name: 'Eat, Pray, Love',
  slug: 'Eat,-Pray,-Love',
  category: 'Travel',
  image: '/images/p21.jpg',
  price: 61.07,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Elizabeth Gilbert',
  publicationDate: 2007,
  edition: 'Bloomsbury Publishing',
  pageNumber: 384,
  description: 'Its 3 a.m. and Elizabeth Gilbert is sobbing on the bathroom floor. Shes in her thirties, she has a husband, a house, theyre trying for a baby - and she doesnt want any of it. A bitter divorce and a turbulent love affair later, she emerges battered and bewildered and realises it is time to pursue her own journey in search of three things she has been missing: pleasure, devotion and balance. So she travels to Rome, where she learns Italian from handsome, brown-eyed identical twins and gains twenty-five pounds, an ashram in India, where she finds that enlightenment entails getting up in the middle of the night to scrub the temple floor, and Bali where a toothless medicine man of indeterminate age offers her a new path to peace: simply sit still and smile. And slowly happiness begins to creep up on her.',
},

{
  //_id: '22',
  name: 'Ill Be Gone in the Dark',
  slug: 'I-ll-be-gone-in-the-dark',
  category: 'True Crime',
  image: '/images/p22.jpg',
  price: 67.19,
  countInStock: 10,
  rating: 5,
  numReviews: 10,
  author: 'Michelle Mcnamara',
  publicationDate: 2019,
  edition: 'FABER & FABER',
  pageNumber: 368,
  description: 'The masterful true crime account of the Golden State Killer - the serial rapist turned murderer who terrorised California for over a decade - from the late Michelle McNamara. Ill Be Gone in the Dark offers a unique snapshot of suburban West Coast America in the 1980s, and a chilling account of the wreckage left behind by a criminal mastermind. It is also a portrait of one womans obsession and her unflagging pursuit of the truth, three decades later, in spite of the personal cost. Updated with material which takes in the extraordinary events that followed its initial publication, Michelle McNamaras first and last book is a contemporary classic - humane, haunting and heroic.',
},

    ],
};

export default data;