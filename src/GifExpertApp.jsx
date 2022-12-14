import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = (val)=> {
    if( categories.includes(val) ) return;
    setCategories( [ val, ...categories ] );
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      <ol>
        { categories.map( (cat)=> (
          <GifGrid 
            key={ cat } 
            category={ cat }
          />
        )
        ) }
        
      </ol>

    </>
  )
}

