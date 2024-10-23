import { portfolio } from "./portfolio";

function GetAllTools() {

  let tools:string[] = [];
  
  portfolio.map( (item) => {
    return (
      tools = Array.from(new Set([...tools,...item.tools!]))
    )
  })

  return tools;
}

export const alltools = GetAllTools();