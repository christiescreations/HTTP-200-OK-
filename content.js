/* =====================================================================
   YOUR CONTENT. This is the only file you need to edit for text.
   - Change any words between the quotes "..." or backticks `...`.
   - Keep the commas and brackets exactly where they are.
   - Open index.html in your browser to test before you upload anything.
   - Keep a backup copy of this file before every edit.
   ===================================================================== */

const SITE = {

  /* ---------------- POWLOSE'S LINES ---------------- */
  powlose: {
    welcome:  "I am Powlose. I will guide you through her work. What do you want to see?",
    again:    "Hello again. What do you want to see?",
    back:     "Back already? Pick another path.",
    sleeping: "Zzz... Powlose is asleep. Tap him, or give him a cookie, to wake him up.",
    wake:     "*yawn* It is night where you are, you know. Fine, I am up. What do you want to see?",
    sections: {
      about:      "Before advertising she dug through history and archaeology. I trained her to be the best strategist. She says it was her degrees. We disagree.",
      creative:   "Autumn is where her ideas fall into place. Campaigns, brands and concepts. I supervised, mostly while eating leaves.",
      analytical: "Welcome to the rainforest. Data grows thick in here. She finds the path through it. I find the snacks.",
      contact:    "Hire her. When she is employed, I get more cookies. That is the whole business case."
    },
    /* Cookie secrets. Add or remove lines. The cookie counter updates by itself. */
    cookies: [
      "Secret one: when she first met me I was three months old. Tiny, fragile and skinny. Look at me now.",
      "Secret two: my right ear is folded. I call it my signature.",
      "Secret three: that white mark on my forehead is my logo. I did not hire a designer."
    ],
    noMore: "That is all my secrets. More cookies, more secrets."
  },

  /* ---------------- ABOUT ME PAGE ----------------
     {{photo}} marks where the real photo of Powlose appears. Remove it to hide the photo. */
  about: {
    html: `
      <p>I'm CC, based in Toronto. I started in history and archaeology, which trained me to find the pattern inside a pile of sources. Now I use that on advertising and research problems.</p>
      <p>My long-term goal is strategy, and I want to start in account services.</p>
      {{photo}}
      <h2>Training</h2>
      <dl>
        <dt>Master of Arts, History</dt>
        <dd>Where the digging habit comes from.</dd>
        <dt>Post-Graduate Certificate, Research Analytics</dt>
        <dd>Humber Polytechnic, Dean's List.</dd>
        <dt>Post-Graduate Certificate, Advertising: Creative &amp; Digital Strategy</dt>
        <dd>Centennial College.</dd>
      </dl>
      <h2>Now</h2>
      <p>Library Outreach Coordinator at Digital Human Library, a Canadian edtech social enterprise. I do research and data collection there.</p>
      <h2>Languages</h2>
      <p>English, Hindi, Malayalam. Learning Swedish.</p>
    `
  },

  /* ---------------- CONTACT PAGE ---------------- */
  contact: {
    html: `
      <p>Open to account services, strategy, research and social analytics roles.</p>
      <dl>
        <dt>Email</dt>
        <dd><a href="mailto:you@example.com">you@example.com</a> (EDIT)</dd>
        <dt>LinkedIn</dt>
        <dd><a href="https://www.linkedin.com/" target="_blank" rel="noopener">Add your LinkedIn URL</a> (EDIT)</dd>
        <dt>Based in</dt>
        <dd>Toronto</dd>
      </dl>
    `
  },

  /* ---------------- THE TWO WORK AREAS ---------------- */
  creative:   { title: "Creative work",   intro: "Pick one to open the full piece." },
  analytical: { title: "Analytical work", intro: "Pick one to open the full piece." },

  /* ---------------- YOUR WORKS ----------------
     Each block is one work. To remove a work, delete its whole block { ... },
     To add one, copy a block, paste it, and change the words.
       group:  "Creative" or "Analytical"  (decides which area it lives in)
       slug:   unique, lowercase, hyphens, no spaces
       say:    optional line Powlose says when this work opens
       images: optional pictures. Put the files in a folder called images next to index.html.
       links:  optional buttons, for example a PDF or a video
     Lines starting with EDIT are placeholders for you to replace. */
  works: [
    {
      slug: "big-nap", group: "Creative", title: "The Big Nap", kind: "Campaign for McDonald's",
      role: "EDIT: your role",
      summary: "EDIT: 2 or 3 sentences. The brief, the insight, the idea, the result.",
      details: [["Brief","EDIT"],["Insight","EDIT"],["Idea","EDIT"],["Outcome","EDIT"]]
      /* Example of pictures and buttons, remove the comment marks to use them:
      , say: "EDIT: something Powlose says about this one"
      , images: [
          { src: "images/big-nap-1.jpg", alt: "Describe the picture", caption: "Optional caption" },
          { src: "images/big-nap-2.jpg", alt: "Describe the picture", caption: "" }
        ]
      , links: [ { label: "Download the deck (PDF)", url: "images/big-nap.pdf" } ]
      */
    },
    {
      slug: "clear-current", group: "Creative", title: "Clear Current", kind: "Ocean-plastics brand",
      role: "EDIT: your role",
      summary: "EDIT: 2 or 3 sentences about the brand and what you built.",
      details: [["Problem","EDIT"],["Brand idea","EDIT"],["Outcome","EDIT"]]
    },
    {
      slug: "okai", group: "Creative", title: "OKAI", kind: "Brand campaign",
      role: "Strategy, concept development and copywriting",
      credit: "Visual execution and copywriting by Dominikus Donny.",
      summary: "EDIT: 2 or 3 sentences about the brand and the campaign idea.",
      details: [["Strategy","EDIT"],["Concept","EDIT"],["Outcome","EDIT"]]
    },
    {
      slug: "scraper", group: "Analytical", title: "Scraper", kind: "Data collection tool",
      role: "EDIT: your role",
      summary: "EDIT: what it collects, from where, and what you used it for.",
      details: [["Tools","EDIT"],["What it does","EDIT"],["Result","EDIT"]]
    },
    {
      slug: "amazon-prime", group: "Analytical", title: "Amazon Prime analysis", kind: "Power BI dashboard",
      role: "EDIT: your role",
      summary: "EDIT: the question you asked, the data, and what the dashboard showed.",
      details: [["Question","EDIT"],["Data","EDIT"],["Findings","EDIT"]]
    },
    {
      slug: "ad-click-predictor", group: "Analytical", title: "Ad Click Predictor", kind: "Random Forest model with a Gradio interface",
      role: "EDIT: your role",
      summary: "EDIT: what it predicts, how well it performs, what it tells an advertiser.",
      details: [["Model","Random Forest"],["Interface","Gradio"],["Result","EDIT"]]
    },
    {
      slug: "ad-maker", group: "Analytical", title: "Ad Maker", kind: "Streamlit app",
      role: "EDIT: your role",
      summary: "EDIT: what the app generates and who it is for.",
      details: [["Tools","Streamlit"],["What it does","EDIT"]]
    }
  ]
};
