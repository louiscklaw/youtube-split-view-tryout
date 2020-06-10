import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from './index.module.scss'

function IndexPage() {

  return(
    <Layout>
      <SEO title="Home" />
      <div className={style.wholeCanvas}>
        <div className={style.left}>
          <div className={style.mainChannel}>
            main channel
          </div>
          <div className={style.bottomPreviewChannel}>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
          </div>

        </div>
        <div className={style.right}>
          <div className={style.rightPreviewChannel}>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>

            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>
            <div className={style.previewChannel}>
              previewChannel
            </div>


          </div>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage
