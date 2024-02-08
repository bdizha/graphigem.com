<template>
  <v-card rounded="0" theme="grayLight" class="p12" min-height="900px">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="6" cols="12">
            <v-card rounded="xl" theme="glass" class="p3">
              <v-card-title>
                <h2 class="text-h2">
                  <span class="text-yellow">Our</span> services
                </h2>
              </v-card-title>
              <v-card-text
                >Get to know your customers enough and offer them tailored
                products that resonate with their distinct lifestyles and
                expectations. Switch on the lights and become the pilot of your
                brand's rocket flight to the skies. Those that can't tell their
                story will successfully fail without any exceptions.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="start">
          <v-col
            lg="3"
            md="6"
            sm="12"
            v-for="(service, index) in services"
            :key="index"
          >
            <v-card :theme="service.theme" rounded="xl">
              <v-card
                :theme="service.accent"
                rounded="xl"
                class="p3"
                min-height="450"
              >
                <v-row align="start" justify="start">
                  <v-col lg="6" cols="12">
                    <Image :width="600" :height="600" :src="service.src" />
                  </v-col>
                  <v-col cols="12">
                    <v-card-title v-html="service.title"></v-card-title>
                    <v-card-text>
                      <b v-html="service.subtitle"></b>
                      {{ service.text }}
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const services = [
  {
    src: "/icons/icons-012.png",
    theme: "green",
    accent: "greenWave",
    title: "<span class='text-pink'>Original</span> Branding",
    subtitle:
      "<span class='text-pink'>Build</span> and launch bold campaign story lines.",
    text: "Great companies have great dreams, and it's those great stories - when narrated creatively - that connect with culture and create demand.",
    action: "Get started",
  },
  {
    src: "/icons/icons-008.png",
    theme: "yellow",
    accent: "yellowWave",
    title: "<span class='text-purple'>On-demand</span> Branding",
    subtitle:
      "<span class='text-purple'>Automate</span> your brand's loyal audience and grow.",
    text: "We understand the challenges that brands come across allowing us to provide your brand with advice based on our first-hand campaign experiences. ",
    action: "Get started",
  },
  {
    src: "/icons/icons-007.png",
    theme: "purple",
    accent: "purpleWave",
    title: "<span class='text-yellow'>Virtual</span> Branding",
    subtitle:
      "<span class='text-yellow'>Adjust</span> to creative input and connect with audience.",
    text: "Internet culture is now culture. We help broadcast your brand story through various ways that resonate well with your product's appeal capabilities. ",
    action: "Get started",
  },
  {
    src: "/icons/icons-009.png",
    theme: "pink",
    accent: "pinkWave",
    title: "<span class='text-green'>Character</span> Branding",
    subtitle:
      "<span class='text-green'>Unleash</span> your character powered campaign agent models.",
    text: "Welcome a new world of imagination. Imagine the special role that a branded virtual campaign can achieve for your brand's market share and beyond.",
    action: "Get started",
  },
];
</script>
