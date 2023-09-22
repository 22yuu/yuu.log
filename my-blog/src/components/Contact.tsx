import Link from 'next/link';
import GithubIcon from './ui/icons/GithubIcon';
import LinkedInIcon from './ui/icons/LinkedInIcon';
import MailIcon from './ui/icons/MailIcon';

const items = [
  { icon: <GithubIcon />, link: 'https://github.com/22yuu' },
  {
    icon: <LinkedInIcon />,
    link: 'https://www.linkedin.com/in/%EC%A7%84%EC%9C%A0-%EC%9D%B4-2341b8283/',
  },
  { icon: <MailIcon />, link: '22yuu@naver.com' },
];

export default function Contact() {
  return (
    <div className="flex gap-8 mt-auto mb-8">
      {items.map((item, index) => (
        <div key={index} className="p-1 rounded-full bg-white hover:scale-125">
          <Link href={item.link} target="_blank">
            {item.icon}
          </Link>
        </div>
      ))}
    </div>
  );
}
