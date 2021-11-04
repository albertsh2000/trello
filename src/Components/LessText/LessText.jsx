import { useState } from "react";

function LessText(props) {
   const [showLess, setShowLess] = useState(true);
   const text = props.text;
   const max = 0;
   if (text.length <= max) {
      return <span>{text}</span>;
   }
   return (
      <>
         {showLess ? `${text.substring(0, max)}+` : text}
         <button
            className="learn-more"
            onClick={() => {
               setShowLess(!showLess);
            }}
         >
            {showLess ? "learn-more" : "-less"}
         </button>
      </>
   );
}

export default LessText;
