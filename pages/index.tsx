import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { getLogContent } from '../utils/mdParser'
import { GetStaticProps } from 'next'

export default function Home({ logContent }: { logContent: string }) {
  return (
    <>
      <Head>
        <title>nitt</title>
        <meta name="description" content="Personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.gengarContainer}>
          <Image
            src="/gengar.png"  // Make sure to add the Gengar image to your public folder
            alt="Gengar"
            width={150}  // Adjust as needed
            height={150}  // Adjust as needed
            className={styles.gengar}
          />
        </div>
        <h1 className={styles.title}>Nithin</h1>
        <p className={styles.contact}>
          <a href='https://x.com/nithinexe'>x.com/nithinexe</a>
          <br />
        </p>

        <p className={styles.bio}>
          I do moderation and support engineering at <a href='https://www.rome.builders/'>Rome Protocol</a>.
          Previously Founding Engineer at <a href='https://trustless.engineering'>Trustless Engineering</a></p>
        <h2 className={styles.sectionTitle}>This Page:</h2>
        <p className={styles.description}>
          This page is a public log that i use to free style blog. These are my
          personal writings so it will be very raw and contain a lot of grammatical
          errors. I write these notes to myself so i remember stuff more efficiently.
        </p>

        <h2 className={styles.sectionTitle}>Logs:</h2>
        <div className={styles.logs} dangerouslySetInnerHTML={{ __html: logContent }} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { contentHtml } = await getLogContent()
  return {
    props: {
      logContent: contentHtml
    }
  }
}