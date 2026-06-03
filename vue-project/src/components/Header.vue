<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="flex items-center gap-6">
      <h1 class="text-2xl font-bold">КСайт</h1>
      <nav class="flex gap-6 font-medium">
        <RouterLink to="/" class="hover:text-blue-400 transition">Главная</RouterLink>
        <RouterLink to="/catalog" class="hover:text-blue-400 transition">Каталог</RouterLink>
        <RouterLink to="/contacts" class="hover:text-blue-400 transition">Контакты</RouterLink>
      </nav>
    </div>
  </header>
</template>