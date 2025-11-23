"use client"

import { useLanguage } from '@portfolio/lib/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { ANIMATION } from '@portfolio/config'

export default function AboutSection() {
  const { t, tHtml } = useLanguage()

  // Animation variants for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION.duration.medium,
        ease: ANIMATION.easing.easeOut,
      },
    },
  }

  return (
    <section id="about" className="py-12 md:py-16 border-b border-border">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-12 gap-2">
          {/* About column - spans half the width on desktop */}
          <motion.div
            className="col-span-12 md:col-span-6 pr-0 md:pr-12"
            variants={itemVariants}
          >
            <h2 className="font-heading text-lg uppercase tracking-wider text-secondary mb-4">{t('about.title')}</h2>
            <p className="font-body text-primary lcp-bio" style={{contain: "paint"}}>
              {tHtml('bio1', 'about')}
              <br /><br />
              {tHtml('bio2', 'about')}
              <br /><br />
              {tHtml('bio3', 'about')}
            </p>
          </motion.div>

          {/* Two-column section for roles and descriptions */}
          <div className="col-span-12 md:col-span-6 mt-8 md:mt-0">
            <motion.div className="grid grid-cols-12 gap-4" variants={itemVariants}>
              <div className="col-span-5">
                <h2 className="font-heading text-lg uppercase tracking-wider text-secondary mb-4">{t('about.roles')}</h2>
              </div>
              <div className="col-span-7">
                <h2 className="font-heading text-lg uppercase tracking-wider text-secondary mb-4">{t('about.description')}</h2>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="grid grid-cols-12 gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors" variants={itemVariants}>
                <div className="col-span-5">
                  <h3 className="font-heading font-medium">{t('roles.llmResearcher.title', 'about')}</h3>
                  <p className="font-body text-secondary">{t('roles.llmResearcher.period', 'about')}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-body text-primary">{tHtml('roles.llmResearcher.description', 'about')}</p>
                </div>
              </motion.div>

              <motion.div className="grid grid-cols-12 gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors" variants={itemVariants}>
                <div className="col-span-5">
                  <h3 className="font-heading font-medium">{t('roles.speaker.title', 'about')}</h3>
                  <p className="font-body text-secondary">{t('roles.speaker.period', 'about')}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-body text-primary">{tHtml('roles.speaker.description', 'about')}</p>
                </div>
              </motion.div>

              <motion.div className="grid grid-cols-12 gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors" variants={itemVariants}>
                <div className="col-span-5">
                  <h3 className="font-heading font-medium">{t('roles.designer.title', 'about')}</h3>
                  <p className="font-body text-secondary">{t('roles.designer.period', 'about')}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-body text-primary">{t('roles.designer.description', 'about')}</p>
                </div>
              </motion.div>

              <motion.div className="grid grid-cols-12 gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors" variants={itemVariants}>
                <div className="col-span-5">
                  <h3 className="font-heading font-medium">{t('roles.developer.title', 'about')}</h3>
                  <p className="font-body text-secondary">{t('roles.developer.period', 'about')}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-body text-primary">{tHtml('roles.developer.description', 'about')}</p>
                </div>
              </motion.div>

              <motion.div className="grid grid-cols-12 gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors" variants={itemVariants}>
                <div className="col-span-5">
                  <h3 className="font-heading font-medium">{t('roles.photographer.title', 'about')}</h3>
                  <p className="font-body text-secondary">{t('roles.photographer.period', 'about')}</p>
                </div>
                <div className="col-span-7">
                  <p className="font-body text-primary">{tHtml('roles.photographer.description', 'about')}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
           