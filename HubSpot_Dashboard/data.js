// data.js - Holds all the data for our modular dashbaord
// Explained simply like teaching a 6-year-old using lemonade stand analogies!

const hubData = {
    roadmap: {
        title: "Learning Roadmap 🗺️",
        subtitle: "The Master Curriculum - Follow this step-by-step to become a HubSpot expert instantly.",
        color: "#10b981", // Green
        sections: [
            {
                type: 'module',
                title: "Module 1: The Foundation (CRM & Sales)",
                duration: "Days 1-2",
                practiceGuide: "Go to CRM > Contacts > Add yourself as a Contact. Go to CRM > Deals > Create a Deal ('Lemonade Sale'). Drag the card and move it to the 'Closed Won' column.",
                items: [
                    "Understand what a 'Contact' and 'Company' record is.",
                    "Learn to manually log an email or call on a Contact record.",
                    "Create a custom property (e.g., 'Favorite Lemonade Flavor').",
                    "Build a simple Deal Pipeline."
                ]
            },
            {
                type: 'module',
                title: "Module 2: Attracted the Crowd (Marketing)",
                duration: "Days 3-4",
                practiceGuide: "Go to CRM > Segments (Lists) to make an Active List of anyone named 'John'. Go to Marketing > Email > Create an email from a template, and send a test email to yourself.",
                items: [
                    "Create a Static List and an Active List.",
                    "Build a simple Landing Page or Form to collect emails.",
                    "Design your first Marketing Email using drag-and-drop.",
                    "Understand Email Analytics (Open rate, click rate)."
                ]
            },
            {
                type: 'module',
                title: "Module 3: The Magic Engine (Automations)",
                duration: "Days 5-6",
                practiceGuide: "Go to Automations > Workflows. Build a Workflow: Trigger = 'Form Submission', Action = 'Send Welcome Email' + 'Create Task'.",
                items: [
                    "Understand what an 'Enrollment Trigger' is.",
                    "Learn 'If/Then' branching logic.",
                    "Automate a manual Sales task (like creating a reminder ticket).",
                    "Create a Lead Nurturing Email Sequence."
                ]
            },
            {
                type: 'module',
                title: "Module 4: Happy Customers (Service & CMS)",
                duration: "Day 7",
                practiceGuide: "Go to CRM > Tickets. Create a support ticket manually, close it, and build a simple survey (under Service > Feedback Surveys).",
                items: [
                    "Set up a Support Ticket Pipeline.",
                    "Create and manage Tickets from customers.",
                    "Understand what a knowledge base is.",
                    "Learn basic CMS drag-and-drop page creation."
                ]
            }
        ]
    },
    marketing: {
        title: "Marketing Hub 📢",
        subtitle: "The Megaphone - Get people to visit your lemonade stand!",
        color: "var(--marketing)",
        sections: [
            {
                title: "🤔 What it does",
                content: "Imagine you have a magic megaphone that tells the whole neighborhood you're selling the best lemonade. Marketing Hub helps you send emails, make posts on the internet, and track exactly who comes to visit."
            },
            {
                title: "🎯 Core Use Cases",
                content: "Sending bright emails to lots of friends at once, putting exciting ads on the internet, and seeing which flavors of lemonade kids click on the most."
            },
            {
                title: "🌟 Key Example",
                content: "Sending a 'Free Cookie with Lemonade!' coupon to everyone who secretly gave you their email address last week."
            },
            {
                title: "🛠️ How to Create an Email (Step-by-Step)",
                practiceGuide: "Go to <strong>Marketing ➡️ Email</strong>. Click <strong>Create Email</strong>. Select 'Regular'. Pick a template. Click the body to type, and drag an image block to add a picture. Click <strong>Review and Send</strong>.",
                isList: true,
                items: [
                    "Go to your HubSpot menu top bar and click <strong>'Marketing'</strong>, then click <strong>'Email'</strong>.",
                    "Click the bright orange <strong>'Create Email'</strong> button on the top right.",
                    "Pick a pretty picture of a cookie to drag-and-drop right into the middle.",
                    "Type 'Free Cookie!' and hit the big <strong>'Send'</strong> button to let the magic happen."
                ]
            }
        ]
    },
    sales: {
        title: "Sales Hub 💰",
        subtitle: "The Cash Register & Diary - Remember who wants to buy!",
        color: "var(--sales)",
        sections: [
            {
                title: "🤔 What it does",
                content: "It's like a super-smart diary. It remembers everyone who promised to buy lemonade, reminds you to call them, and counts how much money you made in your piggy bank."
            },
            {
                title: "🎯 Core Use Cases",
                content: "Saving phone numbers, creating alarm-clock tasks to remind you to call Grandma, and making a 'Pipeline' (a fancy list of who is buying what and when)."
            },
            {
                title: "🌟 Key Example",
                content: "Setting a reminder so you don't forget to call your neighbor Mr. Bob to ask if he wants his afternoon lemonade today."
            },
            {
                title: "🛠️ How to Create a Task (Step-by-Step)",
                practiceGuide: "Go to <strong>CRM ➡️ Tasks</strong>. Click <strong>Create Task</strong> (top right). Enter a title: 'Call Grandma'. Assign it to yourself. Select a Due Date of tomorrow at 9 AM, and click <strong>Save</strong>.",
                isList: true,
                items: [
                    "Go to the menu, click <strong>'CRM'</strong>, then click <strong>'Tasks'</strong>.",
                    "Click the orange <strong>'Create Task'</strong> button.",
                    "Type a quick note for yourself: <em>'Call Grandma to sell lemonade'</em>.",
                    "Set the time to tomorrow morning, and click <strong>'Save'</strong>. Your diary will beep to remind you!"
                ]
            }
        ]
    },
    service: {
        title: "Service Hub 🩹",
        subtitle: "The Help Desk - Make sad friends happy again!",
        color: "var(--service)",
        sections: [
            {
                title: "🤔 What it does",
                content: "If someone spills their lemonade and cries, Service Hub is your band-aid station! It helps you answer questions, fix problems, and ask people if they are happy with your drinks."
            },
            {
                title: "🎯 Core Use Cases",
                content: "Making 'Tickets' (problem cards) when someone has an issue, so you don't forget to fix it, and sending surveys asking 'Did you like your drink? 😃 😐 ☹️'."
            },
            {
                title: "🌟 Key Example",
                content: "A friend says their lemonade is too sour. You create a 'Ticket' to remind yourself to give them extra sugar tomorrow for free."
            },
            {
                title: "🛠️ How to Create a Support Ticket (Step-by-Step)",
                practiceGuide: "Go to <strong>CRM ➡️ Tickets</strong>. Click <strong>Create Ticket</strong>. Name the ticket. Set pipeline to 'Support Pipeline'. Add description of the issue. Click <strong>Create</strong>.",
                isList: true,
                items: [
                    "Go to <strong>'CRM'</strong>, then click <strong>'Tickets'</strong>.",
                    "Click the <strong>'Create Ticket'</strong> button.",
                    "Name it <em>'Too Sour Lemonade problem'</em>.",
                    "Write down what happened and click <strong>'Save'</strong>. Now you have a card to remind you to fix it!"
                ]
            }
        ]
    },
    cms: {
        title: "CMS Hub 🧱",
        subtitle: "The Magic Builder - Build your online stand with Legos!",
        color: "var(--cms)",
        sections: [
            {
                title: "🤔 What it does",
                content: "It lets you build a super cool website for your lemonade stand using drag-and-drop blocks, just like snapping Lego pieces together! You don't need to be a computer genius to use it."
            },
            {
                title: "🎯 Core Use Cases",
                content: "Building pretty website pages, writing a fun blog about where your lemons come from, and making big fun buttons people can click."
            },
            {
                title: "🌟 Key Example",
                content: "Making a shiny 'Menu' page that shows giant pictures of your pink lemonade, yellow lemonade, and extra sweet cookies."
            },
            {
                title: "🛠️ How to Build a Web Page (Step-by-Step)",
                practiceGuide: "Go to <strong>Marketing ➡️ Website ➡️ Website Pages</strong>. Click <strong>Create</strong>. Choose a Theme. Drag a Hero Banner to the top. Drag a Rich Text module below it to type in text. Click <strong>Publish</strong>.",
                isList: true,
                items: [
                    "Go to <strong>'Marketing'</strong> -> <strong>'Website'</strong> -> <strong>'Website Pages'</strong>.",
                    "Click <strong>'Create Page'</strong> to start.",
                    "Choose a starting template (this is like picking your green Lego baseplate).",
                    "Drag a 'Text Box' with your mouse into the page, type your nice menu, and click <strong>'Publish'</strong> to put it on the real internet!"
                ]
            }
        ]
    },
    operations: {
        title: "Operations Hub 🤖",
        subtitle: "The Robot Helper - Cleans up your messy data room!",
        color: "var(--ops)",
        sections: [
            {
                title: "🤔 What it does",
                content: "It's a tiny invisible robot that works behind the scenes while you sleep. If your friends write their names super messy like 'sPOnGeBob', the robot instantly fixes it to 'Spongebob' so your list looks neat!"
            },
            {
                title: "🎯 Core Use Cases",
                content: "Making sure all spelled-wrong names look perfect, and acting as a magical bridge to share your toys (data) with other apps you own without dropping them."
            },
            {
                title: "🌟 Key Example",
                content: "Automatically capitalizing the first letter of everyone's name on your list so you look very professional."
            },
            {
                title: "🛠️ How to Create a Data Fix Workflow (Step-by-Step)",
                practiceGuide: "Go to <strong>Automation ➡️ Workflows</strong>. Create Workflow. Select trigger (e.g., First Name is known). Add action: <strong>Format Data</strong> > Select 'Capitalize First Letter'. Output back to 'First Name'. Turn On.",
                isList: true,
                items: [
                    "Go to <strong>'Automation'</strong> -> <strong>'Workflows'</strong>.",
                    "Click <strong>'Create Workflow'</strong>.",
                    "Choose when the robot wakes up: <em>'When a new friend is added to the list'</em>.",
                    "Tell the robot what to do: click <strong>'Format Data'</strong>, pick <strong>'Capitalize First Letter'</strong>, and flip the switch to <strong>'Turn On'</strong>!"
                ]
            }
        ]
    },
    workflows: {
        title: "Workflows Guide ⚡",
        subtitle: "The Master Engine - Map out logic tracks to automate emails, data, and tasks flawlessly.",
        color: "#ff7a59", // Signature HubSpot Orange
        sections: [
            {
                type: 'workflow',
                tag: 'marketing',
                title: "Lead Nurturing Workflow",
                goal: "Educate a lead and transition them seamlessly down the sales funnel.",
                useCase: "Wait until someone downloads your 'Ultimate Buyer Guide', then follow up automatically over the next week to book a meeting without lifting a finger.",
                practiceGuide: "Go to <strong>Automation ➡️ Workflows</strong>. Click <strong>Create Workflow</strong> (From scratch). Set Enrollment Trigger to \"Form Submission\". Use the \"+\" icon to add delays and marketing emails.",
                steps: [
                    { type: 'trigger', icon: '⚡', text: 'Form submission (eBook / Whitepaper)' },
                    { type: 'action', icon: '1', text: 'Send immediate "Thank You & Download" Email' },
                    { type: 'delay', text: 'Wait 3 Days' },
                    { type: 'action', icon: '2', text: 'Send follow-up educational email' },
                    { type: 'condition', icon: '?', text: 'Clicked a link in 2nd email?', branches: [
                        { pill: 'YES', class: 'pill-yes', desc: 'Increase Lead Score & Assign to Sales' },
                        { pill: 'NO', class: 'pill-no', desc: 'Send secondary resource email' }
                    ]}
                ]
            },
            {
                type: 'workflow',
                tag: 'marketing',
                title: "Welcome & Onboarding sequence",
                goal: "Greet new users immediately and provide value to reduce early churn.",
                useCase: "A user signs up for a free trial of your service. You want to send them \"Pro Tips\" automatically so they get hooked on your product fast.",
                practiceGuide: "Create a Contact-based workflow triggered by \"List Membership\" (e.g., 'Free Trial Users list' under CRM > Segments). Alternate between \"Delay\" actions and \"Send Email\" actions.",
                steps: [
                    { type: 'trigger', icon: '⚡', text: 'New Subscriber or Free Trial Signup' },
                    { type: 'action', icon: '1', text: 'Send "Welcome" email linking top resources' },
                    { type: 'delay', text: 'Wait 2 Days' },
                    { type: 'action', icon: '2', text: 'Send "Pro-Tips" highlighting core features' },
                    { type: 'delay', text: 'Wait 3 Days' },
                    { type: 'action', icon: '3', text: 'Send personal check-in or webinar invite' }
                ]
            },
            {
                type: 'workflow',
                tag: 'sales',
                title: "Deal Stage Automation",
                goal: "Run administrative handover tasks flawlessly when a deal is 'Closed Won'.",
                useCase: "Sales closes a deal. Instead of writing emails manually, HubSpot instantly welcomes the client and sets up backend tasks for Customer Support.",
                practiceGuide: "Create a <strong>Deal-based Workflow</strong>. Trigger: \"Deal Stage is any of Closed Won\". Add action: \"Create Record (Ticket)\" to build an onboarding ticket for the Support team.",
                steps: [
                    { type: 'trigger', icon: '⚡', text: 'Deal stage shifts to "Closed Won"' },
                    { type: 'action', icon: '1', text: 'Send automated "Next Steps" handoff to Client' },
                    { type: 'action', icon: '2', text: 'Generate Onboarding Ticket in Service Hub' },
                    { type: 'action', icon: '3', text: 'Alert Customer Success Manager to begin onboarding' }
                ]
            }
        ]
    }
};
