/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Илья Зайцев",
  title: "Всем привет, Меня зовут Илья",
  subTitle: emoji(
    "Я DevOps инженер, который любит автоматизировать процессы, организует беспрерывную поставку изменений и активно взаимодействует со всеми членами команды."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17C6GHYgPoxH-EhsA2DChtzBJju-FbvQ_/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/il1yaz",
  gmail: "il1ya.zmail.ru@gmail.com",
  instagram: "https://instagram.com/ilya.zaytsev91",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ключевые навыки",
  subTitle: "",
  skills: [
    "Имею опыт работы в Linux",
    "Умею заворачивать приложения в Docker контейнеры",
    "Умею запускать Docker контейнеры в Kubernetes ",
    "Могу запустить инфраструктуру через Docker-compose",
    "Разворачиваю релизы через Helm",
    "Пишу Pipeline скрипты в GitlabCI/Jenkins",
    "Инфраструктуру описываю в Terraform",
    "Автоматизирую настройку с помощью Ansible",
    "Поднимаю окружения в облачной среде ( AWS, Yandex.Cloud )"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "helm",
      fontAwesomeClassname: "fas fa-ship"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "Yandex Cloud",
      fontAwesomeClassname: "fab fa-yandex" 
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-t"
    },
    {
      skillName: "ansible",
      fontAwesomeClassname: "fas fa-font"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Новосибирский Государственный Технический Университет",
      logo: require("./assets/images/nstu.png"),
      subHeader: "Бакалавр по специальности Информационная безопасность",
      duration: "Сентябрь 2012 - Май 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Linux", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps",
      company: "Банк «Санкт-Петербург»",
      companylogo: require("./assets/images/sank_peter_bank_1.png"),
      date: "Октябрь 2022 - По настоящее время",
      desc: "Установка и настройка систем для Разработки и Тестирования",
      descBullets: [
        "Разворачивание сервисов в Yandex.Cloud",
        "Разработка Terraform модулей",
        "Автоматизация окружения с использованием Ansible",
        "Подбор подходящих инструментов по требованиям команд разработки",
        "Консультации по DevOps практикам и подходам"
      ]
    },
    {
      role: "DevOps",
      company: "Dins",
      companylogo: require("./assets/images/dins.png"),
      date: "Июль 2021 - Октябрь 2022",
      desc: "CI/CD, Разработка средств интеграции",
      descBullets: [
        "Поддержка работы пайплайнов в Spinnaker",
        "Разработка плагинов для Jenkins/Spinnaker",
        "Разработка и поддержка существующих систем интеграции на Go,Python,Java"
      ]
    },
    {
      role: "DevOps",
      company: "ЦФТ",
      companylogo: require("./assets/images/cft.png"),
      date: "Май 2019 – Июнь 2021",
      desc: "CI/CD, Автоматизация",
      descBullets: [
        "Организация беспрерывной работы тестового окружения",
        "Разработка и поддержка CI/CD пайплайнов",
        "Автоматизация рутинных задач",
        "Деплой микросервисов в Docker/Kubernetes"
      ]
    },
    {
      role: "Automation QA Engineer",
      company: "ЦФТ",
      companylogo: require("./assets/images/cft.png"),
      date: "Июнь 2017 – Май 2019",
      desc: "Api автотесты",
      descBullets: [
        "Создание авто-тестов на api методы микросервисов",
        "Усовершенствование фреймворка тестирования API",
        "Поддержка работоспособности уже написанных тестов",
        "Анализ результатов прогонов авто-тестов"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Свяжитесь со мной"),
  subtitle: "",
  number: "+7-913-937-64-41",
  email_address: "il1ya.zmail.ru@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
