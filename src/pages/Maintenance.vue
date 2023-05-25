<template>
  <div class="app">
    <div class="card">
      <div class="icon">
        <InformationIcon class="logo svelte" alt="Information Icon" />
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
import InformationIcon from "../assets/Information.vue";

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
  components: { InformationIcon },
  mounted() {
    const config = useRuntimeConfig();
    this.targetUser = config.public.targetUser || ""
    this.startDate = config.public.startDate || ""
    this.endDate = config.public.endDate || ""
    this.emergencyContact = config.public.emergencyContact || ""
    this.emergencyContactPlatform = config.public.emergencyContactPlatform || ""
    this.emergencyHref = config.public.emergencyHref || ""
    this.fromUser = config.public.fromUser || ""
  }
};
</script>
