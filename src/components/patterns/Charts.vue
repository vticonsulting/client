<template>
  <section class="grid gap-1 lg:gap-8 lg:grid-cols-2">
    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart type="column" />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart type="line" />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart type="bar" />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart
        type="pie"
        :data="[
          ['Blueberry', 44],
          ['Strawberry', 23],
        ]"
      />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart
        type="bar"
        :data="[
          ['X-Small', 5],
          ['Small', 27],
        ]"
      />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart type="area" />
    </section>

    <section class="p-8 bg-white shadow lg:rounded-lg">
      <BaseChart
        type="area"
        :data="{
          '2017-01-01 00:00:00 -0800': 2,
          '2017-01-01 00:01:00 -0800': 5,
        }"
      />
    </section>
  </section>
</template>
