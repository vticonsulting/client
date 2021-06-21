<template>
  <Book>
    <template v-slot:title="slotProps">
      {{ slotProps.bookTitle }}
    </template>
  </Book>
</template>
