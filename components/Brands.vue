<template>
  <v-card rounded="xl" theme="white" class="p12">
    <v-row align="center" justify="center">
      <v-col lg="12" md="12" sm="12" cols="12">
        <v-card rounded="xl" theme="whiteGreyAccent" class="p0 my-128">
          <v-card rounded="xl" theme="whiteGreyWave" class="p12">
            <v-row align="center" justify="center">
              <v-col lg="12" md="12" sm="12" cols="12">
                <v-row align="center" justify="center">
                  <v-col lg="6" cols="12" class="text-center">
                    <v-card rounded="xl" theme="whiteGrey" class="p3">
                      <v-card-title>
                        <h2 class="text-h2">
                          <span class="text-purple">Our</span> clients
                        </h2>
                      </v-card-title>
                      <v-card-text>We uniquely combine international experience with a deep
                        appreceation of aesthetic ideas of culture dominated marketplace
                        and the creativity that's imbued in the boldest showcases we make
                        for the amazing brands in the world.</v-card-text>
                    </v-card>
                  </v-col>
                  <v-col lg="9" cols="12">
                    <v-row align="center" justify="center">
                      <v-col v-for="client in clients" lg="2" md="4" cols="6">
                        <v-card class="p3" theme="whiteGrey" rounded="xl">
                          <Image :width="300" :src="client.src" />
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
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
  }),
  setup() {
    const { mobile } = useDisplay();

    onMounted(() => { });

    return { mobile };
  },
};
</script>
