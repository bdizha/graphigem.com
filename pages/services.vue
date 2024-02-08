<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <Services></Services>
    </v-col>
    <v-col cols="12">
      <Action
        :theme="theme"
        :accent="accent"
        :image="image"
        :title="title"
        :subtitle="subtitle"
      ></Action>
    </v-col>
    <v-col cols="12">
      <Approach></Approach>
    </v-col>
    <v-col cols="12">
      <Projects></Projects>
    </v-col>
    <v-col cols="12" id="contact-us">
      <EnquiryForm></EnquiryForm>
    </v-col>
  </v-row>
</template>
<script setup>
const theme = "pink";
const accent = "glass";
const title = `<span class="text-pink">Tell</span> your story`;
const image = `/cast/tribal-combat/Potrait.png`;
const subtitle = `It remains an unrealized dream to sell even a single product and expand your brand beyond what's impossible unless you invent big ideas about your product.`;
</script>
