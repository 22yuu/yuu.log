import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-[175px] h-[175px] border rounded-full bg-white mt-20">
      <Image
        src="/images/gucci.jpg"
        alt="profile"
        width={175}
        height={175}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
