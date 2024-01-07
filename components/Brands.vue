<template>
  <v-card rounded="0" theme="blackLight" class="p12" min-height="900px">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-row align="center" justify="center">
          <v-col lg="6" cols="12" class="text-center">
            <v-card rounded="xl" theme="blackDark" class="p6">
              <v-card-title>
                <h2 class="text-h2">
                  <span class="text-purple">Our</span> clients
                </h2>
              </v-card-title>
              <v-card-text
                >We uniquely combine international experience with a deep
                appreation of aesthetic ideas of culture dominated marketplace
                and the creativity that's imbued in all the showcases we make
                for the amazing brands in the world.</v-card-text
              >
            </v-card>
          </v-col>
          <v-col lg="12" cols="12">
            <v-window v-model="tab">
              <v-window-item
                v-if="!mobile"
                v-for="client in clients"
                :key="client"
                :value="client"
              >
                <v-slide-group
                  v-model="cast"
                  selected-class="bg-success"
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="item in client.items"
                    :key="item"
                    v-slot="{ isSelected, toggle, selectedClass }"
                  >
                    <v-card
                      theme="blackDark"
                      class="p3 mx-3 mb-6 mt-6"
                      rounded="xl"
                    >
                      <Image width="300" height="300" :src="item.src" />
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group>
              </v-window-item>
              <v-window-item
                v-if="mobile"
                v-for="client in clients"
                :key="client"
                :value="client"
              >
                <v-carousel show-arrows="false" cycle hide-delimiters>
                  <v-carousel-item
                    v-for="item in client.items"
                    :key="item"
                    :value="item"
                  >
                    <v-card theme="blackDark" rounded="xl">
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
    clients: [
      {
        src: "/gees/gees-013.png",
        theme: "blackDark",
        title: "Virtual Worlds",
        items: [
          {
            src: "/brands/zudaland.png",
            title: "Zudaland",
            subtitle: "",
            text: "",
          },
          {
            src: "/brands/boldland.png",
            title: "BoldLand",
            subtitle: "",
            text: "",
          },
          {
            src: "/brands/anna-cadabra.png",
            title: "Anna Cadabra",
            subtitle: "",
            text: "",
          },
          {
            src: "/brands/dianne-birkin.png",
            title: "Dianna Birkin",
            subtitle: "",
            text: "",
          },
          {
            src: "/brands/chatty-whims.png",
            title: "Chatty Whims",
            subtitle: "",
            text: "",
          },
          {
            src: "/brands/ponte-reye.png",
            title: "Ponte Reye",
            subtitle: "",
            text: "",
          },
        ],
      },
    ],
  }),
  setup() {
    const { mobile } = useDisplay();

    onMounted(() => {});

    return { mobile };
  },
};
</script>
