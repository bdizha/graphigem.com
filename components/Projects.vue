<template>
  <v-card rounded="0" theme="yellowPurpleAccent" class="p12" min-height="900px">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="6" cols="12" class="text-center">
            <v-card rounded="xl" theme="yellowPurpleWave" class="p3">
              <v-card-title>
                <h2 class="text-h2">
                  <span class="text-purple">Our</span> craftmanship
                </h2>
              </v-card-title>
              <v-card-text>If it doesn't sell it isn't informative and creative enough to
                the consumer in target. We enable your brand to attend to the
                minute details of your product and formulate a resonating story
                that sells to your customers' expectations and win over your
                brand's loyalty from every happy customer you serve.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="12" cols="12">
            <v-tabs :hideSlider="true" v-model="tab" theme="glass" align-tabs="center" class="mb-6">
              <v-card theme="darkGrey" class="px-6" rounded="xl">
                <v-tab v-for="project in projects" :color="project.theme" :value="project">{{ project.title }}</v-tab>
              </v-card>
            </v-tabs>
            <v-window theme="white" v-model="tab">
              <v-window-item v-if="!mobile" v-for="project in projects" :key="project" :value="project">
                <v-slide-group v-model="cast" selected-class="bg-success" show-arrows>
                  <v-slide-group-item v-for="item in project.items" :key="item"
                    v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card theme="yellowPurple" class="p3 mx-3" rounded="xl">
                      <Image width="300" height="300" :src="item.src" />
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group>
              </v-window-item>
              <v-window-item v-if="mobile" v-for="project in projects" :key="project" :value="project">
                <v-carousel theme="white" show-arrows="false" cycle hide-delimiters>
                  <v-carousel-item v-for="item in project.items" :key="item" :value="item">
                    <v-card theme="darkGrey" rounded="xl">
                      <Image :src="item.src" />
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { useDisplay } from "vuetify";
export default {
  data: () => ({
    tab: null,
    projects: [
      {
        src: "/gees/gees-013.png",
        theme: "purple",
        title: "Film & Media",
        items: [
          {
            src: "/cast/bold-girls/Welcome.png",
            title: "Bold Girls",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/tribal-combat/Welcome.png",
            title: "Trubal Combat",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/bold-man/Welcome.png",
            title: "Bold Man",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/royal-bride/Welcome.png",
            title: "Royal Bride",
            subtitle: "",
            text: "",
          },
          {
            src: "/cast/bold-and-famous/Welcome.png",
            title: "Bold & Famous",
            subtitle: "",
            text: "",
          },
        ],
      },
      {
        src: "/gees/gees-013.png",
        theme: "purple",
        title: "Fashion & Retail",
        items: [
          {
            src: "/sneakers/whims/Whims-03-top.png",
            title: "Whims 03 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-03-right.png",
            title: "Whims 03 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-03-left.png",
            title: "Whims 03 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-03-bottom.png",
            title: "Whims 03 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-04-top.png",
            title: "Whims 04 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-04-right.png",
            title: "Whims 04 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-04-left.png",
            title: "Whims 04 Sneakers",
            subtitle: "",
            text: "",
          },
          {
            src: "/sneakers/whims/Whims-04-bottom.png",
            title: "Whims 04 Sneakers",
            subtitle: "",
            text: "",
          },
        ],
      },
    ],
  }),
  setup() {
    const { mobile } = useDisplay();

    onMounted(() => { });

    return { mobile };
  },
};
</script>
