import seoIcon from "../assets/indeed/seo-svg.svg";
import seoIconWhite from "../assets/indeed/seo-svg-white.svg";
import socialIcon from "../assets/indeed/social-svg.svg";
import socialIconWhite from "../assets/indeed/social-svg-white.svg";
import droneImage from "../assets/indeed/drone-x-featured.webp";
// import smmImage from "../assets/indeed/megamenu-smm-img.webp";
import ormIcon from "../assets/indeed/orm-svg.svg";
import ormIconWhite from "../assets/indeed/orm-svg-white.svg";
import payIcon from "../assets/indeed/pay-svg.svg";
import payIconWhite from "../assets/indeed/pay-svg-white.svg";
import streetImage from "../assets/indeed/main-street-coffee.webp";
import ppcImage from "../assets/indeed/megamenu-ppc-img.webp";
import linkIconWhite from "../assets/indeed/link-svg-white.svg";
import linkIcon from "../assets/indeed/link-svg.svg";
// import contentIcon from "../assets/indeed/content-svg.svg";
// import contentIconWhite from "../assets/indeed/content-svg-white.svg";
import MockTestGif from "../assets/homeSteps/Mocktest-ezgif.com-crop.gif";


const NavLinks = [
  {
    category: "Home",
    desktopCategoryName: "Home",
    link: "/",
    hasMenu: false,
    hasSubLinks: false,
    clickable: false,
  },
  {
    category: "Services",
    desktopCategoryName: "Courses",
    hasMenu: true,
    hasSubLinks: false,
    clickable: true,

    menu: [
      {
        subHeading: "General English",
        link: "/",
        subHeadingDescription:
          "General English contributes around 20% to 30% of the total marks in the CUET exams",
        icon: seoIcon,
        icon_white: seoIconWhite,
        hasSubMenu: true,
        subMenu: {
          column1Visible: true,
          column1Links: [
            {
              title: "Spot the Error",
              link: "/",
            },
            {
              title: "Sentence Correction",
              link: "/",
            },
            {
              title: "Fill in the Blanks Single",
              link: "/",
            },
            {
              title: "Fill in the Blanks Double",
              link: "/",
            },
            {
              title: "Cloze Test",
              link: "/",
            },
            {
              title: "Synonyms",
              link: "/",
            },
            {
              title: "Antonyms",
              link: "/",
            },
            // {
            //   title: "One Word Substitution",
            //   link: "/",
            // },

            {
              title: "View More",
              link: "/",
            },
            // {
            //   title: "Idioms & Phrases",
            //   link: "/",
            // },
            // {
            //   title: "Miscellaneous",
            //   link: "/",
            // },
            // {
            //   title: "Jumbled Sentences & Parajumble",
            //   link: "/",
            // },
            // {
            //   title: "Reading Comprehension",
            //   link: "/",
            // },
          ],
          column2Visible: true,
          column2Links: [
            {
              title: "Pratice Test 1",
              link: "/",
            },
            {
              title: "Pratice Test 2",
              link: "/",
            },
            {
              title: "Pratice Test 3",
              link: "/",
            },
            {
              title: "Pratice Test 4",
              link: "/",
            },
            {
              title: "Pratice Test 5",
              link: "/",
            },
            {
              title: "Pratice Test 6",
              link: "/",
            },
            {
              title: "Pratice Test 7",
              link: "/",
            },
            {
              title: "View More",
              link: "/",
            },
            // {
            //   title: "Pratice Test 8",
            //   link: "/",
            // },
            // {
            //   title: "Pratice Test 9",
            //   link: "/",
            // },
            // {
            //   title: "Pratice Test 10",
            //   link: "/",
            // },
            // {
            //   title: "Pratice Test 11",
            //   link: "/",
            // },
            // {
            //   title: "Pratice Test 12",
            //   link: "/",
            // },
          ],
          // otherServiceVisible: true,
          // otherService: {
          //   name: "View More",
          //   link: "/",
          // },
          info1Visible: false,
          info2Visible: true,
          info2: {
            heading: "MOCK TEST AVAILABLE",
            image: MockTestGif,
            data: [
              "Results Driven Guaranteed Results",
              "Google Partner Agency",
              "Serving Client's All Across the Global",
              "200 + In House SEO Specialist",
            ],
          },
        },
        descriptionListVisible: false,
      },
      {
        subHeading: "General Test",
        link: "/",
        subHeadingDescription:
          "This section typically covers areas like reasoning, quantitative aptitude, and general awareness. It may constitute around 20% to 30% of the total marks",
        icon: socialIcon,
        icon_white: socialIconWhite,
        hasSubMenu: true,
        subMenu: {
          column1Visible: true,
          column1Links: [
            {
              title: "Twitter Marketing Services",
              link: "/",
            },
            {
              title: "Facebook Marketing Services",
              link: "/",
            },
            {
              title: "LinkedIn Marketing Services",
              link: "/",
            },
            {
              title: "Youtube Marketing Services",
              link: "/",
            },
            {
              title: "Pinterest Marketing Services",
              link: "/",
            },
            {
              title: "Quro Marketing Services",
              link: "/",
            },
          ],
          column2Visible: false,
          info1Visible: true,
          info1: {
            hasLink: true,
            linkInfo: {
              title: "Instagram Marketing Service",
              link: "/",
            },
            image: droneImage,
            heading: "Drone Hover X",
            description:
              "DRONE HOVER X has built up a solid standing in the drone business",
            boldLinkVisible: true,
            boldLinkInfo: {
              title: "View All Case Studies",
              link: "/",
            },
          },
          info2Visible: true,
          info2: {
            heading: "ALWAYS AVAILABLE",
            // image: smmImage,
            data: [
              "Results Driven Guaranteed Results",
              "Google Partner Agency",
              "Serving Client's All Across the Global",
              "200 + In House Social Media Specialist",
            ],
          },
        },
        descriptionListVisible: false,
      },
      {
        subHeading: "Science",
        link: "/",
        subHeadingDescription:
          "For science-related programs, the weightage of science subjects in CUET exams can be significant, usually around 30% to 40% of the total marks.",
        icon: ormIcon,
        icon_white: ormIconWhite,
        hasSubMenu: false,
        descriptionListVisible: true,
        descriptionList: [
          {
            title: "Remove Negative Comments ",
            description:
              "The online world can be a harsh place, and it can be difficult to navigate when negative comments are left unchecked. Our team will work to identify and remove any negative comments that may be damaging your reputation.",
            link: "/",
          },
          {
            title: "Push Down Negative Search Result ",
            description:
              "We will assess all your negative results and, after a thorough examination, create a tailored solution to suppress the negative search results and supplant the start pages of Google, Yahoo, and Bing with positive online content.",
            link: "/",
          },
          {
            title: "Brand Reputation Management Services ",
            description:
              "We can develop an extensive and comprehensive strategy to address and control your brand's reputation on the web. By utilising it accurately together with our knowledge in SEO and social media, you can continue to develop and expand with assurance.",
            link: "/",
          },
        ],
      },
      {
        subHeading: "Commerce",
        link: "/",
        subHeadingDescription:
          "For commerce-related programs, the weightage of commerce subjects could be around 30% to 40% of the total marks.",
        icon: payIcon,
        icon_white: payIconWhite,
        hasSubMenu: true,
        subMenu: {
          column1Visible: true,
          column1Links: [
            {
              title: "Facebook Ads Management",
              link: "/",
            },
            {
              title: "Google Ads Management",
              link: "/",
            },
            {
              title: "Instagram Ads Management",
              link: "/",
            },
            {
              title: "Amazon Ads Management",
              link: "/",
            },
            {
              title: "Google Adwords Campaign Management",
              link: "/",
            },
          ],
          column2Visible: false,
          info1Visible: true,
          info1: {
            hasLink: false,
            image: streetImage,
            heading: "Main Street Coffee",
            description:
              "Main Street Craft Coffee is your go-to solution for staying focused and productive while enjoying the delicious taste of freshly-brew.....",
            boldLinkVisible: true,
            boldLinkInfo: {
              title: "View All Case Studies",
              link: "/",
            },
          },
          info2Visible: true,
          info2: {
            heading: "ALWAYS AVAILABLE",
            image: ppcImage,
            data: [
              "Results Driven Guaranteed Results",
              "Google Partner Agency",
              "Serving Client's All Across the Global",
              "200 + In House Social Media Specialist",
            ],
          },
        },
        descriptionListVisible: false,
      },
      {
        subHeading: "Humanities & Social Sciences",
        link: "/",
        subHeadingDescription:
          " This category often includes subjects like history, geography, political science, economics, etc. The weightage for humanities and social sciences subjects might range from 20% to 30% of the total marks.",
        icon: linkIcon,
        icon_white: linkIconWhite,
        hasSubMenu: false,
        descriptionListVisible: true,
        descriptionList: [
          {
            title: "Guest Post Services",
            description:
              "We understand the importance of quality content and the impact it can have on your business. That’s why we strive to provide our clients with the best possible guest post services, so that they can get the most out of their marketing efforts.",
            link: "/",
          },
          {
            title: "Buy Edu Backlinks",
            description:
              "IndeedSEO is the perfect place to go if you’re looking to purchase Edu backlinks. Our backlinks are of the highest quality and are carefully selected to ensure that they will have the maximum impact on your website.",
            link: "/",
          },
          {
            title: "Press Release Services",
            description:
              "Are you looking to get the word out about your business or organization? We offer press release services to help you do just that. With our team of experienced professionals, we can provide the perfect press release to help spread your message.",
            link: "/",
          },
        ],
      },
      // {
      //   subHeading: "Content Writing",
      //   link: "/",
      //   subHeadingDescription:
      //     "Take Your Business to the Next Level with Content Writing",
      //   icon: contentIcon,
      //   icon_white: contentIconWhite,
      //   hasSubMenu: false,
      //   descriptionListVisible: true,
      //   descriptionList: [
      //     {
      //       title: "Article Writing Services ",
      //       description:
      //         "Are you in need of article writing services for your business or website? Our article writing services provide clients with engaging, informative and keyword-optimized articles that are tailored to their specific industry and target audience.",
      //       link: "/",
      //     },
      //     {
      //       title: "Blog Writing Services ",
      //       description:
      //         "Our blog writing services provide clients with engaging and keyword-rich blog posts that are tailored to their specific industry and target audience. Our writers have the expertise to craft blog posts that are interesting, informative, and SEO-friendly.",
      //       link: "/",
      //     },
      //     {
      //       title: "Seo Content Writing Services ",
      //       description:
      //         "No matter what kind of content you need, IndeedSEO can help. Our SEO content writing services provide clients with keyword-rich, SEO-optimized content that is tailored to their specific industry and target audience.",
      //       link: "/",
      //     },
      //   ],
      // },
    ],
  },
  {
    category: "About Us",
    link: "/about",
    hasMenu: false,
    hasSubLinks: false,
    clickable: false,
  },
  {
    category: "Syllabus",
    link: "/syllabus",
    hasMenu: false,
    hasSubLinks: false,
    clickable: false,
  },
  {
    category: "Pricing",
    link: "/purchase",
    hasMenu: false,
    hasSubLinks: false,
    clickable: false,

    // subLinks: [
    //   {
    //     title: "News",
    //     link: "/",
    //   },
    //   {
    //     title: "Blog",
    //     link: "/",
    //   },
    //   {
    //     title: "Videos",
    //     link: "/",
    //   },
    //   {
    //     title: "Web Stories",
    //     link: "/",
    //   },
    // ],
  },
];

export default NavLinks;
