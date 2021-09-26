<template>
  <div class="h-auto">
    <div class="mx-auto max-w-screen-xl">
      <div class="flex flex-col px-8">
        <div class="py-16">
          <div class="flex flex-col">
            <div
              class="
                text-primary-dark
                font-extrabold
                text-xl
                sm:text-subHeadings
              "
            >
              Browse Our Category
            </div>
            <div
              class="
                text-primary-green
                font-extrabold
                text-xl
                sm:text-subHeadings
              "
            >
              Receipt
            </div>
            <div class="flex pt-8 justify-center items-center">
              <swiper
                class="swiper px-4"
                ref="mySwiperRef"
                :slidesPerView="1"
                :breakpoints="{
                  '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  '1024': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }"
              >
                <swiper-slide
                  v-for="(cat, i) in category"
                  :key="i"
                  class="py-4"
                >
                  <div
                    class="
                      bg-home
                      rounded-md
                      px-16
                      py-4
                      lg:px-12 lg:py-2
                      xl:px-16 xl:py-4
                      flex flex-col
                      items-center
                      transform
                      transition
                      hover:scale-110
                    "
                    :style="{ 'background-color': cat.color }"
                  >
                    <img :src="cat.img" class="max-h-12 mt-4" />
                    <div class="text-primary-dark font-bold pt-4">
                      {{ cat.name }}
                    </div>
                    <div class="mb-4">{{ cat.amount }} Items</div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="invisible lg:visible -mt-28 sm:mt-0 flex justify-end">
              <div class="flex flex-row pt-4">
                <button
                  type="button"
                  class="
                    bg-primary-green
                    text-white
                    rounded-full
                    px-4
                    py-2
                    md:px-5 md:py-1.5
                    drop-shadow
                    transition
                    duration-500
                    ease
                    select-none
                    hover:bg-green-800
                    focus:outline-none focus:shadow-outline
                  "
                >
                  <span
                    class="
                      inline-flex
                      items-center
                      text-xs
                      md:text-sm
                      lg:text-base
                    "
                  >
                    <div
                      class="
                        bg-white
                        rounded-full
                        mr-2
                        -ml-2
                        h-8
                        w-8
                        flex
                        items-center
                        justify-center
                      "
                      @click="prev()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#8BAC3E"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                    PREV
                  </span>
                </button>
                <span class="px-2" />
                <button
                  type="button"
                  class="
                    bg-primary-green
                    text-white
                    rounded-full
                    px-4
                    py-2
                    md:px-5 md:py-1.5
                    drop-shadow
                    transition
                    duration-500
                    ease
                    select-none
                    hover:bg-green-800
                    focus:outline-none focus:shadow-outline
                  "
                  @click="next()"
                >
                  <span
                    class="
                      inline-flex
                      items-center
                      text-xs
                      md:text-sm
                      lg:text-base
                    "
                  >
                    NEXT
                    <div
                      class="
                        bg-white
                        rounded-full
                        ml-2
                        -mr-2
                        h-8
                        w-8
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#8BAC3E"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Virtual, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      category: [
        {
          name: "Cupcake",
          img: "https://i.ibb.co/CKzDMkc/cupcake.png",
          amount: "22",
          color: "#F0FEEB",
        },
        {
          name: "Pizza",
          img: "https://i.ibb.co/HFPnZw5/pizza.png",
          amount: "25",
          color: "#F0FEEB",
        },
        {
          name: "Kebab",
          img: "https://i.ibb.co/DgddgLJ/kebab.png",
          amount: "12",
          color: "#EAEEFA",
        },
        {
          name: "Salmon",
          img: "https://i.ibb.co/2yYKxBp/salmon.png",
          amount: "22",
          color: "#F9EEF3",
        },
        {
          name: "Doughnut",
          img: "https://i.ibb.co/6g9NxTZ/doughnut.png",
          amount: "11",
          color: "#F3F7D9",
        },
      ],
    };
  },
  methods: {
    next() {
      this.$refs.mySwiperRef.$swiper.slideNext();
    },
    prev() {
      this.$refs.mySwiperRef.$swiper.slidePrev();
    },
  },
};
</script>
