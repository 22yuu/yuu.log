import StarIcon from '../ui/icons/StarIcon';
import ForkIcon from '../ui/icons/ForkIcon';
import EyeIcon from '../ui/icons/EyeIcon';
import Image from 'next/image';

export default function ProjectItemCard() {
  return (
    <li className="flex min-h-[150px] mb-24">
      <div className="flex flex-shrink-0 items-center justify-center rounded-full border-[7px] border-theme-primary w-40 h-40 bg-white z-50">
        <Image
          className="rounded-2xl max-w-[120px] max-h-[120px]"
          src="/images/plip.png"
          alt="thumbnail"
          layout="responsive"
          width={120}
          height={120}
          objectFit="fill"
        />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="mb-2">Project Tilte</h2>
        <p className="mb-2">
          This is Project Description... What is your application service please
          explain it. and What is difficult implmentaion in your project.
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
            JavaScript
          </div>
          <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
            React
          </div>
          <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
            JS
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <StarIcon /> <span>0</span>
          </div>
          <div className="flex items-center gap-2">
            <ForkIcon />
            <span>0</span>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </li>
  );
}
