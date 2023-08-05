const pictures = [
  'https://github.com/bitprj/art-heist/assets/69332964/59462ac0-a6d2-4a34-91ff-24e76a804ef0',
  'https://github.com/bitprj/art-heist/assets/69332964/950db5e3-c905-486d-88d0-77d65d6d633d',
  'https://github.com/bitprj/art-heist/assets/69332964/54d6e4b6-411e-4e44-b544-52ee2e31a821',
  'https://github.com/bitprj/art-heist/assets/69332964/c635e023-4b93-43e4-a3d0-a35c9d1ec3da',
  'https://github.com/bitprj/art-heist/assets/69332964/17eddbbe-d537-4499-9135-035374eecaa9',
  'https://github.com/bitprj/art-heist/assets/69332964/48b1b797-5dc6-49e0-9305-a494da79d57f',
  'https://github.com/bitprj/art-heist/assets/69332964/0164589c-0191-48a3-8345-ed8e63a9ad85',
  'https://github.com/bitprj/art-heist/assets/69332964/6544fd13-2f40-4bf2-8873-ee0339c06639',
  'https://github.com/bitprj/art-heist/assets/69332964/e46859cd-9820-44a7-809d-c1cf51e40834',
]

export default function Southern() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          childhood suburbia
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          photos that fit into the experience of American suburbia
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
