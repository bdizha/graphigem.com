<template>
  <v-card>
    <v-layout id="scroll-target">
      <Header></Header>
      <v-main style="min-height: 300px;" v-scroll.self="onScroll">
        <slot />
        <Footer></Footer>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    offsetTop: 0,
    currentYear: new Date().getFullYear(),
    links: [
      { title: "Home", route: "/", theme: "purple" },
      { title: "Services", route: "/services", theme: "pink" },
      { title: "Careers", route: "/careers", theme: "green" },
      { title: "About Us", route: "/about-us", theme: "dark" },
    ],
  }),
  methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop;
		    console.log(this.offsetTop);
      },
    },
};
</script>
