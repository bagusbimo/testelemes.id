<template>
  <header class="bg-transparent" v-if="$route.meta.title">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between flex-row">
        <div class="flex items-center flex-no-shrink text-white">
          <img src="../../assets/img/logo.png" class="h-8 lg:h-10 xl:h-12" />
        </div>
        <div class="block sm:hidden">
          <button
            type="button"
            class="
              bg-primary-green
              text-white
              rounded-full
              px-4
              py-2
              drop-shadow
              transition
              duration-500
              ease
              select-none
              hover:bg-green-800
              focus:outline-none focus:shadow-outline
            "
          >
            <span class="inline-flex text-xs lg:text-sm">
              Daftar Sekarang
            </span>
          </button>
        </div>
        <div class="w-full sm:flex sm:items-center sm:w-auto hidden sm:block">
          <div
            class="
              text-xs
              lg:text-navText
              w-0
              h-0
              lg:w-auto lg:h-auto
              invisible
              lg:visible
              mt-1
              mr-12
              xl:mr-24
              text-subtitle-grey
            "
          >
            <span class="px-1" />
            <button
              class="
                block
                sm:inline-block
                font-bold
                hover:text-white
                px-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              Home
            </button>

            <span class="px-1 sm:px-3" />
            <button
              class="
                block
                sm:inline-block
                font-bold
                hover:text-white
                px-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              About
            </button>
            <span class="px-1 sm:px-3" />
            <button
              class="
                block
                sm:inline-block
                font-bold
                hover:text-white
                px-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="relative inline-block">
                Promotions

                <span
                  class="
                    absolute
                    top-0
                    right-0
                    inline-flex
                    items-center
                    justify-center
                    px-2
                    py-1
                    text-badgeText
                    font-bold
                    leading-none
                    text-red-100
                    transform
                    translate-x-1/2
                    -translate-y-3/4
                    bg-red-600
                    rounded-full
                  "
                  >HOT</span
                >
              </span>
            </button>
            <span class="px-1 sm:px-3" />
            <button
              class="
                block
                sm:inline-block
                font-bold
                hover:text-white
                px-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              Blogs
            </button>
            <span class="px-1 sm:px-3" />
            <button
              class="
                block
                sm:inline-block
                font-bold
                hover:text-white
                px-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              Contact Us
            </button>
          </div>
          <span class="px-1 sm:px-3" />
          <div>
            <button
              class="
                w-0
                lg:w-auto
                invisible
                lg:visible
                font-bold
                text-primary-dark
                hover:text-white
                px-2
                py-2
                rounded-full
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="px-3 text-xs lg:text-sm">Masuk</span>
            </button>
            <span class="px-1" />
            <button
              type="button"
              class="
                bg-primary-green
                text-white
                rounded-full
                px-4
                py-2
                drop-shadow
                transition
                duration-500
                ease
                select-none
                hover:bg-green-800
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="inline-flex text-xs lg:text-sm">
                Daftar Sekarang
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
