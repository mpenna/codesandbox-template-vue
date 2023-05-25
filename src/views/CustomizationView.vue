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
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-xs sm:text-base md:text-lg lg:text-3xl
                </td>
                <td class="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                  <h1 class="text-xs sm:text-base md:text-lg lg:text-3xl">
                    Hello Tailwind!
                  </h1>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  text-xs sm:text-base md:text-lg lg:text-3xl border mb-7
                </td>
                <td class="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                  <p class="text-xs sm:text-base md:text-lg lg:text-3xl border mb-12">
                    sentence with bottom spacing
                  </p>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  bg-[#bada55] text-[16px] before:content-['Festivus']
                </td>
                <td class="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                  <p class="bg-[#bada55] text-[16px] before:content-['Festivus']">
                    square bracket notation for generatig on-the-fly classes
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
