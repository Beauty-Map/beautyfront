<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - بیوتی مپ` : 'بیوتی مپ';
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
      content: 'بیوتی مپ یک وبسایت تبلیغاتی در زمینه ارائه خدمات زیبایی است که بصورت تخصصی و دسته بندی شده نمونه کارهای افراد فعال در صنعت زیبایی اعم از آرایشگران ، سالن داران ، پزشکان و ... را مقایسه کرده و به نمایش می گذارد تا مردم عزیز کشورمان بتوانند در خصوص خدمات زیبایی اطلاعات بیشتری کسب کرده و هنرمندان توانمند و مستعد در شهر محل سکونت خود را شناسایی کرده و رزومه کاری آنها را مورد بررسی قرار دهند.'
    },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fa_IR' },
    { property: 'og:site_name', content: 'بیوتی مپ' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@beautymapir' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/favicon.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "بیوتی مپ",
        "description": "بیوتی مپ یک وبسایت تبلیغاتی در زمینه ارائه خدمات زیبایی است که بصورت تخصصی و دسته بندی شده نمونه کارهای افراد فعال در صنعت زیبایی اعم از آرایشگران ، سالن داران ، پزشکان و ... را مقایسه کرده و به نمایش می گذارد تا مردم عزیز کشورمان بتوانند در خصوص خدمات زیبایی اطلاعات بیشتری کسب کرده و هنرمندان توانمند و مستعد در شهر محل سکونت خود را شناسایی کرده و رزومه کاری آنها را مورد بررسی قرار دهند.",
        "url": "https://beautymap.ir",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://beautymap.ir/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})

</script>

<style>
html {
  font-family: 'Vazir', 'Tanha', 'Segoe UI', Tahoma, sans-serif;
}
body {
  text-align: right;
}
</style>