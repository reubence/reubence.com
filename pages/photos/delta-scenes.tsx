const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/4b7c26dd-fd76-4e6f-9a89-99a7be09d588',
  'https://github.com/bitprj/art-heist/assets/69332964/e14a9091-9fb8-4932-b66a-97fc5031a6b4',
  'https://github.com/bitprj/art-heist/assets/69332964/9037c6a2-9f52-432c-9564-70edf1e6ad0c',
  'https://github.com/bitprj/art-heist/assets/69332964/36c422dc-de7a-41ce-8885-c613cbe27fff',
  'https://github.com/bitprj/art-heist/assets/69332964/912d3ad0-7eb9-45f2-b452-de4e0c3eba7c',
  'https://github.com/bitprj/art-heist/assets/69332964/05ed9bba-5a48-41ba-9acd-5e41a11e0b10',
  'https://github.com/bitprj/art-heist/assets/69332964/bd33adf7-29db-4010-a8e4-8b9a28529eba',
  'https://github.com/bitprj/art-heist/assets/69332964/e3224184-5d93-4254-99a0-bcabd00c4fd2',
  'https://github.com/bitprj/art-heist/assets/69332964/b8e746ea-a9d9-4bba-a442-d843fa83f284',
]

export default function Southern() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          scenes of the delta
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          soul food, soul music, living history...
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
