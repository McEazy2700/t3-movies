import React from 'react'
import styles from './loader.module.css'

interface LoaderProps {
  className?: string
}
const FullPageLoader = (props: LoaderProps) => {
  const { className } = props
  return (
    <div className={`${className} flex items-center justify-center fixed inset-0 bg-dark-3/10`}>
      <div className='relative'>
        <span className={styles.loader}/>
      </div>
    </div>
  )
}

export default FullPageLoader
