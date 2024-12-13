<template>
    <div class="font-montserrat bg-gray-600 text-white">
        <nav>
            <div class="flex justify-between items-center p-4">
                <h1 class="font-bold text-2xl">Nuxt Interactive Quiz</h1>

                <NuxtLink :to="`/`">
                    <button class="bg-blue-500 hover:bg-blue-600 p-1 rounded-xl">Home</button>
                </NuxtLink>
            </div>
        </nav>

        <div>
            <slot />
        </div>
    </div>
</template>
