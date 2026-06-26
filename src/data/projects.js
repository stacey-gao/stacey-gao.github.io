import test from './assets/test.png'
import mobileID from './assets/mobileID/mobileID.png'
import background from './assets/mobileID/current.png'
import research from './assets/mobileID/research.png'
import interview from './assets/mobileID/interview.png'
import analysis from './assets/mobileID/analysis.png'
import users from './assets/mobileID/users.png'
import wireframe from './assets/mobileID/wire.png'
import first from './assets/mobileID/first.png'
import second from './assets/mobileID/second.png'
import door from './assets/mobileID/door.png'
import feedback from './assets/mobileID/feedback.png'


import poster from './assets/neuroconnect/poster.png'



export const projects = [
  {
    id: 'mobile-id-redesign',
    title: 'Mobile ID Redesign',
    subtitle: 'UX redesign of Digital Student ID Application',
    description:
      'Redesigned a mobile identification application for replacing the student and employee ID on the UAlbany campus to improve usability and accessibility.',

    cardImage: mobileID,

    prototypeUrl:
      'https://embed.figma.com/proto/S5szzFvGuFaL9jTRMj7FXU/CBORD-Mobile-ID-Redesign?node-id=189-9326&embed-host=share',

    name: 'Team Project',
    role: 'UI/UX Designer & UX Researcher',
    dateRange: '09/2025 – 12/2025',

    uxRank: 1,
    devRank: 5,

    details: {
      // heroImage: test,

      sections: [
        {
          title: 'Background / Role',
          text:`
            <p> As an user of the Mobile ID application, I identified an opportunity to improve the Mobile ID experience and pitched the project to my peers. 
            The idea gained interest, and a team of four was formed to do user research and redesign the application in about 3 months. 
            This project went through 2 iterations. I was involved throughout the entire design process, conducting user interviews, 
            creating personas and user flows, developing wireframes and prototypes, and contributing to usability testing and final design decisions. </p>
            `,
            image: background
          },


        {
          title: 'Research',
          text:`
            <p>We chose to do two <strong> in-depth semi-structural interviews </strong> with a student (main user) 
            and an employee (fringe user) to understand their purposes for using the app. 
            Each interview was about 45 minutes long and was recorded and transcribed. 
            I conducted the interview with the student through a discord call. 
            One of my teammates conducted an interview with an UAlbany housing staff employee.</p>
            <br />
            <p>For context, the main use of the physical UAlbany ID card on a daily basis is to unlock doors or pay for meals by physically swiping the card. 
            The application should provide all the features that the card is able to do.
            My team and I designed the interview questions to investigate how students' experience between using the app differs from 
            swiping a physical card. We also designed questions so investigate pain points and inconveniences of the application.
            We made sure the questions were open-ended and did not purposely steer the student to draw a certain conclusion. </p>
            `,
          image: research,
        },

        {
          title: 'Interview Questions',
          text:`
            <p> The following are some of the questions we prepared for the student interview: </p>
            <ul>
            <li>How many times a week would you say you use the CBORD Mobile ID app? What purposes do you use the app for? </li>
            <li>Are there any features of the app that you have trouble using?</li>
            <li>Would you say you use the app more or your physical ID more?</li>
            <li>If you could change one thing about the interface, what would it be?</li>
            <li>Did you have any unmet expectations for the app, and if so, what were they?</li>
            </ul>
            <p>Follow up questions were asked based on the student's responses to gain more clarification on their answers.
            </p>
            <br />
            <p>
             The questions we asked the housing employee were a bit different than to the students':
            </p>
       
            <ul>
            <li>Do UAlbany employees use a mobile ID app to access campus buildings? </li>
            <li>How many times do you respond to lockouts in a day?</li>
            <li>What’s the primary form of access you see students using to access university buildings?</li>
            <li>Do you see students having any difficulties using the mobile app?</li>
            <li>What are your grievances, if any, of the current access system?</li>
            </ul>
            `,
          image: interview,
        },

        {
          title: 'Analysis',
          text:`
            <p>With the transcriptions of the interviews we analyzed them through cluster analysis, creating empathy maps, and creating user journey maps that showed the user flow.</p>
            `,
          image: analysis,
        },

        {
          title: 'Why push the use of the application over the physical card?',
          text:`
          <ul>
            <li><strong>Monetary Incentive for students</strong>: students will less likely lose their ID if they do not need to pull it out frequently on a daily basis. (Each ID card replacement is $20)</li>
            <li><strong>Less lockouts for UAlbany housing employees</strong>: students will most likeyly have their phone with them even if they forget their ID in their dorm and will be able to unlock the door using the application.</li>
            <li><strong>More features</strong>: The app is able to have more features than the card such as viewing the card calance and looking at bus routes.</li>
          </ul>
            `,
        },

        {
          title: 'Problem',
          text: `
          <p>
            From our analysis, we found that the main user pain points and issues are:
          </p>
          <ul>
            <li>Users felt that the <strong>UI interface was cluttered, they have trouble finding the features</strong> they wanted to use such as the bus map and finances page when using the app the first time.</li>
            <ul>
              <li><strong>Users were not aware that many of the features in the app existed</strong>, such as reserving study rooms and ordering ahead for food on campus. This was because users would only typically use 
            the app for unlocking doors when they forget their physical ID or for viewing their finances once or twice a month. The user doesn't look to use other features on the app
            because they find the features that they already use (door access & managing finances) to be inconvienent. The features that the students did not know about were 
            also cluttered on the ID services tab page that the student rarely clicks on.</li>
              </ul>
            <li><strong>Users were locked out everytime they exited the app, which they thought was unnecessary</strong></li>
            <li>Users were <strong>promised the mobile ID app to be convienent</strong> replacement for their ID, however some found their physical ID to be more convienent:</li>
              <ul>
              <li>Door Access: <strong>It would take around 5 steps to unlock the door using app.</strong> Whereas, using a physical card would only take two steps; pulling it out and swiping</li>
              <li><strong>User is not given indication</strong> of when they are near a door, so the door often unlocks unsuccessfully the first time.</li>
              </ul>
          </ul>
        `,
          image: door,
        },

        {
          title: 'User Personas',
          text:
            `<p>We created two personas, one of the student and one of the employee to highlight their goals and pain points thats we can reference while prototyping.</p>`,
          image: users,
        },

        {
          title: 'Our Solutions',
          text:
            `<p>We brainstormed many solutions to each of the issues brought up by the users. My team decided that <strong>we should focus on improve the main features that the users
            actually already use; door access & managing finances</strong>. This way <strong>we would build more trust with the user</strong> and then we can add other features to the application when
            the main ones are polished. This would declutter the UI of random features that the user does not use. 
             </p><br />
             <p>
             <strong>We decided that the four tabs would be home, ID info, finances, and settings.</strong> Home would be the tab the user sees when they log on and it would contain the main daily function
             of the card, door access with a recent doors/pinned doors option that the original design does not have. The reason that having a <strong>recent or pinned doors</strong> would be useful to the user is 
             because realistically on a daily basis the user would only need to access 2-4 doors of the same doors (2 for their dorm, and if they have to get to into a lab or workplace on campus). 
             Everytime they would need to open the door on the original application they would need to scroll through the dropdown to select the correct door or search up the door by its four digit number. 
             This was a fustration from the user that we could solve with having recently accessed doors.
             </p><br />
             <p>
             To improve convienence of use of the application, we also discussed adding <strong>biometrics sign-in such as face and touch ID and a timer session</strong> to lessen the rate that the user
             will be logged out when they accidently leave the application. This way we still have a barrier of security but users will clearly know when they will be logged off with a timer on the screen.
             </p><br />
             <p>
             Another feature we talked about to improve convienence is to have <strong>widgets</strong>. This includes having finance widget that shows the user the balance of their card
             and a widget that shows the student their class schedule.
             </p>
            `,
        },

        {
          title: 'Wireframes',
          text:
            `<p>We created wireframes for specific solutons that we had. Each of us drew our idea and explained it and we chose the ones that
            we thought made the most sense and moved on to prototype it.</p>`,
          image: wireframe,
        },

        {
          title: 'First Iteration of Prototype',
          text:
            `<p>While creating our initial design, we made sure to <strong>keep the branding</strong> of the current app consistent with our redesign. 
            This includes keeping the color scheme and having a simlar page structure to the original UI, so that when the new design is implemented the 
            change in UI is not jarring to existing users.</p><br />
            <p>We did not go forward with putting widgets in the prototype because we were told that that is out of scope for this project. </p>
            `,
          image: first,
        },
        {
          title: 'Getting Feedback from Our First Design at an Design Gallery',
          text: `
          <p>
            We attended a design gallery where students would give each other feedback on their designs.
            We had students click through our prototype and give us feedback in a microsoft form that we can refer to later.
            We also observed if the students had any confusion when using our prototype.
          </p>
          <br />
          <p>
            We recieved feedback from <strong>30 students</strong> with our first prototype through microsoft forms. <strong>Over 50% of the students stated they liked the simplicity of the design. 
            80% of students responded positively and stated that this was an improvement from the original app design.</strong>
            We also received some feedback on how to improve our design from the students:
          </p>
          <ul>
            <li>Not enough information and options on the ID tab</li>
            <li>Session timer function is unclear</li>
            <li>Currently no error messages for failed door access [done], failed fund uploads [done], etc</li>
            <li>UI elements are blocky and monochrome</li>
            <li>No progress indicators during account payment transactions</li>
            <li>Lack of clear customization options</li>
          </ul>

        `,
        },

        {
          title: 'Our Second Prototype',
          text:
            `<p>With the feedback from the first prototype we added and modified our prototype. We moved the settings tab to the top right where the user expected it and
            and changed the fourth tab to another feature that was highly requested in the design gallery responses.</p>
            <p>
            We added more visual cues to the door access feature and revamped some of the UI to make the pinned doors clearer. I worked on the Door Access and Settings pages mostly in this prototype.
            </p>`,
          image: second,
        },

        {
          title: 'Results',
          text:
            `<p>
            We presented our second prototype at another design gallery and recieved feedback from 30 students through microsoft forms.
            </p>`,
            image:feedback
        },

        {
          title: 'What We Could Have Done Better',
          text:
            `<p>
            There are many things we could have done better and continue working on if the project was longer.
            </p>
            <ul>
            <li><strong>Improvement on Adding Funds in Finances and a More Descriptive ID Page</strong>: We talked about adding a tracker with steps (Payment, Review, Confirmation) on the adding funds feature.
            The ID Page also needs to contain more info about the student and we would need to decide how to have the information on the app, but also make sure ths tsudent's data is secure. </li>
            <li><strong>Adding the Rest of the Features</strong>: We focused on the main features in this project, but the next step would be to figure out how to intergrate the rest of the features
            without affecting the user experience of the current ones.</li>
            <li><strong>Widgets</strong>: This was cut from the scope of the project, but designing widgets would improve the user experience of the app.</li>
          </ul>
            `,
        },
      ],
      //What I Learned
      highlights: [
        'When users conflict on what they want, it may be a preference or customization, not something that should be changed (ex. search bar placement)',
        'It is better to polish one great feature than have a lot of mediocre ones.',
        'There are a lot of times that users may ask for something that is out of scope and as the UX designer I have to recongize that and make a judgement on if it is possible.',
      ],
    },
  },



  // {
  //   id: 'senior-umbrella-network',
  //   title: 'Senior Umbrella Network',
  //   subtitle: 'Website for a Non-Profit Connecting Older Adults Professionally',
  //   description:
  //     'Designed a platform that helps vistors understand the mission of the SUN-Q community, and onboard older adults into the SUN-Q community through membership.',

  //   cardImage: test,
  
  //   name: 'Individual Contract Project',
  //   role: 'Web Developer',
  //   dateRange: '07/2023 – 08/2023, with updates in 09/2024',
  
  //   uxRank: 2,
  //   devRank: 3,
  
  //   details: {
  //     heroImage: test,
  
  //     sections: [
  //       {
  //         title: 'Background on Senior Umbrella Network',
  //         text: `

  //       `,
  //         image: '/images/mobile-id/hifi.png',
  //       },
  //       {
  //         title: 'Problem',
  //         text:``,
  //         image: test,
  //       },
  
  //       {
  //         title: 'Research',
  //         text:
  //           'Conducted user research and analyzed accessibility guidelines to better understand the needs of older adults. Findings emphasized the importance of clear navigation, readable typography, and simplified information architecture.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'User Personas',
  //         text:
  //           'Created personas representing older adults with different levels of technology experience. These personas helped guide decisions around accessibility, content organization, and usability.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'User Flow',
  //         text:
  //           'Mapped user journeys to understand how seniors would discover local resources, events, transportation services, and volunteer opportunities.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Wireframes',
  //         text:
  //           'Designed low-fidelity wireframes to test navigation patterns, page hierarchy, and content layouts before moving into high-fidelity designs.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Accessibility Considerations',
  //         text:
  //           'Applied accessibility-first principles including larger touch targets, high-contrast color palettes, clear labels, and responsive layouts to improve usability.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'High-Fidelity Designs',
  //         text:
  //           'Developed polished interface designs that balanced simplicity with functionality while maintaining a welcoming and approachable visual style.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Prototype',
  //         text:
  //           'Built an interactive prototype in Figma to validate navigation flows and gather feedback on the overall user experience.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Results',
  //         text:
  //           'Produced an accessible community platform that improved discoverability of local resources and demonstrated effective inclusive design practices.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Reflection',
  //         text:
  //           'This project strengthened my understanding of accessibility-focused UX design and reinforced the importance of designing for diverse user needs.',
  //         image: test,
  //       },
  //     ],
  
  //     highlights: [
  //       'Sometimes clients aren\'t clear about what they want and it is my job to figure out what they want.',
  //     ],
  //   },
  // },

  // {
  //   id: 'uncluttered',
  //   title: 'Uncluttered',
  //   subtitle: 'Digital decluttering and inventory management app',
  //   description:
  //     'Designed a mobile app that helps users make intentional decisions about keeping or discarding belongings through usage tracking and reminders.',
  
  //   cardImage: test,
  
  //   name: 'Individual Personal Project',
  //   role: 'UX Designer',
  //   dateRange: '01/2025 – 05/2025',
  
  //   uxRank: 3,
  //   devRank: 4,
  
  //   details: {
  //     heroImage: test,
  
  //     sections: [
  //     ],
 
  //     highlights: [
  
  //     ],
  //   },
  // },


  // {
  //   id: 'neuro-connect',
  //   title: 'Neuro Connect',
  //   subtitle: 'Healthcare management platform for tracking health data',

  //   description:
  //     'Co-developed a scalable healthcare platform using micro-frontends that helps patients track health data while supporting future healthcare modules.',

  //   tools: ['figma', 'react', 'node'],

  //   name: 'Stacey Gao',
  //   role: 'UX Designer & Front-End Developer',
  //   dateRange: '01/2025 – 05/2026',

  //   uxRank: 4,
  //   devRank: 2,

  //   cardImage: poster,

  //   details: {
  //     heroImage: '/images/neuroconnect/hero.png',

  //     sections: [
  //       {
  //         title: 'Project Overview',
  //         text:
  //           'Neuro Connect is a healthcare platform designed to help patients monitor and manage health information.',
  //         image: '/images/neuroconnect/overview.png',
  //       },

  //       {
  //         title: 'Problem',
  //         text:
  //           'Patients often need to track information across multiple systems, creating fragmentation and confusion.',
  //         image: '/images/neuroconnect/problem.png',
  //       },

  //       {
  //         title: 'Architecture',
  //         text:
  //           'Implemented a microfrontend architecture to allow independent healthcare modules.',
  //         image: '/images/neuroconnect/architecture.png',
  //       },

  //       {
  //         title: 'Dashboard Design',
  //         text:
  //           'Designed responsive patient dashboards for managing health information.',
  //         image: '/images/neuroconnect/dashboard.png',
  //       },

  //       {
  //         title: 'Development',
  //         text:
  //           'Built frontend experiences and integrated modular application architecture.',
  //         image: '/images/neuroconnect/development.png',
  //       },

  //       {
  //         title: 'Results',
  //         text:
  //           'Created a scalable healthcare platform with strong foundations for future expansion.',
  //         image: '/images/neuroconnect/results.png',
  //       },
  //     ],

  //     highlights: [
  //       'Built using microfrontend architecture',
  //       'Designed patient-facing dashboards',
  //       'Prioritized privacy and scalability',
  //     ],
  //   },
  // },


  // {
  //   id: 'awk-interpreter',
  //   title: 'AWK Interpreter',
  //   subtitle: 'Custom AWK language interpreter built in Java',
  //   description:
  //     'Developed a fully functional AWK interpreter capable of tokenizing, parsing, and executing AWK scripts.',
  
  //   accentColor: '#e8eef5',
  //   accentSecondary: '#3d6b9e',
  
  //   name: 'Individual Project',
  //   role: 'Software Developer',
  //   dateRange: '01/2023 – 05/2023',
  
  //   uxRank: 5,
  //   devRank: 1,
  
  //   details: {
  //     heroImage: test,
  
  //     sections: [
  //       {
  //         title: 'Project Goal',
  //         text:
  //           'The goal of this project was to build an AWK interpreter from the ground up in Java. The interpreter needed to process AWK scripts through lexical analysis, parsing, and execution while supporting common language features.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Language Analysis',
  //         text:
  //           'Studied the AWK language specification to understand syntax rules, expressions, control structures, variables, and built-in functions before implementation.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Lexer Development',
  //         text:
  //           'Implemented a tokenizer that scanned source code and converted characters into meaningful tokens representing keywords, operators, identifiers, and literals.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Parser Architecture',
  //         text:
  //           'Built a recursive-descent parser that transformed token streams into an Abstract Syntax Tree (AST), enabling structured interpretation of AWK programs.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Execution Engine',
  //         text:
  //           'Developed an AST-based execution engine capable of evaluating expressions, handling variables, and executing program logic at runtime.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Testing',
  //         text:
  //           'Created  test cases to validate parsing behavior, syntax handling, expression evaluation, and interpreter correctness.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Results',
  //         text:
  //           'Successfully created a functioning AWK interpreter capable of executing scripts while deepening my understanding of programming languages and compiler design.',
  //         image: test,
  //       },
  
  //       {
  //         title: 'Reflection',
  //         text:
  //           'This project strengthened my knowledge of parsing techniques, software architecture, data structures, and language implementation concepts.',
  //         image: test,
  //       },
  //     ],
  
  //     highlights: [
  //     ],
  //   },
  // },

];

export const TAB_TYPES = {
  UX: 'ux',
  DEV: 'dev',
};

export function getProjectsByTab(tab) {
  const rankKey = tab === TAB_TYPES.UX ? 'uxRank' : 'devRank';

  return [...projects].sort(
    (a, b) => a[rankKey] - b[rankKey]
  );
}

export function getProjectById(id) {
  return projects.find(
    (project) => project.id === id
  );
}

export function getNextProject(currentId) {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentId
  );

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[
    (currentIndex + 1) % projects.length
  ];
}


