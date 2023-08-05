const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/2f3f8f11-ccdd-4dba-8f2d-cfe38aae2695',
  'https://github.com/bitprj/art-heist/assets/69332964/22387d9e-f4df-4680-aff5-d8ae9061db9d',
  'https://github.com/bitprj/art-heist/assets/69332964/eb63bc30-0f9f-449a-925c-cebd3177a750',
  'https://github.com/bitprj/art-heist/assets/69332964/74d0d4cf-e93d-4485-a882-5fb42ed9d487',
  'https://github.com/bitprj/art-heist/assets/69332964/bae31189-1533-48f2-87dd-8298203f3e44',
  'https://github.com/bitprj/art-heist/assets/69332964/66bb4a08-1ff2-4373-b3ef-d8dc44b5fa8e',
  'https://github.com/bitprj/art-heist/assets/69332964/09b8636a-c778-4852-87b8-f8138371f3a7',
  'https://github.com/bitprj/art-heist/assets/69332964/4d19b56b-17f7-40ac-9631-06fcd7581592',
  'https://github.com/bitprj/art-heist/assets/69332964/b811fa7e-8737-47a5-b0ff-ef21a63c196c',
  'https://github.com/bitprj/art-heist/assets/69332964/6e496c3b-b47d-435e-97bd-116de50b861b',
  'https://github.com/bitprj/art-heist/assets/69332964/674e1300-bb48-484e-8c32-28e064c7c8b3',
  'https://github.com/bitprj/art-heist/assets/69332964/5f5a2fc0-64ba-49e5-99d4-1deb641f909b',
  'https://github.com/bitprj/art-heist/assets/69332964/e7db7e36-b2d4-4aaf-b2c0-9c76737605fe',
]

export default function Southern() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          a southern summer
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Mississippi, Tennessee</p>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {pictures.map((url) => (
          <div key={url} className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                key={url}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
