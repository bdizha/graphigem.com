<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <Story></Story>
    </v-col>
    <v-col cols="12">
      <Vision></Vision>
    </v-col>
    <v-col cols="12">
      <Team></Team>
    </v-col>
    <v-col cols="12">
      <Values></Values>
    </v-col>
    <v-col cols="12">
      <Action :theme="theme" :accent="accent" :image="image" :title="title" :subtitle="subtitle"></Action>
    </v-col>
  </v-row>
</template>
<script setup>
const theme = "grayDark";
const accent = "glass";
const image = "/icons/icons-005.png";
const title = `<span class="text-green">Unleash</span> your brand`;
const subtitle = `<span class="text-pink">Graphigem</span> helps brands create value in the virtual world. We are a strategic and creative consultancy service guiding businesses through digital branding, character branding and the Virtual World.`;
</script>
