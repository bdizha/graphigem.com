<template>
  <v-card rounded="0" :theme="theme" class="p12" min-height="900px">
    <v-row justify="center">
      <v-col lg="9" cols="12">
        <v-row justify="end" align="center">
          <v-col cols="12" v-for="(section, index) in sections" :key="index">
            <v-card
              :theme="section.theme"
              rounded="xl"
              class="p12"
              min-height="900"
            >
              <v-row align="start" justify="start">
                <v-col lg="6" cols="12">
                  <Image :width="600" :height="600" :src="section.src" />
                </v-col>
                <v-col cols="12">
                  <v-card-title v-html="section.title"></v-card-title>
                  <v-card-text>
                    <b v-html="section.subtitle"></b>
                    {{ section.text }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col lg="6" cols="12">
            <Image :width="1200" :src="image" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  sections: { type: [], default: [] },
  lg: { type: [Number], default: 9 },
  theme: { type: [String], default: "glass" },
  accent: { type: [String], default: "darkPink" },
  image: { type: [String], default: "/icons/icons-009.png" },
  title: {
    type: [String],
    default: "<span class='text-yellow'>Delight</span> your customer",
  },
  subtitle: {
    type: [String],
    default: `If you were to ask us, what's it like to launch a successful brand? Our answer is simple: It's always a delight working with upcoming brands making their dreams a reality.`,
  },
});
</script>
