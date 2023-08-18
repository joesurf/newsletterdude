import React, { useEffect } from 'react'

function Error404Page() {
    useEffect(() => {

        const redirectToHomepage = async () => {
            await new Promise(r => setTimeout(r, 2000));
            window.location.replace("/")
        }
        redirectToHomepage()
    })

  return (
    <div>There's no such page. We're redirecting you to the homepage.</div>
  )
}

export default Error404Page