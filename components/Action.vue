<template>
  <v-card rounded="0" :theme="theme" class="p0">
    <v-card rounded="xl" :theme="theme + 'Wave'" style="padding: 64px 24px;">
      <v-row justify="center">
        <v-col lg="9" cols="12">
          <v-card :theme="accent" rounded="xl" class="p3">
            <v-row justify="end" align="center">
              <v-col md="6" cols="12">
                <h2 class="text-h2" v-html="title"></h2>
                <v-card-text class="mb-3" v-html="subtitle"></v-card-text>
                <NuxtLink to="/#contact-us">
                  <v-btn size="x-large" color="secondary" class="mt-3 px-12" rounded="xl">
                    Get started
                  </v-btn>
                </NuxtLink>
              </v-col>
              <v-col lg="6" cols="12">
                <v-card :theme="accent" rounded="xl" class="p3">
                    <Image :width="1200" :src="image" />
                  </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps({
  theme: { type: [String], default: "purple" },
  accent: { type: [String], default: "darkPink" },
  image: { type: [String], default: "/icons/GD-Icon-009.png" },
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
