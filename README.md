# Table of Contents
+ [Project Title](#project-title)
   + [Overview](#overview)
      + [Application target problem and benefits](#application-target-problem-and-benefits)
      + [Screnshots Sample](#screenshots-samples)
      + [Features](#features-and-user-instructions)
   + [Implementation](#implementation)
      + [Tech Stack](#tech-stack) 
      + [Installation Instructions](#installation-instructions) 
   + [Next Steps](#next-steps)


# Project Title

AI Immigration Helper 

## Overview

This app is an Artificial Intelligence assistant for Canadian immigration legal process preparation facilitating and making faster that endeavor. It also works as an educational source on how to efficiently go through the learning of Canadian immigration processes.

### Screenshots Samples

![Home Page](./ReadmeImages/HomePage.jpg)

![Educational Page](./ReadmeImages/EducationalPage.jpg)

### Application target problem and benefits

Canada, and our city Vancouver, are built of immigrants and the number of new immigrants every year is high. Many, even when they are here, still need to do immigration processes for their status in Canada or to help family members.

They face a long search, organization, and document collection to do those immigration processes, many times even without understanding well English/French, or the technical words, or the technicalities required in those immigration processes; all this at the same time where they are working or adapting to their new Canadian context!

Considering all this, **here is a list of benefits that this app could provide:**

_Simplify, speed up, and make more effective the immigration process preparation:_
   + **Users can rapidly obtain overall information on how certain Canadian immigration processes work**.

   + **Can diminish the language barrier** for properly understanding the processes: users can input in their languages and can request the answer in their languages as well.
   + **Help to speed the understanding of more complicated technical documents and information.** 
   + **If authenticated users can save the data that find relevant**, and they can access it anytime. They can filter all this information that they obtain and decide what is the most relevant for them and download it as a document.

_We have an educational goal not only informational:_
   + The website will have also a page with **information on best practices on how to search the Canada Government Immigration Website to improve internet literacy and also links to other educational sites that could be relevant:  citizenship study, language study link page.**  

_Makes the stressful and draining immigration process a bit less daunting and more connected:_

  + **The gpt will be customized to have a casual (but informative) way to communicate** to try to engage/connect more with the audience on an already stressful topic for many users. 

  + Having information from the Internet is many times, not enough to dissipate doubts and insecurities about our immigration processes. Considering that **I would like to add a section on the Educational page on the app where users can select immigration advisors’ offices where they can have that necessary face-to-face human interaction**. 

  ### Features and user instructions

+  User possibility to sign up/log in. When the user submits his sign-up data, it gets redirected to the login page and after successful authentication, it will be redirected to the page with the AI assistant. 

+  On the AI Assistant page, users can create input by texting, specifying a whole range of settings that they can use on their prompts to obtain an output that is a better fit for their needs. Prompts like the language of response, length of the response, summarization, and key points creation.

+  On the same page, the app will give back output based on the user input and the casual but informative tone set on the server for the openAI API output. It is important to mention that the output will be set to avoid answering inappropriate questions. If the user is authenticated can save this output.

+  On the same page, if the user is authenticated can have access to the history of all his input by date. It can see the history by date, it can filter this information and it can also download it as a pdf document.

+  Users can go to the Educational Page where they will obtain best practices information on how to search on, pass through, and better understand the Canadian immigration website and other official websites and sources of information with similar purposes.

+  On the same page, users will find links to website sources with educational purposes that could be relevant to the population sector that most frequently needs to do immigration processes: immigrants. Websites linked could be about English language learning and citizenship study preparation. They can also find contact information of Immigration advisor on Vancouver.



## Implementation

### Tech Stack

I used the MERN stack as the core plus some added technologies on top of that.

+ Styling: Sass 

+ Client-Side functionality: React.js, Axios library  

+ Server-side functionality:  Node.js, Express.js  

+ Database: MySQL (SQL), MongoDB (NoSQL), Knex.js (query builder), Mongoose (ODM)  

+ Authentication: JWT with Passport.js  

+ External APIs: OpenAI API


### Installation Instructions

**If prefer to visit the live site:**

+ Visit the following link: (https://main--ai-immigration-helper.netlify.app/)


**If prefer to run this app locally:**

1. Clone the main branch from client and backend repositories. Below the links:

(https://github.com/DanySA22/AI-Immigration-Helper-Server.git)

(https://github.com/DanySA22/AI-Immigration-Helper.git)

2. Make sure you have locally installed node.js and npm, and then run npm install in both folders with the cloned repositories.

3. Add a .env file on both folders projects that mimic the next keys with your own values.

+ On client app:

REACT_APP_API_URL=*Your_Server_URL*

+ On server app:

PORT=*number*

DB_HOST=*localhost/port*

DB_NAME=*your_prefered_name*

DB_USER=*your_prefered_user*

DB_PASSWORD=*password*

OPENAI_KEY=*unique_key_by_OpenAI*

SECRET_KEY=*secret_key_authentication*

MONGODB_URL=*url_mongodb_connection*

4. Set your MySQL local server and MongoDB local server (or through Atlas if you prefer). On the server express app run npm run migrate and npm knex seed:run to set up MySQL configured tables and populated with testing data.

5. Use npm start to run the client app and npm run dev to run the server app.



## Next Steps

+ I would like to add in the future Google OAuth 2.0 authentication with Passport.js

+ I would like to add upload functionality to process documents together with direct user input.

+ I would like to have an optional functionality to display the webpage in one of the different popular languages
in Vancouver like mandarin, tagalog, arabic or spanish according with the user needs and preferences

