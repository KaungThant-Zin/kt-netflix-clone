import { useState } from "react"

const AccordionItem = (props) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  }
  return (
    <div className="accordion-item" onClick={openHandler}>
      <div className="accordion-title">
        <h4>{props.title}</h4>
        {open ?
          <svg className="w-6 h-6 svg-close" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          : <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
        }
      </div>
      {open && <p className="accordion-content">{props.content}</p>}
    </div>
  )
}

export default AccordionItem
