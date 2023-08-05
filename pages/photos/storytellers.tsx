const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/47ae1d33-e363-43ff-9500-512810592e28',
  'https://github.com/bitprj/art-heist/assets/69332964/4c010e34-9b36-4b56-b0b7-78e47ef9d6b3',
  'https://github.com/bitprj/art-heist/assets/69332964/8deb8cfb-f83f-4950-9f6b-f447d2c091e9',
  'https://github.com/bitprj/art-heist/assets/69332964/5ed1ca39-52e1-4943-992c-ee2d9777c940',
  'https://github.com/bitprj/art-heist/assets/69332964/9e5e6e0b-1f52-4902-8ca5-1e7cf55fddf9',
  'https://github.com/bitprj/art-heist/assets/69332964/b3593058-362c-4440-bf37-5937d86ca85f',
  'https://github.com/bitprj/art-heist/assets/69332964/8d0d41e3-0690-4ddc-b028-a64c89016264',
  'https://github.com/bitprj/art-heist/assets/69332964/565e080e-6606-4d6a-8bac-511e285c8993',
  'https://github.com/bitprj/art-heist/assets/69332964/087a5de2-dec1-4b7d-b0bc-3cd82310537c',
  'https://github.com/bitprj/art-heist/assets/69332964/24749e46-d741-4c1d-ad3a-abb885f56c6b',
]

export default function Southern() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          storytellers
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          portraits of storytellers in Mississippi
        </p>
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
