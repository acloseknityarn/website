// react component that next.js gives us
import NextLink from 'next/link'

export default function Link({children, href = '#', className = '', openInNewTab = false}) {
  
  const conditionalProps = {};
  if(openInNewTab){
    conditionalProps.target = "_blank";
    conditionalProps.rel = 'noreferrer noopener nofollow';
  }

  return (
    // NextLink is used to make the page non-refreshable
    // we are doing client side routing
    //    ---- we tell the browser to change the route
    //    ---- then we also the tell the browser to dynamically switch which components has to shown
    <NextLink passHref href={href}> 
      <a className={className} {...conditionalProps} >
        {children}
      </a>
    </NextLink>
  )
}
