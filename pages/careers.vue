<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card rounded="0" theme="purple" class="p12">
        <v-row align="center" justify="center" minHeight="600">
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start" minHeight="600">
              <v-col lg="6" cols="12">
                <v-card rounded="xl" theme="glass" class="p6">
                  <v-card-title>
                    <h2 class="text-h2">
                      <span class="text-purple">Join</span> our team
                    </h2>
                  </v-card-title>
                  <v-card-text
                    >Join our mostly creative team, needless to mention, coupled
                    with creative art, characters, technologists and gaming
                    experts that are also part of our digital services packages
                    that we offer our clients. Jump in and take part in our
                    journey as we grow the organisation and our client centric
                    services. We are a strategic and creative consultancy
                    guiding businesses through virtual apparel, avatars, branded
                    collections, blockchain apps and the Metaverse at large.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col lg="6" cols="12">
                <Image width="100%" src="/icons/icons-011.png" />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row justify="start">
              <v-col
                lg="4"
                md="6"
                sm="12"
                cols="12"
                v-for="(step, index) in steps"
                :key="index"
              >
                <v-card
                  theme="blackLight"
                  rounded="xl"
                  :class="`p3 dark-${step.theme}`"
                >
                  <v-row align="center" justify="start">
                    <v-col lg="6" cols="12">
                      <Image :src="step.src" />
                    </v-col>
                    <v-col lg="6" cols="12">
                      <v-card-title
                        v-html="step.title"
                        :class="`text-${step.theme}`"
                      ></v-card-title>
                      <v-card-text
                        v-html="`${step.subtitle} ${step.text}`"
                      ></v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card rounded="0" theme="blackDark" class="p12">
        <v-row justify="center" no-gutters>
          <v-col lg="9" md="6" sm="12" cols="12">
            <v-row align="center" justify="start">
              <v-col lg="6" cols="12">
                <v-card rounded="xl" theme="blackLight" class="p3">
                  <v-card-title
                    ><h2 class="text-h2">
                      <span class="text-green">Our</span> craft
                    </h2>
                  </v-card-title>
                  <v-card-text
                    >Graphigem Digital is on the lookout for talented, recent
                    graduates, market leading individuals, who enjoy taking a
                    creative role in an unconventional digital agency set up. So
                    to mention, we all work remotely and like it more that way.
                    We're only able to achive this success because we like
                    to think that only self-motivated individuals can make up a
                    great team.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-row align="top" justify="start">
                  <v-col
                    lg="4"
                    md="6"
                    sm="12"
                    v-for="(take, index) in takes"
                    :key="index"
                  >
                    <v-card theme="blackLight" rounded="xl" class="p3">
                      <v-row align="center" justify="start">
                        <v-col lg="4" md="6" cols="12">
                          <Image :width="600" :height="600" :src="take.src" />
                        </v-col>
                        <v-col lg="8" md="6" cols="12">
                          <v-card-text v-html="take.text"></v-card-text>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Values></Values>
    </v-col>
    <v-col cols="12">
      <Action
        :theme="theme"
        :accent="accent"
        :title="title"
        :subtitle="subtitle"
      ></Action>
    </v-col>
  </v-row>
</template>
<script setup>
const theme = "grayLight";
const accent = "glass";
const title = `<span class="text-yellow">Flex</span> your career`;
const subtitle = `Are you a graduate or junior artist looking for your first break in the CGI industry as a 3D artist? Graphigem Digital is looking for the right candidates to join our team, as well as having a great opportunity to develop his/her skills with a full-time and paid mentoring program.`;

const steps = [];
const takes = [
  {
    src: "/icons/icons-013.png",
    theme: "dark",
    text: "Relentlessly applying emerging technologies and unleashing disruptive brands with great success.",
  },
  {
    src: "/icons/icons-011.png",
    theme: "pink",
    text: "A place virtual space where creativity and collaboration is core to our unique values and principles.",
  },
  {
    src: "/icons/icons-015.png",
    theme: "purple",
    text: "In an innovative, unconventional, autonomous space that always delivers dinstinct value to our clients.",
  },
];
</script>
