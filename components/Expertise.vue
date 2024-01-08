<template>
  <v-card rounded="0" theme="grayLight" class="p12" min-height="900px">
    <v-row align="center" justify="center">
      <v-col lg="9" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="6" cols="12">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <v-card rounded="xl" theme="glass" class="p3">
                  <h2 class="text-h2">
                    <span class="text-pink">Our</span> expertise
                  </h2>
                  <v-card-text
                    >The ones, that do, will thrive. Below is a list of the
                    industries that we currently serve with the support of media
                    and veteran creatives in our digital arsenal, and it's only
                    in the nascent stage of what can be unleashed when a new
                    kind of branding is unveiled to the marketplace for future
                    brands.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col lg="6" cols="12">
            <v-row>
              <v-col
                md="3"
                cols="12"
                v-for="(industry, index) in industries"
                :key="index"
              >
                <v-card :theme="industry.theme" rounded="xl" class="p3">
                  <h4 class="text-h4">
                    {{ industry.line1 }} {{ industry.line2 }}<br>
                    {{ industry.line3 }}
                  </h4>
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
const industries = [
  {
    src: "/banners/banner-yellow.png",
    theme: "darkYellow",
    line1: "Fashion",
    line2: "&",
    line3: "Retail",
  },
  {
    src: "/banners/banner-green.png",
    theme: "darkGreen",
    line1: "Film",
    line2: "&",
    line3: "Media",
  },
  {
    src: "/banners/banner-pink.png",
    theme: "darkPink",
    line1: "Tourism",
    line2: "&",
    line3: "Travel",
  },
  {
    src: "/banners/banner-purple.png",
    theme: "darkPurple",
    line1: "Content",
    line2: "&",
    line3: "Web3",
  },
];
</script>
