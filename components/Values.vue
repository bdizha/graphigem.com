<template>
  <v-card rounded="0" theme="blackLight" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="6" cols="12" class="text-center">
        <v-card-subtitle>
          <h2 class="text-h2"><span class="text-purple">Our</span> values</h2>
        </v-card-subtitle>
      </v-col>
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="top" justify="end">
          <v-col lg="6" cols="12" v-for="(value, index) in values" :key="index">
            <v-card :theme="value.accent" rounded="xl" class="p3">
              <v-row align="center" justify="start">
                <v-col sm="4" cols="8">
                  <Image :width="600" :height="600" :src="value.src" />
                </v-col>
                <v-col lg="8" cols="12">
                  <v-card-title v-html="value.title"> </v-card-title>
                  <v-card-text v-html="value.text"></v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const values = [
  {
    src: "/icons/icons-014.png",
    theme: "green",
    accent: "blackDark",
    title: "<span class='text-pink'>Adventure</span>",
    text: "<span class='text-pink'>We</span> serve unique and disruptive brands of all sizes and are fanatical about their success. We explore the impossible of dreams.",
  },
  {
    src: "/icons/icons-012.png",
    theme: "yellow",
    accent: "blackDark",
    title: "<span class='text-purple'>Autonomy</span>",
    text: "<span class='text-purple'>It's</span> about dreaming big and changing the game. We are proud to create delightful branding solutions for clients who dream bold ideas.",
  },
  {
    src: "/icons/icons-007.png",
    theme: "purple",
    accent: "blackDark",
    title: "<span class='text-yellow'>Courage</span>",
    text: "<span class='text-yellow'>We</span> always seek ways to challenge the status quo as we routinely build, apply, evaluate and repeat at every turn of the clock of each day. ",
  },
  {
    src: "/icons/icons-002.png",
    theme: "pink",
    accent: "blackDark",
    title: "<span class='text-green'>Trust</span>",
    text: "<span class='text-green'>We</span> practise trust and transparency within a context of a supportive network of digital and media partners from diverse industries we serve.",
  },
];
</script>
