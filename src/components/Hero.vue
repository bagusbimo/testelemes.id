<template>
  <div class="bg-home -mt-40">
    <div class="mx-auto pt-40 max-w-screen-xl">
      <div
        class="
          flex flex-col
          sm:flex-row
          justify-center
          sm:justify-between
          items-center
          px-8
        "
      >
        <div class="w-full sm:w-1/2 pr-0 sm:pr-12">
          <div
            class="
              text-primary-green
              font-extrabold
              text-3xl
              lg:text-5xl
              xl:text-headings
            "
          >
            Good Food Us Good Mood
          </div>
          <div class="w-full sm:w-0">
            <img src="../../assets/img/home-mobile.png" />
          </div>
          <div class="text-subtitle-grey pt-4 text-xs md:text-sm lg:text-base">
            I would think that conserving our natural resources should be a
            conservative position: Not to waste food, and not to throw away a
            lot of the food that we buy.
          </div>
          <div class="flex flex-row pt-4">
            <button
              type="button"
              class="
                bg-primary-green
                text-white
                rounded-full
                px-4
                py-2
                md:px-8 md:py-3
                drop-shadow
                transition
                duration-500
                ease
                select-none
                hover:bg-green-800
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="inline-flex text-xs md:text-sm lg:text-base">
                Daftar Sekarang
              </span>
            </button>
            <span class="px-2" />
            <button
              type="button"
              class="
                bg-button-grey
                text-primary-dark
                rounded-full
                px-4
                py-2
                md:px-8 md:py-3
                drop-shadow
                transition
                duration-500
                ease
                select-none
                hover:bg-primary-green hover:text-white
                focus:outline-none focus:shadow-outline
              "
            >
              <span class="inline-flex text-xs md:text-sm sm:text-base">
                About Us
              </span>
            </button>
          </div>
        </div>
        <div class="w-0 sm:w-1/2">
          <img src="../../assets/img/home.png" />
        </div>
      </div>
    </div>
  </div>
</template>
