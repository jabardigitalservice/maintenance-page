// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      targetUser: process.env.MAINTENANCE_TARGET,
      startDate: process.env.MAINTENANCE_START_DATE,
      endDate: process.env.MAINTENANCE_END_DATE,
      emergencyContact: process.env.MAINTENANCE_EMERGENCY_CONTACT,
      emergencyContactPlatform: process.env.MAINTENANCE_EMERGENCY_CONTACT_PLATFORM,
      emergencyHref: process.env.MAINTENANCE_EMERGENCY_CONTACT_CLICK_TO,
      fromUser: process.env.MAINTENANCE_FROM,
    },
  },
});
