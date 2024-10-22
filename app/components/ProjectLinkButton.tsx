import { BiRightArrowAlt } from 'react-icons/bi'

type ProjectLinkButtonPropsType = {
  link: string;
}

export const ProjectLinkButton = ( props:ProjectLinkButtonPropsType ): React.ReactNode => {
  return (
    <a href={props.link} className={ (props.link ? 'h-fit flex justify-between items-center' : 'hidden') +  ' text-2xs font-sans font-bold uppercase tracking-wider rounded-full text-nowrap bg-neutral-700 hover:bg-neutral-900 text-white pl-3 pr-2 py-1 transition duration-300'} target="_blank">Open link <BiRightArrowAlt size={14}></BiRightArrowAlt></a>
  )
}
