import Link from 'next/link';
import me from 'public/static/avatar.jpg';

export const avatar = me;
export const name = 'Azuma';

export const about = () => {
  return (
    <>
      I'm currently based in Fukuoka and deeply involved in a diverse range of exciting <Link href='/projects'><b>projects</b></Link> and <Link href='/writing'><b>interests</b></Link>.
    </>
  );
};

export const bio = () => {
  const yearsSinceStart = new Date().getFullYear() - new Date('2019').getFullYear();

  return (
    <>
      As a software developer, I've been writing code for over <b>{yearsSinceStart - 1} years</b>. While my expertise spans across the full software development stack, I am particularly passionate about Infrastracture Development. <Link href='/dev'><b>Read on</b></Link>.
    </>
  );
};