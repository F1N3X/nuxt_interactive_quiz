<template>
    <div>
        <nav>
            <div>
                <h1>Nuxt interactive quiz</h1>
                <NuxtLink 
                :to="`/`" 
            >
                <button>Home</button>
            </NuxtLink>
            </div>
        </nav>

        <div>
            <slot />
        </div>
    </div>
</template>