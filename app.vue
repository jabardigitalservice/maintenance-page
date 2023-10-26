<template>
  <div class="app">
    <div class="card">
      <div class="icon">
        <img
          src="@/assets/images/under-construction.svg"
          alt="ilustrasi halaman sedang dalam pengembangan"
          width="363px"
          height="229px"
          class="max-w-full object-cover object-center mb-8 mx-auto"
        />
      </div>
      <p class="font-lora text-[21px] leading-[34px] text-green-700 font-bold mb-4 text-center">
        Ooopsss, aplikasi <b>{{ targetUser }}</b> sedang dalam tahap pemeliharaan sejak <b>{{ startDate }}</b>. Kami mohon maaf atas
        ketidaknyamanan nya, pemeliharaan ini dijadwalkan selesai pada
        <b>{{ endDate }}</b>.
      </p>
      <p>
        Pemeliharaan ini merupakan bagian dari upaya kami untuk meningkatkan kualitas layanan dan integritas keamanan sistem.
        Untuk melihat informasi dan berita terbaru mengenai Jawa Barat, silakan kunjungi
        <a href="https://jabarprov.go.id" target="_blank" rel="noreferrer"
          >jabarprov.go.id</a
        >
      </p>
      <p>
        Apabila Anda memiliki pertanyaan, Anda dapat menghubungi kami melalui
        {{ emergencyContactPlatform }} pada
        <a :href="emergencyHref" target="_blank" rel="noreferrer">
          {{ emergencyContact }}
        </a>
      </p>
      <div>
        <p>Salam Hangat,</p>
        <p>{{ fromUser }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetUser: "",
      startDate: "",
      endDate: "",
      emergencyContact: "",
      emergencyContactPlatform: "",
      emergencyHref: "",
      fromUser: "",
    };
  },
  mounted() {
    const config = useRuntimeConfig();
    this.targetUser = config.public.targetUser || "";
    this.startDate = config.public.startDate || "";
    this.endDate = config.public.endDate || "";
    this.emergencyContact = config.public.emergencyContact || "";
    this.emergencyContactPlatform =
      config.public.emergencyContactPlatform || "";
    this.emergencyHref = config.public.emergencyHref || "";
    this.fromUser = config.public.fromUser || "";
  },
};
</script>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 18px;

  color-scheme: light;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  display: flex;
  justify-content: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

p {
  text-align: justify;
  margin: 0;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.icon {
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.svelte:hover {
  filter: drop-shadow(0 0 2em #ff3e00aa);
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
}
</style>
