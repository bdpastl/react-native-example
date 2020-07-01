import React from 'react'
import { useParams } from 'react-router-dom'
const PageWithParams = () => {

const { thing } = useParams()
console.log('PARAMS ARE: 💅🤷‍♀️', thing)


  return (
    <>
        The coolest noodle armed fighter in ssmb ultimate is : {thing}
    </>
  )
}

export default PageWithParams
