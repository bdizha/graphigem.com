<template>
  <v-card rounded="0" theme="darkGrey" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="6" cols="12" class="text-center">
        <v-card-title>
          <h2 class="text-h2"><span class="text-green">Our</span> team</h2>
        </v-card-title>
        <v-card-subtitle>
          An eclectic team of community-forward builders & dreamers with
          experience ranging from pre-virtual world to futuristic brands.
          Spearheading the future we want to see.
        </v-card-subtitle>
      </v-col>
      <v-col lg="9" md="6" sm="12" cols="12">
        <v-row align="top" justify="start">
          <v-col
            lg="4"
            md="6"
            cols="12"
            v-for="(value, index) in players"
            :key="index"
          >
            <v-card theme="glassDark" rounded="xl" class="p3" min-height="75">
              <v-row align="center" justify="start">
                <v-col cols="12">
                  <v-card theme="darkGrey" rounded="xl" class="p2">
                    <v-card theme="glassLight" rounded="xl" class="p2">
                    <Image :width="600" :height="600" :src="value.src" />
                    </v-card>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-row dense align="center" justify="center">
                    <v-col cols="12">
                      <v-card-title v-html="value.title"></v-card-title>
                      <v-card-subtitle
                        :class="`text-${value.theme}`"
                        v-html="value.subtitle"
                      ></v-card-subtitle>
                      <v-card-text style="min-height: 128px;" v-html="value.text"></v-card-text>
                    </v-col>
                  </v-row>
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
const players = [
  {
    theme: "purple",
    src: "/team/Bold-Team-Drijke-WB.png",
    title: `Creative Art`,
    subtitle: `Drijke Wessels`,
    text: "Always and expanding my knowledge scope while spreading magic around the world through a futuristic lense of imagination.",
  },
  {
    theme: "yellow",
    src: "/team/Bold-Team-KG-WB.png",
    title: "3D Modeling",
    subtitle: `Kagiso Silindane`,
    text: "I am a diligent animator who is dedicated to introducing new and unique skills into the field of animation and art.",
  },
  {
    theme: "purple",
    src: "/team/Bold-Team-Bata-01WB.png",
    title: "Technologist",
    subtitle: `Batanayi Matuku`,
    text: "Obsessed with ideating and architecting branding solutions and building bold things for innovative and unique brands.",
  },
  {
    theme: "green",
    src: "/team/Bold-Team-Sibu-WB.png",
    title: "3D Artist",
    subtitle: `Sibusiso Nkosi`,
    text: "Everday we dream it, we'll make it the best we can. If you just think of the job, the credit will automatically follow.",
  },
  {
    theme: "purple",
    src: "/team/Bold-Team-Casey-WB.png",
    title: "3D Animation",
    subtitle: `Casey Watson`,
    text: `I'm an enthusiastic creative, and am always eager to learn more. Aside from Asset production and animation, I enjoy singing, dancing and acting.`,
  },
  {
    theme: "pink",
    src: "/team/Bold-Team-Jason-WB.png",
    title: "3D Artist",
    subtitle: `Jason Grobler`,
    text: `All creative people want to do the unexpected and the crazy stuff too. I find myself happy with little things like drawing.`,
  },
  {
    theme: "yellow",
    src: "/team/Bold-Team-Michaela-WB.png",
    title: "3D Modelling",
    subtitle: `Michaela Bothner`,
    text: `I'm a highly creative, energetic and innovative 3D modeller with a strong background in character design and development.`,
  },
];
</script>
