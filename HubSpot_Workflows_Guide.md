# HubSpot: Core Uses and Common Workflows

## What is HubSpot Used For?
HubSpot is a leading, all-in-one Customer Relationship Management (CRM) platform designed to help businesses attract visitors, convert leads, close deals, and retain customers. It operates on an "inbound" methodology, providing tools that integrate seamlessly across various departments:

1. **Marketing Hub:** Used for lead generation, marketing automation, email marketing, social media management, SEO, and analytics.
2. **Sales Hub:** Used for advanced CRM functions, meeting scheduling, email tracking, pipeline management, and automating sales tasks.
3. **Service Hub:** Used for customer support, ticketing, knowledge base creation, and customer feedback (NPS, CSAT).
4. **CMS Hub:** Used for building and managing websites, landing pages, and blogs with integrated CRM data.
5. **Operations Hub:** Used for data syncing across apps, data quality management, and advanced customized automation.

In short, HubSpot acts as the central source of truth for a company's customer data, serving as the engine that drives engagement at every stage of the customer journey.

---

## What are HubSpot Workflows?
In HubSpot context, a **Workflow** is an automation tool that triggers marketing, sales, and administrative actions based on specific starting criteria (like a contact property changing, an email being clicked, or a form being submitted). Workflows save time, eliminate manual rote tasks, and ensure a consistent, personalized experience for leads and customers.

---

## 7 Most Common HubSpot Workflows

### 1. Lead Nurturing Workflow (Marketing)
**Goal:** Educate a lead and move them down the sales funnel.
* **Trigger:** Contact fills out a form to download an eBook or whitepaper.
* **Action 1:** Send immediate "Thank you/Download" email.
* **Delay:** Wait 3 days.
* **Action 2:** Send a follow-up email with related educational content.
* **Condition:** If the contact clicked a link in the second email...
    * **Yes:** Increase Contact's Lead Score and notify Sales.
    * **No:** Send another educational email 4 days later.

### 2. Welcome/Onboarding Workflow (Marketing/Service)
**Goal:** Greet new subscribers or customers and set expectations.
* **Trigger:** User subscribes to the blog or signs up for a free trial.
* **Action 1:** Send a "Welcome" email introducing the brand and top resources.
* **Delay:** Wait 2 days.
* **Action 2:** Send a "Pro-Tips" email highlighting features or popular articles.
* **Delay:** Wait 3 days.
* **Action 3:** Check in to see if they need help or invite them to a webinar.

### 3. Internal Sales Routing & Notification Workflow (Sales)
**Goal:** Ensure high-value leads are followed up with immediately.
* **Trigger:** Lead Score reaches 50+ OR Contact views the "Pricing" page more than twice.
* **Action 1:** Assign the Contact to a specific Sales Rep based on territory or round-robin.
* **Action 2:** Create a Task in HubSpot for the Sales Rep to call the lead within 24 hours.
* **Action 3:** Send an internal Slack or Email notification to the assigned Rep with the lead's details.

### 4. Re-engagement / "Wake Up" Workflow (Marketing)
**Goal:** Clean up the database and re-engage cold contacts.
* **Trigger:** Contact has not opened an email or visited the website in 6 months.
* **Action 1:** Send a "We miss you" email with a special offer or "update your preferences" link.
* **Delay:** Wait 7 days.
* **Condition:** Did they click the link or open the email?
    * **Yes:** Remove from the "Cold Leads" list.
    * **No:** Change contact property `Lifecycle Stage` to "Disqualified" or remove them from future marketing sends.

### 5. Deal Stage Automation Workflow (Sales)
**Goal:** Automate admin tasks when a deal progresses.
* **Trigger:** Deal stage is moved to "Closed Won".
* **Action 1:** Send an automated customized "Welcome and Next Steps" email to the customer.
* **Action 2:** Create an onboarding ticket in the Service pipeline.
* **Action 3:** Copy deal amount to the company record for revenue tracking.
* **Action 4:** Notify the Customer Success team via an internal notification.

### 6. Event/Webinar Promotion and Follow-up Workflow (Marketing)
**Goal:** Drive attendance to an event and follow up based on attendance.
* **Trigger:** Contact registers for a Webinar.
* **Action 1:** Send a confirmation email with calendar links.
* **Delay:** Wait until 1 day before the event.
* **Action 2:** Send a reminder email.
* **Delay:** Wait until 2 hours after the event ends.
* **Condition:** Did the contact attend the webinar? (Based on Zoom/Webinar integration data)
    * **Yes:** Send a "Thanks for attending" email with the recording and a sales CTA.
    * **No:** Send a "Sorry we missed you" email with the recording.

### 7. Customer Feedback / NPS Workflow (Service)
**Goal:** Measure customer satisfaction after an interaction.
* **Trigger:** Support ticket is moved to "Closed" status.
* **Delay:** Wait 24 hours.
* **Action 1:** Send an email with a Customer Satisfaction (CSAT) survey or Net Promoter Score (NPS) poll.
* **Condition:** If the score given is <= 6 (Detractor)...
    * **Action 2:** Create an immediate high-priority task for a Customer Success Manager to call the customer and resolve the issue.

---
*Tip: When building workflows, always plan them out visually (e.g., using a whiteboard or a mind map) before configuring them within HubSpot to ensure logic, branching, and timing delays are accurately mapped out.*
