<template>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <!-- <div class="-m-1.5"> -->
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <!-- <div> -->
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classes</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>{{ `<h1 class="text-3xl">Title 1</h1>` }}</span>
                  <!-- <span class="whitespace-pre-line">{{ `
                                    <h1 class="text-3xl">
                                      Title 1
                                    </h1>
                                    ` }}
                  </span> -->
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <h1 class="text-3xl">
                    Title 1
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>{{ `<h2 class="text-2xl">Title 2</h2>` }}</span>
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <h2 class="text-2xl">
                    Title 2
                  </h2>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>{{ `<h3 class="text-xl">Title 3</h3>` }}</span>
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <h3 class="text-xl">
                    Title 3
                  </h3>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base">
                    A regular paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-sm
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-sm">
                    A description paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  note text-xs
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="note text-xs">
                    A brief note
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base antialiased
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base antialiased">
                    A regular antialiased paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base subpixel-antialiased
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base subpixel-antialiased">
                    A regular subpixel-antialiased paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base italic
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base italic">
                    A regular italic paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base underline
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base underline">
                    A regular underline paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base overline
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base overline">
                    A regular overline paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base line-through
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base line-through">
                    A regular line-through paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base line-through decoration-red-500
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base line-through decoration-red-500">
                    A regular line-through decoration-red-500 paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base line-through decoration-double
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base line-through decoration-double">
                    A regular line-through decoration-double paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base underline decoration-wavy
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base underline decoration-wavy">
                    A regular underline decoration-wavy paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base underline decoration-8
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base underline decoration-8">
                    A regular underline decoration-8 paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base underline decoration-4 underline-offset-8 leading-relaxed
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base underline decoration-4 underline-offset-8 leading-relaxed">
                    A regular underline decoration-4 underline-offset-8 leading-relaxed paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base capitalize
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base capitalize">
                    A regular capitalize paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base lowercase
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base lowercase">
                    A REGULAR LOWERCASE PARAGRAPH
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base uppercase
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <p class="text-base uppercase">
                    a regular uppercase paragraph
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-base line-clamp-3
                </td>
                <td class="px-6 py-4 text-gray-800 dark:text-gray-200">
                  <!-- <p class="text-base text-ellipsis overflow-hidden"> -->
                  <p class="text-base line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum alias, natus amet adipisci saepe nemo
                    quia odio corrupti est. Ab repellendus laborum nostrum vel est ipsa, itaque rem repellat vero!
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
