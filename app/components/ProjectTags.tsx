import Link from 'next/link';
import React from 'react'

type ProjectTagsPropType = {
  tags: string[];
};

export const ProjectTags = ({tags}: ProjectTagsPropType): React.ReactNode => {
  return (
    <ul className='w-fit flex flex-row flex-wrap gap-x-2 gap-y-3 justify-start md:justify-center items-center text-nowrap'>
      {
        tags.map( (tag,key) => {
          return <li key={key}>
            <Link
              href={'../filter/' + tag}
              className='text-2xs font-semibold font-sans uppercase px-3 py-1 rounded-full bg-stone-300 opacity-75 hover:opacity-100 transition duration-300'
            >
              {tag}
            </Link>
          </li>;
        })
      }
    </ul>
  )
}
