const { createApp, ref } = Vue;

const app = createApp({
  //   template: `
  //       <h1>{{ message }}</h1>
  //       <p>- {{ author }}</p>
  //   `,

  setup() {
    const message = ref("I'm batman");
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "Hello, I'm Goku";
      author.value = "Goku";
    };

    return {
      message,
      author,
      changeQuote,
    };
  },
});

app.mount("#myApp");
