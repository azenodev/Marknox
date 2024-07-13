
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Internship',
    info: [
      {
        title: 'Gradly Summer Internship ',
        stage: 'May 2024 - June 2024',
      },
      {
        title: 'Summer Training Program by Science Tech Institute ',
        stage: 'June 2024 - July 2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'AI and Data Science Internship - Ybi Foundation',
        stage: '2024',
      },
      {
        title: 'Python Programming Internship- Ybi foundation',
        stage: '2024',
      },
      {
        title: 'Intern - Intern-Niti',
        stage: '2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: '10th - St.francis mission School ',
        stage: '2020',
      },
      {
        title: '12th - St.francis mission School ',
        stage: '2022',
      },
      {
        title: 'Bachelor's of Computer Applications ',
        stage: '2025',
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
