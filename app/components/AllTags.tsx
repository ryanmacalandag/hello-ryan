import Link from 'next/link';
import React from 'react'

type AllTagsPropType = {
  tags: string[];
  filter: string;
};

export const AllTags = ({tags,filter}: AllTagsPropType): React.ReactNode => {
  return (
    <ul className='w-full max-w-screen-lg flex flex-row flex-wrap gap-x-2 gap-y-3 justify-start md:justify-center items-center text-nowrap py-4'>
      
      <li><Link href='/' className={ (filter != 'all' ? 'bg-stone-300 ' : 'text-stone-100 bg-stone-950') + ' text-xs font-semibold font-sans uppercase px-3 py-1 rounded-full opacity-75 hover:opacity-100 transition duration-300'}>all</Link></li>
      {
        tags.map( (tag,key) => {
          return <li key={key}>
            <Link
              href={'../tag/' + tag}
              className={ (filter == tag ? 'text-stone-100 bg-stone-950' : 'bg-stone-300 ' ) + ' text-xs font-semibold font-sans uppercase px-3 py-1 rounded-full opacity-75 hover:opacity-100 transition duration-300'}
            >
              {tag}
            </Link>
          </li>;
        })
      }
    </ul>
  )
}
