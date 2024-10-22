import { portfolio } from "./portfolio";

function GetAllTags() {

  let tags:string[] = [];
  
  portfolio.map( (item) => {
    return (
      tags = Array.from(new Set([...tags,...item.tags]))
    )
  })

  return tags;
}

export const alltags = GetAllTags();