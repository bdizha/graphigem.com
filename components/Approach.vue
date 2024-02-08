<template>
  <v-card rounded="0" theme="green" class="p12" min-height="900px">
    <v-row align="center" justify="center">
      <v-col lg="9" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="6" cols="12">
            <Image :width="1200" :src="image" />
          </v-col>
          <v-col lg="6" cols="12">
            <v-card theme="glass" rounded="xl" class="p3">
              <v-card-title
                ><h2 class="text-h2" v-html="title"></h2>
              </v-card-title>
              <v-card-text class="mb-3" v-html="subtitle"></v-card-text>
              <NuxtLink to="/#contact-us">
                <v-btn
                  size="x-large"
                  color="secondary"
                  class="mx-1 my-3"
                  rounded="xl"
                >
                  Get started
                </v-btn>
              </NuxtLink>
            </v-card>
          </v-col>
          <v-col lg="12" cols="12">
            <v-row justify="start">
              <v-col
                lg="3"
                cols="12"
                v-for="(step, index) in steps"
                :key="index"
              >
                <v-card :theme="step.theme" rounded="xl" class="p0">
                  <v-card
                    :theme="step.accent"
                    rounded="xl"
                    class="p3"
                    min-height="300"
                  >
                    <v-card-title v-html="step.title"></v-card-title>
                    <v-card-text
                      v-html="`${step.subtitle} ${step.text}`"
                    ></v-card-text>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
const image = "/cast/bold-look/Landscape.png";
const title = "<span class=\"text-green\">Our</span> approach";
const subtitle =
  "We envision a fully immersive and a character-centric branding future and are catalyzing creativity for unique brands through a consumer tailored branding strategy while earning them a fully engaged and a delighted customer base.";
const steps = [
  {
    theme: "pink",
    accent: "glass",
    title: " <span class='text-green'>Evaluate</span> it",
    subtitle:
      "<span class='text-green'>Unleash</span> new insights and repeat building again while adding adjustments to the buy-in effects of your product on real and potential customers.",
    text: "",
    src: "/banners/GDBanner_18.png",
  },
  {
    theme: "purple",
    accent: "glass",
    title: "<span class='text-yellow'>Repeat</span> it",
    subtitle:
      "<span class='text-yellow'>Catalyze</span> your branding efforts alongside our branding experts at Graphigem Digital. Take control of the outcome of your branding investment today.",
    text: "",
    src: "/banners/GDBanner_19.png",
  },
  {
    theme: "yellow",
    accent: "glass",
    title: "<span class='text-purple'>Apply</span> it",
    subtitle:
      "<span class='text-purple'>Discover</span> and highlight incentives for brand loyalty and target specific demographics of your potential customers on social & web3 platforms.",
    text: "",
    src: "/banners/GDBanner_17-new.png",
  },
  {
    theme: "green",
    accent: "glass",
    title: "<span class='text-pink'>Build</span> it",
    subtitle:
      "<span class='text-pink'>Launch</span> a bold product and shoot for the stars by capturing the imagination of your audience while leveraging character branding models in your campaigns.",
    text: "",
    src: "/banners/GDBanner_16-light-wave.png",
  },
];
</script>
