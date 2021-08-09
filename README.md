# hackathon

Inspiration: 
37% of youth between 12 and 17 years of age have reported being bullied online at least once. Yet, only 1 in 10 of them have informed a trusted adult about it. Seeing as 
many children are already going to be using the internet and social media from a young age, we might as well make it as safe as possible. With this chrome extension, we 
wanted to provide a one-click access to mental health services for children and anti-cyberbullying software.

What it does: 
Just turn on the FroggyFriend feature and you will get a popup menu in the top right corner of your browser where you can choose one of three quick help options: the 
KidsHelpPhone main page, phone contact, or a live-chat feature. The extension also protects children from profane language, it analyzes the text on a webpage and replaces 
hateful words with asterisks.

How we built it: 
We started by making a manifest.json file to host the chrome extension, using the Chrome extension API. Then, we used HTML and CSS to design a popup menu, you can click on 
the extension icon in the top right and you have 3 quick access buttons to mental health resources for kids. We used an online resource called Font Awesome to extract fun 
icons and our signature logo: the frog. With JavaScript, we wrote a content script to extract text from the HTML DOM, to analyze extracted text for profanity using Google’s 
list of bad words, and then censor them.
