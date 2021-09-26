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
              Browse Our Trending
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
            <div
              class="
                flex flex-col
                md:grid md:grid-flow-col md:grid-rows-3
                lg:grid-rows-2
                gap-3
                px-6
                pt-8
                sm:px-0
                justify-between
                items-center
              "
            >
              <div v-for="(trend, i) in trending" :key="i">
                <div
                  class="
                    rounded-md
                    px-4
                    py-4
                    lg:px-4 lg:py-2
                    xl:px-4 xl:py-4
                    w-56
                    flex flex-col
                    items-start
                    transform
                    transition
                    hover:scale-110
                  "
                  :style="{ 'background-color': trend.color }"
                >
                  <img :src="trend.img" class="max-h-24 mt-2 rounded-lg" />
                  <div class="text-primary-dark font-bold pt-4">
                    {{ trend.name }}
                  </div>
                  <div class="text-primary-green mb-2 text-sm font-bold">
                    {{ trend.category }}
                  </div>
                  <div class="flex flex-row">
                    <div v-for="(rate, i) in trend.rating" :key="i">
                      <img
                        src="../../assets/img/trending/rating-on.png"
                        class="max-h-2 mr-0.5 rounded-lg"
                      />
                    </div>
                    <div v-for="(rate, i) in 5 - trend.rating" :key="i">
                      <img
                        src="../../assets/img/trending/rating-off.png"
                        class="max-h-2 mr-0.5 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-2" />
              </div>
            </div>
            <div class="flex flex-row justify-center">
              <button
                type="button"
                class="
                  bg-primary-green
                  text-white
                  rounded-full
                  mt-8
                  max-w-xs
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
                  ALL Receipt
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trending: [
        {
          name: "Pizza Pepperoni",
          img: "https://i.ibb.co/vvhcz30/pizza-pepperoni.png",
          category: "Pizza",
          color: "#E6F3F5",
          rating: 4,
        },
        {
          name: "Pizza Meat",
          img: "https://i.ibb.co/mBSxkbW/pizza-meat.png",
          category: "Pizza",
          color: "#E6F3F5",
          rating: 3,
        },
        {
          name: "Doner Kebab",
          img: "https://i.ibb.co/yBjHcFQ/doner-kebab.png",
          category: "Kebab",
          color: "#EAEEFA",
          rating: 5,
        },
        {
          name: "Salmon Roll",
          img: "https://i.ibb.co/5Bzgd3d/salmon-roll.png",
          category: "Salmon",
          color: "#F9EEF3",
          rating: 4,
        },
        {
          name: "Cupcake Choco",
          img: "https://i.ibb.co/cLvnT6P/cupcake-choco.png",
          category: "Cupcake",
          color: "#F0FEEB",
          rating: 4,
        },
        {
          name: "Doughnut Milk",
          img: "https://i.ibb.co/Xs669sC/doughnut-milk.png",
          category: "Doughnut",
          color: "#F3F7D9",
          rating: 5,
        },
        {
          name: "Doughnut Unicorn",
          img: "https://i.ibb.co/j4b0crq/doughnut-unicorn.png",
          category: "Doughnut",
          color: "#F3F7D9",
          rating: 4,
        },
        {
          name: "Kathi Kebab",
          img: "https://i.ibb.co/5cwsfWD/kathi-kebab.png",
          category: "Kebab",
          color: "#EAEEFA",
          rating: 4,
        },
      ],
    };
  },
};
</script>
