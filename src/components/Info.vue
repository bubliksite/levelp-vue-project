<template>
  <div class="info">
    <ul>
      <li>
        <span><BIconHash /></span>
        <p>{{ user.id }}</p>
      </li>
      <li class="person">
        <span><BIconPerson /></span>{{ user.name }}
      </li>
      <li>
        <span><BIconGeoAlt /></span>
        <p>{{ user.address.city }}</p>
      </li>
    </ul>
    <ul>
      <li>
        <span><BIconEnvelope /></span><a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </li>
      <li>
        <span><BIconTelephone /></span><a :href="`tel:${user.phone}`">{{ user.phone }}</a>
      </li>
      <li>
        <span><BIconGlobe /></span><a :href="user.website">{{ user.website }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    user: Object,
  },
};
</script>

<style scoped></style>
