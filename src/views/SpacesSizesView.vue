<template>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classes</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Example</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <!-- padding -->
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold p-4">padding all around</div>` }}</span> -->
                  <span>padding all around</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold p-4">
                    padding all around
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold pt-4">top padding</div>` }}</span> -->
                  <span>top padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold pt-4">
                    top padding
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold pr-4">right padding</div>` }}</span> -->
                  <span>right padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold pr-4">
                    right padding
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold pb-4">bottom padding</div>` }}</span> -->
                  <span>bottom padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold pb-4">
                    bottom padding
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold pl-4">left padding</div>` }}</span> -->
                  <span>left padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold pl-4">
                    left padding
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold py-4">top and bottom padding</div>` }}</span> -->
                  <span>top and bottom padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold py-4">
                    top and bottom padding
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold px-4">left and right padding</div>` }}</span> -->
                  <span>left and right padding</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <h1 class="bg-red-500 text-white font-bold px-4">
                    left and right padding
                  </h1>
                </td>
              </tr>
              <!-- margin -->
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold m-4">margin all around</div>` }}</span> -->
                  <span>margin all around</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold m-4">
                    margin all around
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold mt-4">top margin</div>` }}</span> -->
                  <span>top margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold mt-4">
                    top margin
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold mr-4">right margin</div>` }}</span> -->
                  <span>right margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold mr-4">
                    right margin
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold mb-4">bottom margin</div>` }}</span> -->
                  <span>bottom margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold mb-4">
                    bottom margin
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold ml-4">left margin</div>` }}</span> -->
                  <span>left margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold ml-4">
                    left margin
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold my-4">top and bottom margin</div>` }}</span> -->
                  <span>top and bottom margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold my-4">
                    top and bottom margin
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <!-- <span>{{ `<div class="bg-red-500 text-white font-bold mx-4">left and right margin</div>` }}</span> -->
                  <span>left and right margin</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <h1 class="bg-red-500 text-white font-bold mx-4">
                    left and right margin
                  </h1>
                </td>
              </tr>
              <!-- negative margin -->
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>using negative values</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <div class="w-36 h-16 bg-sky-600 opacity-20"></div>
                  <div class="-mt-4 h-10 bg-sky-300">-mt-4</div>
                </td>
              </tr>
              <!-- percentage widths -->
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>percentage width</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <div class="flex">
                    <div class="w-1/2 h-16 bg-red-500"></div>
                    <div class="w-1/2 h-16 bg-green-500"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>percentage width</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200">
                  <div class="flex">
                    <div class="w-2/5 h-16 bg-red-500"></div>
                    <div class="w-3/5 h-16 bg-green-500"></div>
                  </div>
                </td>
              </tr>
              <!-- space between -->
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>space between (horizontal)</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <div class="flex space-x-4">
                    <div class="w-1/3 bg-red-500">01</div>
                    <div class="w-1/3 bg-red-500">02</div>
                    <div class="w-1/3 bg-red-500">03</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  <span>space between (vertical)</span>
                </td>
                <td class="text-gray-800 dark:text-gray-200 bg-slate-400">
                  <div class="flex flex-col space-y-4">
                    <div class="h-1/3 bg-red-500">01</div>
                    <div class="h-1/3 bg-red-500">02</div>
                    <div class="h-1/3 bg-red-500">03</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
