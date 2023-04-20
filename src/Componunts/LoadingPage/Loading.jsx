import React from 'react'

export default function Loading() {
  return <>
  <div className={`position-absolute start-0 top-0 w-100 h-100 bg-dark d-flex align-items-center justify-content-center`}>

          <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  </>
}
