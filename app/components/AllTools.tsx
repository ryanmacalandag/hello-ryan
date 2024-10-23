import Link from 'next/link';
import React from 'react'

type AllToolsPropType = {
  tools: string[];
  filter: string;
};

export const AllTools = ({tools,filter}: AllToolsPropType): React.ReactNode => {
  return (
    <div className='w-full max-w-screen-lg flex flex-col gap-6 border-y border-stone-400/70 border-dashed px-6 md:px-10 py-10 mt-12'>
      <h3 className='w-full text-center uppercase text-stone-900 text-2xs font-sans font-extrabold tracking-widest'>Tools of the Trade</h3>
      <ul className='w-full flex flex-row flex-wrap gap-x-2 gap-y-3 justify-center md:justify-center items-center text-nowrap'>
        {
          tools.map( (tool,key) => {
            return <li key={key}>
              <Link
                href={'../tool/' + tool}
                className={ (filter == tool ? 'text-stone-100 bg-orange-500' : 'bg-transparent hover:bg-orange-200/70' ) + ' text-sm capitalize font-semibold font-sans px-3 py-1 rounded-full transition duration-300'}
              >
                {tool}
              </Link>
            </li>;
          })
        }
      </ul>
    </div>
  )
}
