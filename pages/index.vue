<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-card class="mx-auto text-center v-card-video" rounded="0">
        <video autoplay muted loop>
          <source src="/videos/GD_Infinity_WithTitles.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </v-card>
    </v-col>
    <v-col cols="12">
      <Brands></Brands>
    </v-col>
    <v-col cols="12">
      <Approach></Approach>
    </v-col>
    <v-col cols="12">
      <Projects></Projects>
    </v-col>
    <v-col cols="12">
      <Action
        :theme="theme"
        :accent="accent"
        :image="image"
        :title="title"
        :subtitle="subtitle"
      ></Action>
    </v-col>
    <v-col cols="12">
      <Expertise></Expertise>
    </v-col>
    <v-col cols="12" id="contact-us">
      <EnquiryForm></EnquiryForm>
    </v-col>
  </v-row>
</template>
<script setup>
const theme = "purple";
const accent = "glass";
const image = `/icons/icons-014.png`;
const title = `<span class="text-purple">Delight</span> your customer`;
const subtitle = `Great brands tend to believe in the possible. It takes a big idea coupled with a great story to attract the attention of customers and get them to discover and buy your product.`;
const { getItems, getItemById } = useDirectusItems();

// const post = await getItemById({
//   collection: "pages",
//   id: "ada13447-fd8c-4e58-afff-2b379ce98555",
//   params: {
//     fields: fields,
//   },
// });
// if (!post) throwError("No article found, 404");

// try {
//   const posts = await getItems({ collection: "articles" });
// } catch (error) {
//   const posts = [];
//   console.log("error", error);
// }
</script>
