const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/174a45f6-c2f3-4ebf-b849-4ddae75af2f7',
  'https://github.com/bitprj/art-heist/assets/69332964/fd5bd7f8-7b2a-40e6-a3fb-c9c4f7bf8da0',
  'https://github.com/bitprj/art-heist/assets/69332964/d17b6bcc-021f-4f1d-827f-07e37a0ae803',
  'https://github.com/bitprj/art-heist/assets/69332964/b3de3823-08cc-4c69-b6e5-22ee047bbb4f',
  'https://github.com/bitprj/art-heist/assets/69332964/335bb4d6-9d6f-47c1-b046-0649b1acb36e',
  'https://github.com/bitprj/art-heist/assets/69332964/64395467-e7d7-43f4-b9a2-801abcbf6597',
  'https://github.com/bitprj/art-heist/assets/69332964/c09ea371-0dde-4d54-9a42-21cdede088b9',
  'https://github.com/bitprj/art-heist/assets/69332964/46a2c488-65db-4fdd-8f99-6c4d5c04ed89',
  'https://github.com/bitprj/art-heist/assets/69332964/42aec20d-5caf-4520-8b75-50c29704c7c3',
  'https://github.com/bitprj/art-heist/assets/69332964/cb624e02-37f4-493e-9ca2-49728557192f',
  'https://github.com/bitprj/art-heist/assets/69332964/fbc21dbc-0836-4297-8ee6-3213cf75b62c',
  'https://github.com/bitprj/art-heist/assets/69332964/b1ce688b-b197-4a99-8fb9-1fb96471b1fb',
  'https://github.com/bitprj/art-heist/assets/69332964/c70524bc-6138-441e-9392-f5cf3895494f',
]

export default function Southern() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          perceiving mississippi
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          seeing the Delta through the eyes of NEH Most Southern Place on Earth Workshop
          participants
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
