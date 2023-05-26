<template>
  <div class="app">
    <div class="card">
      <div class="icon">
        <svg
          class="logo svelte"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M57.4933 28.6399L53.8933 24.4265C53.2267 23.6266 52.6667 22.1332 52.6667 21.0666V16.5332C52.6667 13.7065 50.3467 11.3865 47.52 11.3865H42.9867C41.92 11.3865 40.4 10.8265 39.6 10.1599L35.3867 6.55988C33.5467 4.98655 30.5333 4.98655 28.6933 6.55988L24.4267 10.1599C23.6267 10.8265 22.1333 11.3865 21.0667 11.3865H16.4533C13.6267 11.3865 11.3067 13.7065 11.3067 16.5332V21.0666C11.3067 22.1066 10.7733 23.5999 10.1067 24.3999L6.50668 28.6399C4.96001 30.5065 4.96001 33.4932 6.50668 35.3065L10.1067 39.5466C10.7733 40.3199 11.3067 41.8399 11.3067 42.8799V47.4399C11.3067 50.2666 13.6267 52.5865 16.4533 52.5865H21.0933C22.1333 52.5865 23.6533 53.1466 24.4533 53.8132L28.6667 57.4132C30.5067 58.9866 33.52 58.9866 35.36 57.4132L39.5733 53.8132C40.3733 53.1466 41.8667 52.5865 42.9333 52.5865H47.4667C50.2933 52.5865 52.6133 50.2666 52.6133 47.4399V42.9066C52.6133 41.8399 53.1734 40.3465 53.84 39.5466L57.44 35.3332C59.0667 33.5199 59.0667 30.5065 57.4933 28.6399ZM30 21.6799C30 20.5866 30.9067 19.6799 32 19.6799C33.0933 19.6799 34 20.5866 34 21.6799V34.5599C34 35.6532 33.0933 36.5599 32 36.5599C30.9067 36.5599 30 35.6532 30 34.5599V21.6799ZM32 44.9866C30.5333 44.9866 29.3333 43.7866 29.3333 42.3199C29.3333 40.8532 30.5067 39.6532 32 39.6532C33.4667 39.6532 34.6667 40.8532 34.6667 42.3199C34.6667 43.7866 33.4933 44.9866 32 44.9866Z"
            fill="#F79009"
          />
        </svg>
      </div>
      <p>Halo pengguna {{ targetUser }},</p>
      <p>
        Kami ingin menyampaikan bahwa aplikasi {{ targetUser }} sedang dalam
        tahap pemeliharaan sejak {{ startDate }}. Kami mohon maaf atas
        ketidaknyamanan nya, pemeliharaan ini dijadwalkan selesai pada
        {{ endDate }}.
      </p>
      <p>
        Sementara itu, Anda dapat melihat berita lain seputar Jabar pada
        <a href="https://jabarprov.go.id" target="_blank" rel="noreferrer"
          >Portal Jabar</a
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
