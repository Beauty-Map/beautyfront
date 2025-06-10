<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <VitePwaManifest />
    <NuxtPage :key="route.fullPath" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
onErrorCaptured((err) => {
  console.error('Error caught:', err)
  return false // جلوگیری از crash کامل
})
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | BeautyMap - بیوتی مپ` : 'BeautyMap - بیوتی مپ';
  },
  htmlAttrs: {
    lang: 'fa',
    dir: 'rtl'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'بیوتی مپ (BeautyMap) - پلتفرم تخصصی معرفی و مقایسه خدمات زیبایی شامل آرایشگران، سالن‌های زیبایی و پزشکان زیبایی. مشاهده نمونه کارها و رزومه متخصصین زیبایی در شهر شما'
    },

    // Open Graph
    { property: 'og:title', content: 'BeautyMap - بیوتی مپ | پلتفرم تخصصی خدمات زیبایی' },
    { property: 'og:description', content: 'نمایش و مقایسه تخصصی نمونه کارهای فعالان صنعت زیبایی (آرایشگران، سالن داران، پزشکان) برای انتخاب آگاهانه' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fa_IR' },
    { property: 'og:site_name', content: 'BeautyMap - بیوتی مپ' },
    { property: 'og:image', content: '/icons/icon-512-512.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'BeautyMap - بیوتی مپ' },
    { name: 'twitter:description', content: 'نمایش و مقایسه تخصصی نمونه کارهای فعالان صنعت زیبایی (آرایشگران، سالن داران، پزشکان) برای انتخاب آگاهانه' },
    { name: 'twitter:image', content: '/icons/icon-512-512.png' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/icon-32-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/icon-192-192.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/icon-180-180.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "BeautyMap - بیوتی مپ",
        "description": "نمایش و مقایسه تخصصی نمونه کارهای فعالان صنعت زیبایی (آرایشگران، سالن داران، پزشکان) برای انتخاب آگاهانه",
        "url": "https://beautymap.ir",
        "logo": "https://beautymap.ir/icons/icon-192-192.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IR"
        },
        "serviceType": "خدمات زیبایی، آرایشگاه، پزشکی زیبایی",
        "sameAs": [
          "https://instagram.com/beautymap",
          "https://twitter.com/beautymap"
        ]
      })
    }
  ]
})

useSeoMeta({
  keywords: 'خدمات زیبایی, آرایشگر, سالن زیبایی, پزشک زیبایی, بیوتی مپ, BeautyMap, مقایسه آرایشگاه, رزومه آرایشگران'
})

const { $pwa } = useNuxtApp()
if ($pwa) {
}
</script>

<style>
html {
  line-height: 1.6;
}

body {
  text-align: right;
  background-color: #fff9f9;
}

.logo-text {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-text .en {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
.logo-text .fa {
  border-right: 1px solid #ddd;
  padding-right: 8px;
}
</style>