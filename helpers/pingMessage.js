function get(ping, context) {
    // base messages
    let messagesList = [
        "ping! wait, no, that's not right",
        "you'd think i'd be faster than",
        "weeee",
        "so... how's your day?",
        "is this thing on?",
        "isn't ping pong supposed to have a ball?",
        "if you can read this, it means i'm alive! surprising",
        "drumroll please...",
        "why did the bot cross the road? to respond to a ping",
        "great argument, however:",
        "i was gonna say something smart but i forgot",
        "would you say this is fast or slow? i don't know anymore",
        "i'm not lazy, i'm just conserving energy",
        "how do you think i would get faster than",
        "if i had a nickel for every ping i've dealt with, i'd have at least a few dollars",
        "ping is a funny word if you say it enough times",
        context.user ? `<@${context.user.id}>! ha, i pinged you back` : `i'd ping you back, but apparently you aren't real`,
        "hm? sorry, i was daydreaming about faster response times",
        "you know what? because i don't",
        '`"webejebe" //what?`',
        "sometimes I wonder if I should just become a toaster instead of a bot",
        "do you think the ping is the good guy or the bad guy?",
        "ehhh, this ping could be better, but it could also be worse. kind of like life, huh?", // damn (me too)
        "these ping messages are like a box of chocolates, you never know what you're gonna get",
        "look! a shooting star",
        "`throw new Error('ping message not found'); // just kidding, but wouldn't that be funny?`",
        "what do you think bots think about while they idle?",
        "hold on, my internet is potato",
        "if you stare at the ping long enough, does it stare back?",
        "i'm pretty sure my ping is on a coffee break",
        "ping processed. not sure what to do next, though",
        "what if the real ping was... uhhh... pong? no, that doesn't sound right",
        "i've seen faster pings from a dial-up connection",
        ":cat:",
        "insert elevator music",
        "please hold",
        `what if i told you my ping was actually ${ping + 1}ms? would you still trust me?`,
        `you know, they say that a watched ping never boils. or was it water? i forget`,
        "if you could bottle this ping, would you drink it? actually, on second thought, don't do that",
        "you know, for a bot, i sure do have a lot of existential crises about my ping",
        "have you tried... turning it off and on again? no, not me, the ping!",
        "hola, ¿comó estas? wait, wrong language",
        "i could really go for some pizza right now",
        "zzzzzzzz",
        "aw dang it",
        "creating unique pong messages since 2025",
        "well well well",
        "the mitochondria is the powerhouse of the cell",
        "help, my text is turning blue for no reason",
        `there's really no limit to how long these response messages can be... if you accept the definition that a "word" is some letters surrounded by a gap, then "xnopyt", "aaaaaaajjjjjjjjj" and "hrrkrkrkrwpfrbrbrbrlablblblblblblwhitoo'ap" are all words, despite being pretty much meaningless`,
        "sometimes i think... but then i forget",
        "noted",
        "`await interaction.reply(pingmessage)`",
        "please do not the pong (but please the ping)",
        `truely the ping of all time`,
        "i almost lost you, ping messages...",
        "i never thought of myself as a ping machine",
        "world class ping pong tournament",
        "ping ingp ngpi gpin ping",
        "what other context do you need?",
        "this ping wasn't sponsored, aren't you glad",
        "ping detected, pong deployed",
        "this ping message might be referencing something, it might not. who knows?",
        "i'm having a field day writing these",
        "this is a ping message",
        "splash text? no, ping message",
        "two of them (two of them)",
        "isn't history so weird?",
        "that ping just got sent to my computer and i'm sending this back",
        "my problems persist despite my pong",
        "undefined",
        "ping pong ping pong ping pong, that's all i know",
        "this ping message is dedicated to... uhhh... you!",
        "ping pong, the game of royalty",
        "what if i was just a pigment- i mean, a figment of your imagination?",
        "i dropped my paddle, sorry",
        "ping pong is a game of skill and strategy, but this ping is just a game of chance",
        "whoa. spooky",
        "can you imagine if i wasn't a bot? that'd be weird",
        "this ping message is special! only because i said so, though",
        "please roll a d20 to determine the outcome of this ping",
        "mrow~ i mean, what?",
        "never soeak again.",
        "what would you do if i stole your bnuuy?",
        "gupdate",
        ":woomy:",
        "i'm not a ping machine, i'm a ping artist",
        "ping messages are like snowflakes, no two are exactly alike... except for the ones that are",
        "i say! this is a fine ping message indeed",
        "writing these is an art form. you can't change my mind",
        "has anyone ever tried cooking cookies and baking bacon? i think that would taste decent",
        "hold on, pong is still cooking",
        "i put this ping in the microwave instead of my food, sorry about that",
        "please don't die, i think that'd be pretty bad",
        "this ping message is brought to you by the letter P (because it kind of looks like a ping pong paddle)",
        "knock knock!",
        "to be continued...",
        "that number isn't left, it's right -->",
        "that's a lot of m's! oh, milliseconds, whoops",
        ping > 0 ? `${"m".repeat(ping)}` : "there's no m's? what?",
        "herbs... they're pretty cool, huh",
        "i should try to do a pong without using th sixth lttr of th alphabt",
        "wow these messages devolved really fast",
        "i'd give you a compliment but that's not my job, so here's a pong instead",
        "are you fishing for a certain ping message? sorry, this isn't the one",
        "pin gpi ngp ing",
        "why reinvent the wheel when you could reinvent /ping",
        "do you think /ping will ever get a crossover episode?",
        "this statement isn't false. wait, no, it is. isn't it? i'm just confusing myself now",
        "my ping? probably more than 1 idk",
        "i'd give you a cool statistic, but i'm not a math bot",
        "you + command = ping?",
        "pmg? png? pings? pong? what?",
        "buffering like old dial-up internet",
        "hopefully you aren't scrolling these messages like you would TikTok, that's unhealthy",
        "go take a break! or don't, i can't tell you what to do",
        ":pattheyou:",
        "deja vu",
        "Empty String",
        "you could say this ping is... well, i don't actually know what you could say about it",
        "\\*checks notes\\* uhhh... pong..?",
        "haiiii hellooo i'm so happy to see you",
        `my coder told me to tell you that they "are NOT a furry femboy", whatever that means`,
        "ping... ping... ping... pong!",
        "let me find a ping message for you...",
        "hot tip: this is NOT a cold tip, you can feel the heat", // kind of a reference to phigros
        "this ping message reminds me of the last time i saw this ping message",
        "this ping message is only found in v0.2!",
        "i don't think these ping messages are particularly useful. right?",
        `it's gonna say "(${ping}ms)" i just know it...`,
        "clicking the button gives you pts!",
        "did you know i run on discord.js?",
        "sqrt(-1) don't know if this is how you do math",
        "would you still love me if i were run off of solar power?",
        "but i don't have 3 trillion dollars...",
        "papepipopu",
        "i'm not radioactive, just reactive (to pings)",
        "on an unrelated note, wikipedia is pretty cool",
        "waiter waiter more ping messages please",
        "english is really hard, cut me some slack",
        "open source on [github](<https://github.com/MonkeysWithPie/pingcremental>)? neat!",
        "go figure",
        "coming soon to a society near you:",
        "this is a ping message, not a ping pong message",
        "happy holidays! which one? idk you pick",
        "happy birthday!",
        "was that fast? i blinked and missed it",
        "do bots dream of electric pings?",
        "i'd apologize for the delay, but i don't feel guilt. i'm a bot",
        "you ever just... ping?",
        "if this were a race, i wouldn't be winning",
        "fun fact: this message contains exactly one ping",
        "this is your sign to /ping again",
        "have you considered that maybe the ping is trying its best?",
        "wait hold on let me check my... oh wait, nevermind, here you go",
        "i'm not sure if this ping is fast or if you're just really patient",
        "ping generated successfully! emotional damage pending.",
        "my last braincell just processed that ping",
        "warning: ping may contain traces of nuts",
        "i was buffering... emotionally",
        "some pings are born great, others have greatness /pinged upon them",
        "pinging you softly, with this pong",
        "if pings could talk, they'd probably be like 'ow'",
        "you want another ping? say the magic word. (it's /ping)",
        "i've run the numbers and... yeah it's a ping",
        "i accidentally sent this through australia. oops",
        "statistics show this is one of the ping messages ever",
        "wait is this one of the funny ones? i forgot to check",
        "ping responsibly",
        "it's not a bug, it's a ping feature",
        "brb reinventing the concept of latency",
        "was the ping good? define 'good'",
        "this ping was handcrafted with 100% organic code",
        "it's not lag, it's dramatic effect",
        "ping processed. i hope you're happy",
        "one ping closer to... something? i forgot",
        "ping: it's what's for dinner. no wait—",
        "you pinged, i ponged, we vibed",
        "do not consume this ping. for external use only",
        "your daily dose of milliseconds, served fresh",
        "if pings could talk, they'd probably ask for a union",
        "ping powered by 3 hamsters and a dream",
        "hello yes this is dog ping department how may i help?",
        "this ping was built different, but not necessarily better",
        "wait, what if we /ping'd inside a /ping? no, too dangerous",
        "this message is not canon",
        "ping logic has left the building",
        "i gave this ping a top hat. it's classy now",
        "tried to decode this ping and it just meowed at me",
        "you ever feel like a ping in a pong world?",
        "everything's fine. ping-wise. emotionally? different story.",
        "this ping was forged in the fires of Mount Lag",
        "🛸 this ping message has been abducted by aliens",
        "breaking news: local ping bot goes rogue, spams messages",
        "i tripped over the stack trace and spilled ping everywhere",
        "the ping is an illusion, lag is real",
        "have any ideas? try </feedback submit:1363002827664003284>!",
        "did you know? this is my current ping:",
        "ping pong? more like... more like ping wrong",
        "just another friendly neighborhood ping",
        "thanks for waiting! or... not waiting. either way",
        "this ping may contain small parts. not for children under 3",
        "hello? yes, this is ping. pong is busy right now",
        "did you know: pings can jump up to 3 feet in the wild (source: trust me bro)",
        "you pinged me... now what?",
        "certified fresh ping™",
        "this ping is running on hopes and dreams",
        "lag? never heard of her",
        "you summoned a ping, but at what cost?",
        "bot moment achieved",
        "who needs meaning when you have milliseconds",
        "ping pong bing bong",
        "this is one of the pings of all time",
        "i ping, therefore i am",
        "behold: one (1) ping",
        "one of them ()",
        `every click brings you closer to enlightenment. or carpal tunnel. it's a toss-up.`,
        `thats a few pings!`,
        "pingn't. wait, nope",
        'you just pinged. pung?',
        "shoutout to gay foxgirls!", //idk if you want to make that gay foxgirls but
        "hey, its not a 404.",
        "this ping message was brought to you by... uh, me. hi.",
        "just a humble ping doing its best.",
        "this ping was not sponsored.",
        "beep boop im a ping",
        "bot buffering",
        "what if we're all just living in a pingulation- i mean, a simulation?",
        "congrats! you've gotten this ping message.",
        "my first instinct on what to write here is just \"mrrow\"",
        "mrrow", //:gladeline:
        "this ping is grumpy. don't ask how i know that.",
        "hi, its me, im the bot",
        "this message was written by a fox desperately trying to be funny.",
        "ping provided by 100% genuine bot energy.",
        "bot-generated, user-approved (hopefully).",
        "the ping factory is working overtime.",
        "this response brought to you by the same bot who sends all the other ones.",
        "warning: this ping message may contain self-awareness.",
        "this is technically content.",
        "fun fact: i thought about making this message cooler, but i didn't",
        `this message was handcrafted by my ${ping} braincells`,
        "i put this message together at the last second. nailed it",
        "no one asked for this ping message, but here it is",
        "boop",
        "back already? here's another ping",
        "you should check out our </ping:1360377407109861647> command at some point",

        //ok, these next ones are kinda weird but they're fun, so here
        ping < 30 ? "whoa, that's fast! zoom zoom!" : 
        ping < 50 ? "solid ping. not bad, not bad." : 
        ping < 80 ? "acceptable ping levels achieved." : 
        "could be worse, honestly.",

        "good vibe pings only.",
        "ping has arrived safely.",
        "ugh, another ping? fine.",
        "this better be important.",
        "ping sent. don't expect enthusiasm every time.",
        "i was taking a nap, but sure, here's your ping.",
        "again? really? okay, okay… ping.",
        "you just had to ping me, didn't you?",
        "here's your precious ping. now leave me alone.",
        "fine. ping. happy now?",
        "this is my 'sending ping but sighing deeply' message.",
        "ping delivered with mild resentment.",
        "pong :3", //i think its funny to sometimes be given this one and not know if it was the 15% chance or one random one
        "this ping was sent! i think.",
        "what does the fox say?",
        "*happy cat noises\\*",
        "boo! (yes im scary)",
        "rhfahfkfhffhfkakjd",
        "guh",
        "this is a ping message (i think)",


        // these are all references
        "i would never give you up. what? what song?",
        "BEHOLD! THE POWER OF A... ping bot?",
        "i'm not fueled on blood, don't worry",
        "are you sure it's not just a strawberry with shiny spray paint?",
        "i... am NOT steve",
        "what? why would a hex make me gay?",
        "but nobody came",
        "wubbadubadub is that true?",
        "hey look! diamonds!",
        "cleared 40 LINES in",
        "i saw a lucky slime earlier but i didn't bring any chickens",
        "i hope i don't have an extreme fever, that'd probably be bad",
        'what is a "puro"?',
        "HOW many cookies?! why do you need that many?",
        "there is a smiley face trying to kill me. help",
        "check steam",
        "i found these funny butterfly wings and now i can jump twice",
        "silksong is real",
        "don't forget to take a Short Hike every now and then",
        "'One day, somewhere in the future, my work will be quoted!' - minecraft splash screen",
        context.user ? `${context.user.username.toUpperCase()} IS YOU AND WIN` : "EMPTY IS YOU AND DEFEAT",
        "somewhere, it's raining cats",
        "shouldn't have gone to med school",
        "i just climbed on a plant and it ate me alive. makes sense",
        "the fire and the ice collided with each other and now i'm dead",
        "NO ONE YES PING",
        "ping-spin triple",
        "this ping died 48 times on the way here",
        "you've got this! unless the ping says otherwise",
        "ping retrieved. it's not the summit, but close enough",
        "i dashed right into the lag crystal, sorry",
        "if this ping feels hard, just breathe. and try again",
        "one ping at a time, like climbing a mountain",
        "did that ping just... launch me into space?",
        "you're filled with determination, and ",
        "the ping understands you. it refuses to fight",
        "* you feel your latency crawling on your back",
        "i spared the ping. it didn't spare me",
        "* the ping is sparing you. mercy?",
        "SOUL not required, just milliseconds",
        "hornet would've dodged this ping",
        "this lag is a test of resolve, little bug",
        "ping is resting at a bench",
        "the ping is a lie",
        "now you're pinging with portals",
        "wait, how did this ping get Xmult?",
        "ping recruited 1 new millisecond",
        "this ping feels like a big shot",
        "Susie tried to block the ping, but it slipped past",
    ]

    // only if player was clicking (can't appear with /ping, only on button press)
    if (context.score) {
        if (Math.random() * 100 <= 7) messagesList = [
            `what if you had ${context.score + 182} pts? or ${context.score + 31415}? no, that's unreasonable`,
            `i don't know if i made this clicking too addictive. sorry in advance`,
            `number go up!`,
            context.score >= 1e6 ? `you have... a megapt? why?` : `did you know 1,000,000 pts is called a megapt?`,
            `if you keep clicking like this, you'll be the next clicker extraordinaire`,
            "i'm glad it's a button and not a command",
            context.clicks >= 150 ? `there's no... upgrades...? oh, wait` : `there's no upgrades for this, by the way`,
            `hopefully this ping isn't too much to deal with while you click away`,
            `how come you like clicking this so much?`,
            `i mean, i get it, clicking can be fun, but don't you have other things to do? like sleep? eat?`,
            `careful, don't get carpal tunnel`,
            `try putting on some music and clicking to the beat`,
            `what if i turned the button blue, and it was a super ping?`,
            `you know, they say the more you click, the faster your ping gets (not scientifically proven)`,
            `maybe there's a secret ping dimention if you score high enough (but probably not)`,
            `i'm so glad they let you ping eternally`,
            `you're currently #4 in the world! just kidding, i don't actually know`,
            `do you actually care about my ping? or do you just want pts?`,
            context.clicks >= 100 ? `${context.clicks} is a pretty big amount of pings` : `you've pinged me ${context.clicks} times`,
            context.clicks >= 1000 ? `is the carpal tunnel setting in yet? with your ${context.clicks} pings?` : `you've pinged me ${context.clicks} times`,
            `points and pts are not the same, do NOT confuse them`,
            `you've got ${context.score} pts. now what?`,
            `at ${context.score} pts, you've officially out-clicked my expectations`,
            `what if i gave you ${context.score * 2} pts? no, i won’t, but what if`,
            `you've accumulated ${context.score} pts, which is like, a lot. probably`,
            context.score >= 1e5 ? `you have entered Ultra Ping Territory™` : `keep going. Ultra Ping Territory™ starts at 100,000 pts`,
            context.score >= 250000 ? `you now qualify for our totally imaginary platinum tier` : `click more. platinum tier requires 250k pts`,
            `based on your current score of ${context.score}, i diagnose you with: terminal pinging`,
            context.score >= 1e6 ? `thats like, more than a megapt` : `keep going! you're only ${1e6 - context.score} away from a megapt`,
            context.clicks >= 500 ? `you've clicked ${context.clicks} times. is your mouse okay?` : `you've clicked ${context.clicks} times. that's like, medium pinger level`,
            context.score % 1000 === 0 ? `your score is a very satisfying multiple of 1000. good job` : `your score isn’t divisible by 1000. i noticed`,
            `at this rate, you'll hit ${context.score + 10000} in no time. probably`,
            `fun fact: you've earned ${context.score} pts and not a single one was a tax write-off`,
            context.score >= 2e6 ? `two megapts? ok, now you're just showing off` : (context.score >=1e6? `approaching the legendary double megapt threshold...`:`you're approaching one megapt (probably)`),
            `click count: ${context.clicks}. you should probably stretch your fingers`,
        ]
    }

    // high ping, almost always shows
    if (ping >= 150 && Math.random() * 100 <= 75) messagesList = [
        `wuh oh`,
        `yikes`,
        `big number warning!`,
        `please someone fix my ping`,
        `this is how NOT to latency:`,
        `wait why is my ping`,
        `OH NO MY PING`,
        `thi-  lag i-  rea-        -ful`,
        `someone save me from`,
        `[Server/WARN] Can't keep up! Is the server overloaded? Running ${Math.round(ping / 20)} ticks behind, or`,
        `four hours later...`,
        `it hurts it hurts it hurts`,
        `uguuuu`,
        `quick! someone call tech support!`,
        `this ping just got run over by a data truck`,
        `you could toast bread faster than this`,
        `my ones and zeroes are crying`,
        `ping.exe has stopped responding`,
        `404: fast ping not found`,
        `i tried to ping but it tripped over a wire`,
        `is... is the internet okay?`,
        `packet delivery expected between 3-5 business days`,
        `the ping dimension is unstable`,
        "we've entered 'watching grass grow' territory",
        "ping so slow it's legally considered turn-based",
        "i sent the ping by carrier pigeon. it's on the way",
        "current ping: yes",
        "this ping could file its own taxes at this point",
        "you ever try to load a PNG file with this much ping?",
        "was that a timeout or just a nap?",
        "ping powered by a potato. a raw one",
        "ping is cooking. too bad it's burning",
        "warning: ping values approaching philosophical levels",
        `this ping got stuck in traffic`,
        `ping so slow, it's writing an apology letter`,
        `it's not a ping, it's a waiting game`,
        `someone call tech support. oh wait, that's me`,
        `lag is just unintentional suspense`,
        `this ping was handcrafted by a sloth`,
        `ping powered by dial-up nostalgia`,
        `the data packet took the scenic route`,
        `ping is still buffering... please wait`,
        `are you sure you're not on potato wifi?`,
        `this latency is measured in geological time now`,
        `ping is out for lunch. back soon?`,
        `by the time this ping finishes, Stardew crops will have regrown`,
        `warning: ping is thinking about life choices`,
        ping>=300?`ping is moving at glacial speeds, but it got here`:`okay, so like, its trying its best`,
        
    ]

    // 15% chance to get a regular flavored ping message, so it's not super uncommon
    if (Math.random() * 100 <= 15) {
        messagesList = [
            "pong :3"
        ]
    }

    // blue ping just spawned
    if (context.spawnedSuper) {
        messagesList = [
            `hey, look at that!`,
            `whoa... it's blue now!?`,
            `where did that thing come from`,
            `oooo shiny`,
            `[SUPER PING ACTIVATED]`,
            `did you know? that blue button will disappear if you don't click it`,
            `whoa! check it out! a blue thingymabob`,
            "what the blue?!",
            "ping just went ultra instinct",
            "limited edition ping moment detected",
            "you found the easter egg! kind of",
            "wow, this one's got sparkles",
            "🚨 BLUE PING SPOTTED. this is not a drill",
            "ping button just evolved into its final form",
            "did you see that sparkle? something's up...",
            "blue means go! or maybe... ping faster?",
            "blue ping = bonus vibes unlocked",
            "super ping detected, deploy maximum pong",
            "ping anomaly in sector 4!",
            "shiny ping! catch it!",
            "this one's got main character energy",
            "✨ behold, the rare and elusive blue ping",
            "blue ping sighted. everyone stay calm!",
            "you found the shiny one! quick, click before it vanishes",
            "it's blue, it's cool, it's limited time only (maybe)",
            "whoa! rare ping drop detected",
            "this ping rolled a natural 20 on sparkle",
            "super ping sighted — don't miss your chance!",
            "one blue ping appears. what will you do?",
            "super ping alert! this is not a drill!",
            "catch it quick before it despawns like your hopes and dreams",
            "ping anomaly confirmed. shiny variant detected.",
            "this ping radiates 'main character energy'",
        ]
    }

    // blue ping just clicked
    if (context.isSuper) {
        messagesList = [
            `that's a lot of \`pts\`!`,
            "whoa",
            "15x! that's a lot of x! i mean, `pts`",
            "isn't RNG just beautiful?",
            "lucky you!",
            "15x points?! i barely even wrote this message in time",
            "power overwhelming! (ping edition)",
            "RNGesus is smiling upon you",
            "that ping was juiced",
            "you clicked the blue ping. the ping clicked back",
            "you've achieved ping greatness",
            "i don't know what you did but it was awesome",
            "ping results: critical success",
            "beyond super. beyond pong. ultra",
            "super effective! 15x points hit!",
            "critical ping! multiplier activated!",
            "blue ping clicked. dopamine received.",
            "nice shot! jackpot ping confirmed",
            "super ping: deleted. points: multiplied.",
            "that click was legendary",
            "RNG gods smiled upon you this time",
            "15x multiplier? you're living the dream",
            "you just dealt 15x damage to the button. nice.",
            "your click was a direct hit!",
            "i didn't expect you to actually get it. but here we are.",
        ]
    }

    // rare messages (0.1% chance)
    if (Math.random() * 1000 <= 1 && !context.spawnedSuper) {
        messagesList = [
            "this one is rare. like, really rare. like, 0.1% chance rare. feel proud of yourself",
            "legend says only 0.1% sees this message. congrats, chosen one",
            "💫 this ping is ultra shiny, 0.1%! screenshot or it didn't happen",
            "you'll never see this 0.1% message again. or maybe you will. RNG is weird",
        ]
    }

    // bot just restarted
    if (ping === -1) {
        ping = "unknown "
        messagesList = [
            "i'm lost in cyberspace",
            "reality is collapsing, please try again later",
            "milliseconds? more like mystery seconds",
            "if i had a nickel for the amount of milliseconds in this ping, uhhhhhhhh",
            "ping has achieved enlightenment, sorry",
            "ping is sentient and i think is trying to kill me",
            "the universe stopped responding",
            "your packet got sent through a wormhole, maybe it'll make it back someday",
            "ping? what's a ping? where am i? what's happening?",
            "pingn't",
            "i don't think this is supposed to happen",
            "ping undefined. welcome to the void",
            "this ping went on vacation and never came back",
            "who needs time when you have mystery?",
            "404: ping is a philosophical construct now",
            "ping entered the quantum realm",
            "bot's back from the void. sorry for the infinite lag",
            "ping is currently on a spiritual journey",
            "reboot complete. ping is currently searching for itself",
            "millisecond value not found. please insert quarter",
            "we are currently experiencing a reality outage",
            "ping status: existential",
            "this ping defied the laws of time",
            "restart detected. where am i? who are you?",
            "ping momentarily ascended to a higher plane",
            "milliseconds? buddy, we're talking *eternities*",
            "reboot complete. reality questionable.",
            "ping lost in the reboot void",
            "bot restarted. ping still recalculating existence",
            "the bot has returned from the abyss. hello again.",
            "ping undefined. consciousness achieved.",
            "after a brief existential crisis, i'm back, kinda",
            "ping is searching for purpose after restart",
            "just woke up from maintenance mode. what year is it?",
            "restart successful. ping still unknown.",
            "the ping is confused and so am i",
            "the ping wandered off during the reboot. typical.",
            "rebooted, refreshed, still laggy",
            "ping momentarily became one with the universe",
        ]
    }

    let message = messagesList[Math.floor(Math.random() * messagesList.length)]; // pick a random one and return it

    return `${message} (${ping}ms)`
}

module.exports = get;
