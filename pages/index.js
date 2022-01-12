import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Movie from '../components/Movie'

import React, { Component } from 'react'

export class index extends Component {
  render () {
    return (
      <body>
    <div className={styles.App}><Movie /></div>
      </body>
    )
  }
}

export default index
