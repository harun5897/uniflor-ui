<script setup lang="ts">
interface DropdownItem {
  label: string
  path: string
}

defineProps<{
  items: DropdownItem[]
}>()

function isExternal(path: string): boolean {
  return /^(https?:)?\/\//.test(path)
}
</script>

<template>
  <div
    id="header-dropdown-mobile"
    class="bg-gray-100 relative text-black-main rounded-sm w-full"
  >
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- External -->
        <a
          v-if="isExternal(item.path)"
          :href="item.path"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full hover:bg-gray-200 pt-4"
        >
          {{ item.label }}
        </a>
        <!-- Internal -->
        <NuxtLink
          v-else
          :to="item.path"
          class="block w-full hover:bg-gray-200 pt-4"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
