<script lang="ts">
  import InformationIcon from "../assets/Information.svg";
  const targetUser = import.meta.env.VITE_TARGET || "";
  const emergencyContact = import.meta.env.VITE_EMERGENCY_CONTACT || "";
  const startDate = import.meta.env.VITE_START_DATE || "";
  const endDate = import.meta.env.VITE_END_DATE || "";
  const emergencyContactPlatform = import.meta.env
    .VITE_EMERGENCY_CONTACT_PLATFORM || "";
  const emergencyHref = import.meta.env.VITE_EMERGENCY_CONTACT_CLICK_TO || "";
  const fromUser = import.meta.env.VITE_FROM || "";
</script>

<div class="app">
  <div class="card">
    <div class="icon">
      <img src={InformationIcon} class="logo svelte" alt="Information Icon" />
    </div>
    <p>
      Halo pengguna {targetUser},
    </p>
    <p>
      Kami ingin memberitahukan bahwa {targetUser} sedang dalam tahap perbaikan 
      sejak {startDate}. Kami mohon maaf atas ketidaknyamanan nya, perbaikan ini
      dijadwalkan selesai pada {endDate}.
    </p>
    <p>
      Sementara itu, Anda dapat melihat berita lain seputar Jabar pada {" "}<a
        href="https://jabarprov.go.id" target="_blank" rel="noreferrer">Portal Jabar</a
      >
    </p>
    <p>
      Apabila Anda membutuhkan pertanyaan, Anda dapat menghubungi kami
      melalui {emergencyContactPlatform} pada {" "}
      <a href={emergencyHref} target="_blank" rel="noreferrer">
        {emergencyContact}
      </a>
    </p>
    <div>
      <p>Salam Hangat,</p>
      <p>{fromUser}</p>
    </div>
  </div>
</div>
